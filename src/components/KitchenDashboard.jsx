import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChefHat, Trash2, ArrowRight, Play, CheckCircle, Truck, Utensils } from 'lucide-react';
import { MENU_ITEMS } from '../data/menu';

export default function KitchenDashboard({ orders, onUpdateStatus, onCancelOrder }) {
  const { language, t } = useLanguage();

  // Filter out archived/delivered orders or show them at the end
  const activeOrders = orders.filter(order => order.status !== 'archived');

  // Next status mapping
  const getNextStatus = (currentStatus) => {
    switch(currentStatus) {
      case 'received': return 'preparing';
      case 'preparing': return 'out_for_delivery';
      case 'out_for_delivery': return 'delivered';
      case 'delivered': return 'archived';
      default: return 'archived';
    }
  };

  // Label for the action button depending on type
  const getActionButtonLabel = (order) => {
    if (order.status === 'received') {
      return { label: t('kitchen.action.prepare'), icon: <Play size={14} /> };
    }
    if (order.status === 'preparing') {
      if (order.orderType === 'delivery') {
        return { label: t('kitchen.action.ship'), icon: <Truck size={14} /> };
      }
      if (order.orderType === 'takeaway') {
        return { label: language === 'es' ? 'Listar para Recoger' : 'Set Ready for Pickup', icon: <CheckCircle size={14} /> };
      }
      return { label: t('kitchen.action.serve'), icon: <Utensils size={14} /> };
    }
    if (order.status === 'out_for_delivery') {
      return { label: t('kitchen.action.complete'), icon: <CheckCircle size={14} /> };
    }
    return { label: 'Archive', icon: null };
  };

  return (
    <section className="kitchen-wrapper">
      <div className="container">
        
        {/* Header bar */}
        <div className="kitchen-header-bar">
          <div className="kitchen-title">
            <ChefHat size={32} />
            <h2>{t('kitchen.title')} <span>{t('kitchen.subtitle')}</span></h2>
          </div>
          <div className="kitchen-stat">
            {t('kitchen.active')}: {activeOrders.length}
          </div>
        </div>

        {/* Dashboard Grid */}
        {activeOrders.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)' }}>
            <span style={{ fontSize: '4rem', display: 'block', marginBottom: '16px' }}>🍳</span>
            <p>{t('kitchen.no_orders')}</p>
          </div>
        ) : (
          <div className="kitchen-grid">
            {activeOrders.map(order => {
              const action = getActionButtonLabel(order);
              const nextStatus = getNextStatus(order.status);
              
              return (
                <div key={order.id} className={`kitchen-card status-${order.status}`}>
                  
                  {/* Card Header */}
                  <div className="kitchen-card-header">
                    <span className="kitchen-card-id">#{order.id}</span>
                    <span className={`kitchen-card-type ${order.orderType}`}>
                      {t(`cart.order_type.${order.orderType}`)}
                    </span>
                  </div>

                  {/* Customer Info */}
                  <div className="kitchen-card-meta">
                    {order.orderType === 'dine_in' ? (
                      <strong>{t('checkout.table.label')}: {order.checkoutData.tableNumber}</strong>
                    ) : (
                      <>
                        <strong>{order.checkoutData.name} ({order.checkoutData.phone})</strong>
                        {order.orderType === 'delivery' && (
                          <span style={{ fontSize: '0.78rem' }}>📍 {order.checkoutData.address}</span>
                        )}
                      </>
                    )}
                    <span style={{ fontSize: '0.75rem', marginTop: '4px' }}>
                      ⏱️ {language === 'es' ? 'Entrega:' : 'Time:'} {order.checkoutData.timeSlot === 'asap' ? t('checkout.time.asap') : order.checkoutData.timeSlot}
                    </span>
                  </div>

                  {/* Order Items */}
                  <div className="kitchen-card-items">
                    {order.items.map(item => {
                      const menuItem = MENU_ITEMS.find(m => m.id === item.id);
                      return (
                        <div key={item.id} className="kitchen-item-row">
                          <span className="kitchen-item-qty">{item.quantity}x</span>
                          <span className="kitchen-item-name">{menuItem?.name}</span>
                          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                            {language === 'es' ? menuItem?.es.name : menuItem?.en.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Chef Notes */}
                  {order.notes && (
                    <div className="kitchen-card-note">
                      <strong>Ghi chú:</strong> "{order.notes}"
                    </div>
                  )}

                  {/* Actions */}
                  <div className="kitchen-card-actions">
                    {order.status !== 'delivered' && (
                      <button 
                        className="kitchen-btn kitchen-btn-next"
                        onClick={() => onUpdateStatus(order.id, nextStatus)}
                      >
                        {action.icon}
                        <span>{action.label}</span>
                      </button>
                    )}
                    
                    {order.status === 'delivered' && (
                      <button 
                        className="kitchen-btn kitchen-btn-next"
                        onClick={() => onUpdateStatus(order.id, 'archived')}
                        style={{ background: 'var(--text-muted)' }}
                      >
                        <span>Archive</span>
                      </button>
                    )}

                    <button 
                      className="kitchen-btn kitchen-btn-cancel"
                      onClick={() => onCancelOrder(order.id)}
                      title={t('kitchen.btn.cancel')}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
