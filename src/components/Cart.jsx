import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { MENU_ITEMS } from '../data/menu';

export default function Cart({ 
  isOpen, 
  onClose, 
  cart, 
  onUpdateQuantity, 
  orderType, 
  setOrderType, 
  notes, 
  setNotes,
  onCheckout
}) {
  const { language, t } = useLanguage();

  // Full item info joins
  const cartDetails = cart.map(cartItem => {
    const item = MENU_ITEMS.find(m => m.id === cartItem.id);
    return {
      ...item,
      quantity: cartItem.quantity
    };
  }).filter(Boolean);

  // Pricing calculations
  const subtotal = cartDetails.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.10; // 10% VAT in Spain for restaurants
  
  // Delivery Fee: 2.50€ for delivery, free if subtotal > 30€
  const deliveryFee = orderType === 'delivery' ? (subtotal > 30 ? 0 : 2.50) : 0;
  const total = subtotal + deliveryFee;

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        {/* Cart Header */}
        <div className="cart-header">
          <div className="cart-title">
            <ShoppingBag size={24} className="color-green" />
            <h3>{t('cart.title')}</h3>
          </div>
          <button className="close-cart-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {cartDetails.length > 0 && (
          /* Order Type Selector */
          <div className="order-type-selector">
            <button
              className={`order-type-btn ${orderType === 'delivery' ? 'active' : ''}`}
              onClick={() => setOrderType('delivery')}
            >
              🛵 {t('cart.order_type.delivery')}
            </button>
            <button
              className={`order-type-btn ${orderType === 'takeaway' ? 'active' : ''}`}
              onClick={() => setOrderType('takeaway')}
            >
              🛍️ {t('cart.order_type.takeaway')}
            </button>
            <button
              className={`order-type-btn ${orderType === 'dine_in' ? 'active' : ''}`}
              onClick={() => setOrderType('dine_in')}
            >
              🍽️ {t('cart.order_type.dine_in')}
            </button>
          </div>
        )}

        {/* Cart Body */}
        <div className="cart-body">
          {cartDetails.length === 0 ? (
            <div className="empty-cart">
              <span className="empty-cart-icon">🛒</span>
              <p>{t('cart.empty')}</p>
            </div>
          ) : (
            <>
              {/* Cart Items List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {cartDetails.map(item => {
                  const itemTrans = language === 'es' ? item.es : item.en;
                  return (
                    <div key={item.id} className="cart-item">
                      <span className="cart-item-emoji">{item.emoji}</span>
                      
                      <div className="cart-item-info">
                        <h4 className="cart-item-name">{item.name}</h4>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{itemTrans.name}</p>
                        <span className="cart-item-price">{item.price.toFixed(2)}€</span>
                      </div>

                      <div className="quantity-adjuster" style={{ marginRight: '8px' }}>
                        <button 
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus size={12} />
                        </button>
                        <span className="qty-value" style={{ fontSize: '0.85rem' }}>{item.quantity}</span>
                        <button 
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <span className="cart-item-total">
                        {(item.price * item.quantity).toFixed(2)}€
                      </span>

                      <button 
                        className="remove-item-btn"
                        onClick={() => onUpdateQuantity(item.id, 0)}
                        title="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Kitchen Note */}
              <div className="cart-kitchen-note">
                <label className="kitchen-note-label">{t('cart.notes.label')}</label>
                <textarea
                  className="kitchen-note-textarea"
                  placeholder={t('cart.notes.placeholder')}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
            </>
          )}
        </div>

        {/* Cart Summary & CTA */}
        {cartDetails.length > 0 && (
          <div className="cart-footer">
            <div className="summary-row">
              <span>{t('cart.subtotal')}</span>
              <span>{subtotal.toFixed(2)}€</span>
            </div>
            
            {orderType === 'delivery' && (
              <div className="summary-row">
                <span>{t('cart.delivery')}</span>
                <span>{deliveryFee > 0 ? `${deliveryFee.toFixed(2)}€` : t('cart.free')}</span>
              </div>
            )}

            <div className="summary-row" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <span>{t('cart.tax')}</span>
              <span>{tax.toFixed(2)}€ (Incl.)</span>
            </div>

            <div className="summary-row total">
              <span>{t('cart.total')}</span>
              <span>{total.toFixed(2)}€</span>
            </div>

            <button className="checkout-btn" onClick={onCheckout}>
              <span>{t('cart.checkout')}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
