import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Menu.css';
import { MENU_CATEGORIES as categories, MENU_ITEMS as menuItems } from '../data/menuItems';

export default function Menu() {
  const { language } = useLanguage();
  const currentLang = language || 'es';
  const [activeCategory, setActiveCategory] = useState('mains');

  const dailyMenuTranslations = {
    es: {
      title: "Menú Medio de Día",
      price: "13,90€",
      subtitle: "Solo Días Laborales (Lunes a Viernes)",
      rule: "Incluye: 1 Entrante + 1 Plato Principal + 1 Café o Postre + 1 Bebida",
      supplement: "*Suplemento de +2,00€ para Cerveza Saigon, Bebidas Caseras o Café Vietnamita",
      select: "Selecciona 1",
      starters: "Entrantes",
      mains: "Platos Principales",
      desserts: "Postres o Café",
      drinks: "Bebidas"
    },
    en: {
      title: "Daily Lunch Menu",
      price: "13,90€",
      subtitle: "Weekdays Only (Monday to Friday)",
      rule: "Includes: 1 Starter + 1 Main Course + 1 Coffee or Dessert + 1 Drink",
      supplement: "*+2.00€ supplement for Saigon Beer, Homemade Drinks or Vietnamese Coffee",
      select: "Select 1",
      starters: "Starters",
      mains: "Main Courses",
      desserts: "Desserts or Coffee",
      drinks: "Drinks"
    },
    vi: {
      title: "Menu Trưa Hằng Ngày",
      price: "13,90€",
      subtitle: "Chỉ áp dụng ngày thường (Thứ 2 - Thứ 6)",
      rule: "Bao gồm: 1 Món khai vị + 1 Món chính + 1 Cà phê hoặc Tráng miệng + 1 Đồ uống",
      supplement: "*Phụ thu +2,00€ khi chọn Bia Sài Gòn, Đồ uống nhà làm hoặc Cà phê sữa đá",
      select: "Chọn 1 món",
      starters: "Món Khai Vị",
      mains: "Món Chính",
      desserts: "Tráng Miệng / Cà Phê",
      drinks: "Đồ Uống"
    },
    zh: {
      title: "今日特餐 / 午市套餐",
      price: "13,90€",
      subtitle: "仅限工作日 (周一至周五)",
      rule: "包含: 1道前菜 + 1道主菜 + 1份甜点或咖啡 + 1杯饮料",
      supplement: "*选择西贡啤酒、自制饮料或越南咖啡需另加 +2,00€",
      select: "选择 1 款",
      starters: "前菜",
      mains: "主菜",
      desserts: "甜点或咖啡",
      drinks: "饮料"
    },
    ko: {
      title: "오늘의 런치 세트",
      price: "13,90€",
      subtitle: "평일 전용 (월요일 - 금요일)",
      rule: "포함: 에피타이저 1개 + 메인 요리 1개 + 커피 또는 디저트 1개 + 음료 1개",
      supplement: "*사이공 맥주, 수제 음료 또는 베트남 연유 커피 선택 시 +2,00€ 추가",
      select: "택 1",
      starters: "에피타이저",
      mains: "메인 요리",
      desserts: "디저트 또는 커피",
      drinks: "음료"
    },
    ja: {
      title: "日替わりランチメニュー",
      price: "13,90€",
      subtitle: "平日限定 (月曜日〜金曜日)",
      rule: "セット内容：前菜 1品 ＋ メイン 1品 ＋ デザートまたはコーヒー 1品 ＋ ドリンク 1品",
      supplement: "*サイゴンビール、自家製ドリンク、またはベトナムコーヒーを選ぶ場合は +2,00€ 追加",
      select: "1品選択",
      starters: "前菜",
      mains: "メイン料理",
      desserts: "デザートまたはコーヒー",
      drinks: "ドリンク"
    },
    fr: {
      title: "Menu du Jour",
      price: "13,90€",
      subtitle: "Jours ouvrables uniquement (Lundi au Vendredi)",
      rule: "Inclus : 1 Entrée + 1 Plat Principal + 1 Café ou Dessert + 1 Boisson",
      supplement: "*Supplément de +2,00€ pour la Bière Saigon, les Boissons Maison ou le Café Vietnamien",
      select: "Sélectionnez 1",
      starters: "Entrées",
      mains: "Plats Principales",
      desserts: "Desserts ou Café",
      drinks: "Boissons"
    },
    it: {
      title: "Menu del Giorno",
      price: "13,90€",
      subtitle: "Solo giorni feriali (Lunedì a Venerdì)",
      rule: "Include: 1 Antipasto + 1 Piatto Principale + 1 Caffè o Dolce + 1 Bevanda",
      supplement: "*Supplemento di +2,00€ per Birra Saigon, Bevande Casalinghe o Caffè Vietnamita",
      select: "Seleziona 1",
      starters: "Antipasti",
      mains: "Piatti Principali",
      desserts: "Dolci o Caffè",
      drinks: "Bevande"
    }
  };

  return (
    <section id="menu" className="menu-section custom-dark-menu">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <span className="section-tag-gold">
            {translations[currentLang]?.['menu.tagline'] || 'NUESTRA CARTA'}
          </span>
          <h2 className="section-title-gold">
            {translations[currentLang]?.['menu.title'] || 'Explora Nuestro Menú'}
          </h2>
                </div>

        {/* Daily Menu Banner Button */}
        <div className="daily-menu-banner-wrapper">
          <button
            className={`daily-menu-banner-btn ${activeCategory === 'menudia' ? 'active' : ''}`}
            onClick={() => setActiveCategory('menudia')}
          >
            <span>📅</span>
            <span>
              {dailyMenuTranslations[currentLang]?.title || 'Menú del Día'}: {dailyMenuTranslations[currentLang]?.price || '13,90€'}
            </span>
          </button>
        </div>

        {/* Categories Tab Swiper */}
        <div className="categories-swiper-wrapper">
          <div className="categories-container">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className="category-emoji">{cat.emoji}</span>
                <span>{cat[currentLang] || cat.es}</span>
              </button>
            ))}
          </div>
          <div className="categories-swipe-hint">
            {translations[currentLang]?.['menu.swipeHint'] || '← Desliza para ver más →'}
          </div>
        </div>

        {/* Menu Grid */}
        {activeCategory === 'menudia' ? (
          <div className="daily-menu-board">
            <div className="daily-menu-header">
              <h3 className="daily-menu-title">SOLO DÍAS LABORALES - 13,90€</h3>
              <p className="daily-menu-subtitle-langs">
                (Chỉ áp dụng các ngày trong tuần / Weekdays only)
              </p>
              <div className="daily-menu-rules-multilang">
                <p className="daily-menu-rule-line es">
                  1 entrante + 1 plato principal + 1 café o postre + 1 bebidas (agua/caña/copa de vino)
                </p>
                <p className="daily-menu-rule-sub es">
                  (Cerveza Saigon / Bebidas caseras / Café vietnamita +2,00€)
                </p>
                <p className="daily-menu-rule-line en">
                  1 starter + 1 main course + 1 coffee/dessert + 1 homemade drink (water/beer/glass of wine)
                </p>
                <p className="daily-menu-rule-sub en">
                  (Saigon beer / Beer / Vietnamese coffee +2,00€)
                </p>
              </div>
            </div>

            {/* ENTRANTES (KHAI VỊ / STARTERS) Header */}
            <div className="dmd-flyer-section-header">
              <h3 className="dmd-flyer-section-title">
                ENTRANTES <span className="dmd-flyer-section-title-sub">(KHAI VỊ / STARTERS)</span>
              </h3>
            </div>

            <div className="dmd-flyer-container">
              {/* Dish 1: ROLLO PRIMAVERA */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">ROLLO PRIMAVERA</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Chả giò / Fried Spring rolls</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">Dos rollos fritos crujientes rellenos de verduras y</p>
                      <p className="dmd-flyer-desc vi">Hai cuốn chả giò nhân rau củ dùng kèm với</p>
                      <p className="dmd-flyer-desc en">Two crispy fried spring rolls filled with vegetables served with</p>
                    </div>
                    <div className="dmd-flyer-options">
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">A. Cerdo</span>
                        <span className="dmd-flyer-opt-sub">Thịt heo / Pork</span>
                      </div>
                      <div className="dmd-flyer-option-group vegetarian">
                        <span className="dmd-flyer-opt-title">B. Judía mungo*</span>
                        <span className="dmd-flyer-opt-sub">Đậu xanh / Mung bean</span>
                      </div>
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">Rollo extra</span>
                        <span className="dmd-flyer-opt-sub">Thêm cuốn / Extra roll</span>
                      </div>
                    </div>
                  </div>
                  <div className="dmd-flyer-image-wrap">
                    <img src="/menu_chagio.webp" alt="ROLLO PRIMAVERA" className="dmd-flyer-img" />
                  </div>
                </div>
              </div>

              {/* Dish 2: ROLLO FRESCO */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">ROLLO FRESCO</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Gỏi cuốn / Summer rolls</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">Dos rollos frescos envueltos a mano y</p>
                      <p className="dmd-flyer-desc vi">Hai gỏi cuốn tay tươi với</p>
                      <p className="dmd-flyer-desc en">Two fresh, hand-wrapped rolls with</p>
                    </div>
                    <div className="dmd-flyer-options">
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">A. Cerdo y gambas</span>
                        <span className="dmd-flyer-opt-sub">Thịt heo và tôm / Pork and prawn</span>
                      </div>
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">B. Gambas y mango</span>
                        <span className="dmd-flyer-opt-sub">Tôm và xoài / Prawn and mango</span>
                      </div>
                      <div className="dmd-flyer-option-group vegetarian">
                        <span className="dmd-flyer-opt-title">C. Tofu y mango*</span>
                        <span className="dmd-flyer-opt-sub">Đậu hũ và xoài / Tofu and mango</span>
                      </div>
                    </div>
                  </div>
                  <div className="dmd-flyer-image-wrap">
                    <img src="/menu_goicuon.webp" alt="ROLLO FRESCO" className="dmd-flyer-img" />
                  </div>
                </div>
              </div>

              {/* Dish 3: CAMARÓN FRITO */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">CAMARÓN FRITO</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Tôm chiên xù / Crispy fried shrimp</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">Langostino rebozado con tempura fresca,</p>
                      <p className="dmd-flyer-desc es">servido con salsa de chili dulce</p>
                      <p className="dmd-flyer-desc vi">Tôm tươi tẩm bột tempura, ăn kèm với sốt tương ớt ngọt</p>
                      <p className="dmd-flyer-desc en">Fresh tempura-battered shrimp, served with sweet chili sauce</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dish 4: CROQUETAS DE PESCADO CRUJIENTES */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">CROQUETAS DE PESCADO CRUJIENTES</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Chả cá cốm / Fried fish cake</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">Croquetas de pescado (4 piezas) marinadas en hierbas con copos de arroz crujientes</p>
                      <p className="dmd-flyer-desc vi">Chả cá (4 miếng) ướp thảo mộc với vụn cơm giòn</p>
                      <p className="dmd-flyer-desc en">Fish croquettes (4 pieces) marinated in herbs with crispy rice flakes</p>
                    </div>
                    <div className="dmd-flyer-options">
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">Pieza extra</span>
                        <span className="dmd-flyer-opt-sub">Thêm 1 viên / Extra piece</span>
                      </div>
                    </div>
                  </div>
                  <div className="dmd-flyer-image-wrap">
                    <img src="/menu_chacacom.webp" alt="CROQUETAS DE PESCADO CRUJIENTES" className="dmd-flyer-img" />
                  </div>
                </div>
              </div>

              {/* Dish 5: ENSALADA VIETNAM DE MANGO */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">ENSALADA VIETNAM DE MANGO</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Gỏi xoài / Vietnamese green mango salad</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">Deliciosa ensalada de mango con</p>
                      <p className="dmd-flyer-desc vi">Gỏi xoài ngon tuyệt vời, ăn kèm với</p>
                      <p className="dmd-flyer-desc en">Delicious green mango salad with</p>
                    </div>
                    <div className="dmd-flyer-options">
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">A. Cerdo y gambas</span>
                        <span className="dmd-flyer-opt-sub">Thịt heo / Pork</span>
                      </div>
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">B. Pollo</span>
                        <span className="dmd-flyer-opt-sub">Thịt gà / Chicken</span>
                      </div>
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">C. Tofu</span>
                        <span className="dmd-flyer-opt-sub">Đậu hũ / Tofu</span>
                      </div>
                    </div>
                  </div>
                  <div className="dmd-flyer-image-wrap">
                    <img src="/menu_goixoai.webp" alt="ENSALADA VIETNAM DE MANGO" className="dmd-flyer-img" />
                  </div>
                </div>
              </div>

              {/* Dish 6: ALITAS DE POLLO CRUJIENTES ESTILO PHO VIET */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">ALITAS DE POLLO CRUJIENTES ESTILO PHO VIET</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Cánh gà đặc biệt / Pho Viet - style crispy chicken wings</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">Crujientes con salsa de chili dulce casera (5 piezas)</p>
                      <p className="dmd-flyer-desc vi">Giòn tan với sốt tương ớt ngọt tự làm (5 miếng)</p>
                      <p className="dmd-flyer-desc en">Crispy with homemade sweet chili sauce (5 pieces)</p>
                    </div>
                    <div className="dmd-flyer-options">
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">Pieza extra</span>
                        <span className="dmd-flyer-opt-sub">Thêm 1 viên / Extra piece</span>
                      </div>
                    </div>
                  </div>
                  <div className="dmd-flyer-image-wrap">
                    <img src="/menu_alitas.webp" alt="ALITAS DE POLLO CRUJIENTES" className="dmd-flyer-img" />
                  </div>
                </div>
              </div>

              {/* Dish 7: GYOSAS AL VAPOR */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">GYOSAS AL VAPOR</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Há cảo / Steamed har gow</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">Empanadillas rellenas de verduras y carne al estilo vietnamita</p>
                      <p className="dmd-flyer-desc vi">Há cảo nhân rau và tôm theo kiểu Việt Nam</p>
                      <p className="dmd-flyer-desc en">Har gows filled with vegetables and meat in the Vietnamese style</p>
                    </div>
                  </div>
                  <div className="dmd-flyer-image-wrap">
                    <img src="/menu_gyosas.webp" alt="GYOSAS AL VAPOR" className="dmd-flyer-img" />
                  </div>
                </div>
              </div>
            </div>

            {/* PLATOS PRINCIPALES (MÓN CHÍNH / MAIN COURSES) Section Header */}
            <div className="dmd-flyer-section-header">
              <h3 className="dmd-flyer-section-title">
                PLATOS PRINCIPALES <span className="dmd-flyer-section-title-sub">(MÓN CHÍNH / MAIN COURSES)</span>
              </h3>
            </div>

            <div className="dmd-flyer-container">
              {/* Main 1: TERNERA CON PIMIENTA */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">TERNERA CON PIMIENTA</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Bò sốt tiêu đen / Beef with black pepper sauce</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">Este es un plato muy popular en las fiestas con un toque ligeramente picante, servido con:</p>
                      <p className="dmd-flyer-desc vi">Đây là món ăn rất được ưa chuộng trong các bữa tiệc, có vị hơi cay, thường được dùng kèm với:</p>
                      <p className="dmd-flyer-desc en">This is a very popular dish at parties with a slightly spicy touch, served with:</p>
                    </div>
                    <div className="dmd-flyer-options horizontal">
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">A. Arroz</span>
                        <span className="dmd-flyer-opt-sub">Cơm / Rice</span>
                      </div>
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">B. Empanadillas</span>
                        <span className="dmd-flyer-opt-sub">Bánh xếp / Dumplings</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main 2: POLLO CON SALSA DE CACAHUETE */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">POLLO CON SALSA DE CACAHUETE</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Gà sốt lạc / Chicken with peanut sauce</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">Pollo con salsa de cacahuete con arroz</p>
                      <p className="dmd-flyer-desc vi">Gà sốt lạc ăn kèm cơm</p>
                      <p className="dmd-flyer-desc en">Chicken with peanut sauce and rice</p>
                    </div>
                  </div>
                  <div className="dmd-flyer-image-wrap">
                    <img src="/menu_ga_sot_lac.webp" alt="POLLO CON SALSA DE CACAHUETE" className="dmd-flyer-img" />
                  </div>
                </div>
              </div>

              {/* Main 3: COSTILLAS DE CERDO CARAMELIZADAS */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">COSTILLAS DE CERDO CARAMELIZADAS</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Sườn ram mặn / Salty braised ribs</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">Jugosas y tiernas costillas de cerdo asadas lentamente con salsa de caramelo + arroz jazmin</p>
                      <p className="dmd-flyer-desc vi">Sườn heo quay chậm mọng nước với sốt caramel + gạo thơm lài</p>
                      <p className="dmd-flyer-desc en">Juicy slow-roasted pork ribs with caramel sauce and jasmine rice</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main 4: ESTOFADO DE PANCETA */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">ESTOFADO DE PANCETA</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Thịt kho tàu / Vietnamese braised pork with eggs</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">Panceta de cerdo, huevos cocidos, agua de coco, salsa de pescado, azucar, chalotas.</p>
                      <p className="dmd-flyer-desc vi">Thịt ba chỉ, trứng luộc, nước dừa, nước mắm, đường, hành tím.</p>
                      <p className="dmd-flyer-desc en">Pork belly, boiled eggs, coconut water, fish sauce, sugar, shallots.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main 5: BA CHỈ QUAY */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">BA CHỈ QUAY</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Ba chỉ quay / Roasted pork belly</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">Panceta de cerdo asada con piel crujiente, servida con una salsa especial.</p>
                      <p className="dmd-flyer-desc vi">Thịt ba chỉ nướng với lớp da giòn, ăn kèm với nước chấm đặc biệt.</p>
                      <p className="dmd-flyer-desc en">Roasted pork belly with crispy skin, served with a special sauce.</p>
                    </div>
                  </div>
                  <div className="dmd-flyer-image-wrap">
                    <img src="/menu_ba_chi_quay.webp" alt="BA CHỈ QUAY" className="dmd-flyer-img" />
                  </div>
                </div>
              </div>

              {/* Main 6: TAMARINDO SALTEADO */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">TAMARINDO SALTEADO</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Me xào / Stir-fried tamarind</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">Excelente combinación de tamarindo, cacahuetes, verduras + arroz jazmin y:</p>
                      <p className="dmd-flyer-desc vi">Sự kết hợp tuyệt vời giữa me, đậu phộng, rau củ + gạo thơm lài và:</p>
                      <p className="dmd-flyer-desc en">Excellent combination of tamarind, peanuts, vegetables + jasmine rice and:</p>
                    </div>
                    <div className="dmd-flyer-options grid">
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">A. Gambas</span>
                        <span className="dmd-flyer-opt-sub">Thịt tôm / Prawn</span>
                      </div>
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">B. Ternera +1,00€</span>
                        <span className="dmd-flyer-opt-sub">Thịt bò / Beef</span>
                      </div>
                      <div className="dmd-flyer-option-group vegetarian">
                        <span className="dmd-flyer-opt-title">C. Tofu*</span>
                        <span className="dmd-flyer-opt-sub">Đậu hũ / Tofu</span>
                      </div>
                      <div className="dmd-flyer-option-group vegetarian">
                        <span className="dmd-flyer-opt-title">D. Heura*</span>
                      </div>
                    </div>
                  </div>
                  <div className="dmd-flyer-image-wrap">
                    <img src="/menu_me_xao.webp" alt="TAMARINDO SALTEADO" className="dmd-flyer-img" />
                  </div>
                </div>
              </div>

              {/* Main 7: SOPA PHỞ */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">SOPA PHỞ</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Phở / Vietnamese noodle soup</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">El plato más popular de Vietnam, clasificado en la lista de los 50 mejores alimentos del mundo.</p>
                      <p className="dmd-flyer-desc vi">Món ăn nổi tiếng nhất Việt Nam, nằm trong danh sách 50 món ăn ngon nhất thế giới.</p>
                      <p className="dmd-flyer-desc en">Vietnam's most popular dish, ranked on the list of the 50 best foods in the world.</p>
                    </div>
                    <div className="dmd-flyer-options grid">
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">A. Ternera +1,00€</span>
                        <span className="dmd-flyer-opt-sub">Thịt bò / Beef</span>
                        <span className="dmd-flyer-opt-title" style={{ marginTop: '4px', fontSize: '0.85rem' }}>+ Bola de ternera casera +1,80</span>
                        <span className="dmd-flyer-opt-sub">+ Bò viên nhà làm / Homemade beef ball</span>
                      </div>
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">B. Pollo</span>
                        <span className="dmd-flyer-opt-sub">Thịt gà / Chicken</span>
                      </div>
                      <div className="dmd-flyer-option-group vegetarian">
                        <span className="dmd-flyer-opt-title">C. Tofu y champiñones*</span>
                        <span className="dmd-flyer-opt-sub">Đậu hũ và nấm / Tofu and mushrooms</span>
                      </div>
                      <div className="dmd-flyer-option-group vegetarian">
                        <span className="dmd-flyer-opt-title">D. Heura*</span>
                      </div>
                    </div>
                  </div>
                  <div className="dmd-flyer-image-wrap">
                    <img src="/menu_phobo.webp" alt="SOPA PHỞ" className="dmd-flyer-img" />
                  </div>
                </div>
              </div>

              {/* Main 8: CURRY */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">CURRY</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Cà ri / Curry</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">Curry increíblemente aromático con salsa de coco + arroz jazmín con.</p>
                      <p className="dmd-flyer-desc vi">Cà ri thơm lừng với nước cốt dừa + cơm trắng thơm ngát kèm</p>
                      <p className="dmd-flyer-desc en">Incredibly aromatic curry with coconut sauce + jasmine rice with.</p>
                    </div>
                    <div className="dmd-flyer-options grid">
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">A. Gambas</span>
                        <span className="dmd-flyer-opt-sub">Thịt tôm / Prawn</span>
                      </div>
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">B. Pollo</span>
                        <span className="dmd-flyer-opt-sub">Thịt gà / Chicken</span>
                      </div>
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">C. Tofu</span>
                        <span className="dmd-flyer-opt-sub">Đậu hũ / Tofu</span>
                      </div>
                      <div className="dmd-flyer-option-group vegetarian">
                        <span className="dmd-flyer-opt-title">D. Heura*</span>
                      </div>
                    </div>
                  </div>
                  <div className="dmd-flyer-image-wrap">
                    <img src="/menu_curry.webp" alt="CURRY" className="dmd-flyer-img" />
                  </div>
                </div>
              </div>

              {/* Main 9: WOK FIDIEOS DE ARROR */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">WOK FIDIEOS DE ARROR</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Phở xào / Stir-fried pho</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">Plato salteado con fideos de arroz, verduras, hierbas, cacahuetes asados, cebollas fritas con.</p>
                      <p className="dmd-flyer-desc vi">Món xào với bún gạo, rau củ, rau thơm, đậu phộng rang, hành phi.</p>
                      <p className="dmd-flyer-desc en">Stir-fried dish with rice noodles, vegetables, herbs, roasted peanuts, fried onions with.</p>
                    </div>
                    <div className="dmd-flyer-options grid">
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">A. Ternera +1,00€</span>
                        <span className="dmd-flyer-opt-sub">Thịt bò / Beef</span>
                      </div>
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">B. Gambas</span>
                        <span className="dmd-flyer-opt-sub">Thịt tôm / Prawn</span>
                      </div>
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">C. Pollo</span>
                        <span className="dmd-flyer-opt-sub">Thịt gà / Chicken</span>
                      </div>
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">D. Tofu</span>
                        <span className="dmd-flyer-opt-sub">Đậu hũ / Tofu</span>
                      </div>
                      <div className="dmd-flyer-option-group vegetarian">
                        <span className="dmd-flyer-opt-title">E. Heura*</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main 10: BÚN THỊT NƯỚNG */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">BÚN THỊT NƯỚNG</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Bún thịt nướng / Vietnamese grilled pork with rice vermicelli</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">Cerdo a la barbacoa con un rollito de primavera vietnamita.</p>
                      <p className="dmd-flyer-desc vi">Thịt heo nướng ăn kèm nem cuốn Việt Nam.</p>
                      <p className="dmd-flyer-desc en">Barbecued pork with a Vietnamese spring roll.</p>
                    </div>
                    <div className="dmd-flyer-options">
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">Con rollo frito</span>
                        <span className="dmd-flyer-opt-sub">Thêm chả giò chiên / With fried spring roll</span>
                      </div>
                    </div>
                  </div>
                  <div className="dmd-flyer-image-wrap">
                    <img src="/menu_bunthitnuong.webp" alt="BÚN THỊT NƯỚNG" className="dmd-flyer-img" />
                  </div>
                </div>
              </div>

              {/* Main 11: BÚN NEM */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">BÚN NEM</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Bún nem / Rice vermicelli noodles with fried spring rolls</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">Estilo Hanoi: Vermicelli con rollitos de primavera vietnamitas.</p>
                      <p className="dmd-flyer-desc vi">Phong cách Hà Nội: Bún cuốn kiểu Việt Nam hảo hạng.</p>
                      <p className="dmd-flyer-desc en">Hanoi style: Vermicelli and Vietnamese spring rolls.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main 12: BÚN BÒ NAM BỘ */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">BÚN BÒ NAM BỘ</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Bún bò nam bộ / Southern-style beef noodles</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">Plato salteado con fideos de arroz, verduras, hierbas, cacahuetes asados, cebollas fritas con</p>
                      <p className="dmd-flyer-desc vi">Món xào với bún gạo, rau củ, rau thơm, đậu phộng rang, hành phi kèm</p>
                      <p className="dmd-flyer-desc en">Stir-fried dish with rice noodles, vegetables, herbs, roasted peanuts, fried onions with</p>
                    </div>
                    <div className="dmd-flyer-options grid">
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">A. Ternera +1,00€</span>
                        <span className="dmd-flyer-opt-sub">Thịt bò / Beef</span>
                      </div>
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">B. Pollo</span>
                        <span className="dmd-flyer-opt-sub">Thịt gà / Chicken</span>
                      </div>
                      <div className="dmd-flyer-option-group vegetarian">
                        <span className="dmd-flyer-opt-title">C. Tofu*</span>
                        <span className="dmd-flyer-opt-sub">Đậu hũ / Tofu</span>
                      </div>
                      <div className="dmd-flyer-option-group vegetarian">
                        <span className="dmd-flyer-opt-title">D. Heura*</span>
                      </div>
                    </div>
                    <div className="dmd-flyer-options" style={{ marginTop: '12px' }}>
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">Con rollo frito</span>
                        <span className="dmd-flyer-opt-sub">Thêm chả giò chiên / With fried spring roll</span>
                      </div>
                    </div>
                  </div>
                  <div className="dmd-flyer-image-wrap">
                    <img src="/menu_bunbonambo.webp" alt="BÚN BÒ NAM BỘ" className="dmd-flyer-img" />
                  </div>
                </div>
              </div>

              {/* Main 13: BÚN TRỘN HEO QUAY */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">BÚN TRỘN HEO QUAY</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Bún trộn heo quay / Mixed vermicelli with crispy roasted pork</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">Los fideos de arroz se mezclan con cerdo asado</p>
                      <p className="dmd-flyer-desc vi">Bún gạo trộn với thịt heo quay</p>
                      <p className="dmd-flyer-desc en">Rice noodles mixed with roasted pork</p>
                    </div>
                  </div>
                  <div className="dmd-flyer-image-wrap">
                    <img src="/menu_bunheoquay.webp" alt="BÚN TRỘN HEO QUAY" className="dmd-flyer-img" />
                  </div>
                </div>
              </div>

              {/* Main 14: CƠM THỊT SỐT XÌ DẦU */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">CƠM THỊT SỐT XÌ DẦU</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Cơm thịt sốt xì dầu / Rice with meat in soy sauce</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">El carne se fríe y se sirve con salsa de soja sazonada</p>
                      <p className="dmd-flyer-desc vi">Thịt được chiên và ăn kèm với nước tương nêm gia vị</p>
                      <p className="dmd-flyer-desc en">The meat is fried and served with seasoned soy sauce</p>
                    </div>
                    <div className="dmd-flyer-options horizontal">
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">A. Pato</span>
                        <span className="dmd-flyer-opt-sub">Thịt vịt / Duck meat</span>
                      </div>
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">B. Pollo</span>
                        <span className="dmd-flyer-opt-sub">Thịt gà / Chicken</span>
                      </div>
                    </div>
                  </div>
                  <div className="dmd-flyer-image-wrap">
                    <img src="/menu_com_thit_xi_dau.webp" alt="CƠM THỊT SỐT XÌ DẦU" className="dmd-flyer-img" />
                  </div>
                </div>
              </div>

              {/* Main 15: CƠM THỊT SỐT MẮM TỎI */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">CƠM THỊT SỐT MẮM TỎI</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Cơm thịt sốt mắm tỏi / Rice with pork in garlic fish sauce</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">El carne se fríe y se sirve con una deliciosa salsa de pescado con ajo</p>
                      <p className="dmd-flyer-desc vi">Thịt được chiên và ăn kèm với nước sốt mắm tỏi thơm ngon</p>
                      <p className="dmd-flyer-desc en">The meat is fried and served with a delicious garlic fish sauce</p>
                    </div>
                    <div className="dmd-flyer-options horizontal">
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">A. Pato</span>
                        <span className="dmd-flyer-opt-sub">Thịt vịt / Duck meat</span>
                      </div>
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">B. Pollo</span>
                        <span className="dmd-flyer-opt-sub">Thịt gà / Chicken</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main 16: CƠM GỎI TRỘN */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">CƠM GỎI TRỘN</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Cơm gỏi trộn / Vietnamese rice bowl with mixed salad</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">La salsa agridulce mezclada con verduras y carne, servida con arroz blanco</p>
                      <p className="dmd-flyer-desc vi">Nước sốt chua ngọt trộn với rau và thịt, ăn kèm với cơm trắng</p>
                      <p className="dmd-flyer-desc en">Sweet and sour sauce mixed with vegetables and meat, served with white rice</p>
                    </div>
                    <div className="dmd-flyer-options grid">
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">A. Pato</span>
                        <span className="dmd-flyer-opt-sub">Thịt vịt / Duck meat</span>
                      </div>
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">B. Pollo</span>
                        <span className="dmd-flyer-opt-sub">Thịt gà / Chicken</span>
                      </div>
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">C. Gambas</span>
                        <span className="dmd-flyer-opt-sub">Thịt tôm / Prawn</span>
                      </div>
                      <div className="dmd-flyer-option-group">
                        <span className="dmd-flyer-opt-title">D. Cerdo</span>
                        <span className="dmd-flyer-opt-sub">Thịt heo / Pork</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* POSTRES (TRÁNG MIỆNG / DESSERT) Section Header */}
            <div className="dmd-flyer-section-header">
              <h3 className="dmd-flyer-section-title">
                POSTRES <span className="dmd-flyer-section-title-sub">(TRÁNG MIỆNG / DESSERT)</span>
              </h3>
            </div>

            <div className="dmd-flyer-container">
              {/* Dessert 1: PUDIN CALIENTE CON PLATANO */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">PUDIN CALIENTE CON PLATANO</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Chè chuối / Vietnamese banana tapioca pudding</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">Pudin caliente con platano y leche de coco con perlas de tapioca</p>
                      <p className="dmd-flyer-desc vi">Chè chuối và sữa dừa ấm với hạt trân châu</p>
                      <p className="dmd-flyer-desc en">Warm banana and coconut milk pudding with tapioca pearls</p>
                    </div>
                  </div>
                  <div className="dmd-flyer-image-wrap">
                    <img src="/menu_chechuoi.webp" alt="PUDIN CALIENTE CON PLATANO" className="dmd-flyer-img" />
                  </div>
                </div>
              </div>

              {/* Dessert 2: CHÈ ĐẬU ĐEN */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">CHÈ ĐẬU ĐEN</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Chè đậu đen / Vietnamese black bean sweet soup</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">Les frijoles negros bien cocidos servidos</p>
                      <p className="dmd-flyer-desc vi">Đậu đen được nấu chín kĩ</p>
                      <p className="dmd-flyer-desc en">Well-cooked black beans are served</p>
                    </div>
                  </div>
                  <div className="dmd-flyer-image-wrap">
                    <img src="/menu_chedauden.webp" alt="CHÈ ĐẬU ĐEN" className="dmd-flyer-img" />
                  </div>
                </div>
              </div>

              {/* Dessert 3: PANNA COTTA TROPICAL */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">PANNA COTTA TROPICAL</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Panna cotta lá dứa / Pandan panna cotta</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">Deliciosa panna cotta con sabor de coco pandan y cacahuete</p>
                      <p className="dmd-flyer-desc vi">Panna cotta thơm ngon với hương vị dừa, lá dứa và đậu phộng</p>
                      <p className="dmd-flyer-desc en">Delicious panna cotta with coconut, pandan and peanut flavor</p>
                    </div>
                  </div>
                  <div className="dmd-flyer-image-wrap">
                    <img src="/menu_pannacottatropical.webp" alt="PANNA COTTA TROPICAL" className="dmd-flyer-img" loading="lazy" decoding="async" width="140" height="140" />
                  </div>
                </div>
              </div>

              {/* Dessert 4: PUDIN DE ARROZ NEGRO Y YOGUR */}
              <div className="dmd-flyer-item">
                <div className="dmd-flyer-heading">
                  <h4 className="dmd-flyer-title">PUDIN DE ARROZ NEGRO Y YOGUR</h4>
                  <div className="dmd-flyer-divider" />
                </div>
                <div className="dmd-flyer-body">
                  <div className="dmd-flyer-info">
                    <p className="dmd-flyer-subtitle">Sữa chua nếp cẩm / Black sticky rice yogurt</p>
                    <div className="dmd-flyer-descs">
                      <p className="dmd-flyer-desc es">Cremoso, rico y saludable postre de arroz negro servido con yogur y leche de coco</p>
                      <p className="dmd-flyer-desc vi">Món tráng miệng làm từ gạo nếp cẩm béo ngậy, thơm ngon và bổ dưỡng, ăn kèm với sữa chua và nước cốt dừa</p>
                      <p className="dmd-flyer-desc en">Creamy, rich and healthy black rice dessert served with yogurt and coconut milk</p>
                    </div>
                  </div>
                  <div className="dmd-flyer-image-wrap">
                    <img src="/menu_suachuanepcam.webp" alt="PUDIN DE ARROZ NEGRO Y YOGUR" className="dmd-flyer-img" loading="lazy" decoding="async" width="140" height="140" />
                  </div>
                </div>
              </div>
            </div>

            <div className="dmd-supplement-note">
              {dailyMenuTranslations[currentLang]?.supplement || '*Suplemento de +2,00€ para Cerveza Saigon, Bebidas Caseras o Café Vietnamita'}
            </div>
          </div>
        ) : (
          <div className="custom-menu-grid">
            {menuItems[activeCategory].map((item) => {
              const details = item[currentLang] || item.es;
              return (
                <div key={item.id} className="custom-menu-item">
                  <div className="menu-item-info">
                    <h3 className="menu-item-title">{item.name}</h3>
                    <p className="menu-item-subtitle">{details.subtitle}</p>
                    <div className="menu-item-price">{item.price}</div>
                    <p className="menu-item-desc">{details.description}</p>
                    <ul className="menu-item-options">
                      {details.options.map((opt, idx) => (
                        <li key={idx} className={opt.highlight ? 'highlight-option' : ''}>
                          {opt.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {item.image && (
                    <div className="menu-item-image-container">
                      <div className="menu-item-image-circle">
                        <img src={item.image} alt={item.name} className="menu-item-image" loading="lazy" decoding="async" width="120" height="120" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}      </div>
    </section>
  );
}

const translations = {
  es: { 'menu.tagline': 'NUESTRA CARTA', 'menu.title': 'Explora Nuestro Menú' },
  en: { 'menu.tagline': 'OUR MENU', 'menu.title': 'Explore Our Menu' },
  vi: { 'menu.tagline': 'THỰC ĐƠN CỦA CHÚNG TÔI', 'menu.title': 'Khám Phá Thực Đơn' },
  zh: { 'menu.tagline': '我们的菜单', 'menu.title': '探索我们的菜单' },
  ko: { 'menu.tagline': '엄선된 메뉴', 'menu.title': '메뉴 둘러보기' },
  ja: { 'menu.tagline': '私たちのメニュー', 'menu.title': 'メニューを見る' },
  fr: { 'menu.tagline': 'NOTRE CARTE', 'menu.title': 'Explorez Notre Menu' },
  it: { 'menu.tagline': 'IL NOSTRO MENU', 'menu.title': 'Esplora il Nostro Menu' }
};
