// Per-page, per-language <head> metadata. Used by the build-time prerender (static HTML for crawlers)
// and by the SEO component (keeps the head in sync when the language is switched client-side).
import { SITE_URL, LANGUAGES, DEFAULT_LANG, OG_LOCALES, homePath } from './routes';

const seoData = {
  home: {
    es: {
      title: 'Restaurante Vietnamita en Barcelona | Pho Viet Eixample',
      description: 'Pho Viet, restaurante vietnamita auténtico en Barcelona (Eixample): Phở con caldo de 12 horas, Bún Bò Huế, Bánh Xèo, Bún Chả y menú del día a 13,90 €. Abierto todos los días.',
      keywords: 'restaurante vietnamita barcelona, comida vietnamita barcelona, pho barcelona, restaurante vietnamita eixample, menu del dia vietnamita barcelona, bun bo hue barcelona, banh xeo barcelona, bun cha barcelona'
    },
    en: {
      title: 'Vietnamese Restaurant in Barcelona | Pho Viet Eixample',
      description: 'Pho Viet is an authentic Vietnamese restaurant in Barcelona (Eixample): 12-hour beef Phở, Bún Bò Huế, Bánh Xèo, Bún Chả and a €13.90 weekday lunch menu. Open daily.',
      keywords: 'vietnamese restaurant barcelona, vietnamese restaurant in barcelona, vietnamese food barcelona, pho barcelona, best pho barcelona, vietnamese restaurant eixample, bun bo hue barcelona, banh xeo barcelona'
    },
    vi: {
      title: 'Nhà Hàng Việt Nam tại Barcelona | Phở Việt Eixample',
      description: 'Phở Việt – nhà hàng Việt Nam chuẩn vị tại Barcelona (Eixample): phở bò nước dùng ninh 12 tiếng, Bún Bò Huế, Bánh Xèo, Bún Chả Hà Nội, menu trưa 13,90 €. Mở cửa mỗi ngày.',
      keywords: 'nhà hàng việt nam barcelona, quán phở barcelona, phở việt barcelona, đồ ăn việt nam barcelona, bún bò huế barcelona, bún chả barcelona'
    },
    zh: {
      title: '巴塞罗那越南餐厅 | Pho Viet 正宗越南河粉',
      description: 'Pho Viet 是位于巴塞罗那 Eixample 区的正宗越南餐厅：12小时慢炖牛肉河粉、顺化牛肉粉、越南煎饼、河内烤肉米线，工作日午市套餐 13.90 欧元。每天营业。',
      keywords: '巴塞罗那越南餐厅, 巴塞罗那越南河粉, 巴塞罗那越南菜, pho viet barcelona, 巴塞罗那美食'
    },
    ja: {
      title: 'バルセロナのベトナム料理レストラン | Pho Viet',
      description: 'Pho Viet はバルセロナ・エシャンプレ地区の本格ベトナム料理店。12時間煮込んだ牛肉フォー、ブンボーフエ、バインセオ、ブンチャー、平日ランチ 13.90 ユーロ。毎日営業。',
      keywords: 'バルセロナ ベトナム料理, バルセロナ フォー, バルセロナ レストラン, pho viet barcelona'
    },
    ko: {
      title: '바르셀로나 베트남 레스토랑 | Pho Viet 쌀국수 맛집',
      description: 'Pho Viet는 바르셀로나 에이샴플레의 정통 베트남 레스토랑입니다. 12시간 끓인 소고기 쌀국수, 분보후에, 반쎄오, 분짜, 평일 점심 세트 13.90유로. 매일 영업.',
      keywords: '바르셀로나 베트남 식당, 바르셀로나 쌀국수 맛집, 바르셀로나 맛집, pho viet barcelona'
    },
    fr: {
      title: 'Restaurant Vietnamien à Barcelone | Pho Viet Eixample',
      description: 'Pho Viet, restaurant vietnamien authentique à Barcelone (Eixample) : Phở au bouillon mijoté 12 h, Bún Bò Huế, Bánh Xèo, Bún Chả et menu du midi à 13,90 €. Ouvert tous les jours.',
      keywords: 'restaurant vietnamien barcelone, cuisine vietnamienne barcelone, pho barcelone, restaurant vietnamien eixample'
    },
    it: {
      title: 'Ristorante Vietnamita a Barcellona | Pho Viet Eixample',
      description: 'Pho Viet, autentico ristorante vietnamita a Barcellona (Eixample): Phở con brodo cotto 12 ore, Bún Bò Huế, Bánh Xèo, Bún Chả e menu pranzo a 13,90 €. Aperto tutti i giorni.',
      keywords: 'ristorante vietnamita barcellona, cucina vietnamita barcellona, pho barcellona, ristorante vietnamita eixample'
    }
  },
  'bun-bo-hue': {
    es: {
      title: 'Bún Bò Huế Auténtico en Barcelona | Pho Viet Restaurante',
      description: 'Disfruta del auténtico Bún Bò Huế imperial en Barcelona. Caldo especiado con hierba de limón y ternera tierna en Pho Viet, Carrer de Viladomat, 56.'
    },
    en: {
      title: 'Authentic Bún Bò Huế in Barcelona | Pho Viet Vietnamese Restaurant',
      description: 'Taste the spicy & aromatic royal soup of Hue in Barcelona. 12-hour lemongrass beef broth at Pho Viet, Vietnamese restaurant at Carrer de Viladomat, 56.'
    },
    vi: {
      title: 'Bún Bò Huế Chuẩn Vị Tại Barcelona | Nhà Hàng Phở Việt',
      description: 'Thưởng thức tô Bún Bò Huế cay nồng thơm mùi sả chuẩn vị cố đô tại Barcelona. Đến ngay Pho Viet 56 Carrer de Viladomat.'
    }
  },
  'banh-xeo': {
    es: {
      title: 'Bánh Xèo Crujiente en Barcelona | Crepe Vietnamita | Pho Viet',
      description: 'Prueba el crujiente Bánh Xèo vietnamita relleno de gambas y cerdo, envuelto en hierbas frescas con salsa Nước Chấm en Pho Viet Barcelona.'
    },
    en: {
      title: 'Crispy Bánh Xèo in Barcelona | Vietnamese Crepe | Pho Viet',
      description: 'Savor crispy turmeric crepe filled with prawns and pork, served with fresh herbs and homemade dipping sauce at Pho Viet, Vietnamese restaurant in Barcelona.'
    },
    vi: {
      title: 'Bánh Xèo Miền Tây Giòn Rụm Tại Barcelona | Phở Việt',
      description: 'Thưởng thức bánh xèo giòn rụm nhân tôm thịt tươi ngon cuốn rau sống tươi mát tại Barcelona cùng Phở Việt.'
    }
  },
  'pho-ha-noi': {
    es: {
      title: 'Phở y Bún Chả de Hanói en Barcelona | Pho Viet',
      description: 'La cocina de Hanói en Barcelona: Phở de ternera con caldo de 12 horas y Bún Chả a la parrilla de carbón en Pho Viet, Carrer de Viladomat, 56.'
    },
    en: {
      title: 'Hanoi Phở & Bún Chả in Barcelona | Pho Viet Vietnamese Restaurant',
      description: 'Experience Hanoi cuisine in Barcelona: 12-hour slow-cooked beef Phở and charcoal-grilled pork Bún Chả at Pho Viet, Carrer de Viladomat, 56.'
    },
    vi: {
      title: 'Phở & Bún Chả Hà Nội Chuẩn Vị Tại Barcelona | Phở Việt',
      description: 'Hương vị Hà Nội giữa lòng Barcelona: Phở bò nước dùng ninh 12 tiếng và Bún chả nướng than hoa tại Carrer de Viladomat, 56.'
    }
  }
};

export function pageUrl(page, lang) {
  return page === 'home' ? `${SITE_URL}${homePath(lang)}` : `${SITE_URL}/promo/${page}`;
}

export function getHead(page, lang) {
  const byLang = seoData[page] || seoData.home;
  const data = byLang[lang] || byLang.en || byLang[DEFAULT_LANG];
  // Only the homepage has one URL per language; promo pages are a single URL.
  const alternates = page === 'home'
    ? [
        ...LANGUAGES.map((l) => ({ hreflang: l, href: pageUrl('home', l) })),
        { hreflang: 'x-default', href: pageUrl('home', DEFAULT_LANG) }
      ]
    : [];
  return {
    ...data,
    lang,
    canonical: pageUrl(page, page === 'home' ? lang : null),
    ogLocale: OG_LOCALES[lang] || OG_LOCALES[DEFAULT_LANG],
    alternates
  };
}
