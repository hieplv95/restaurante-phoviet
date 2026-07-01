import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, MoreVertical } from 'lucide-react';

const REVIEWS_DATA = [
  {
    id: 'carlos-alvaro',
    name: 'Carlos Alvaro',
    avatarBg: '#10b981',
    initials: 'CA',
    reviewCount: 3,
    photoCount: 4,
    rating: 5,
    timeKey: 'reviews.ago.day',
    isNew: true,
    isLocalGuide: false,
    text: {
      es: 'Fui a almorzar y me recibieron muy amablemente. El personal es divertido. Disfruté de una comida deliciosa con carne de cerdo estofada (thịt kho), con el auténtico sabor a hogar. En un país extranjero, poder disfrutar de un plato tan rico como el de mi madre es increíble. Recomiendo mucho venir a este restaurante.\n\nTipo de comida: Almuerzo',
      en: 'I came for lunch and was welcomed very warmly. The staff is friendly. I had a delicious meal with braised pork (thịt kho), tasting just like home-cooked meals. In a foreign land, being able to enjoy a dish as delicious as the one my mother cooks is amazing. I highly recommend everyone to visit this restaurant.\n\nMeal type: Lunch'
    },
    images: [
      '/reviews/storefront_review.png',
      '/reviews/pork_dish_review.png'
    ]
  },
  {
    id: 'laura-a',
    name: 'Laura A.',
    avatarBg: '#3b82f6',
    initials: 'LA',
    reviewCount: 305,
    photoCount: 272,
    rating: 5,
    timeKey: 'reviews.ago.months',
    isNew: false,
    isLocalGuide: true,
    text: {
      es: 'Riquísimos todo. Muchísimo sabor, el postre verde aunque a priori el color me impacto estaba delicioso. Super atentos, rápidos y de precio nos costó 43€ dos personas con copas de vino incluidas.\n\nTipo de comida\nCena\n\nPrecio por persona\n20-30 €',
      en: 'Riquísimos todo. Muchísimo sabor, el postre verde aunque a priori el color me impacto estaba delicioso. Super atentos, rápidos y de precio nos costó 43€ dos personas con copas de vino incluidas.\n\nMeal type\nDinner\n\nPrice per person\n20-30 €'
    },
    images: [
      '/reviews/dumplings_review.png',
      '/reviews/table_setting_review.png',
      '/reviews/green_dessert_review.png'
    ]
  },
  {
    id: 'nabil-r',
    name: 'Nabil R',
    avatarBg: '#8b5cf6',
    initials: 'NR',
    reviewCount: 622,
    photoCount: 5881,
    rating: 5,
    timeKey: 'reviews.ago.months.6',
    isNew: false,
    isLocalGuide: true,
    text: {
      es: '¡Nos ha encantado! Tiene menú del día y cuenta con muchas opciones, pena no haber podido probarlo todo... Los postres espectaculares.\n\nComida: 5\n\nServicio: 5\n\nAmbiente: 5',
      en: '¡Nos ha encantado! Tiene menú del día y cuenta con muchas options, pena no haber podido probarlo todo... Los postres espectaculares.\n\nFood: 5\n\nService: 5\n\nAtmosphere: 5'
    },
    images: [
      '/reviews/noodle_salad_review.png',
      '/reviews/table_cups_review.png',
      '/reviews/person_eating_review.png'
    ],
    moreCount: 3
  }
];

export default function Reviews() {
  const { language, t } = useLanguage();
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section className="reviews-section">
      <div className="container">
        
        {/* Google Reviews Section Header */}
        <div className="reviews-header-center">
          <div className="reviews-badge">
            <Star size={12} fill="currentColor" />
            <span>{t('reviews.badge')}</span>
          </div>
          <h2 className="reviews-section-title">{t('reviews.title')}</h2>
          <p className="reviews-section-subtitle">{t('reviews.subtitle')}</p>
        </div>

        {/* Carousel Grid */}
        <div className="reviews-carousel">
          {REVIEWS_DATA.map(review => {
            const textContent = language === 'es' ? review.text.es : review.text.en;
            return (
              <div key={review.id} className="review-card-google">
                
                {/* Header: User Avatar & Metadata */}
                <div className="review-card-header-g">
                  <div 
                    className="review-avatar" 
                    style={{ backgroundColor: review.avatarBg }}
                  >
                    {review.initials}
                  </div>
                  
                  <div className="review-user-meta">
                    <h4 className="review-user-name">{review.name}</h4>
                    <p className="review-user-stats">
                      {review.isLocalGuide && <span className="local-guide-tag">{t('reviews.guide')} • </span>}
                      {review.reviewCount} {t('reviews.reviews')} • {review.photoCount.toLocaleString()} {t('reviews.photos')}
                    </p>
                  </div>
                  
                  <button className="review-more-btn" aria-label="More options">
                    <MoreVertical size={16} />
                  </button>
                </div>

                {/* Rating & Date */}
                <div className="review-rating-row">
                  <div className="stars-row">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        fill={i < review.rating ? "var(--accent-gold)" : "none"} 
                        stroke={i < review.rating ? "var(--accent-gold)" : "var(--text-muted)"} 
                      />
                    ))}
                  </div>
                  <span className="review-time">
                    {t(review.timeKey)}
                    {review.isNew && (
                      <span className="new-review-badge">
                        {language === 'es' ? 'Nuevo' : 'New'}
                      </span>
                    )}
                  </span>
                </div>

                {/* Comment Text */}
                <p className="review-body-text">{textContent}</p>

                {/* Review Images Grid */}
                {review.images && review.images.length > 0 && (
                  <div className="review-images-grid">
                    {review.images.map((img, index) => {
                      const isLast = index === review.images.length - 1 && review.moreCount;
                      return (
                        <div 
                          key={index} 
                          className="review-img-wrapper"
                          onClick={() => setActivePhoto(img)}
                          title={language === 'es' ? 'Haga clic para ampliar' : 'Click to enlarge'}
                        >
                          <img src={img} alt={`Review photo by ${review.name}`} className="review-attached-img" />
                          {isLast && (
                            <div className="review-img-overlay">
                              <span>+{review.moreCount}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
                
              </div>
            );
          })}
        </div>
        
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="review-lightbox" onClick={() => setActivePhoto(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={activePhoto} alt="Zoomed review photo" className="lightbox-image" />
            <button className="lightbox-close-btn" onClick={() => setActivePhoto(null)} aria-label="Close preview">
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
