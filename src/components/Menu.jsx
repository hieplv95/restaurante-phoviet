import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LUNCH_SET_MENU } from '../data/menu';
import { FileText, Eye, LayoutGrid } from 'lucide-react';

export default function Menu() {
  const { language, t } = useLanguage();
  const [lunchSubTab, setLunchSubTab] = useState('starters'); // 'starters' | 'mains' | 'desserts' | 'drinks'
  const [lunchViewMode, setLunchViewMode] = useState('interactive'); // 'interactive' | 'image'
  const [lightboxImage, setLightboxImage] = useState(null); // null | string

  const currentLang = language || 'es';

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">{t('menu.tagline')}</span>
          <h2 className="section-title">{t('menu.title')}</h2>
          <p className="section-desc">{t('menu.desc')}</p>
        </div>

        {/* Detailed Lunch Set Menu View */}
        <div className="lunch-menu-view animate-fade-in">
          {/* Lunch Menu Header Card */}
          <div className="lunch-view-header">
            <div className="lunch-header-tag">🍱 {currentLang === 'es' ? 'SOLO DÍAS LABORALES (LUNES A VIERNES)' : 'WEEKDAYS ONLY (MONDAY TO FRIDAY)'}</div>
            <h2>{currentLang === 'es' ? 'Menú Medio de Día (Menu Trưa)' : 'Lunchtime Set Menu'}</h2>
            <div className="lunch-header-price">13.90€</div>
            <p className="lunch-header-desc">
              {currentLang === 'es' 
                ? 'Incluye: 1 Entrante + 1 Plato Principal + 1 Café o Postre + 1 Bebida (Agua, Caña, Copa de vino)' 
                : 'Includes: 1 Starter + 1 Main Course + 1 Coffee or Dessert + 1 Drink (Water, Beer, Glass of wine)'}
            </p>
          </div>

          {/* View Mode Toggle & PDF Download Row */}
          <div className="lunch-view-actions">
            <div className="view-mode-toggle">
              <button
                className={`toggle-btn ${lunchViewMode === 'interactive' ? 'active' : ''}`}
                onClick={() => setLunchViewMode('interactive')}
              >
                <LayoutGrid size={16} />
                <span>{currentLang === 'es' ? 'Vista Interactiva' : 'Interactive View'}</span>
              </button>
              <button
                className={`toggle-btn ${lunchViewMode === 'image' ? 'active' : ''}`}
                onClick={() => setLunchViewMode('image')}
              >
                <Eye size={16} />
                <span>{currentLang === 'es' ? 'Ver Menú Original' : 'Original Menu Design'}</span>
              </button>
            </div>

            <a 
              href="/menu_dias.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary download-pdf-btn"
            >
              <FileText size={16} />
              <span>{currentLang === 'es' ? 'Descargar PDF' : 'Download PDF'}</span>
            </a>
          </div>

          {lunchViewMode === 'image' ? (
            /* Image Design View */
            <div className="lunch-sheets-grid animate-fade-in">
              <div className="lunch-sheet-card" onClick={() => setLightboxImage('/menu_dias_1.png')}>
                <div className="sheet-image-wrapper">
                  <img src="/menu_dias_1.png" alt="Menú del Día - Página 1" className="lunch-sheet-img" />
                  <div className="sheet-hover-overlay">
                    <Eye size={24} />
                    <span>{currentLang === 'es' ? 'Click para ampliar' : 'Click to enlarge'}</span>
                  </div>
                </div>
                <div className="sheet-label">
                  {currentLang === 'es' ? 'Página 1: Entrantes y Postres' : 'Page 1: Starters & Desserts'}
                </div>
              </div>
              
              <div className="lunch-sheet-card" onClick={() => setLightboxImage('/menu_dias_2.png')}>
                <div className="sheet-image-wrapper">
                  <img src="/menu_dias_2.png" alt="Menú del Día - Página 2" className="lunch-sheet-img" />
                  <div className="sheet-hover-overlay">
                    <Eye size={24} />
                    <span>{currentLang === 'es' ? 'Click para ampliar' : 'Click to enlarge'}</span>
                  </div>
                </div>
                <div className="sheet-label">
                  {currentLang === 'es' ? 'Página 2: Platos Principales' : 'Page 2: Main Courses'}
                </div>
              </div>
            </div>
          ) : (
            /* Interactive Sub Tabs View */
            <>
              {/* Sub Tabs Selector */}
              <div className="lunch-subtabs">
                <button 
                  className={`lunch-subtab-btn ${lunchSubTab === 'starters' ? 'active' : ''}`}
                  onClick={() => setLunchSubTab('starters')}
                >
                  🥗 {currentLang === 'es' ? 'Entrantes' : 'Starters'}
                </button>
                <button 
                  className={`lunch-subtab-btn ${lunchSubTab === 'mains' ? 'active' : ''}`}
                  onClick={() => setLunchSubTab('mains')}
                >
                  🍜 {currentLang === 'es' ? 'Platos Principales' : 'Main Courses'}
                </button>
                <button 
                  className={`lunch-subtab-btn ${lunchSubTab === 'desserts' ? 'active' : ''}`}
                  onClick={() => setLunchSubTab('desserts')}
                >
                  🍮 {currentLang === 'es' ? 'Postres / Café' : 'Dessert / Coffee'}
                </button>
                <button 
                  className={`lunch-subtab-btn ${lunchSubTab === 'drinks' ? 'active' : ''}`}
                  onClick={() => setLunchSubTab('drinks')}
                >
                  🥤 {currentLang === 'es' ? 'Bebidas' : 'Drinks'}
                </button>
              </div>

              {/* Sub Tabs Content Grid */}
              <div className="menu-grid" style={{ marginTop: '32px' }}>
                {LUNCH_SET_MENU[lunchSubTab].map((item) => {
                  const itemTrans = currentLang === 'es' ? item.es : item.en;
                  return (
                    <div key={item.id} className="menu-card lunch-item-card">
                      <div className="card-image-box">
                        <div className="card-img-placeholder">{item.emoji}</div>
                      </div>
                      <div className="card-content">
                        <div className="card-meta">
                          <div className="card-title-box">
                            <h3 className="card-title-vn">{item.name}</h3>
                            <p className="card-title-translate">{itemTrans.name}</p>
                          </div>
                        </div>
                        <p className="card-desc" style={{ marginBottom: '16px', height: 'auto' }}>
                          {itemTrans.description}
                        </p>

                        {/* Sub-options rendering as small tags */}
                        {item.options && (
                          <div className="lunch-item-options-section">
                            <span className="options-title">{currentLang === 'es' ? 'Opciones disponibles:' : 'Available options:'}</span>
                            <div className="options-tags-row">
                              {item.options.map((opt) => (
                                <span key={opt.id} className="option-tag-badge">
                                  {opt[currentLang]}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Extras rendering */}
                        {item.extra && (
                          <div className="lunch-item-extra-section">
                            <span className="extra-badge-info">
                              ➕ {item.extra[currentLang]}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Lightbox Viewer for Menu Images */}
      {lightboxImage && (
        <div className="menu-lightbox-overlay" onClick={() => setLightboxImage(null)}>
          <div className="menu-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt="Menu Zoom" className="menu-lightbox-img" />
            <button className="menu-lightbox-close" onClick={() => setLightboxImage(null)}>✕</button>
          </div>
        </div>
      )}
    </section>
  );
}
