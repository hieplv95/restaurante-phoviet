import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, MapPin, Star } from 'lucide-react';

export default function MapSection() {
  const { language } = useLanguage();

  const textConfig = {
    es: {
      category: 'RESTAURANTE / COMIDA VIETNAMITA',
      reviews: '142 reseñas',
      address: 'Carrer de Viladomat, 56, Eixample, 08015 Barcelona',
      linkText: 'VER EN GOOGLE MAPS'
    },
    en: {
      category: 'RESTAURANTE / VIETNAMESE FOOD',
      reviews: '142 reviews',
      address: 'Carrer de Viladomat, 56, Eixample, 08015 Barcelona',
      linkText: 'VIEW ON GOOGLE MAPS'
    },
    vi: {
      category: 'NHÀ HÀNG / MÓN ĂN VIỆT NAM',
      reviews: '142 đánh giá',
      address: 'Carrer de Viladomat, 56, Eixample, 08015 Barcelona',
      linkText: 'XEM TRÊN GOOGLE MAPS'
    }
  };

  const currText = textConfig[language] || textConfig.es;
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Carrer+de+Viladomat+56+08015+Barcelona";

  return (
    <section id="location" className="map-section">
      <div className="map-container">
        
        {/* Embedded Interactive Google Map */}
        <iframe
          className="google-map-iframe"
          title="Pho Viet Location Map"
          src="https://maps.google.com/maps?q=Carrer+de+Viladomat,+56,+08015+Barcelona&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
            <span className="rating-score">4.8</span>
            <span className="reviews-count">({currText.reviews})</span>
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
