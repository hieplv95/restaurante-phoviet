import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';

export default function Header() {
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
        <a href="#home" className="logo-link">
          <span className="logo-icon">🍜</span>
          <div className="logo-text">
            Phở<span>Việt</span>
          </div>
        </a>

        {/* Navigation Items */}
        <nav className="nav-menu">
          <a href="#menu" className="nav-link">
            {t('nav.menu')}
          </a>
          <a href="#footer" className="nav-link">
            {t('footer.contact')}
          </a>
        </nav>

        {/* Actions panel */}
        <div className="nav-actions">
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
        </div>
      </div>
    </header>
  );
}

