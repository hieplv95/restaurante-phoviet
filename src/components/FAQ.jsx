import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FAQ_ITEMS, FAQ_TITLES } from '../data/faq';
import './FAQ.css';

export default function FAQ() {
  const { language } = useLanguage();
  const items = FAQ_ITEMS[language] || FAQ_ITEMS.en;
  const titles = FAQ_TITLES[language] || FAQ_TITLES.en;

  return (
    <section id="faq" className="faq-section">
      <div className="container faq-container">
        <div className="faq-header">
          <span className="faq-tag">{titles.tag}</span>
          <h2 className="faq-title">{titles.title}</h2>
        </div>

        <div className="faq-list">
          {items.map(({ q, a }, idx) => (
            <details key={idx} className="faq-item" open={idx === 0}>
              <summary className="faq-question">{q}</summary>
              <p className="faq-answer">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
