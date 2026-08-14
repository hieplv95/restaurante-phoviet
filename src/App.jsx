import React, { useState } from 'react';
import { useLanguage } from './context/LanguageContext';
import Header from './components/Header';
import PolicyModal from './components/PolicyModal';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import MapSection from './components/MapSection';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PromoLayout from './components/promo/PromoLayout';
import DishPromo from './components/promo/DishPromo';
import SEO from './components/SEO';

function MainApp() {
  const { language, t } = useLanguage();
  const [openPolicy, setOpenPolicy] = useState(null);
  
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const cleanPath = path.replace(/\/$/, ''); // Remove trailing slash
  const isPromoPage = cleanPath.startsWith('/promo/') || cleanPath.includes('/promo');
  const promoDish = isPromoPage ? cleanPath.split('/').filter(Boolean).pop() : null;

  console.log('[Routing Debug] path:', path, 'cleanPath:', cleanPath, 'isPromoPage:', isPromoPage, 'promoDish:', promoDish);

  if (isPromoPage && promoDish) {
    return (
      <PromoLayout>
        <DishPromo dish={promoDish} />
      </PromoLayout>
    );
  }
  
  const handleMenuScroll = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-layout">
      <SEO page="home" />
      {/* Universal navigation bar */}
      <Header />

      {/* Main content */}
      <main>
        <Hero onMenuScroll={handleMenuScroll} />
        <About />
        <Menu />
        <Reviews />
        <MapSection />
      </main>


      {/* Client footer block */}
      <footer id="footer" className="footer">
        <div className="container footer-grid">
          {/* Column 1: Brand details */}
          <div>
            <a href="#home" className="logo-link">
              <img src="/logo_hat.webp" alt="Pho Viet Restaurant" className="logo-img" width="40" height="40" loading="lazy" decoding="async" />
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
                <span>+34 632 501 335</span>
              </div>
              <div className="footer-info-row">
                <Mail size={16} className="footer-info-icon" />
                <span>tranngoctuando@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <div>
            <p>{t('footer.rights')}</p>
            <p className="footer-credits">
              {language === 'vi' ? 'Được thiết kế bởi ' : language === 'es' ? 'Diseñado por ' : 'Designed by '}
              <a 
                href="https://vietsol.eu/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="vietsol-link"
              >
                VietSol
              </a>
            </p>
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <button 
              onClick={() => setOpenPolicy('privacy')} 
              className="footer-link" 
              style={{ fontSize: '0.8rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              {t('footer.privacy')}
            </button>
            <button 
              onClick={() => setOpenPolicy('terms')} 
              className="footer-link" 
              style={{ fontSize: '0.8rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              {t('footer.terms')}
            </button>
          </div>
        </div>
      </footer>
      <PolicyModal 
        isOpen={openPolicy !== null} 
        policyType={openPolicy} 
        onClose={() => setOpenPolicy(null)} 
      />
    </div>
  );
}

export default MainApp;

