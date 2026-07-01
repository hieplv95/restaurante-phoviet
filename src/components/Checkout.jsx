import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, CreditCard, Wallet, Smartphone } from 'lucide-react';

export default function Checkout({ isOpen, onClose, orderType, onSubmit }) {
  const { t } = useLanguage();
  
  // State for form fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [timeSlot, setTimeSlot] = useState('asap');
  const [paymentMethod, setPaymentMethod] = useState('card');

  // Simple validation
  const isFormValid = () => {
    if (orderType === 'dine_in') {
      return tableNumber.trim() !== '';
    }
    return name.trim() !== '' && phone.trim() !== '' && (orderType !== 'delivery' || address.trim() !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    onSubmit({
      name,
      phone,
      address: orderType === 'delivery' ? address : '',
      tableNumber: orderType === 'dine_in' ? tableNumber : '',
      timeSlot,
      paymentMethod
    });
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <h3 className="modal-title">{t('checkout.title')}</h3>
          <button className="close-cart-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            {orderType === 'dine_in' ? (
              /* Dine-in inputs */
              <div className="form-group">
                <label className="form-label">{t('checkout.table.label')} *</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder={t('checkout.table.placeholder')}
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                />
              </div>
            ) : (
              /* Delivery & Takeaway fields */
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">{t('checkout.name.label')} *</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder={t('checkout.name.placeholder')}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t('checkout.phone.label')} *</label>
                    <input
                      type="tel"
                      required
                      className="form-input"
                      placeholder={t('checkout.phone.placeholder')}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                {orderType === 'delivery' && (
                  <div className="form-group">
                    <label className="form-label">{t('checkout.address.label')} *</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder={t('checkout.address.placeholder')}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                )}
              </>
            )}

            {/* Time Slot Selector */}
            <div className="form-group">
              <label className="form-label">{t('checkout.time.label')}</label>
              <select
                className="form-select"
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
              >
                <option value="asap">{t('checkout.time.asap')}</option>
                <option value="13:00 - 13:30">13:00 - 13:30</option>
                <option value="13:30 - 14:00">13:30 - 14:00</option>
                <option value="14:00 - 14:30">14:00 - 14:30</option>
                <option value="20:00 - 20:30">20:00 - 20:30</option>
                <option value="20:30 - 21:00">20:30 - 21:00</option>
                <option value="21:00 - 21:30">21:00 - 21:30</option>
                <option value="21:30 - 22:00">21:30 - 22:00</option>
              </select>
            </div>

            {/* Payment Methods */}
            <div className="form-group">
              <label className="form-label">{t('checkout.payment.label')}</label>
              <div className="payment-methods">
                <button
                  type="button"
                  className={`payment-btn ${paymentMethod === 'card' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <CreditCard size={18} className="payment-icon" />
                  <span>{t('checkout.payment.card')}</span>
                </button>
                <button
                  type="button"
                  className={`payment-btn ${paymentMethod === 'bizum' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('bizum')}
                >
                  <Smartphone size={18} className="payment-icon" />
                  <span>{t('checkout.payment.bizum')}</span>
                </button>
                <button
                  type="button"
                  className={`payment-btn ${paymentMethod === 'cash' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('cash')}
                >
                  <Wallet size={18} className="payment-icon" />
                  <span>{t('checkout.payment.cash')}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="modal-footer">
            <button type="button" className="btn-cancel" onClick={onClose}>
              {t('checkout.cancel')}
            </button>
            <button 
              type="submit" 
              className="btn-submit-order"
              disabled={!isFormValid()}
            >
              <span>{t('checkout.submit')}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
