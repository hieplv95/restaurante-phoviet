# Google Ads Promo Landing Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create 3 high-converting, fully localized landing pages for Google Ads introducing Bún Bò Huế, Bánh Xèo, and Bún Trộn.
**Architecture:** Use light pathname routing in [App.jsx](file:///d:/Code/restaurante-phoviet/src/App.jsx) to serve specific promotion components. Initialize the translation context state to English default if on a `/promo/*` route.
**Tech Stack:** React (V19), Vite, CSS (Vanilla), Lucide Icons.

## Global Constraints
- Target paths: `/promo/bun-bo-hue`, `/promo/banh-xeo`, `/promo/bun-tron`.
- Default language on promo pages is English (`en`), but switcher remains functional.
- Main homepage `/` defaults to Spanish (`es`) and works as normal.
- Primary CTA points directly to Google Maps navigation directions for *Carrer de Viladomat, 56, Barcelona*.
- All images must use the pre-existing high-resolution assets in `/public` directory.

---

### Task 1: Initialize English Default for Promo Pages in LanguageContext

**Files:**
- Modify: [LanguageContext.jsx](file:///d:/Code/restaurante-phoviet/src/context/LanguageContext.jsx:392-413)

**Interfaces:**
- Consumes: `window.location.pathname` to detect if the page is a promotional landing page.
- Produces: State `language` initialized to `'en'` on `/promo/*` paths, and `'es'` on other paths.

- [ ] **Step 1: Check existing LanguageProvider initialization**
  Review lines 392-413 in [LanguageContext.jsx](file:///d:/Code/restaurante-phoviet/src/context/LanguageContext.jsx#L392-L413) to locate the state initialization.

- [ ] **Step 2: Update state initialization**
  Replace the state hook with:
  ```javascript
  const isPromo = typeof window !== 'undefined' && window.location.pathname.startsWith('/promo/');
  const [language, setLanguage] = useState(isPromo ? 'en' : 'es');
  ```

- [ ] **Step 3: Verify no compilation errors**
  Check the terminal or run the dev server output. Verify the page compiles with no errors.

---

### Task 2: Add Localized Promo Strings in LanguageContext

**Files:**
- Modify: [LanguageContext.jsx](file:///d:/Code/restaurante-phoviet/src/context/LanguageContext.jsx:5-390)

**Interfaces:**
- Consumes: New translation keys for English (`en`), Spanish (`es`), and Vietnamese (`vi`).
- Produces: Standard key lookup values via the `t` translator function for keys starting with `promo.`.

- [ ] **Step 1: Add translation keys**
  Add the following keys to the respective language blocks in the `translations` object inside [LanguageContext.jsx](file:///d:/Code/restaurante-phoviet/src/context/LanguageContext.jsx):

  For **`en`**:
  ```javascript
  'promo.cta': 'Get Directions on Google Maps 📍',
  'promo.offer.title': 'Special Google Ads Offer',
  'promo.offer.desc': 'Visiting us for the first time? Show this screen to our staff on your visit to get a FREE homemade drink with your dish!',
  'promo.offer.code': 'Promo Code: PHOVIETADS',
  'promo.ingredients': 'Key Ingredients',
  'promo.back_home': 'Back to Homepage',
  'promo.hours': 'Opening Hours',
  'promo.location': 'Our Location',
  'promo.bbh.tagline': 'Bold, Spicy & Aromatic Royal Noodle Soup',
  'promo.bbh.desc': 'A legendary noodle soup from the historic city of Hue. Simmered for 12 hours with lemongrass, beef bones, and chili oil, served with thick rice vermicelli and tender beef shank.',
  'promo.bbh.ing1.title': '12H Spiced Broth',
  'promo.bbh.ing1.desc': 'Slow-simmered beef marrow bone soup infused with aromatic lemongrass, shrimp paste, and spicy sa-te oil.',
  'promo.bbh.ing2.title': 'Beef Shank & Pork',
  'promo.bbh.ing2.desc': 'Tender, succulent slices of beef shank cooked to perfection alongside traditional Vietnamese ham.',
  'promo.bbh.ing3.title': 'Thick Noodles',
  'promo.bbh.ing3.desc': 'Special large, round rice vermicelli noodles cooked to a perfect chewy al-dente texture.',
  'promo.bx.tagline': 'Crispy Sizzling Crepe Packed with Savory Filling',
  'promo.bx.desc': 'Sizzling golden turmeric crepe stuffed with pork, shrimp, onions, and bean sprouts. Wrap it in fresh lettuce and herbs, and dip it in our sweet and sour Nước Chấm sauce.',
  'promo.bx.ing1.title': 'Turmeric Batter',
  'promo.bx.ing1.desc': 'Crispy rice flour crepe infused with turmeric powder and coconut milk for a light, crunchy shell.',
  'promo.bx.ing2.title': 'Shrimp & Pork',
  'promo.bx.ing2.desc': 'Sautéed fresh local shrimp and pork slices cooked right inside the sizzling crepe.',
  'promo.bx.ing3.title': 'Fresh Herbs Wrap',
  'promo.bx.ing3.desc': 'Crisp romaine lettuce, fresh mint, coriander, and perilla leaves used to wrap each crispy bite.',
  'promo.bt.tagline': 'Fresh, Crunchy & Aromatic Rice Vermicelli Salad Bowls',
  'promo.bt.desc': 'Enjoy the ultimate fresh Vietnamese meal. Choose between wok-sautéed Lemongrass Beef (Bún Bò Nam Bộ) or Charcoal-Grilled Pork (Bún Thịt Nướng), served cold over fresh herbs, peanuts, and savory sauce.',
  'promo.bt.ing1.title': 'Vietnamese Vermicelli',
  'promo.bt.ing1.desc': 'Soft, thin round rice noodles serving as the refreshing base of the bowl.',
  'promo.bt.ing2.title': 'Lemongrass Beef / Grilled Pork',
  'promo.bt.ing2.desc': 'Sautéed beef with lemongrass or charcoal-grilled marinated pork glazed with savory local spices.',
  'promo.bt.ing3.title': 'Crunchy Toppings',
  'promo.bt.ing3.desc': 'Crushed roasted peanuts, crisp pickled carrots & daikon, fresh cucumbers, and fragrant crispy fried shallots.',
  ```

  For **`es`**:
  ```javascript
  'promo.cta': 'Obtener indicaciones en Google Maps 📍',
  'promo.offer.title': 'Oferta Especial de Google Ads',
  'promo.offer.desc': '¿Nos visitas por primera vez? ¡Muestra esta pantalla a nuestro personal y consigue una bebida casera GRATIS con tu plato!',
  'promo.offer.code': 'Código Promocional: PHOVIETADS',
  'promo.ingredients': 'Ingredientes Clave',
  'promo.back_home': 'Volver a la Página Principal',
  'promo.hours': 'Horario de Apertura',
  'promo.location': 'Nuestra Ubicación',
  'promo.bbh.tagline': 'Sopa Real de Ternera Picante y Aromática',
  'promo.bbh.desc': 'Una legendaria sopa de fideos de la histórica ciudad de Hue. Caldo de ternera cocinado a fuego lento durante 12 horas con hierba de limón (sả), chile y especias, servido con fideos de arroz gruesos y ternera tierna.',
  'promo.bbh.ing1.title': 'Caldo de 12 Horas',
  'promo.bbh.ing1.desc': 'Sopa cocinada lentamente impregnada de sả aromático, pasta de gambas y aceite picante sa-te.',
  'promo.bbh.ing2.title': 'Jarrete de Ternera',
  'promo.bbh.ing2.desc': 'Tiernas rodajas de ternera cocinadas a fuego lento acompañadas de jamón tradicional vietnamita.',
  'promo.bbh.ing3.title': 'Fideos Gruesos',
  'promo.bbh.ing3.desc': 'Fideos redondos de arroz especiales, más gruesos para absorber todos los sabores del caldo.',
  'promo.bx.tagline': 'Crepe Crujiente Vietnamita Lleno de Sabor',
  'promo.bx.desc': 'Crujiente crepe dorado de cúrcuma relleno de carne de cerdo, langostinos, cebolla y brotes de soja. Se come envuelto en lechuga fresca con hierbas aromáticas y se moja en la salsa Nước Chấm casera.',
  'promo.bx.ing1.title': 'Masa de Cúrcuma',
  'promo.bx.ing1.desc': 'Crujiente masa de harina de arroz con cúrcuma y leche de coco hecha al momento.',
  'promo.bx.ing2.title': 'Cerdo y Langostinos',
  'promo.bx.ing2.desc': 'Langostinos frescos locales y finas tiras de cerdo salteados en el interior del crepe caliente.',
  'promo.bx.ing3.title': 'Envoltura Fresca',
  'promo.bx.ing3.desc': 'Lechuga romana fresca, menta y cilantro utilizados para envolver cada trozo de crepe crujiente.',
  'promo.bt.tagline': 'Boles de Fideos de Arroz Frescos, Crujientes y Aromáticos',
  'promo.bt.desc': 'Disfruta de la comida vietnamita más fresca. Elige entre ternera al wok con sả (Bún Bò Nam Bộ) o cerdo a la parrilla (Bún Thịt Nướng), servidos con hierbas frescas, cacahuetes y salsa agridulce.',
  'promo.bt.ing1.title': 'Fideos Vermicelli',
  'promo.bt.ing1.desc': 'Fideos finos de arroz que sirven como base ligera y refrescante para el plato.',
  'promo.bt.ing2.title': 'Ternera Sả / Cerdo Parrilla',
  'promo.bt.ing2.desc': 'Tiras de ternera salteadas con sả o cerdo marinado cocinado a la parrilla de carbón.',
  'promo.bt.ing3.title': 'Ingredientes Crujientes',
  'promo.bt.ing3.desc': 'Cacahuetes tostados machacados, encurtidos caseros de zanahoria y nabo, y cebolla frita crujiente.',
  ```

  For **`vi`**:
  ```javascript
  'promo.cta': 'Xem Chỉ Đường Trên Google Maps 📍',
  'promo.offer.title': 'Ưu Đãi Đặc Biệt Từ Google Ads',
  'promo.offer.desc': 'Lần đầu ghé nhà hàng? Đưa màn hình này cho nhân viên khi gọi món để được nhận ngay 1 đồ uống tự làm MIỄN PHÍ đi kèm món ăn của bạn!',
  'promo.offer.code': 'Mã Khuyến Mại: PHOVIETADS',
  'promo.ingredients': 'Nguyên Liệu Chính',
  'promo.back_home': 'Quay Lại Trang Chủ',
  'promo.hours': 'Giờ Mở Cửa',
  'promo.location': 'Vị Trí Của Chúng Tôi',
  'promo.bbh.tagline': 'Hương vị cay nồng đậm đà chuẩn vị Cố Đô',
  'promo.bbh.desc': 'Món bún bò trứ danh của xứ Huế mộng mơ. Nước dùng ninh từ xương bò và sả thơm nồng suốt 12 tiếng cùng sa tế cay ấm, ăn kèm sợi bún to và bắp bò mềm mọng.',
  'promo.bbh.ing1.title': 'Nước dùng ninh 12h',
  'promo.bbh.ing1.desc': 'Hầm từ xương ống bò cùng sả thơm, chút mắm ruốc Huế đặc trưng và dầu sa tế cay nồng.',
  'promo.bbh.ing2.title': 'Bắp bò & Chả Huế',
  'promo.bbh.ing2.desc': 'Thịt bắp bò thái mỏng mềm ngậy cùng khoanh chả lụa/chả Huế truyền thống ngon ngọt.',
  'promo.bbh.ing3.title': 'Sợi bún to tròn',
  'promo.bbh.ing3.desc': 'Loại bún sợi to đặc sản miền Trung, mềm dai vừa vặn thấm đượm gia vị của nước dùng.',
  'promo.bx.tagline': 'Bánh xèo giòn rụm thơm lừng chuẩn vị truyền thống',
  'promo.bx.desc': 'Vỏ bánh vàng giòn từ bột gạo và nghệ, ôm trọn nhân tôm, thịt heo và giá đỗ. Cuộn tròn trong lá xà lách cùng rau sống thanh mát, chấm ngập nước mắm chua ngọt.',
  'promo.bx.ing1.title': 'Vỏ bánh nghệ vàng',
  'promo.bx.ing1.desc': 'Mỏng giòn làm từ bột gạo lọc, nước cốt dừa béo nhẹ và bột nghệ tạo màu vàng óng.',
  'promo.bx.ing2.title': 'Nhân tôm thịt đậm đà',
  'promo.bx.ing2.desc': 'Tôm tươi lột vỏ cùng thịt heo nạc salte chín tới cùng giá đỗ ngọt thanh.',
  'promo.bx.ing3.title': 'Rau sống cuộn kèm',
  'promo.bx.ing3.desc': 'Rau xà lách sạch, lá cải cay, húng lủi, rau thơm rừng giúp cân bằng vị béo của bánh.',
  'promo.bt.tagline': 'Thanh mát, giòn rụm với bún trộn bò Nam Bộ & thịt nướng',
  'promo.bt.desc': 'Món ăn thanh nhiệt tuyệt vời cho mùa hè. Bạn có thể chọn Bún Bò Nam Bộ xào sả ớt ngọt thơm hoặc Bún Thịt Nướng thơm lừng, dùng kèm nước mắm pha chua ngọt.',
  'promo.bt.ing1.title': 'Bún tươi thanh mát',
  'promo.bt.ing1.desc': 'Sợi bún tươi mềm mịn, tạo cảm giác thanh mát dễ chịu khi thưởng thức.',
  'promo.bt.ing2.title': 'Bò xào sả / Thịt nướng',
  'promo.bt.ing2.desc': 'Thịt bò xào lăn thơm mùi sả hoặc thịt heo nướng than hoa cháy cạnh tẩm ướp đậm vị.',
  'promo.bt.ing3.title': 'Gia vị giòn bùi',
  'promo.bt.ing3.desc': 'Lạc rang giã nhỏ thơm bùi, đu đủ/cà rốt muối chua, hành phi giòn tan và nước mắm chua ngọt.',
  ```

- [ ] **Step 2: Save modifications**
  Apply changes inside [LanguageContext.jsx](file:///d:/Code/restaurante-phoviet/src/context/LanguageContext.jsx). Make sure other language files or fallback mechanisms don't crash.

---

### Task 3: Create Promo Components (PromoLayout & DishPromo)

**Files:**
- Create: `src/components/promo/PromoLayout.jsx`
- Create: `src/components/promo/DishPromo.jsx`

**Interfaces:**
- `PromoLayout` consumes: `children`
- `DishPromo` consumes: `dish` prop ('bun-bo-hue', 'banh-xeo', 'bun-tron')

- [ ] **Step 1: Write PromoLayout.jsx**
  Create `src/components/promo/PromoLayout.jsx` with full structure, including navigation, language selector dropdown, and map coordinates footer:
  ```jsx
  import React, { useState } from 'react';
  import { useLanguage } from '../../context/LanguageContext';
  import { ChevronDown, MapPin, Phone, Mail, Clock, ArrowLeft } from 'lucide-react';

  export default function PromoLayout({ children }) {
    const { language, setLanguage, t } = useLanguage();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const langConfig = {
      es: { label: 'Español', flag: '/flags/es.png', short: 'ES' },
      en: { label: 'English', flag: '/flags/gb.png', short: 'EN' },
      vi: { label: 'Tiếng Việt', flag: '/flags/vn.png', short: 'VN' },
      zh: { label: '中文', flag: '/flags/cn.png', short: 'ZH' },
      ja: { label: '日本語', flag: '/flags/jp.png', short: 'JA' },
      ko: { label: '한국어', flag: '/flags/kr.png', short: 'KO' },
      fr: { label: 'Français', flag: '/flags/fr.png', short: 'FR' },
      it: { label: 'Italiano', flag: '/flags/it.png', short: 'IT' }
    };

    return (
      <div className="app-layout promo-page-wrapper">
        <header className="header-wrapper promo-header">
          <div className="container header-container">
            <a href="/" className="logo-link">
              <img src="/logo_cungdinhhue.png" alt="Pho Viet" className="logo-img" />
              <div className="logo-text">Pho <span>Viet</span></div>
            </a>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <a href="/" className="back-home-link">
                <ArrowLeft size={16} />
                <span>{t('promo.back_home')}</span>
              </a>

              <div className="lang-selector">
                <button className="lang-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  <img src={langConfig[language]?.flag} alt={langConfig[language]?.short} className="lang-flag-img" />
                  <ChevronDown size={14} />
                </button>
                <div className="lang-dropdown" style={{ display: dropdownOpen ? 'flex' : 'none' }}>
                  {Object.entries(langConfig).map(([code, cfg]) => (
                    <button 
                      key={code} 
                      className={`lang-option ${language === code ? 'active' : ''}`}
                      onClick={() => { setLanguage(code); setDropdownOpen(false); }}
                    >
                      <img src={cfg.flag} alt={cfg.short} className="lang-flag-img-dropdown" />
                      <span>{cfg.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="promo-main-content">
          {children}
        </main>

        <footer className="footer promo-footer">
          <div className="container footer-grid">
            <div>
              <div className="logo-text" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Pho <span>Viet</span></div>
              <p className="footer-brand-desc">{t('footer.desc')}</p>
            </div>
            <div>
              <h4 className="footer-title">{t('footer.hours')}</h4>
              <div className="footer-info-row">
                <Clock size={16} className="footer-info-icon" />
                <span>{t('footer.hours.desc')}</span>
              </div>
            </div>
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
          <div className="container footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', marginTop: '40px' }}>
            <p>{t('footer.rights')}</p>
          </div>
        </footer>
      </div>
    );
  }
  ```

- [ ] **Step 2: Write DishPromo.jsx**
  Create `src/components/promo/DishPromo.jsx`. This component renders sections dynamically based on the current dish selected. It loads static images and maps the localized details:
  ```jsx
  import React from 'react';
  import { useLanguage } from '../../context/LanguageContext';
  import { MapPin, Check } from 'lucide-react';

  export default function DishPromo({ dish }) {
    const { t } = useLanguage();

    const dishConfig = {
      'bun-bo-hue': {
        taglineKey: 'promo.bbh.tagline',
        descKey: 'promo.bbh.desc',
        image: '/hero_bunbohue.png',
        ingredients: [
          { titleKey: 'promo.bbh.ing1.title', descKey: 'promo.bbh.ing1.desc' },
          { titleKey: 'promo.bbh.ing2.title', descKey: 'promo.bbh.ing2.desc' },
          { titleKey: 'promo.bbh.ing3.title', descKey: 'promo.bbh.ing3.desc' }
        ]
      },
      'banh-xeo': {
        taglineKey: 'promo.bx.tagline',
        descKey: 'promo.bx.desc',
        image: '/menu_banhxeo.png',
        ingredients: [
          { titleKey: 'promo.bx.ing1.title', descKey: 'promo.bx.ing1.desc' },
          { titleKey: 'promo.bx.ing2.title', descKey: 'promo.bx.ing2.desc' },
          { titleKey: 'promo.bx.ing3.title', descKey: 'promo.bx.ing3.desc' }
        ]
      },
      'bun-tron': {
        taglineKey: 'promo.bt.tagline',
        descKey: 'promo.bt.desc',
        image: '/menu_bunbonambo.png', // Secondary image is rendered below or split
        ingredients: [
          { titleKey: 'promo.bt.ing1.title', descKey: 'promo.bt.ing1.desc' },
          { titleKey: 'promo.bt.ing2.title', descKey: 'promo.bt.ing2.desc' },
          { titleKey: 'promo.bt.ing3.title', descKey: 'promo.bt.ing3.desc' }
        ]
      }
    };

    const config = dishConfig[dish];
    if (!config) return <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>Dish not found.</div>;

    const mapsUrl = "https://www.google.com/maps/dir/?api=1&destination=Carrer+de+Viladomat,+56,+Eixample,+08015+Barcelona";

    return (
      <div className="dish-promo-container">
        {/* Hero Section */}
        <section className="promo-hero">
          <div className="container promo-hero-grid">
            <div className="promo-hero-text">
              <span className="promo-badge">HOT DEAL</span>
              <h1 className="promo-hero-title">{t(config.taglineKey)}</h1>
              <p className="promo-hero-desc">{t(config.descKey)}</p>
              
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary cta-pulse">
                <MapPin size={20} />
                <span>{t('promo.cta')}</span>
              </a>
            </div>
            
            <div className="promo-hero-image-wrapper">
              <img src={config.image} alt="Vietnamese Dish" className="promo-hero-image" />
              {dish === 'bun-tron' && (
                <div className="secondary-image-badge">
                  <img src="/menu_bunthitnuong.png" alt="Secondary" className="promo-hero-image-secondary" />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Voucher Conversion Booster Section */}
        <section className="promo-voucher-section">
          <div className="container">
            <div className="voucher-card">
              <div className="voucher-content">
                <h3>{t('promo.offer.title')}</h3>
                <p>{t('promo.offer.desc')}</p>
                <div className="voucher-code-badge">{t('promo.offer.code')}</div>
              </div>
              <div className="voucher-cta-box">
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  {t('promo.cta')}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Ingredients Section */}
        <section className="promo-ingredients-section">
          <div className="container">
            <h2 className="section-title text-center">{t('promo.ingredients')}</h2>
            <div className="ingredients-grid">
              {config.ingredients.map((ing, index) => (
                <div key={index} className="ingredient-card">
                  <div className="ingredient-icon-box">
                    <Check size={20} className="ingredient-icon" />
                  </div>
                  <h4>{t(ing.titleKey)}</h4>
                  <p>{t(ing.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Embedded Map/Address Section */}
        <section className="promo-map-section">
          <div className="container promo-map-grid">
            <div className="promo-map-info">
              <h2>{t('promo.location')}</h2>
              <div className="location-detail-card">
                <p><strong>Pho Viet - Cung Đình Huế</strong></p>
                <p>📍 Carrer de Viladomat, 56, Eixample, 08015 Barcelona</p>
                <p>📞 +34 912 345 678</p>
                <p>⏰ {t('footer.hours.desc')}</p>
              </div>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '20px' }}>
                {t('promo.cta')}
              </a>
            </div>
            <div className="promo-map-iframe-wrapper">
              <iframe 
                title="Pho Viet Barcelona Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.8967916503953!2d2.1557002!3d41.3763717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a27fd8d81007%3A0x6b64d1f2a15cb539!2sCarrer%20de%20Viladomat%2C%2056%2C%20L&#39;Eixample%2C%2008015%20Barcelona!5e0!3m2!1sen!2ses!4v1700000000000!5m2!1sen!2ses" 
                width="100%" 
                height="320" 
                style={{ border: 0, borderRadius: '12px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    );
  }
  ```

---

### Task 4: Integrate Pathname Routing in App.jsx

**Files:**
- Modify: [App.jsx](file:///d:/Code/restaurante-phoviet/src/App.jsx:1-134)

**Interfaces:**
- Consumes: `window.location.pathname` to capture routes `/promo/bun-bo-hue`, `/promo/banh-xeo`, or `/promo/bun-tron`.
- Produces: Serves `<PromoLayout><DishPromo dish={promoDish} /></PromoLayout>` if on a promo route, else renders normal main layout.

- [ ] **Step 1: Check routing parameters in App.jsx**
  Open [App.jsx](file:///d:/Code/restaurante-phoviet/src/App.jsx) and add the path check logic at the beginning of `MainApp()`.
  
  ```javascript
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const isPromoPage = path.startsWith('/promo/');
  const promoDish = isPromoPage ? path.split('/').pop() : null;
  ```

- [ ] **Step 2: Import new components**
  Import the components at the top of [App.jsx](file:///d:/Code/restaurante-phoviet/src/App.jsx):
  ```javascript
  import PromoLayout from './components/promo/PromoLayout';
  import DishPromo from './components/promo/DishPromo';
  ```

- [ ] **Step 3: Update render output**
  Modify the return block of `MainApp()` to return the promo layout if `isPromoPage` is true:
  ```javascript
  if (isPromoPage) {
    return (
      <PromoLayout>
        <DishPromo dish={promoDish} />
      </PromoLayout>
    );
  }
  ```

---

### Task 5: Style the Promotional Landing Pages in index.css

**Files:**
- Modify: [index.css](file:///d:/Code/restaurante-phoviet/src/index.css) (append to bottom)

**Interfaces:**
- Produces: Beautiful, high-converting layout styling, button micro-animations, glassmorphic elements.

- [ ] **Step 1: Append custom styles to index.css**
  Append the following styling rules to the very bottom of [index.css](file:///d:/Code/restaurante-phoviet/src/index.css):
  ```css
  /* Promotional Landing Pages Styling */
  .promo-page-wrapper {
    background-color: #0f0907;
    color: #f6e6d9;
    font-family: 'Outfit', 'Inter', sans-serif;
  }

  .promo-header {
    background: rgba(15, 9, 7, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 99, 71, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  .back-home-link {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #e07a5f;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .back-home-link:hover {
    color: #f26419;
    transform: translateX(-3px);
  }

  .dish-promo-container {
    padding-bottom: 60px;
  }

  /* Hero Section */
  .promo-hero {
    padding: 80px 0;
    background: radial-gradient(circle at 80% 20%, rgba(242, 100, 25, 0.08) 0%, transparent 60%);
  }

  .promo-hero-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 60px;
    align-items: center;
  }

  @media (max-width: 991px) {
    .promo-hero-grid {
      grid-template-columns: 1fr;
      gap: 40px;
      text-align: center;
    }
  }

  .promo-badge {
    display: inline-block;
    padding: 6px 14px;
    background: rgba(242, 100, 25, 0.15);
    border: 1px solid rgba(242, 100, 25, 0.3);
    color: #f26419;
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 50px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 20px;
  }

  .promo-hero-title {
    font-size: 2.8rem;
    line-height: 1.2;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    .promo-hero-title {
      font-size: 2.2rem;
    }
  }

  .promo-hero-desc {
    font-size: 1.15rem;
    line-height: 1.6;
    color: rgba(246, 230, 217, 0.8);
    margin-bottom: 35px;
  }

  .promo-hero-image-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .promo-hero-image {
    width: 100%;
    max-width: 420px;
    height: auto;
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.6), 0 0 30px rgba(242, 100, 25, 0.15);
    border: 1px solid rgba(255,255,255,0.05);
    transition: transform 0.5s ease;
  }

  .promo-hero-image:hover {
    transform: scale(1.03);
  }

  .secondary-image-badge {
    position: absolute;
    bottom: -20px;
    right: 10px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    border: 6px solid #0f0907;
    box-shadow: 0 10px 25px rgba(0,0,0,0.5);
  }

  .promo-hero-image-secondary {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Pulsing Button Animation */
  .cta-pulse {
    animation: cta-glow 2s infinite alternate;
  }

  @keyframes cta-glow {
    0% {
      box-shadow: 0 0 10px rgba(242, 100, 25, 0.4);
      transform: scale(1);
    }
    100% {
      box-shadow: 0 0 25px rgba(242, 100, 25, 0.8);
      transform: scale(1.02);
    }
  }

  /* Voucher Card styling */
  .promo-voucher-section {
    padding: 40px 0;
  }

  .voucher-card {
    background: linear-gradient(135deg, #1c110d 0%, #150b07 100%);
    border: 2px dashed rgba(242, 100, 25, 0.3);
    border-radius: 20px;
    padding: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    position: relative;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    .voucher-card {
      flex-direction: column;
      text-align: center;
      padding: 30px 20px;
    }
  }

  .voucher-card::before, .voucher-card::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    background: #0f0907;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
  }

  .voucher-card::before { left: -16px; }
  .voucher-card::after { right: -16px; }

  .voucher-content h3 {
    font-size: 1.8rem;
    color: #ffffff;
    margin-bottom: 10px;
  }

  .voucher-content p {
    font-size: 1.05rem;
    color: rgba(246, 230, 217, 0.8);
    margin-bottom: 20px;
  }

  .voucher-code-badge {
    display: inline-block;
    padding: 8px 18px;
    background: rgba(242, 100, 25, 0.1);
    border: 1px solid rgba(242, 100, 25, 0.4);
    color: #f26419;
    font-family: monospace;
    font-weight: 700;
    font-size: 1.1rem;
    border-radius: 6px;
    letter-spacing: 1px;
  }

  /* Ingredients Grid */
  .promo-ingredients-section {
    padding: 80px 0;
    background: rgba(0,0,0,0.2);
  }

  .ingredients-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-top: 40px;
  }

  .ingredient-card {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 16px;
    padding: 30px;
    transition: all 0.3s ease;
  }

  .ingredient-card:hover {
    transform: translateY(-5px);
    background: rgba(255,255,255,0.04);
    border-color: rgba(242, 100, 25, 0.2);
  }

  .ingredient-icon-box {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(76, 175, 80, 0.15);
    color: #4caf50;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .ingredient-card h4 {
    font-size: 1.25rem;
    color: #ffffff;
    margin-bottom: 12px;
  }

  .ingredient-card p {
    font-size: 0.95rem;
    line-height: 1.5;
    color: rgba(246, 230, 217, 0.7);
  }

  /* Map/Contact Section */
  .promo-map-section {
    padding: 80px 0;
  }

  .promo-map-grid {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 50px;
    align-items: center;
  }

  @media (max-width: 991px) {
    .promo-map-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  .location-detail-card {
    background: rgba(255,255,255,0.02);
    border-radius: 12px;
    padding: 24px;
    border: 1px solid rgba(255,255,255,0.04);
    margin-top: 20px;
    line-height: 1.8;
  }

  .promo-map-iframe-wrapper {
    box-shadow: 0 15px 30px rgba(0,0,0,0.5);
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.05);
  }
  ```

---

### Task 6: Create Rewrite Configuration for Static Routing

**Files:**
- Create: `vercel.json` (or verify rewrite compatibility)

**Interfaces:**
- Produces: Rewrite configuration mapping `/promo/*` paths back to `/index.html` to prevent 404s on browser reloads.

- [ ] **Step 1: Check hosting platform compatibility**
  Create `vercel.json` in the root workspace directory with redirect config:
  ```json
  {
    "rewrites": [
      { "source": "/promo/(.*)", "destination": "/index.html" },
      { "source": "/(.*)", "destination": "/index.html" }
    ]
  }
  ```

---

### Task 7: Verify Implementation & Local Fallbacks

**Files:**
- Test: Manual verification in local development web server.

- [ ] **Step 1: Check landing page `/promo/bun-bo-hue`**
  Open [http://localhost:8081/promo/bun-bo-hue](http://localhost:8081/promo/bun-bo-hue) and verify:
  - Default language is English.
  - Sả-te broth and beef shank details display correctly.
  - Image loaded successfully from `/hero_bunbohue.png`.

- [ ] **Step 2: Check landing page `/promo/banh-xeo`**
  Open [http://localhost:8081/promo/banh-xeo](http://localhost:8081/promo/banh-xeo) and verify:
  - Default language is English.
  - Golden turmeric shell details display correctly.
  - Image loaded successfully from `/menu_banhxeo.png`.

- [ ] **Step 3: Check landing page `/promo/bun-tron`**
  Open [http://localhost:8081/promo/bun-tron](http://localhost:8081/promo/bun-tron) and verify:
  - Default language is English.
  - Shows primary image `/menu_bunbonambo.png` and secondary badge `/menu_bunthitnuong.png`.
  - Details about Bún Bò Nam Bộ & Bún Thịt Nướng display correctly.

- [ ] **Step 4: Check language selector functionality**
  On `/promo/bun-bo-hue`, switch language to Spanish (`es`). Verify all text converts accurately to Spanish.

- [ ] **Step 5: Verify main homepage `/` behaves correctly**
  Open [http://localhost:8081/](http://localhost:8081/) and verify:
  - Homepage loads in Spanish by default.
  - Language switcher works as normal.
  - The promotional routes do not interfere with standard user navigation or shopping cart operations.
