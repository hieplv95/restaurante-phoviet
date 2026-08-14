import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const seoData = {
  home: {
    es: {
      title: 'Pho Viet Barcelona | Auténtico Restaurante Vietnamita en Eixample',
      description: 'El mejor restaurante vietnamita de Barcelona. Prueba el auténtico Phở tradicional con 12h de caldo, Bún Bò Huế, Bánh Xèo y Bún Chả Hà Nội en Carrer de Viladomat, 56.',
      keywords: 'restaurante vietnamita barcelona, pho barcelona, pho viet barcelona, comida vietnamita eixample, bun bo hue barcelona, banh xeo barcelona, bun cha barcelona'
    },
    en: {
      title: 'Pho Viet Barcelona | Authentic Vietnamese Restaurant in Eixample',
      description: 'Best authentic Vietnamese food in Barcelona. Enjoy 12-hour slow-cooked Beef Phở, spicy Bún Bò Huế, crispy Bánh Xèo, and Hanoi street food at Carrer de Viladomat, 56.',
      keywords: 'vietnamese restaurant barcelona, best pho barcelona, authentic vietnamese food barcelona, pho viet eixample, bun bo hue barcelona, banh mi barcelona'
    },
    vi: {
      title: 'Nhà Hàng Phở Việt Barcelona | Hương Vị Việt Nam Chuẩn Vị Tại Tây Ban Nha',
      description: 'Thưởng thức ẩm thực Việt Nam đậm đà tại Barcelona. Phở bò gia truyền hầm xương 12 tiếng, Bún Bò Huế chuẩn vị, Bánh Xèo giòn rụm tại Carrer de Viladomat, 56.',
      keywords: 'quan an viet tai barcelona, pho viet barcelona, nha hang viet nam barcelona, bun bo hue barcelona, bun cha barcelona'
    },
    zh: {
      title: 'Pho Viet 巴塞罗那 | 正宗越南美食餐厅 Eixample',
      description: '巴塞罗那最地道的越南餐厅。品尝12小时慢炖牛骨汤河粉（Phở）、顺化牛肉粉（Bún Bò Huế）和酥脆越南煎饼（Bánh Xèo）。地址：Carrer de Viladomat, 56。',
      keywords: '巴塞罗那越南餐厅, 巴塞罗那越南河粉, pho viet barcelona, 西班牙越南菜'
    },
    ja: {
      title: 'Pho Viet バルセロナ | 本格ベトナム料理レストラン エシャンプラ',
      description: 'バルセロナで味わう本格ベトナム料理。12時間じっくり煮込んだ牛骨フォー、ブンボーフエ、サクサクのバインセオをご堪能ください。ヴィラドマット通り56番地。',
      keywords: 'バルセロナ ベトナム料理, バルセロナ フォー, pho viet barcelona, バルセロナ グルメ'
    },
    ko: {
      title: '포 비엣 바르셀로나 (Pho Viet) | 바르셀로나 정통 베트남 쌀국수 맛집',
      description: '바르셀로나 최고의 베트남 레스토랑. 12시간 우려낸 깊은 육수의 소고기 쌀국수(Phở), 분보후에, 바삭한 반세오를 만나보세요. Carrer de Viladomat, 56.',
      keywords: '바르셀로나 쌀국수 맛집, 바르셀로나 베트남 식당, pho viet barcelona, 바르셀로나 맛집'
    },
    fr: {
      title: 'Pho Viet Barcelone | Restaurant Vietnamien Authentique à Eixample',
      description: 'Le meilleur restaurant vietnamien de Barcelone. Savourez notre Phở traditionnel au bouillon mijoté 12h, Bún Bò Huế et Bánh Xèo croustillant à Carrer de Viladomat, 56.',
      keywords: 'restaurant vietnamien barcelone, pho barcelone, pho viet barcelone, cuisine vietnamienne barcelone'
    },
    it: {
      title: 'Pho Viet Barcellona | Autentico Ristorante Vietnamita a Eixample',
      description: 'Il miglior cibo vietnamita a Barcellona. Gusta il tradizionale Phở cotto a fuoco lento per 12 ore, Bún Bò Huế e Bánh Xèo in Carrer de Viladomat, 56.',
      keywords: 'ristorante vietnamita barcellona, pho barcellona, pho viet barcellona, cucina asiatica barcellona'
    }
  },
  'bun-bo-hue': {
    es: {
      title: 'Bún Bò Huế Auténtico en Barcelona | Pho Viet Restaurante',
      description: 'Disfruta del auténtico Bún Bò Huế imperial en Barcelona. Caldo especiado con hierba de limón y ternera tierna en Pho Viet Carrer de Viladomat, 56.'
    },
    en: {
      title: 'Authentic Bún Bò Huế in Barcelona | Pho Viet Restaurant',
      description: 'Taste the spicy & aromatic royal soup of Hue in Barcelona. 12-hour lemongrass beef broth at Pho Viet Carrer de Viladomat, 56.'
    },
    vi: {
      title: 'Bún Bò Huế Chuẩn Vị Tại Barcelona | Nhà Hàng Phở Việt',
      description: 'Thưởng thức tô Bún Bò Huế cay nồng thơm mùi sả chuẩn vị cố đô tại Barcelona. Đến ngay Pho Viet 56 Carrer de Viladomat.'
    }
  },
  'banh-xeo': {
    es: {
      title: 'Bánh Xèo Crujiente en Barcelona | Crepe Vietnamita Tradicional | Pho Viet',
      description: 'Prueba el crujiente Bánh Xèo vietnamita relleno de gambas y cerdo, envuelto en hierbas frescas con salsa Nước Chấm en Pho Viet Barcelona.'
    },
    en: {
      title: 'Crispy Bánh Xèo in Barcelona | Traditional Vietnamese Crepe | Pho Viet',
      description: 'Savor crispy turmeric crepe filled with prawns and pork, served with fresh herbs and homemade dipping sauce at Pho Viet Barcelona.'
    },
    vi: {
      title: 'Bánh Xèo Miền Tây Giòn Rụm Tại Barcelona | Phở Việt',
      description: 'Thưởng thức bánh xèo giòn rụm nhân tôm thịt tươi ngon cuốn rau sống tươi mát tại Barcelona cùng Phở Việt.'
    }
  },
  'pho-ha-noi': {
    es: {
      title: 'Phở Bò & Bún Chả Hà Nội Truyền Thống tại Barcelona | Pho Viet',
      description: 'Tinh hoa ẩm thực thủ đô Hà Nội tại Barcelona: Phở bò hầm 12h và Bún Chả nướng than hoa thơm lừng tại Carrer de Viladomat, 56.'
    },
    en: {
      title: 'Hanoi Traditional Phở & Bún Chả in Barcelona | Pho Viet Restaurant',
      description: 'Experience Hanoi cuisine in Barcelona: 12-hour slow-cooked Beef Phở and charcoal grilled pork Bún Chả at Pho Viet.'
    },
    vi: {
      title: 'Phở & Bún Chả Hà Nội Chuẩn Vị Tại Barcelona | Phở Việt',
      description: 'Hương vị Hà Nội giữa lòng Barcelona: Phở bò tái lăn nước dùng thơm lừng và Bún chả nướng than hoa thơm ngậy.'
    }
  }
};

export default function SEO({ page = 'home' }) {
  const { language } = useLanguage();
  const lang = language || 'es';

  useEffect(() => {
    const data = (seoData[page] && (seoData[page][lang] || seoData[page]['es'] || seoData[page]['en'])) || seoData.home.es;

    // Update Title
    if (data.title) {
      document.title = data.title;
    }

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && data.description) {
      metaDesc.setAttribute('content', data.description);
    }

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && data.keywords) {
      metaKeywords.setAttribute('content', data.keywords);
    }

    // Update OpenGraph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && data.title) ogTitle.setAttribute('content', data.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && data.description) ogDesc.setAttribute('content', data.description);

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      const localeMap = { es: 'es_ES', en: 'en_US', vi: 'vi_VN', zh: 'zh_CN', ja: 'ja_JP', ko: 'ko_KR', fr: 'fr_FR', it: 'it_IT' };
      ogLocale.setAttribute('content', localeMap[lang] || 'es_ES');
    }

    // Update Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    const currentUrl = page === 'home' ? 'https://phovietbarcelona.com/' : `https://phovietbarcelona.com/promo/${page}`;
    if (canonical) {
      canonical.setAttribute('href', currentUrl);
    }

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Update or Insert JSON-LD Rich Structured Data
    let schemaScript = document.getElementById('restaurant-structured-data');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'restaurant-structured-data';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["Restaurant", "FoodEstablishment"],
          "@id": "https://phovietbarcelona.com/#restaurant",
          "name": "Pho Viet Barcelona",
          "alternateName": ["Restaurante Vietnamita Pho Viet", "Phở Việt Barcelona"],
          "image": [
            "https://phovietbarcelona.com/logo.webp",
            "https://phovietbarcelona.com/hero_phobo_3d.webp",
            "https://phovietbarcelona.com/about_buncha.webp"
          ],
          "logo": "https://phovietbarcelona.com/logo.webp",
          "url": "https://phovietbarcelona.com/",
          "telephone": "+34632501335",
          "priceRange": "$$",
          "servesCuisine": ["Vietnamese", "Pho", "Asian", "Noodles", "Street Food"],
          "hasMenu": "https://phovietbarcelona.com/#menu",
          "acceptsReservations": "True",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Carrer de Viladomat, 56",
            "addressLocality": "Barcelona",
            "addressRegion": "Catalunya",
            "postalCode": "08015",
            "addressCountry": "ES"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 41.3763717,
            "longitude": 2.1557002
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "13:00",
              "closes": "17:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "19:30",
              "closes": "23:30"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "186",
            "bestRating": "5",
            "worstRating": "1"
          },
          "potentialAction": {
            "@type": "OrderAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://phovietbarcelona.com/#menu",
              "inLanguage": lang,
              "actionPlatform": [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform"
              ]
            },
            "result": {
              "@type": "FoodEstablishment",
              "name": "Pho Viet Barcelona"
            }
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://phovietbarcelona.com/#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://phovietbarcelona.com/"
            },
            ...(page !== 'home' ? [{
              "@type": "ListItem",
              "position": 2,
              "name": page.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
              "item": currentUrl
            }] : [])
          ]
        }
      ]
    };

    schemaScript.textContent = JSON.stringify(structuredData);
  }, [page, lang]);

  return null;
}
