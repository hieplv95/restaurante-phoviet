// Build-time prerender: writes a fully rendered, per-language HTML file for every public route so
// search engines and AI crawlers (which mostly don't run JavaScript) see the real content.
// Runs after `vite build` (client) and `vite build --ssr src/entry-server.jsx --outDir dist-ssr`.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, LANGUAGES, PROMO_DISHES, homePath, SITE_URL } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
const manifest = JSON.parse(fs.readFileSync(path.join(distDir, '.vite', 'manifest.json'), 'utf-8'));

// CSS of the lazy-loaded sections each page renders, linked up front so the static HTML is styled
// before their JS chunks arrive (Vite skips re-adding a stylesheet that is already linked).
const LAZY_MODULES = {
  home: ['About', 'Menu', 'Reviews', 'FAQ', 'MapSection'].map((c) => `src/components/${c}.jsx`),
  promo: ['src/components/promo/PromoLayout.jsx', 'src/components/promo/DishPromo.jsx']
};

function cssFor(moduleIds) {
  const css = new Set();
  const visit = (id) => {
    const chunk = manifest[id];
    if (!chunk || chunk.isEntry) return; // the entry CSS is already linked by Vite
    (chunk.css || []).forEach((file) => css.add(`/${file}`));
    (chunk.imports || []).forEach(visit);
  };
  moduleIds.forEach(visit);
  return [...css];
}

const escapeAttr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const escapeText = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

function headTags(head, structuredData) {
  return [
    `<title>${escapeText(head.title)}</title>`,
    `<meta name="description" content="${escapeAttr(head.description)}" />`,
    head.keywords ? `<meta name="keywords" content="${escapeAttr(head.keywords)}" />` : '',
    `<link rel="canonical" href="${head.canonical}" />`,
    ...head.alternates.map((a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`),
    `<meta property="og:title" content="${escapeAttr(head.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(head.description)}" />`,
    `<meta property="og:url" content="${head.canonical}" />`,
    `<meta property="og:locale" content="${head.ogLocale}" />`,
    `<meta name="twitter:title" content="${escapeAttr(head.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(head.description)}" />`,
    // "<" is escaped so menu/FAQ text can never close the script tag early.
    `<script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, '\u003c')}</script>`
  ].filter(Boolean).join('\n  ');
}

const routes = [
  ...LANGUAGES.map((lang) => homePath(lang)),
  ...PROMO_DISHES.map((dish) => `/promo/${dish}`)
];

for (const route of routes) {
  const { page, html, head, structuredData } = await render(route);
  const css = cssFor(page === 'home' ? LAZY_MODULES.home : LAZY_MODULES.promo);

  const out = template
    .replace(/<html lang="[^"]*">/, `<html lang="${head.lang}">`)
    .replace(/<!-- SEO:START[\s\S]*?<!-- SEO:END -->/, headTags(head, structuredData))
    // After Vite's entry stylesheet, so the cascade order matches what lazy loading would produce.
    .replace('</head>', `${css.map((href) => `  <link rel="stylesheet" crossorigin href="${href}">\n`).join('')}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  if (out === template || !out.includes(head.canonical)) {
    throw new Error(`Prerender failed for ${route}: template markers not found`);
  }

  const file = path.join(distDir, route, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, out);
  console.log(`prerendered ${route} -> ${path.relative(root, file)} (${head.lang})`);
}

// Sitemap with hreflang alternates for the language homepages.
const today = new Date().toISOString().slice(0, 10);
const homeAlternates = [
  ...LANGUAGES.map((lang) => ({ hreflang: lang, href: `${SITE_URL}${homePath(lang)}` })),
  { hreflang: 'x-default', href: `${SITE_URL}/` }
].map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`).join('\n');

const urls = [
  ...LANGUAGES.map((lang) => `  <url>
    <loc>${SITE_URL}${homePath(lang)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${lang === 'es' ? '1.0' : '0.9'}</priority>
${homeAlternates}
  </url>`),
  ...PROMO_DISHES.map((dish) => `  <url>
    <loc>${SITE_URL}/promo/${dish}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`)
];

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`);
console.log(`sitemap.xml written (${urls.length} urls)`);

fs.rmSync(ssrDir, { recursive: true, force: true });
fs.rmSync(path.join(distDir, '.vite'), { recursive: true, force: true });
