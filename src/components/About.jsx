import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const aboutTexts = {
  es: {
    title: 'GASTRONOMÍA VIETNAMITA AQUÍ MISMO EN BARCELONA.',
    desc: 'Bienvenidos al restaurante PHO VIETNAM. Vengan a nuestro restaurante para descubrir platos tradicionales llenos de sabor o las famosas comidas callejeras de Vietnam.'
  },
  en: {
    title: 'VIETNAMESE GASTRONOMY RIGHT HERE IN BARCELONA.',
    desc: 'Welcome to PHO VIETNAM restaurant. Come to our restaurant to discover traditional dishes full of flavor or the famous street foods of Vietnam.'
  },
  vi: {
    title: 'ẨM THỰC VIỆT NAM NGAY TẠI BARCELONA.',
    desc: 'Chào mừng bạn đến với nhà hàng PHO VIETNAM. Hãy đến với chúng tôi để khám phá những món ăn truyền thống đậm đà hương vị hoặc những món ăn đường phố nổi tiếng của Việt Nam.'
  },
  zh: {
    title: '就在巴塞罗那的正宗越南美食。',
    desc: '欢迎光临 PHO VIETNAM 餐厅。快来我们的餐厅，探索充满风味的传统菜肴或著名的越南街头小吃。'
  },
  ko: {
    title: '바르셀로나에서 만나는 베트남 미식 여행.',
    desc: 'PHO VIETNAM 레스토랑에 오신 것을 환영합니다. 베트남의 풍미 가득한 전통 요리와 유명한 길거리 음식을 저희 레스토랑에서 직접 만나보세요.'
  },
  ja: {
    title: 'バルセロナで味わうベトナムの美食。',
    desc: 'PHO VIETNAM レストランへようこそ。風味豊かな伝統料理や、ベトナムで大人気のストリートフードをぜひ当店でご堪能ください。'
  },
  fr: {
    title: 'LA GASTRONOMIE VIETNAMIENNE ICI MÊME À BARCELONE.',
    desc: 'Bienvenue au restaurant PHO VIETNAM. Venez dans notre restaurant pour découvrir des plats traditionnels pleins de saveurs ou les célèbres spécialités de rue du Vietnam.'
  },
  it: {
    title: 'LA GASTRONOMIA VIETNAMITA PROPRIO QUI A BARCELLONA.',
    desc: 'Benvenuti al ristorante PHO VIETNAM. Venite nel nostro ristorante per scoprire piatti tradizionali ricchi di sapori o i famosi cibi di strada del Vietnam.'
  }
};

export default function About() {
  const { language } = useLanguage();
  const currentLang = language || 'es';
  const texts = aboutTexts[currentLang] || aboutTexts.es;

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Side: Text Card over patterned background */}
        <div className="about-content-wrapper">
          <div className="about-card">
            <span className="about-tag">
              PHỞ VIỆT & COFFEE CHILL
            </span>
            <h2 className="about-title">
              {texts.title}
            </h2>
            <p className="about-desc">
              {texts.desc}
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="about-image-wrapper">
          <img src="/about_buncha.png" alt="Bun Cha Platter" className="about-img" />
        </div>
      </div>
    </section>
  );
}
