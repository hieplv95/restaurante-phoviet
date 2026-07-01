import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Clock, MapPin, Receipt, ShieldCheck } from 'lucide-react';
import { MENU_ITEMS } from '../data/menu';

export default function OrderTracker({ order, onReturnToMenu }) {
  const { language, t } = useLanguage();
  const [countdown, setCountdown] = useState(35); // simulated minutes remaining

  // Sync simulated countdown
  useEffect(() => {
    if (!order) return;
    
    // Set initial countdown based on status
    if (order.status === 'received') setCountdown(35);
    else if (order.status === 'preparing') setCountdown(20);
    else if (order.status === 'out_for_delivery') setCountdown(10);
    else if (order.status === 'delivered') setCountdown(0);

    const timer = setInterval(() => {
      setCountdown(prev => (prev > 1 ? prev - 1 : 0));
    }, 30000); // decrement every 30s for demo

    return () => clearInterval(timer);
  }, [order?.status]);

  if (!order) return null;

  // Set timeline steps based on order type
  const getTimelineSteps = () => {
    if (order.orderType === 'delivery') {
      return [
        { key: 'received', label: t('track.status.received'), icon: '📝' },
        { key: 'preparing', label: t('track.status.preparing'), icon: '🍳' },
        { key: 'out_for_delivery', label: t('track.status.out_for_delivery'), icon: '🛵' },
        { key: 'delivered', label: t('track.status.delivered'), icon: '🏠' }
      ];
    } else if (order.orderType === 'takeaway') {
      return [
        { key: 'received', label: t('track.status.received'), icon: '📝' },
        { key: 'preparing', label: t('track.status.preparing'), icon: '🍳' },
        { key: 'out_for_delivery', label: language === 'es' ? 'Listo' : 'Ready', icon: '🛍️' },
        { key: 'delivered', label: language === 'es' ? 'Recogido' : 'Picked Up', icon: '✅' }
      ];
    } else { // dine_in
      return [
        { key: 'received', label: t('track.status.received'), icon: '📝' },
        { key: 'preparing', label: t('track.status.preparing'), icon: '🍳' },
        { key: 'out_for_delivery', label: language === 'es' ? 'Sirviendo' : 'Serving', icon: '🍽️' },
        { key: 'delivered', label: language === 'es' ? 'Servido' : 'Served', icon: '😋' }
      ];
    }
  };

  const steps = getTimelineSteps();
  const currentStepIndex = steps.findIndex(step => step.key === order.status);

  // Status Descriptions
  const getStatusDesc = () => {
    if (order.status === 'received') return t('track.status.received.desc');
    if (order.status === 'preparing') return t('track.status.preparing.desc');
    if (order.status === 'out_for_delivery') {
      if (order.orderType === 'delivery') return t('track.status.out_for_delivery.desc');
      if (order.orderType === 'takeaway') return language === 'es' ? '¡Tu comida está lista para recoger!' : 'Your meal is ready for pickup!';
      return t('track.status.dine_in.desc');
    }
    if (order.status === 'delivered') return t('track.status.delivered.desc');
    return '';
  };

  // Map Courier position logic
  const getCourierLeftPosition = () => {
    switch(order.status) {
      case 'received': return '15%';
      case 'preparing': return '40%';
      case 'out_for_delivery': return '65%';
      case 'delivered': return '85%';
      default: return '15%';
    }
  };

  // Courier Icon depending on type
  const getCourierIcon = () => {
    if (order.orderType === 'delivery') return '🛵';
    if (order.orderType === 'takeaway') return '🏃';
    return '🧑‍🍳';
  };

  // Calculate pricing breakdown
  const subtotal = order.items.reduce((sum, item) => {
    const menuItem = MENU_ITEMS.find(m => m.id === item.id);
    return sum + ((menuItem?.price || 0) * item.quantity);
  }, 0);
  const deliveryFee = order.orderType === 'delivery' ? (subtotal > 30 ? 0 : 2.50) : 0;
  const total = subtotal + deliveryFee;

  return (
    <section className="tracking-wrapper">
      <div className="container">
        <div className="tracking-card">
          
          {/* Tracking Header */}
          <div className="tracking-header">
            <div>
              <div className="order-id">
                {t('track.order_id')}<span>{order.id}</span>
              </div>
              <span className="order-time-stamp">
                {language === 'es' ? 'Pago mediante' : 'Paid via'} {order.checkoutData.paymentMethod.toUpperCase()}
              </span>
            </div>
            <div className="tracking-eta">
              <span className="eta-label">{t('track.eta')}</span>
              <div className="eta-time">
                {order.status === 'delivered' ? '✓' : `${countdown} ${language === 'es' ? 'min' : 'mins'}`}
              </div>
            </div>
          </div>

          {/* Status Message */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'var(--bg-tertiary)', padding: '20px', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--accent-green)', marginBottom: '32px' }}>
            <div style={{ fontSize: '2rem' }}>{steps[currentStepIndex]?.icon}</div>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '4px' }}>
                {steps[currentStepIndex]?.label}
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{getStatusDesc()}</p>
            </div>
          </div>

          {/* Timeline Visualizer */}
          <div className="tracker-timeline">
            {/* Background progress bar filled up to active index */}
            <div 
              className="timeline-progress-bar"
              style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
            />
            {steps.map((step, idx) => {
              const isActive = step.key === order.status;
              const isCompleted = idx < currentStepIndex;
              return (
                <div 
                  key={step.key} 
                  className={`timeline-step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                >
                  <div className="step-node">
                    {isCompleted ? '✓' : step.icon}
                  </div>
                  <span className="step-label">{step.label}</span>
                </div>
              );
            })}
          </div>

          {/* Delivery Map Simulator (Hidden for dine-in usually, but displayed here as fun restaurant waiter tracker) */}
          <div className="map-simulator">
            <div className="map-bg-pattern"></div>
            {/* Roads */}
            <div className="map-road map-road-h"></div>
            <div className="map-road map-road-v"></div>

            {/* Restaurant Point */}
            <div className="map-node map-restaurant">🏪</div>
            
            {/* Courier Point */}
            {order.status !== 'delivered' && (
              <div 
                className="map-node map-courier"
                style={{ left: getCourierLeftPosition() }}
              >
                {getCourierIcon()}
              </div>
            )}

            {/* Client Destination Point */}
            <div className="map-node map-home">
              {order.orderType === 'dine_in' ? '🪑' : '🏠'}
            </div>
          </div>

          {/* Order Summary Breakdown */}
          <div className="tracking-summary-box">
            <h4 className="tracking-summary-title">
              <Receipt size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'text-bottom' }} />
              {t('track.summary')}
            </h4>
            
            {order.items.map(item => {
              const menuItem = MENU_ITEMS.find(m => m.id === item.id);
              const itemTrans = language === 'es' ? menuItem?.es : menuItem?.en;
              return (
                <div key={item.id} className="tracking-item-row">
                  <span className="tracking-item-name">
                    <span>{item.quantity}x</span> {menuItem?.name} ({itemTrans?.name})
                  </span>
                  <span>{((menuItem?.price || 0) * item.quantity).toFixed(2)}€</span>
                </div>
              );
            })}

            {order.notes && (
              <div style={{ marginTop: '14px', padding: '10px 12px', background: 'rgba(245, 158, 11, 0.08)', borderLeft: '2px solid var(--accent-gold)', borderRadius: '4px', fontSize: '0.8rem', color: 'var(--accent-gold)' }}>
                <strong>{t('track.notes.chef')}</strong> {order.notes}
              </div>
            )}

            <div className="tracking-meta-row">
              <span style={{ color: 'var(--text-secondary)' }}>
                {t('track.type')} <strong>{t(`track.type.${order.orderType}`)}</strong>
                {order.orderType === 'dine_in' && ` (${t('checkout.table.label')}: ${order.checkoutData.tableNumber})`}
                {order.orderType === 'delivery' && ` (${order.checkoutData.address})`}
              </span>
              <span style={{ fontSize: '1.1rem', fontWeight: '800' }}>
                Total: {total.toFixed(2)}€
              </span>
            </div>
          </div>

          {/* Return CTA */}
          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <button className="btn-secondary" onClick={onReturnToMenu}>
              {language === 'es' ? 'Volver al Menú' : 'Back to Menu'}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
