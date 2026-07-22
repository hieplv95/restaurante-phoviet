import React, { useEffect } from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { policyData } from '../data/policies';

export default function PolicyModal({ isOpen, policyType, onClose }) {
  const { language } = useLanguage();

  // Escape key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !policyType) return null;

  const data = policyData[policyType];
  const title = data.title[language] || data.title['es'] || '';
  const sections = data.sections[language] || data.sections['es'] || [];

  return (
    <div 
      className={`policy-modal-overlay ${isOpen ? 'open' : ''}`} 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
    >
      <div 
        className="policy-modal-container" 
        onClick={(e) => e.stopPropagation()}
      >
        <header className="policy-modal-header">
          <div className="policy-modal-title-group">
            {policyType === 'privacy' ? (
              <Shield size={24} className="policy-modal-icon privacy" />
            ) : (
              <FileText size={24} className="policy-modal-icon terms" />
            )}
            <h2 id="policy-modal-title" className="policy-modal-title">
              {title}
            </h2>
          </div>
          <button 
            className="policy-modal-close-btn" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </header>

        <div className="policy-modal-body">
          {sections.map((section, idx) => (
            <section key={idx} className="policy-modal-section">
              <h3 className="policy-modal-section-heading">
                {section.heading}
              </h3>
              <p className="policy-modal-section-content">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <footer className="policy-modal-footer">
          <button className="policy-modal-btn-close" onClick={onClose}>
            {language === 'vi' ? 'Đóng' : language === 'es' ? 'Cerrar' : 'Close'}
          </button>
        </footer>
      </div>
    </div>
  );
}
