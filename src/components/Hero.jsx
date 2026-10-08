import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

const heroAlt = {
  es: 'Phở Bò tradicional con caldo de 12 horas en Pho Viet, restaurante vietnamita en Barcelona',
  en: 'Traditional beef Phở with 12-hour broth at Pho Viet, Vietnamese restaurant in Barcelona',
  vi: 'Phở bò truyền thống nước dùng ninh 12 tiếng tại nhà hàng Việt Nam Phở Việt Barcelona',
  fr: 'Phở au bœuf traditionnel, bouillon mijoté 12 h, chez Pho Viet, restaurant vietnamien à Barcelone',
  it: 'Phở di manzo tradizionale con brodo di 12 ore da Pho Viet, ristorante vietnamita a Barcellona'
};

export default function Hero({ onMenuScroll }) {
  const { language, t } = useLanguage();

  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        {/* Left: Text & CTA */}
        <div className="hero-content">
          <span className="hero-tagline">{t('hero.tagline')}</span>
          <h1 className="hero-title">
            {t('hero.title.part1')}
            <span>{t('hero.title.highlight')}</span>
            {t('hero.title.part2')}
          </h1>
          <p className="hero-description">{t('hero.desc')}</p>
          
          <div className="hero-buttons">
            <button className="btn-primary" onClick={onMenuScroll}>
              <span>{t('hero.btn.menu')}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right: Floating Graphics & Interactive Badges */}
        <div className="hero-media">
          <div className="hero-image-wrapper">
            <div className="hero-bowl">
              <img 
                src="/hero_phobo_3d.webp" 
                alt={heroAlt[language] || heroAlt.en}
                className="hero-bowl-img"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                width="420"
                height="420"
              />
            </div>
            
            {/* Top-Left Floating Tag */}
            <div className="hero-badge-floating top-left">
              <span className="floating-icon">🌱</span>
              <div className="floating-text">
                <p>Phở Chay</p>
                <p>{t('hero.badge.fresh')}</p>
              </div>
            </div>

            {/* Bottom-Right Floating Tag */}
            <div className="hero-badge-floating bottom-right">
              <span className="floating-icon">🔥</span>
              <div className="floating-text">
                <p>Phở Bò Tradicional</p>
                <p>{t('hero.badge.hours')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
