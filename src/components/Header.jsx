import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const langConfig = {
    es: { label: 'Español', flag: '/flags/es.png', short: 'ES' },
    en: { label: 'English', flag: '/flags/gb.png', short: 'EN' },
    vi: { label: 'Tiếng Việt', flag: '/flags/vn.png', short: 'VN' },
    zh: { label: '中文', flag: '/flags/cn.png', short: 'ZH' },
    ja: { label: '日本語', flag: '/flags/jp.png', short: 'JA' },
    ko: { label: '한국어', flag: '/flags/kr.png', short: 'KO' },
    fr: { label: 'Français', flag: '/flags/fr.png', short: 'FR' },
    it: { label: 'Italiano', flag: '/flags/it.png', short: 'IT' }
  };

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
              <img 
                src={langConfig[language]?.flag} 
                alt={langConfig[language]?.short} 
                className="lang-flag-img" 
              />
              <ChevronDown size={14} />
            </button>
            <div className="lang-dropdown" style={{ display: dropdownOpen ? 'flex' : 'none' }}>
              {Object.entries(langConfig).map(([code, cfg]) => (
                <button 
                  key={code}
                  className={`lang-option ${language === code ? 'active' : ''}`}
                  onClick={() => toggleLanguage(code)}
                >
                  <img src={cfg.flag} alt={cfg.short} className="lang-flag-img-dropdown" />
                  <span>{cfg.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

