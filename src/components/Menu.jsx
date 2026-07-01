import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CATEGORIES, MENU_ITEMS } from '../data/menu';
import { Plus, Minus, ShoppingCart, Leaf, Flame, Sparkles } from 'lucide-react';

export default function Menu({ cart, onUpdateQuantity }) {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [dietFilters, setDietFilters] = useState({
    spicy: false,
    vegan: false,
    gf: false
  });

  // Toggle diet filters
  const toggleDiet = (type) => {
    setDietFilters(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  // Filter logic
  const filteredItems = MENU_ITEMS.filter(item => {
    // Category check
    if (activeCategory !== 'all' && item.category !== activeCategory) {
      return false;
    }
    // Diet checks
    if (dietFilters.spicy && !item.badges.includes('spicy')) return false;
    if (dietFilters.vegan && !item.badges.includes('vegan')) return false;
    if (dietFilters.gf && !item.badges.includes('gf')) return false;
    return true;
  });

  // Helper to find quantity in cart
  const getItemQuantity = (itemId) => {
    const cartItem = cart.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">{t('menu.tagline')}</span>
          <h2 className="section-title">{t('menu.title')}</h2>
          <p className="section-desc">{t('menu.desc')}</p>
        </div>

        {/* Categories Tab Swiper */}
        <div className="categories-container">
          {CATEGORIES.map(category => (
            <button
              key={category.id}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-emoji">{category.emoji}</span>
              <span>{language === 'es' ? category.es : category.en}</span>
            </button>
          ))}
        </div>

        {/* Dietary Filters Panel */}
        <div className="diet-filters">
          <button
            className={`diet-filter-btn spicy ${dietFilters.spicy ? 'active' : ''}`}
            onClick={() => toggleDiet('spicy')}
          >
            <span>🌶️ {t('menu.filter.spicy')}</span>
          </button>
          <button
            className={`diet-filter-btn vegan ${dietFilters.vegan ? 'active' : ''}`}
            onClick={() => toggleDiet('vegan')}
          >
            <span>🌿 {t('menu.filter.vegan')}</span>
          </button>
          <button
            className={`diet-filter-btn gf ${dietFilters.gf ? 'active' : ''}`}
            onClick={() => toggleDiet('gf')}
          >
            <span>🌾 {t('menu.filter.gf')}</span>
          </button>
        </div>

        {/* Menu Cards Grid */}
        <div className="menu-grid">
          {filteredItems.map(item => {
            const qty = getItemQuantity(item.id);
            const itemTrans = language === 'es' ? item.es : item.en;

            return (
              <div key={item.id} className="menu-card">
                {/* Visual Representation (Image box using emoji/pattern) */}
                <div className="card-image-box">
                  <div className="card-img-placeholder">
                    {item.emoji}
                  </div>
                  {/* Badges Overlay */}
                  <div className="card-badges">
                    {item.badges.includes('spicy') && (
                      <span className="badge badge-spicy">🌶️ Spicy</span>
                    )}
                    {item.badges.includes('vegan') && (
                      <span className="badge badge-vegan">🌱 Vegan</span>
                    )}
                    {item.badges.includes('gf') && (
                      <span className="badge badge-gf">🌾 Gluten-Free</span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="card-content">
                  <div className="card-meta">
                    <div className="card-title-box">
                      <h3 className="card-title-vn">{item.name}</h3>
                      <p className="card-title-translate">{itemTrans.name}</p>
                    </div>
                    <span className="card-price">{item.price.toFixed(2)}€</span>
                  </div>

                  <p className="card-desc">{itemTrans.description}</p>

                  {/* Actions */}
                  <div className="card-action-box">
                    {qty > 0 ? (
                      <div className="quantity-adjuster">
                        <button 
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(item.id, qty - 1)}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="qty-value">{qty}</span>
                        <button 
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(item.id, qty + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    ) : (
                      <button 
                        className="add-cart-btn"
                        onClick={() => onUpdateQuantity(item.id, 1)}
                      >
                        <ShoppingCart size={14} />
                        <span>{t('menu.add_to_cart')}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
