import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getHead } from '../seo/head';

// The full <head> (canonical, hreflang, JSON-LD) is written at build time by scripts/prerender.js.
// This only keeps the language-dependent tags in sync when the visitor switches language in the browser.
export default function SEO({ page = 'home' }) {
  const { language } = useLanguage();

  useEffect(() => {
    const head = getHead(page, language || 'es');
    const setContent = (selector, value) => {
      const el = document.querySelector(selector);
      if (el && value) el.setAttribute('content', value);
    };

    document.title = head.title;
    document.documentElement.lang = head.lang;
    setContent('meta[name="description"]', head.description);
    setContent('meta[name="keywords"]', head.keywords);
    setContent('meta[property="og:title"]', head.title);
    setContent('meta[property="og:description"]', head.description);
    setContent('meta[name="twitter:title"]', head.title);
    setContent('meta[name="twitter:description"]', head.description);
    setContent('meta[property="og:locale"]', head.ogLocale);
  }, [page, language]);

  return null;
}
