import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ChefHat } from 'lucide-react';

export default function Hero({ onMenuScroll }) {
  const { t } = useLanguage();

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
                src="/hero_phobo_3d.png" 
                alt="Phở Bò 3D" 
                className="hero-bowl-img"
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
