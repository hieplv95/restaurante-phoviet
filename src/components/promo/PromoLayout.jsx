import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronDown, MapPin, Phone, Mail, Clock, ArrowLeft } from 'lucide-react';

export default function PromoLayout({ children }) {
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

  return (
    <div className="app-layout promo-page-wrapper">
      <header className="header-wrapper promo-header">
        <div className="container header-container">
          <a href="/" className="logo-link">
            <img src="/logo_cungdinhhue.png" alt="Pho Viet" className="logo-img" />
            <div className="logo-text">Pho <span>Viet</span></div>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <a href="/" className="back-home-link">
              <ArrowLeft size={16} />
              <span>{t('promo.back_home')}</span>
            </a>

            <div className="lang-selector">
              <button className="lang-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <img src={langConfig[language]?.flag} alt={langConfig[language]?.short} className="lang-flag-img" />
                <ChevronDown size={14} />
              </button>
              <div className="lang-dropdown" style={{ display: dropdownOpen ? 'flex' : 'none' }}>
                {Object.entries(langConfig).map(([code, cfg]) => (
                  <button 
                    key={code} 
                    className={`lang-option ${language === code ? 'active' : ''}`}
                    onClick={() => { setLanguage(code); setDropdownOpen(false); }}
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

      <main className="promo-main-content">
        {children}
      </main>

      <footer className="footer promo-footer">
        <div className="container footer-grid">
          <div>
            <div className="logo-text" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Pho <span>Viet</span></div>
            <p className="footer-brand-desc">{t('footer.desc')}</p>
          </div>
          <div>
            <h4 className="footer-title">{t('footer.hours')}</h4>
            <div className="footer-info-row">
              <Clock size={16} className="footer-info-icon" />
              <span>{t('footer.hours.desc')}</span>
            </div>
          </div>
          <div>
            <h4 className="footer-title">{t('footer.contact')}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="footer-info-row">
                <MapPin size={16} className="footer-info-icon" />
                <span>Carrer de Viladomat, 56, Eixample, 08015 Barcelona</span>
              </div>
              <div className="footer-info-row">
                <Phone size={16} className="footer-info-icon" />
                <span>+34 912 345 678</span>
              </div>
              <div className="footer-info-row">
                <Mail size={16} className="footer-info-icon" />
                <span>hola@phoviet.es</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', marginTop: '40px' }}>
          <p>{t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  );
}
