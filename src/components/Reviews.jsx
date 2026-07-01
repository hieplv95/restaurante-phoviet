import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, MoreVertical } from 'lucide-react';

const REVIEWS_DATA = [
  {
    id: 'long-nguyen',
    name: 'Long Nguyen',
    avatarBg: '#10b981',
    initials: 'LN',
    reviewCount: 3,
    photoCount: 4,
    rating: 5,
    timeKey: 'reviews.ago.day',
    isNew: true,
    isLocalGuide: false,
    text: {
      es: 'Tôi đến ăn trưa và được tiếp đón rất niềm nở. Nhân viên vui tính. Tôi đã có được bữa cơm ngon miệng với món thịt kho. Chuẩn hương vị cơm quê. Ở nơi đất khách quê người mà tôi lại được thưởng thức món ngon như món của mẹ tôi nấu vậy. Tôi khuyên mọi người hãy đến nhà hàng này nhé.\n\nLoại hình bữa ăn\nBữa trưa',
      en: 'Tôi đến ăn trưa và được tiếp đón rất niềm nở. Nhân viên vui tính. Tôi đã có được bữa cơm ngon miệng với món thịt kho. Chuẩn hương vị cơm quê. Ở nơi đất khách quê người mà tôi lại được thưởng thức món ngon như món của mẹ tôi nấu vậy. Tôi khuyên mọi người hãy đến nhà hàng này nhé.\n\nLoại hình bữa ăn\nBữa trưa'
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
      es: 'La comida fue fantástica y el servicio muy rápido. El precio fue increíble para la cantidad de comida que recibimos, y todo estaba delicioso.',
      en: 'The food was great and service was quick. The price was incredible for the amount of food that we got, and it was delicious.'
    },
    images: [
      '/reviews/spring_rolls_review.png',
      '/reviews/pho_bowl_review.png',
      '/reviews/restaurant_interior_review.png'
    ]
  },
  {
    id: 'nabil-r',
    name: 'Nabil R',
    avatarBg: '#8b5cf6',
    initials: 'NR',
    reviewCount: 622,
    photoCount: 5881,
    rating: 4,
    timeKey: 'reviews.ago.months.6',
    isNew: false,
    isLocalGuide: true,
    text: {
      es: 'Los menús son más que suficientes para un almuerzo rápido. El servicio es rápido y la comida es decente. Espera una comida con sabor casero y con las especias adecuadas.',
      en: 'The set meals are more than enough for a quick lunch. Service is fast and food is decent. Do not come here expecting gourmet vietnamese. Rather, expect a meal that tastes home-cooked and with the appropriate spices...'
    },
    images: [
      '/reviews/pho_bowl_review.png',
      '/reviews/restaurant_interior_review.png',
      '/reviews/spring_rolls_review.png'
    ],
    moreCount: 3
  }
];

export default function Reviews() {
  const { language, t } = useLanguage();

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
                        <div key={index} className="review-img-wrapper">
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
    </section>
  );
}
