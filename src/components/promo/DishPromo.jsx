import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { DISH_STORIES } from '../../data/stories';
import { MapPin, Check } from 'lucide-react';

export default function DishPromo({ dish }) {
  const { language, t } = useLanguage();

  const dishConfig = {
    'bun-bo-hue': {
      taglineKey: 'promo.bbh.tagline',
      descKey: 'promo.bbh.desc',
      image: '/hero_bunbohue.png',
      ingredients: [
        { titleKey: 'promo.bbh.ing1.title', descKey: 'promo.bbh.ing1.desc' },
        { titleKey: 'promo.bbh.ing2.title', descKey: 'promo.bbh.ing2.desc' },
        { titleKey: 'promo.bbh.ing3.title', descKey: 'promo.bbh.ing3.desc' }
      ]
    },
    'banh-xeo': {
      taglineKey: 'promo.bx.tagline',
      descKey: 'promo.bx.desc',
      image: '/menu_banhxeo.png',
      ingredients: [
        { titleKey: 'promo.bx.ing1.title', descKey: 'promo.bx.ing1.desc' },
        { titleKey: 'promo.bx.ing2.title', descKey: 'promo.bx.ing2.desc' },
        { titleKey: 'promo.bx.ing3.title', descKey: 'promo.bx.ing3.desc' }
      ]
    },
    'bun-tron': {
      taglineKey: 'promo.bt.tagline',
      descKey: 'promo.bt.desc',
      image: '/hero_phobo_3d.png',
      ingredients: [
        { titleKey: 'promo.bt.ing1.title', descKey: 'promo.bt.ing1.desc' },
        { titleKey: 'promo.bt.ing2.title', descKey: 'promo.bt.ing2.desc' },
        { titleKey: 'promo.bt.ing3.title', descKey: 'promo.bt.ing3.desc' }
      ]
    }
  };

  const config = dishConfig[dish];
  if (!config) return <div className="container" style={{ padding: '80px 0', textAlign: 'center', color: '#fff' }}>Dish not found.</div>;

  const story = DISH_STORIES[dish]?.[language] || DISH_STORIES[dish]?.['en'];
  const mapsUrl = "https://www.google.com/maps/dir/?api=1&destination=Carrer+de+Viladomat,+56,+Eixample,+08015+Barcelona";

  return (
    <div className="dish-promo-container">
      {/* Hero Section */}
      <section className="promo-hero">
        <div className="container promo-hero-grid">
          <div className="promo-hero-text">
            <span className="promo-badge">HOT DEAL</span>
            <h1 className="promo-hero-title">{t(config.taglineKey)}</h1>
            <p className="promo-hero-desc">{t(config.descKey)}</p>
            
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary cta-pulse">
              <MapPin size={20} />
              <span>{t('promo.cta')}</span>
            </a>
          </div>
          
          <div className="promo-hero-image-wrapper">
            <img src={config.image} alt="Vietnamese Dish" className="promo-hero-image" />
            {dish === 'bun-tron' && (
              <div className="secondary-image-badge">
                <img src="/about_buncha.png" alt="Secondary" className="promo-hero-image-secondary" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Story & Heritage Section */}
      {story && (
        <section className="promo-story-section">
          <div className="container">
            <div className="story-header text-center">
              <h2 className="story-main-title">{story.title}</h2>
              <p className="story-intro">{story.intro}</p>
            </div>
            
            <div className="story-sections-list">
              {story.sections.map((section, idx) => (
                <div key={idx} className={`story-section-item ${idx % 2 === 1 ? 'reverse' : ''}`}>
                  <div className="story-section-content">
                    <h3>{section.heading}</h3>
                    <p>{section.text}</p>
                  </div>
                  <div className="story-section-image-wrapper">
                    <img src={section.image} alt={section.heading} className="story-section-image" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Ingredients Section */}
      <section className="promo-ingredients-section">
        <div className="container">
          <h2 className="section-title text-center">{t('promo.ingredients')}</h2>
          <div className="ingredients-grid">
            {config.ingredients.map((ing, index) => (
              <div key={index} className="ingredient-card">
                <div className="ingredient-icon-box">
                  <Check size={20} className="ingredient-icon" />
                </div>
                <h4>{t(ing.titleKey)}</h4>
                <p>{t(ing.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Map/Address Section */}
      <section className="promo-map-section">
        <div className="container promo-map-grid">
          <div className="promo-map-info">
            <h2>{t('promo.location')}</h2>
            <div className="location-detail-card">
              <p><strong>Pho Viet - Cung Đình Huế</strong></p>
              <p>📍 Carrer de Viladomat, 56, Eixample, 08015 Barcelona</p>
              <p>📞 +34 632 501 335</p>
              <p>⏰ {t('footer.hours.desc')}</p>
            </div>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '20px' }}>
              {t('promo.cta')}
            </a>
          </div>
          <div className="promo-map-iframe-wrapper">
            <iframe 
              title="Pho Viet Barcelona Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.8967916503953!2d2.1557002!3d41.3763717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a27fd8d81007%3A0x6b64d1f2a15cb539!2sCarrer%20de%20Viladomat%2C%2056%2C%20L&#39;Eixample%2C%2008015%20Barcelona!5e0!3m2!1sen!2ses!4v1700000000000!5m2!1sen!2ses" 
              width="100%" 
              height="320" 
              style={{ border: 0, borderRadius: '12px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
