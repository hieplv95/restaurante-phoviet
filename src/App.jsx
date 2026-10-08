import React, { useState, lazy, Suspense } from 'react';
import { useLanguage } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import SEO from './components/SEO';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { parsePath } from './seo/routes';

// Lazy load below-the-fold components for smaller initial bundle
const About = lazy(() => import('./components/About'));
const Menu = lazy(() => import('./components/Menu'));
const Reviews = lazy(() => import('./components/Reviews'));
const FAQ = lazy(() => import('./components/FAQ'));
const MapSection = lazy(() => import('./components/MapSection'));
const PolicyModal = lazy(() => import('./components/PolicyModal'));
const PromoLayout = lazy(() => import('./components/promo/PromoLayout'));
const DishPromo = lazy(() => import('./components/promo/DishPromo'));

// `path` is passed in (window.location on the client, the route being prerendered at build time).
function MainApp({ path = '/' }) {
  const { language, t } = useLanguage();
  const [openPolicy, setOpenPolicy] = useState(null);

  const { page } = parsePath(path);

  if (page !== 'home') {
    return (
      <Suspense fallback={null}>
        <PromoLayout>
          <DishPromo dish={page} />
        </PromoLayout>
      </Suspense>
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
        <Suspense fallback={null}>
          <About />
          <Menu />
          <Reviews />
          <FAQ />
          <MapSection />
        </Suspense>
      </main>


      {/* Client footer block */}
      <footer id="footer" className="footer">
        <div className="container footer-grid">
          {/* Column 1: Brand details */}
          <div>
            <a href="#home" className="logo-link">
              <img src="/logo_hat.webp" alt="Pho Viet - Vietnamese restaurant in Barcelona" className="logo-img" width="40" height="40" loading="lazy" decoding="async" />
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
              <li><a href="#home" className="footer-link">Pho Viet Barcelona</a></li>
              <li><a href="#menu" className="footer-link">{t('nav.menu')}</a></li>
              <li><a href="#faq" className="footer-link">FAQ</a></li>
              <li><a href="/promo/pho-ha-noi" className="footer-link">Phở &amp; Bún Chả Hà Nội</a></li>
              <li><a href="/promo/bun-bo-hue" className="footer-link">Bún Bò Huế</a></li>
              <li><a href="/promo/banh-xeo" className="footer-link">Bánh Xèo</a></li>
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
                <a href="tel:+34632501335" className="footer-link">+34 632 501 335</a>
              </div>
              <div className="footer-info-row">
                <Mail size={16} className="footer-info-icon" />
                <a href="mailto:tranngoctuando@gmail.com" className="footer-link">tranngoctuando@gmail.com</a>
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
      {openPolicy !== null && (
        <Suspense fallback={null}>
          <PolicyModal 
            isOpen={true} 
            policyType={openPolicy} 
            onClose={() => setOpenPolicy(null)} 
          />
        </Suspense>
      )}
    </div>
  );
}

export default MainApp;

