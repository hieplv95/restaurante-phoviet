// schema.org JSON-LD for each prerendered page. Build-time only (imported by src/entry-server.jsx),
// so the full menu data never ends up in the client bundle.
import { SITE_URL } from './routes';
import { getHead, pageUrl } from './head';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuItems';
import { FAQ_ITEMS } from '../data/faq';

const RESTAURANT_ID = `${SITE_URL}/#restaurant`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Pho+Viet+Carrer+de+Viladomat+56+08015+Barcelona';

const LUNCH_MENU_NAME = {
  es: 'Menú del día (lunes a viernes): entrante + principal + café o postre + bebida',
  en: 'Weekday lunch menu (Monday–Friday): starter + main + coffee or dessert + drink',
  vi: 'Menu trưa (Thứ Hai – Thứ Sáu): khai vị + món chính + cà phê hoặc tráng miệng + đồ uống',
  fr: 'Menu du midi (lundi–vendredi) : entrée + plat + café ou dessert + boisson',
  it: 'Menu pranzo (lunedì–venerdì): antipasto + principale + caffè o dolce + bevanda'
};

const absolute = (path) => (path.startsWith('http') ? path : `${SITE_URL}${path}`);

// "11,90€ - 12,90€" / "3,50€ / 13,50€" / "7,20€" -> Offer or AggregateOffer
function toOffer(price) {
  const values = (price.match(/\d+(?:,\d+)?/g) || []).map((v) => Number(v.replace(',', '.')));
  if (values.length === 0) return undefined;
  const low = Math.min(...values).toFixed(2);
  const high = Math.max(...values).toFixed(2);
  return low === high
    ? { '@type': 'Offer', price: low, priceCurrency: 'EUR' }
    : { '@type': 'AggregateOffer', lowPrice: low, highPrice: high, priceCurrency: 'EUR' };
}

function buildMenu(lang) {
  const sections = MENU_CATEGORIES.map((cat) => ({
    '@type': 'MenuSection',
    name: cat[lang] || cat.en,
    hasMenuItem: (MENU_ITEMS[cat.id] || []).map((item) => {
      const details = item[lang] || item.en || item.es;
      return {
        '@type': 'MenuItem',
        name: item.name.replace(/^\d+\.\s*/, ''),
        ...(details.subtitle || details.description
          ? { description: [details.subtitle, details.description].filter(Boolean).join('. ') }
          : {}),
        ...(item.image ? { image: absolute(item.image) } : {}),
        ...(item.price ? { offers: toOffer(item.price) } : {})
      };
    })
  }));

  sections.unshift({
    '@type': 'MenuSection',
    name: LUNCH_MENU_NAME[lang] || LUNCH_MENU_NAME.en,
    hasMenuItem: [{
      '@type': 'MenuItem',
      name: LUNCH_MENU_NAME[lang] || LUNCH_MENU_NAME.en,
      offers: { '@type': 'Offer', price: '13.90', priceCurrency: 'EUR' }
    }]
  });

  return {
    '@type': 'Menu',
    '@id': `${SITE_URL}/#menu`,
    url: `${pageUrl('home', lang)}#menu`,
    inLanguage: lang,
    hasMenuSection: sections
  };
}

function buildRestaurant(lang, description) {
  return {
    '@type': 'Restaurant',
    '@id': RESTAURANT_ID,
    name: 'Pho Viet Barcelona',
    alternateName: ['Pho Viet', 'Phở Việt Barcelona', 'Restaurante Vietnamita Pho Viet'],
    description,
    url: `${SITE_URL}/`,
    image: [
      absolute('/hero_phobo_3d.webp'),
      absolute('/about_buncha.webp'),
      absolute('/menu_bunbohue.webp'),
      absolute('/menu_banhxeo.webp')
    ],
    logo: absolute('/logo.png'),
    telephone: '+34632501335',
    email: 'tranngoctuando@gmail.com',
    priceRange: '€10–20',
    currenciesAccepted: 'EUR',
    servesCuisine: ['Vietnamese', 'Phở', 'Vietnamese street food', 'Asian'],
    acceptsReservations: true,
    hasMap: MAPS_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Carrer de Viladomat, 56',
      addressLocality: 'Barcelona',
      addressRegion: 'Catalunya',
      postalCode: '08015',
      addressCountry: 'ES'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.3763717,
      longitude: 2.1557002
    },
    areaServed: { '@type': 'City', name: 'Barcelona' },
    containedInPlace: { '@type': 'Place', name: 'Eixample, Barcelona' },
    openingHoursSpecification: [
      { opens: '13:00', closes: '17:00' },
      { opens: '19:30', closes: '23:30' }
    ].map((slot) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      ...slot
    })),
    // Must match the rating shown on the page (MapSection).
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1205',
      bestRating: '5',
      worstRating: '1'
    },
    hasMenu: { '@id': `${SITE_URL}/#menu` }
  };
}

export function buildStructuredData(page, lang) {
  const head = getHead(page, lang);
  const url = head.canonical;

  const graph = [
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: 'Pho Viet Barcelona',
      publisher: { '@id': RESTAURANT_ID }
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: head.title,
      description: head.description,
      inLanguage: lang,
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': RESTAURANT_ID },
      primaryImageOfPage: absolute(page === 'home' ? '/hero_phobo_3d.webp' : '/logo-share.png')
    },
    buildRestaurant(lang, head.description),
    buildMenu(lang)
  ];

  if (page === 'home') {
    const faq = FAQ_ITEMS[lang] || FAQ_ITEMS.en;
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      inLanguage: lang,
      mainEntity: faq.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a }
      }))
    });
  } else {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Pho Viet Barcelona', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: head.title.split('|')[0].trim(), item: url }
      ]
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
