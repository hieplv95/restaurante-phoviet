import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShoppingBag, ChevronDown, ChefHat, User } from 'lucide-react';

export default function Header({ 
  cartCount, 
  cartTotal, 
  onCartClick, 
  currentView, 
  setView 
}) {
  const { language, setLanguage, t } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <header className="header-wrapper">
      <div className="container header-container">
        {/* Brand Logo */}
        <a href="#home" className="logo-link" onClick={() => setView('client')}>
          <span className="logo-icon">🍜</span>
          <div className="logo-text">
            Phở<span>Việt</span>
          </div>
        </a>

        {/* Navigation Items */}
        <nav className="nav-menu">
          <a href="#menu" className="nav-link" onClick={() => setView('client')}>
            {t('nav.menu')}
          </a>
          <a href="#footer" className="nav-link" onClick={() => setView('client')}>
            {t('footer.contact')}
          </a>
        </nav>

        {/* Actions panel */}
        <div className="nav-actions">
          {/* Admin Kitchen Simulator Switch */}
          {currentView === 'client' ? (
            <button 
              className="kitchen-switch" 
              onClick={() => setView('kitchen')}
              title="Simulator: Open Kitchen view to process orders"
            >
              <ChefHat size={16} />
              <span>{t('nav.kitchen')}</span>
            </button>
          ) : (
            <button 
              className="kitchen-switch" 
              onClick={() => setView('client')}
              style={{ background: 'rgba(16, 185, 129, 0.15)', color: 'var(--accent-green)', borderColor: 'rgba(16, 185, 129, 0.3)' }}
            >
              <User size={16} />
              <span>{t('nav.client')}</span>
            </button>
          )}

          {/* Language Selector Dropdown */}
          <div className="lang-selector">
            <button 
              className="lang-btn" 
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>{language === 'es' ? '🇪🇸 ES' : '🇬🇧 EN'}</span>
              <ChevronDown size={14} />
            </button>
            <div className="lang-dropdown" style={{ display: dropdownOpen ? 'flex' : 'none' }}>
              <button 
                className={`lang-option ${language === 'es' ? 'active' : ''}`}
                onClick={() => toggleLanguage('es')}
              >
                🇪🇸 Español
              </button>
              <button 
                className={`lang-option ${language === 'en' ? 'active' : ''}`}
                onClick={() => toggleLanguage('en')}
              >
                🇬🇧 English
              </button>
            </div>
          </div>

          {/* Floating Cart Switch */}
          {currentView === 'client' && (
            <button className="cart-trigger" onClick={onCartClick}>
              <ShoppingBag size={18} />
              <span className="cart-text-val">{cartTotal.toFixed(2)}€</span>
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
