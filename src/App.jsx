import React, { useState } from 'react';
import { useLanguage } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderTracker from './components/OrderTracker';
import KitchenDashboard from './components/KitchenDashboard';
import Reviews from './components/Reviews';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { MENU_ITEMS } from './data/menu';

const INITIAL_ORDERS = [
  {
    id: '5289',
    items: [
      { id: 'pho-bo', quantity: 1 },
      { id: 'cha-gio', quantity: 1 },
      { id: 'ca-phe-sua-da', quantity: 1 }
    ],
    orderType: 'delivery',
    notes: 'Por favor, poner el picante a un lado.',
    status: 'preparing',
    checkoutData: {
      name: 'Alejandro Sanz',
      phone: '+34 677 889 900',
      address: 'Carrer de Viladomat, 56, 3B, Barcelona',
      timeSlot: 'asap',
      paymentMethod: 'card'
    }
  }
];

function MainApp() {
  const { language, t } = useLanguage();
  
  // App views: 'client' | 'kitchen'
  const [view, setView] = useState('client');
  const [viewingTracker, setViewingTracker] = useState(false);

  // Cart & checkout states
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderType, setOrderType] = useState('delivery');
  const [notes, setNotes] = useState('');

  // Orders simulator states
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [activeOrder, setActiveOrder] = useState(null);

  // Cart helper calculations
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => {
    const menuItem = MENU_ITEMS.find(m => m.id === item.id);
    return sum + ((menuItem?.price || 0) * item.quantity);
  }, 0);

  // Handle cart quantities changes
  const handleUpdateQuantity = (itemId, quantity) => {
    setCart(prev => {
      if (quantity <= 0) {
        return prev.filter(item => item.id !== itemId);
      }
      const existing = prev.find(item => item.id === itemId);
      if (existing) {
        return prev.map(item => item.id === itemId ? { ...item, quantity } : item);
      }
      return [...prev, { id: itemId, quantity }];
    });
  };

  // Submit client order
  const handleCheckoutSubmit = (checkoutData) => {
    const newOrder = {
      id: Math.floor(1000 + Math.random() * 9000).toString(),
      items: [...cart],
      orderType,
      notes,
      status: 'received',
      checkoutData
    };

    setOrders(prev => [newOrder, ...prev]);
    setActiveOrder(newOrder);
    setCart([]);
    setNotes('');
    setIsCheckoutOpen(false);
    setViewingTracker(true);
  };

  // Kitchen Simulator Status Updates
  const handleUpdateStatus = (orderId, newStatus) => {
    setOrders(prev => prev.map(order => order.id === orderId ? { ...order, status: newStatus } : order));
    
    // Sync status back to active tracking order
    setActiveOrder(prevActive => {
      if (prevActive && prevActive.id === orderId) {
        return { ...prevActive, status: newStatus };
      }
      return prevActive;
    });
  };

  // Kitchen Simulator Cancel Order
  const handleCancelOrder = (orderId) => {
    setOrders(prev => prev.filter(order => order.id !== orderId));
    setActiveOrder(prevActive => {
      if (prevActive && prevActive.id === orderId) {
        return null;
      }
      return prevActive;
    });
  };

  const handleMenuScroll = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-layout">
      {/* Universal navigation bar */}
      <Header
        cartCount={cartCount}
        cartTotal={cartTotal}
        onCartClick={() => setIsCartOpen(true)}
        currentView={view}
        setView={setView}
      />

      {/* Main content route management */}
      <main>
        {view === 'kitchen' ? (
          <KitchenDashboard
            orders={orders}
            onUpdateStatus={handleUpdateStatus}
            onCancelOrder={handleCancelOrder}
          />
        ) : viewingTracker && activeOrder ? (
          <OrderTracker
            order={activeOrder}
            onReturnToMenu={() => setViewingTracker(false)}
          />
        ) : (
          <>
            <Hero onMenuScroll={handleMenuScroll} setView={setView} />
            <Menu cart={cart} onUpdateQuantity={handleUpdateQuantity} />
            <Reviews />
          </>
        )}
      </main>

      {/* Persistent Shopping Cart Sidebar */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        orderType={orderType}
        setOrderType={setOrderType}
        notes={notes}
        setNotes={setNotes}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Order Placement Dialog */}
      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        orderType={orderType}
        onSubmit={handleCheckoutSubmit}
      />

      {/* Client footer block */}
      {view === 'client' && (
        <footer id="footer" className="footer">
          <div className="container footer-grid">
            {/* Column 1: Brand details */}
            <div>
              <a href="#home" className="logo-link">
                <span className="logo-icon">🍜</span>
                <div className="logo-text">Phở<span>Việt</span></div>
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
                <li>
                  <button onClick={() => setView('kitchen')} className="footer-link" style={{ textAlign: 'left' }}>
                    {t('nav.kitchen')}
                  </button>
                </li>
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
      )}
    </div>
  );
}

export default MainApp;
