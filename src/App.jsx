import React from 'react';
import { useLanguage } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function MainApp() {
  const { language, t } = useLanguage();
  
  const handleMenuScroll = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-layout">
      {/* Universal navigation bar */}
      <Header />

      {/* Main content */}
      <main>
        <Hero onMenuScroll={handleMenuScroll} />
        <About />
        <Menu />
        <Reviews />
      </main>


      {/* Client footer block */}
      <footer id="footer" className="footer">
        <div className="container footer-grid">
          {/* Column 1: Brand details */}
          <div>
            <a href="#home" className="logo-link">
              <img src="/logo_cungdinhhue.png" alt="Pho Viet - Cung Đình Huế" className="logo-img" />
              <div className="logo-text">Pho <span>Viet</span></div>
            </a>
            <p className="footer-brand-desc">
              {t('footer.desc')}
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="footer-title">{t('nav.menu')}</h4>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">{t('hero.title.highlight')}</a></li>
              <li><a href="#menu" className="footer-link">{t('nav.menu')}</a></li>
            </ul>
          </div>

          {/* Column 3: Schedule details */}
          <div>
            <h4 className="footer-title">{t('footer.hours')}</h4>
            <div className="footer-info-row">
              <Clock size={16} className="footer-info-icon" />
              <span>{t('footer.hours.desc')}</span>
            </div>
          </div>

          {/* Column 4: Location details */}
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

        <div className="container footer-bottom">
          <p>{t('footer.rights')}</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#privacy" className="footer-link" style={{ fontSize: '0.8rem' }}>
              {language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
            </a>
            <a href="#terms" className="footer-link" style={{ fontSize: '0.8rem' }}>
              {language === 'es' ? 'Términos de Servicio' : 'Terms of Service'}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainApp;

