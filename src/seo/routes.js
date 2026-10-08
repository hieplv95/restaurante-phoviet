// URL <-> language mapping. Spanish lives at the root, every other language under /<lang>/.
export const SITE_URL = 'https://phovietbarcelona.com';
export const DEFAULT_LANG = 'es';
export const LANGUAGES = ['es', 'en', 'vi', 'zh', 'ja', 'ko', 'fr', 'it'];
export const PROMO_DISHES = ['bun-bo-hue', 'banh-xeo', 'pho-ha-noi'];

export const OG_LOCALES = { es: 'es_ES', en: 'en_US', vi: 'vi_VN', zh: 'zh_CN', ja: 'ja_JP', ko: 'ko_KR', fr: 'fr_FR', it: 'it_IT' };

export function homePath(lang) {
  return lang === DEFAULT_LANG ? '/' : `/${lang}/`;
}

// Resolves a pathname to the page it renders: { page: 'home' | <dish>, lang }
export function parsePath(pathname = '/') {
  const segments = pathname.split('/').filter(Boolean);
  const promoIndex = segments.indexOf('promo');
  if (promoIndex !== -1 && segments[promoIndex + 1]) {
    return { page: segments[promoIndex + 1], lang: 'en' };
  }
  const lang = LANGUAGES.includes(segments[0]) ? segments[0] : DEFAULT_LANG;
  return { page: 'home', lang };
}
