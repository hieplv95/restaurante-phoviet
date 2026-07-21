import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, MapPin, Star } from 'lucide-react';

export default function MapSection() {
  const { language } = useLanguage();

  const textConfig = {
    es: {
      category: 'RESTAURANTE VIETNAMITA',
      reviews: '1.205 reseñas',
      address: 'Carrer de Viladomat, 56, Eixample, 08015 Barcelona',
      linkText: 'VER EN GOOGLE MAPS'
    },
    en: {
      category: 'VIETNAMESE RESTAURANT',
      reviews: '1,205 reviews',
      address: 'Carrer de Viladomat, 56, Eixample, 08015 Barcelona',
      linkText: 'VIEW ON GOOGLE MAPS'
    },
    vi: {
      category: 'NHÀ HÀNG VIỆT NAM',
      reviews: '1.205 đánh giá',
      address: 'Carrer de Viladomat, 56, Eixample, 08015 Barcelona',
      linkText: 'XEM TRÊN GOOGLE MAPS'
    }
  };

  const currText = textConfig[language] || textConfig.es;
  const googleMapsUrl = "https://www.google.com/maps/place/Pho+Viet/@41.3774691,2.1578155,17z/data=!3m2!4b1!5s0x12a4b478d7b41685:0x59d458301199f64a!4m6!3m5!1s0x12a4a31a39f5abcd:0x3c30f56c80806936!8m2!3d41.3774651!4d2.1603904";

  return (
    <section id="location" className="map-section">
      <div className="map-container">
        
        {/* Embedded Interactive Google Map */}
        <iframe
          className="google-map-iframe"
          title="Pho Viet Location Map"
          src="https://maps.google.com/maps?q=41.3774651,2.1603904&hl=es&z=17&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Floating Google Place Card Overlay */}
        <div className="map-floating-card">
          <div className="card-top-actions">
            <div className="card-brand-badge">
              <MapPin size={16} className="pin-icon" />
              <span>Pho Viet</span>
            </div>
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card-ext-btn"
              title={currText.linkText}
            >
              <ExternalLink size={16} />
            </a>
          </div>

          <h3 className="card-restaurant-name">Pho Viet</h3>
          <p className="card-restaurant-category">{currText.category}</p>

          <div className="card-rating-row">
            <div className="stars-group">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#f59e0b" stroke="#f59e0b" />
              ))}
            </div>
            <span className="rating-score">4,8</span>
            <span className="reviews-count">({currText.reviews}) • 10-20 €</span>
          </div>

          <p className="card-address-text">{currText.address}</p>

          <a 
            href={googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="card-view-maps-link"
          >
            <span>{currText.linkText}</span>
            <ExternalLink size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
