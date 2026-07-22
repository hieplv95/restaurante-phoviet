import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

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

  const categories = [
    { id: 'starters', emoji: '🥗', es: 'Entrantes', en: 'Starters', vi: 'Khai vị', zh: '热身', ja: '前菜', ko: '에피타이저', fr: 'Entrées', it: 'Antipasti' },
    { id: 'mains', emoji: '🍜', es: 'Platos Principales', en: 'Main Courses', vi: 'Món chính', zh: '主菜', ja: 'メイン', ko: '메인 요리', fr: 'Plats', it: 'Piatti' },
    { id: 'desserts', emoji: '🍮', es: 'Postres / Café', en: 'Dessert / Coffee', vi: 'Tráng miệng', zh: '甜点', ja: 'デザート', ko: '디저트', fr: 'Desserts', it: 'Dolci' },
    { id: 'drinks', emoji: '🥤', es: 'Bebidas', en: 'Drinks', vi: 'Đồ uống', zh: '饮料', ja: 'ドリンク', ko: '음료', fr: 'Boissons', it: 'Bevande' }
  ];

  const menuItems = {
    starters: [
      {
        id: 'cha-gio',
        name: '1. Chả Giò',
        es: {
          subtitle: "Rollo Primavera Crujiente",
          description: "Dos rollos fritos crujientes rellenos de verduras y fideos de cristal. Servidos con hojas de lechuga.",
          options: [
            { text: "• A. Cerdo (Thịt heo)", highlight: true },
            { text: "• B. Judía mungo* (Đậu xanh)", highlight: false },
            { text: "Rollo extra (Thêm cuốn) +3,40€", highlight: false }
          ]
        },
        en: {
          subtitle: "Crispy Fried Spring Rolls",
          description: "Two crispy fried spring rolls filled with vegetables and glass noodles. Served with lettuce leaves.",
          options: [
            { text: "• A. Pork (Thịt heo)", highlight: true },
            { text: "• B. Mung bean* (Đậu xanh)", highlight: false },
            { text: "Extra roll (Thêm cuốn) +3,40€", highlight: false }
          ]
        },
        vi: {
          subtitle: "Chả Giò Rán Giòn",
          description: "Hai cuốn chả giò rán giòn nhân rau củ và miến. Ăn kèm xà lách.",
          options: [
            { text: "• A. Nhân Thịt Heo", highlight: true },
            { text: "• B. Nhân Đậu Xanh*", highlight: false },
            { text: "Thêm cuốn +3,40€", highlight: false }
          ]
        },
        zh: {
          subtitle: "香脆炸春卷",
          description: "两个香脆的炸春卷，包裹着蔬菜和粉丝。配生菜叶食用。",
          options: [
            { text: "• A. 猪肉", highlight: true },
            { text: "• B. 绿豆*", highlight: false },
            { text: "加购春卷 +3,40€", highlight: false }
          ]
        },
        ko: {
          subtitle: "바삭한 짜조",
          description: "야채와 당면으로 속을 채워 바삭하게 튀겨낸 짜조 2개. 상추가 함께 제공됩니다.",
          options: [
            { text: "• A. 돼지고기", highlight: true },
            { text: "• B. 녹두*", highlight: false },
            { text: "짜조 추가 +3,40€", highlight: false }
          ]
        },
        ja: {
          subtitle: "サクサク揚げ春巻き",
          description: "野菜と春雨を包んでサクサクに揚げた春巻き2本。レタスと一緒にお召し上がりください。",
          options: [
            { text: "• A. 豚肉", highlight: true },
            { text: "• B. 緑豆*", highlight: false },
            { text: "春巻き追加 +3,40€", highlight: false }
          ]
        },
        fr: {
          subtitle: "Rouleaux de Printemps Croustillants",
          description: "Deux rouleaux de printemps frits croustillants farcis de légumes et de vermicelles de verre. Servis avec des feuilles de laitue.",
          options: [
            { text: "• A. Porc", highlight: true },
            { text: "• B. Haricot mungo*", highlight: false },
            { text: "Rouleau supplémentaire +3,40€", highlight: false }
          ]
        },
        it: {
          subtitle: "Involtini Primavera Croccanti",
          description: "Due involtini primavera fritti croccanti ripieni di verdure e vermicelli di vetro. Serviti con foglie di lattuga.",
          options: [
            { text: "• A. Maiale", highlight: true },
            { text: "• B. Fagioli mungo*", highlight: false },
            { text: "Involtino extra +3,40€", highlight: false }
          ]
        },
        price: '7,20€',
        image: '/menu_chagio.png'
      },
      {
        id: 'goi-cuon',
        name: '2. Gỏi Cuốn',
        es: {
          subtitle: "Rollo Fresco",
          description: "Dos rollos frescos envueltos a mano con:",
          options: [
            { text: "• A. Cerdo y gambas", highlight: true },
            { text: "• B. Gambas y mango", highlight: false },
            { text: "• C. Tofu y mango*", highlight: false }
          ]
        },
        en: {
          subtitle: "Summer Rolls",
          description: "Two fresh, hand-wrapped rolls with:",
          options: [
            { text: "• A. Pork and prawn", highlight: true },
            { text: "• B. Prawn and mango", highlight: false },
            { text: "• C. Tofu and mango*", highlight: false }
          ]
        },
        vi: {
          subtitle: "Gỏi Cuốn Tươi",
          description: "Hai cuốn gỏi cuốn tay tươi với:",
          options: [
            { text: "• A. Thịt heo và tôm", highlight: true },
            { text: "• B. Tôm và xoài", highlight: false },
            { text: "• C. Đậu hũ và xoài*", highlight: false }
          ]
        },
        zh: {
          subtitle: "新鲜夏卷",
          description: "两个纯手工包裹的新鲜夏卷，含有：",
          options: [
            { text: "• A. 猪肉与鲜虾", highlight: true },
            { text: "• B. 鲜虾与芒果", highlight: false },
            { text: "• C. 豆腐与芒果*", highlight: false }
          ]
        },
        ko: {
          subtitle: "신선한 스프링롤",
          description: "라이스페이퍼에 손으로 직접 말아낸 신선한 스프링롤 2개:",
          options: [
            { text: "• A. 돼지고기와 새우", highlight: true },
            { text: "• B. 새우와 망고", highlight: false },
            { text: "• C. 두부와 망고*", highlight: false }
          ]
        },
        ja: {
          subtitle: "新鮮生春巻き",
          description: "レタス、ミント、きゅうり、人参をライスペーパーで包んだ新鮮な生春巻き2本：",
          options: [
            { text: "• A. 豚肉とエビ", highlight: true },
            { text: "• B. エビとマンゴー", highlight: false },
            { text: "• C. 豆腐とマンゴー*", highlight: false }
          ]
        },
        fr: {
          subtitle: "Rouleaux d'Été Frais",
          description: "Deux rouleaux de riz frais enveloppés à la main avec :",
          options: [
            { text: "• A. Porc et crevettes", highlight: true },
            { text: "• B. Crevettes et mangue", highlight: false },
            { text: "• C. Tofu et mangue*", highlight: false }
          ]
        },
        it: {
          subtitle: "Involtini d'Estate Freschi",
          description: "Due involtini di riso freschi avvolti a mano con:",
          options: [
            { text: "• A. Maiale e gamberi", highlight: true },
            { text: "• B. Gamberi e mango", highlight: false },
            { text: "• C. Tofu e mango*", highlight: false }
          ]
        },
        price: '7,00€',
        image: '/menu_goicuon.png'
      },
      {
        id: 'tom-chien-xu',
        name: '3. Tôm Chiên Xù',
        es: {
          subtitle: "Camarón Frito",
          description: "Langostino rebozado con tempura fresca, servido con salsa de chili dulce.",
          options: []
        },
        en: {
          subtitle: "Crispy Fried Shrimp",
          description: "Fresh tempura-battered shrimp, served with sweet chili sauce.",
          options: []
        },
        vi: {
          subtitle: "Tôm Chiên Xù",
          description: "Tôm tươi tẩm bột tempura, ăn kèm với sốt tương ớt ngọt.",
          options: []
        },
        zh: {
          subtitle: "天妇罗炸虾",
          description: "裹上面糊新鲜炸制的香脆天妇罗虾，搭配甜辣酱。",
          options: []
        },
        ko: {
          subtitle: "바삭한 새우 튀김",
          description: "신선한 튀김옷을 입혀 바삭하게 튀겨낸 새우 튀김, 스위트 칠리 소스와 함께 제공됩니다.",
          options: []
        },
        ja: {
          subtitle: "海老のサクサク揚げ",
          description: "新鮮な衣をつけてサクサクに揚げた海老の天ぷら。スイートチリソース添え。",
          options: []
        },
        fr: {
          subtitle: "Beignets de Crevettes Croustillants",
          description: "Crevettes fraîches panées en tempura, servies avec une sauce chili douce.",
          options: []
        },
        it: {
          subtitle: "Gamberi Fritti Croccanti",
          description: "Gamberi freschi impanati in tempura croccante, serviti con salsa chili dolce.",
          options: []
        },
        price: '7,20€',
        image: '/menu_camaron.png'
      },
      {
        id: 'croquetas-de-pescado',
        name: '4. Chả Cá Cốm',
        es: {
          subtitle: "Croquetas de Pescado Crujientes",
          description: "Croquetas de pescado (4 piezas) marinadas en hierbas con copos de arroz crujientes.",
          options: [
            { text: "Pieza extra (Thêm 1 viên) +1,50€", highlight: false }
          ]
        },
        en: {
          subtitle: "Crispy Fish Croquettes",
          description: "Fish croquettes (4 pieces) marinated in herbs with crispy rice flakes.",
          options: [
            { text: "Extra piece (Thêm 1 viên) +1,50€", highlight: false }
          ]
        },
        vi: {
          subtitle: "Chả Cá Cốm",
          description: "Chả cá (4 miếng) ướp thảo mộc với vụn cơm giòn.",
          options: [
            { text: "Thêm 1 viên +1,50€", highlight: false }
          ]
        },
        zh: {
          subtitle: "香脆绿糯米鱼饼",
          description: "香草腌制鱼饼（4块）裹上香脆绿糯米片炸制。",
          options: [
            { text: "加购一块 +1,50€", highlight: false }
          ]
        },
        ko: {
          subtitle: "바삭한 초록 쌀 튀김 어묵",
          description: "허브로 양념하고 바삭한 초록색 찹쌀 플레이크를 묻혀 튀겨낸 베트남식 어묵 요리(4조각).",
          options: [
            { text: "어묵 추가 (1조각) +1,50€", highlight: false }
          ]
        },
        ja: {
          subtitle: "サクサク緑米のベトナム風魚さつま揚げ",
          description: "ハーブでマリネした白身魚のすり身（4個）に、サクサクの緑色の扁平米（コム）を衣にして揚げたもの。",
          options: [
            { text: "1個追加 +1,50€", highlight: false }
          ]
        },
        fr: {
          subtitle: "Croquettes de Poisson Croustillantes",
          description: "Croquettes de poisson (4 pièces) marinées aux herbes avec des flocons de riz croustillants.",
          options: [
            { text: "Portion supplémentaire +1,50€", highlight: false }
          ]
        },
        it: {
          subtitle: "Crocchette di Pesce Croccanti",
          description: "Crocchette di pesce (4 pezzi) marinate alle erbe con fiocchi di riso croccanti.",
          options: [
            { text: "Porzione extra +1,50€", highlight: false }
          ]
        },
        price: '7,80€',
        image: '/menu_chacacom.png'
      },
      {
        id: 'goi-xoai',
        name: '5. Gỏi Xoài',
        es: {
          subtitle: "Ensalada Vietnam con Mango",
          description: "Deliciosa ensalada de mango con:",
          options: [
            { text: "• A. Cerdo y gambas (7,60€)", highlight: true },
            { text: "• B. Pollo (7,30€)", highlight: false },
            { text: "• C. Tofu (7,30€)", highlight: false }
          ]
        },
        en: {
          subtitle: "Vietnamese Green Mango Salad",
          description: "Delicious green mango salad with:",
          options: [
            { text: "• A. Pork and prawn (7,60€)", highlight: true },
            { text: "• B. Chicken (7,30€)", highlight: false },
            { text: "• C. Tofu (7,30€)", highlight: false }
          ]
        },
        vi: {
          subtitle: "Gỏi Xoài",
          description: "Gỏi xoài ngon tuyệt vời, ăn kèm với:",
          options: [
            { text: "• A. Thịt heo và tôm (7,60€)", highlight: true },
            { text: "• B. Thịt gà (7,30€)", highlight: false },
            { text: "• C. Đậu hũ (7,30€)", highlight: false }
          ]
        },
        zh: {
          subtitle: "越式芒果沙拉",
          description: "美味的越式青芒果沙拉，搭配：",
          options: [
            { text: "• A. 猪肉与鲜虾 (7,60€)", highlight: true },
            { text: "• B. 鸡肉 (7,30€)", highlight: false },
            { text: "• C. 豆腐 (7,30€)", highlight: false }
          ]
        },
        ko: {
          subtitle: "베트남식 망고 샐러드",
          description: "상큼하고 맛있는 베트남식 그린 망고 샐러드, 토핑 선택:",
          options: [
            { text: "• A. 돼지고기와 새우 (7,60€)", highlight: true },
            { text: "• B. 닭고기 (7,30€)", highlight: false },
            { text: "• C. 두부 (7,30€)", highlight: false }
          ]
        },
        ja: {
          subtitle: "マンゴーサラダ",
          description: "美味しいベトナム風青マンゴーサラダ、以下から選択：",
          options: [
            { text: "• A. 豚肉とエビ (7,60€)", highlight: true },
            { text: "• B. 鶏肉 (7,30€)", highlight: false },
            { text: "• C. 豆腐 (7,30€)", highlight: false }
          ]
        },
        fr: {
          subtitle: "Salade de Mangue Verte Vietnamienne",
          description: "Délicieuse salade de mangue verte avec :",
          options: [
            { text: "• A. Porc et crevettes (7,60€)", highlight: true },
            { text: "• B. Poulet (7,30€)", highlight: false },
            { text: "• C. Tofu (7,30€)", highlight: false }
          ]
        },
        it: {
          subtitle: "Insalata di Mango Verde Vietnamita",
          description: "Deliziosa insalata di mango verde con:",
          options: [
            { text: "• A. Maiale e gamberi (7,60€)", highlight: true },
            { text: "• B. Pollo (7,30€)", highlight: false },
            { text: "• C. Tofu (7,30€)", highlight: false }
          ]
        },
        price: '7,30€ / 7,60€',
        image: '/menu_goixoai.png'
      },
      {
        id: 'alitas-de-pollo',
        name: '6. Cánh Gà Đặc Biệt',
        es: {
          subtitle: "Alitas de Pollo Crujientes Estilo Pho Viet",
          description: "Alitas de pollo crujientes fritas (5 piezas) salteadas con salsa de chili dulce casera.",
          options: [
            { text: "Pieza extra (Thêm 1 cánh) +1,50€", highlight: false }
          ]
        },
        en: {
          subtitle: "Pho Viet-Style Crispy Chicken Wings",
          description: "Crispy chicken wings (5 pieces) tossed with homemade sweet chili sauce.",
          options: [
            { text: "Extra piece (Thêm 1 cánh) +1,50€", highlight: false }
          ]
        },
        vi: {
          subtitle: "Cánh Gà Đặc Biệt",
          description: "Cánh gà rán giòn tan (5 miếng) xào nước sốt tương ớt ngọt tự làm.",
          options: [
            { text: "Thêm 1 cánh +1,50€", highlight: false }
          ]
        },
        zh: {
          subtitle: "越式香脆炸鸡翅",
          description: "香脆炸鸡翅（5只）裹上自制甜辣酱。",
          options: [
            { text: "加购一只 +1,50€", highlight: false }
          ]
        },
        ko: {
          subtitle: "포 비엣 스타일 바삭한 닭날개 튀김",
          description: "수제 스위트 칠리 소스를 버무린 바삭한 닭날개 튀김(5조각).",
          options: [
            { text: "닭날개 추가 (1조각) +1,50€", highlight: false }
          ]
        },
        ja: {
          subtitle: "フォーベト風サクサク手羽先揚げ",
          description: "手作りのスイートチリソースを絡めた、サクサクの手羽先揚げ（5個）。",
          options: [
            { text: "1個追加 +1,50€", highlight: false }
          ]
        },
        fr: {
          subtitle: "Ailes de Poulet Croustillantes Style Pho Viet",
          description: "Ailes de poulet croustillantes (5 pièces) nappées d'une sauce chili douce maison.",
          options: [
            { text: "Portion supplémentaire +1,50€", highlight: false }
          ]
        },
        it: {
          subtitle: "Alette di Pollo Croccanti Stile Pho Viet",
          description: "Alette di pollo croccanti (5 pezzi) saltate in salsa chili dolce fatta in casa.",
          options: [
            { text: "Porzione extra +1,50€", highlight: false }
          ]
        },
        price: '7,20€',
        image: '/menu_alitas.png'
      },
      {
        id: 'gyosas-al-vapor',
        name: '7. Há Cảo',
        es: {
          subtitle: "Gyosas al Vapor",
          description: "Empanadillas (há cảo) rellenas de verduras y carne al estilo vietnamita (4 piezas).",
          options: []
        },
        en: {
          subtitle: "Steamed Har Gow",
          description: "Vietnamese-style steamed har gow dumplings filled with vegetables and meat (4 pieces).",
          options: []
        },
        vi: {
          subtitle: "Há Cảo Hấp",
          description: "Há cảo nhân rau và tôm theo kiểu Việt Nam (4 miếng).",
          options: []
        },
        zh: {
          subtitle: "越式蒸虾饺",
          description: "越式蒸饺，包裹着蔬菜和肉类（4只）。",
          options: []
        },
        ko: {
          subtitle: "베트남식 찐 하가우",
          description: "야채와 고기/새우로 속을 채운 베트남식 찐만두(4조각).",
          options: []
        },
        ja: {
          subtitle: "ベトナム風蒸しハガウ（エビ餃子）",
          description: "野菜と具材を包んだベトナム風の蒸し餃子（4個）。",
          options: []
        },
        fr: {
          subtitle: "Raviolis Har Gow à la Vapeur",
          description: "Raviolis à la vapeur de style vietnamien farcis aux légumes et à la viande (4 pièces).",
          options: []
        },
        it: {
          subtitle: "Ravioli Har Gow al Vapore",
          description: "Ravioli al vapore in stile vietnamita ripieni di verdure e carne (4 pezzi).",
          options: []
        },
        price: '7,10€',
        image: '/menu_gyosas.png'
      }
    ],
    mains: [
      {
        id: 'banh-xeo',
        name: 'Bánh Xèo',
        es: {
          subtitle: "Crepe Crujiente Vietnamita",
          description: "Crepe vietnamita fino y crujiente de harina de arroz, relleno de brotes de soja y:",
          options: [
            { text: "• A. Gambas y cerdo (+1€)", highlight: true },
            { text: "• B. Tofu orgánico", highlight: false }
          ]
        },
        en: {
          subtitle: "Pancake of Joy",
          description: "Thin and crispy Vietnamese pancake made with rice flour, stuffed with bean sprouts and:",
          options: [
            { text: "• A. Prawns and pork (+1€)", highlight: true },
            { text: "• B. Organic tofu", highlight: false }
          ]
        },
        vi: {
          subtitle: "Bánh Xèo Vàng Giòn",
          description: "Bánh xèo vỏ mỏng giòn rụm làm từ bột gạo, nhân giá đỗ thanh mát và:",
          options: [
            { text: "• A. Tôm và thịt heo (+1€)", highlight: true },
            { text: "• B. Đậu hũ hữu cơ", highlight: false }
          ]
        },
        zh: {
          subtitle: "越式煎饼",
          description: "用米粉制作的薄脆越南煎饼，包裹着豆芽和：",
          options: [
            { text: "• A. 鲜虾与猪肉 (+1€)", highlight: true },
            { text: "• B. 有机豆腐", highlight: false }
          ]
        },
        ko: {
          subtitle: "베트남식 크레프 (반세오)",
          description: "쌀가루로 얇고 바삭하게 부쳐내어 숙주나물로 속을 채운 베트남식 부침개:",
          options: [
            { text: "• A. 새우와 돼지고기 (+1€)", highlight: true },
            { text: "• B. 유기농 두부", highlight: false }
          ]
        },
        ja: {
          subtitle: "ベトナム風お好み焼き（バインセオ）",
          description: "米粉で作った薄くてパリパリの生地に、もやしをたっぷり挟んだベトナム風お好み焼き：",
          options: [
            { text: "• A. 海老と豚肉 (+1€)", highlight: true },
            { text: "• B. 有機豆腐", highlight: false }
          ]
        },
        fr: {
          subtitle: "Crêpe Vietnamienne Croustillante",
          description: "Fine crêpe vietnamienne croustillante à la farine de riz, farcie de pousses de soja et de :",
          options: [
            { text: "• A. Crevettes et porc (+1€)", highlight: true },
            { text: "• B. Tofu biologique", highlight: false }
          ]
        },
        it: {
          subtitle: "Crepe Vietnamita Croccante",
          description: "Sottile e croccante crepe vietnamita fatta con farina di riso, ripiena di germogli di soia e:",
          options: [
            { text: "• A. Gamberi e maiale (+1€)", highlight: true },
            { text: "• B. Tofu biologico", highlight: false }
          ]
        },
        price: '10,90€',
        image: '/menu_banhxeo.png'
      },
      {
        id: 'pho-bo',
        name: '3. Phở',
        es: {
          subtitle: "Sopa Phở",
          description: "El plato más popular de Vietnam, clasificado en la lista de los 50 mejores alimentos del mundo.",
          options: [
            { text: "• A. Ternera (12,90€) (Thịt bò)", highlight: true },
            { text: "• B. Pollo (12,90€) (Thịt gà)", highlight: false },
            { text: "• C. Tofu y champiñones* (11,90€) (Đậu hũ & nấm)", highlight: false },
            { text: "• D. Heura* (11,90€)", highlight: false },
            { text: "+ Bola de ternera casera (+1,80€) (Bò viên)", highlight: false }
          ]
        },
        en: {
          subtitle: "Vietnamese Noodle Soup",
          description: "Vietnam's most popular dish, ranked on the list of the 50 best foods in the world.",
          options: [
            { text: "• A. Beef (12,90€)", highlight: true },
            { text: "• B. Chicken (12,90€)", highlight: false },
            { text: "• C. Tofu and mushrooms* (11,90€)", highlight: false },
            { text: "• D. Heura* (11,90€)", highlight: false },
            { text: "+ Homemade beef ball (+1,80€)", highlight: false }
          ]
        },
        vi: {
          subtitle: "Phở",
          description: "Món ăn nổi tiếng nhất Việt Nam, nằm trong danh sách 50 món ăn ngon nhất thế giới.",
          options: [
            { text: "• A. Thịt bò (12,90€)", highlight: true },
            { text: "• B. Thịt gà (12,90€)", highlight: false },
            { text: "• C. Đậu hũ và nấm* (11,90€)", highlight: false },
            { text: "• D. Heura* (11,90€)", highlight: false },
            { text: "+ Bò viên nhà làm (+1,80€)", highlight: false }
          ]
        },
        zh: {
          subtitle: "越南河粉",
          description: "越南最受欢迎的国宝级美食，名列世界50大美食排行榜。",
          options: [
            { text: "• A. 牛肉 (12,90€)", highlight: true },
            { text: "• B. 鸡肉 (12,90€)", highlight: false },
            { text: "• C. 豆腐与蘑菇* (11,90€)", highlight: false },
            { text: "• D. 素肉 Heura* (11,90€)", highlight: false },
            { text: "+ 自制牛肉丸 (+1,80€)", highlight: false }
          ]
        },
        ko: {
          subtitle: "베트남 쌀국수",
          description: "세계 50대 음식으로 선정된 베트남의 대표적인 전통 쌀국수 요리.",
          options: [
            { text: "• A. 소고기 (12,90€)", highlight: true },
            { text: "• B. 닭고기 (12,90€)", highlight: false },
            { text: "• C. 두부와 버섯* (11,90€)", highlight: false },
            { text: "• D. 식물성 고기 Heura* (11,90€)", highlight: false },
            { text: "+ 수제 미트볼 (+1,80€)", highlight: false }
          ]
        },
        ja: {
          subtitle: "ベトナム伝統フォー",
          description: "世界50大グルメに選出された、ベトナムで最もポピュラーな米粉ヌードルスープ。",
          options: [
            { text: "• A. 牛肉 (12,90€)", highlight: true },
            { text: "• B. 鶏肉 (12,90€)", highlight: false },
            { text: "• C. 豆腐とキノコ* (11,90€)", highlight: false },
            { text: "• D. 植物性肉 Heura* (11,90€)", highlight: false },
            { text: "+ 自家製牛肉ボール (+1,80€)", highlight: false }
          ]
        },
        fr: {
          subtitle: "Soupe de Nouilles Traditionnelle",
          description: "Le plat le plus populaire du Vietnam, classé parmi les 50 meilleurs aliments au monde.",
          options: [
            { text: "• A. Bœuf (12,90€)", highlight: true },
            { text: "• B. Poulet (12,90€)", highlight: false },
            { text: "• C. Tofu et champignons* (11,90€)", highlight: false },
            { text: "• D. Heura* (11,90€)", highlight: false },
            { text: "+ Boulette de bœuf maison (+1,80€)", highlight: false }
          ]
        },
        it: {
          subtitle: "Zuppa di Vermicelli Tradizionale",
          description: "Il piatto più famoso del Vietnam, classificato tra i 50 migliori cibi al mondo.",
          options: [
            { text: "• A. Manzo (12,90€)", highlight: true },
            { text: "• B. Pollo (12,90€)", highlight: false },
            { text: "• C. Tofu e funghi* (11,90€)", highlight: false },
            { text: "• D. Heura* (11,90€)", highlight: false },
            { text: "+ Polpetta di manzo fatta in casa (+1,80€)", highlight: false }
          ]
        },
        price: '11,90€ - 12,90€',
        image: '/menu_phobo.png'
      },
      {
        id: 'bun-bo-hue',
        name: '4. Bún Bò Huế',
        es: {
          subtitle: "Sopa Hue de Fideos / Hue spicy noodle soup",
          description: "Sopa de fideos de arroz con ternera y cerdo, con un toque picante.",
          options: []
        },
        en: {
          subtitle: "Hue spicy noodle soup",
          description: "Rice noodle soup with beef and pork, with a spicy kick.",
          options: []
        },
        vi: {
          subtitle: "Bún Bò Huế",
          description: "Bún bò Huế cay nồng với thịt bò, giò heo đậm đà chuẩn vị.",
          options: []
        },
        zh: {
          subtitle: "顺化牛肉粉",
          description: "微辣的顺化牛肉和猪肉米粉汤。",
          options: []
        },
        ko: {
          subtitle: "매콤한 분보후에",
          description: "소고기와 돼지고기가 들어간 매콤한 베트남 쌀국수.",
          options: []
        },
        ja: {
          subtitle: "ブンボーフエ（辛口牛肉フォー）",
          description: "牛肉と豚肉が入った、スパイスの効いたピリ辛ヌードルスープ。",
          options: []
        },
        fr: {
          subtitle: "Soupe de Nouilles de Hué Épicée",
          description: "Soupe de nouilles de riz au bœuf et au porc, avec une touche épicée.",
          options: []
        },
        it: {
          subtitle: "Zuppa di Vermicelli di Hue Speziata",
          description: "Zuppa di vermicelli di riso con manzo e maiale, con un tocco piccante.",
          options: []
        },
        price: '13,50€',
        image: '/menu_bunbohue.png'
      },
      {
        id: 'wok-fideos-de-arroz',
        name: '5. WOK FIDEOS DE ARROZ',
        es: {
          subtitle: "Phở xào / Stir-fried pho",
          description: "Plato salteado con fideos de arroz, verduras, hierbas, cacahuetes asados, cebollas fritas con:",
          options: [
            { text: "• A. Ternera (12,90€) (Thịt bò / Beef)", highlight: true },
            { text: "• B. Gambas (11,90€) (Thịt tôm / Prawn)", highlight: false },
            { text: "• C. Pollo (11,90€) (Thịt gà / Chicken)", highlight: false },
            { text: "• D. Tofu (10,90€) (Đậu hũ / Tofu)", highlight: false },
            { text: "• E. Heura* (11,90€)", highlight: false }
          ]
        },
        en: {
          subtitle: "Stir-fried pho noodles",
          description: "Stir-fried rice noodles with vegetables, herbs, roasted peanuts, and fried onions with:",
          options: [
            { text: "• A. Beef (12,90€)", highlight: true },
            { text: "• B. Prawn (11,90€)", highlight: false },
            { text: "• C. Chicken (11,90€)", highlight: false },
            { text: "• D. Tofu (10,90€)", highlight: false },
            { text: "• E. Heura* (11,90€)", highlight: false }
          ]
        },
        vi: {
          subtitle: "Phở Xào",
          description: "Món xào với bánh phở, rau củ, rau thơm, đậu phộng rang, hành phi ăn kèm với:",
          options: [
            { text: "• A. Thịt bò (12,90€)", highlight: true },
            { text: "• B. Tôm (11,90€)", highlight: false },
            { text: "• C. Thịt gà (11,90€)", highlight: false },
            { text: "• D. Đậu hũ (10,90€)", highlight: false },
            { text: "• E. Heura* (11,90€)", highlight: false }
          ]
        },
        zh: {
          subtitle: "炒河粉",
          description: "河粉搭配蔬菜、香草、烤花生碎和油葱酥炒制，可选配：",
          options: [
            { text: "• A. 牛肉 (12,90€)", highlight: true },
            { text: "• B. 鲜虾 (11,90€)", highlight: false },
            { text: "• C. 鸡肉 (11,90€)", highlight: false },
            { text: "• D. 豆腐 (10,90€)", highlight: false },
            { text: "• E. 素肉 Heura* (11,90€)", highlight: false }
          ]
        },
        ko: {
          subtitle: "볶음 쌀국수",
          description: "야채, 허브, 구운 땅콩, 튀긴 양파를 곁들인 볶음 쌀국수:",
          options: [
            { text: "• A. 소고기 (12,90€)", highlight: true },
            { text: "• B. 새우 (11,90€)", highlight: false },
            { text: "• C. 닭고기 (11,90€)", highlight: false },
            { text: "• D. 두부 (10,90€)", highlight: false },
            { text: "• E. 식물성 고기 Heura* (11,90€)", highlight: false }
          ]
        },
        ja: {
          subtitle: "炒めフォー",
          description: "野菜、ハーブ、ローストピーナッツ、フライドオニオンを添えた炒め米粉麺：",
          options: [
            { text: "• A. 牛肉 (12,90€)", highlight: true },
            { text: "• B. エビ (11,90€)", highlight: false },
            { text: "• C. 鶏肉 (11,90€)", highlight: false },
            { text: "• D. 豆腐 (10,90€)", highlight: false },
            { text: "• E. 植物性肉 Heura* (11,90€)", highlight: false }
          ]
        },
        fr: {
          subtitle: "Nouilles Pho Sautées",
          description: "Nouilles de riz sautées avec légumes, herbes, cacahuètes grillées et oignons frits avec :",
          options: [
            { text: "• A. Bœuf (12,90€)", highlight: true },
            { text: "• B. Crevettes (11,90€)", highlight: false },
            { text: "• C. Poulet (11,90€)", highlight: false },
            { text: "• D. Tofu (10,90€)", highlight: false },
            { text: "• E. Heura* (11,90€)", highlight: false }
          ]
        },
        it: {
          subtitle: "Tagliatelle Pho Saltate",
          description: "Tagliatelle di riso saltate con verdure, erbe aromatiche, arachidi tostate e cipolle fritte con:",
          options: [
            { text: "• A. Manzo (12,90€)", highlight: true },
            { text: "• B. Gamberi (11,90€)", highlight: false },
            { text: "• C. Pollo (11,90€)", highlight: false },
            { text: "• D. Tofu (10,90€)", highlight: false },
            { text: "• E. Heura* (11,90€)", highlight: false }
          ]
        },
        price: '10,90€ - 12,90€',
        image: '/menu_phoxao.png'
      },
      {
        id: 'pho-xao-gion',
        name: '6. PHỞ XÀO GIÒN',
        es: {
          subtitle: "Phở xào giòn / Crispy fried pho",
          description: "Fideos de arroz fritos crujientes coronados con verduras salteadas y:",
          options: [
            { text: "• A. Ternera (13,90€) (Thịt bò / Beef)", highlight: true },
            { text: "• B. Gambas (12,90€) (Thịt tôm / Prawn)", highlight: false },
            { text: "• C. Pollo (12,90€) (Thịt gà / Chicken)", highlight: false },
            { text: "• D. Tofu (11,90€) (Đậu hũ / Tofu)", highlight: false },
            { text: "• E. Heura* (12,90€)", highlight: false }
          ]
        },
        en: {
          subtitle: "Crispy fried pho noodles",
          description: "Crispy fried rice noodles topped with stir-fried vegetables and:",
          options: [
            { text: "• A. Beef (13,90€)", highlight: true },
            { text: "• B. Prawn (12,90€)", highlight: false },
            { text: "• C. Chicken (12,90€)", highlight: false },
            { text: "• D. Tofu (11,90€)", highlight: false },
            { text: "• E. Heura* (12,90€)", highlight: false }
          ]
        },
        vi: {
          subtitle: "Phở Xào Giòn",
          description: "Bánh phở chiên giòn rụm bên trên là rau củ xào nêm nếm đậm đà cùng với:",
          options: [
            { text: "• A. Thịt bò (13,90€)", highlight: true },
            { text: "• B. Tôm (12,90€)", highlight: false },
            { text: "• C. Thịt gà (12,90€)", highlight: false },
            { text: "• D. Đậu hũ (11,90€)", highlight: false },
            { text: "• E. Heura* (12,90€)", highlight: false }
          ]
        },
        zh: {
          subtitle: "脆皮炒河粉",
          description: "香脆炸河粉搭配炒蔬菜，可选配：",
          options: [
            { text: "• A. 牛肉 (13,90€)", highlight: true },
            { text: "• B. 鲜虾 (12,90€)", highlight: false },
            { text: "• C. 鸡肉 (12,90€)", highlight: false },
            { text: "• D. 豆腐 (11,90€)", highlight: false },
            { text: "• E. 素肉 Heura* (12,90€)", highlight: false }
          ]
        },
        ko: {
          subtitle: "바삭한 볶음 쌀국수",
          description: "바삭하게 튀긴 쌀국수 위에 볶은 야채를 얹은 요리:",
          options: [
            { text: "• A. 소고기 (13,90€)", highlight: true },
            { text: "• B. 새우 (12,90€)", highlight: false },
            { text: "• C. 닭고기 (12,90€)", highlight: false },
            { text: "• D. 두부 (11,90€)", highlight: false },
            { text: "• E. 식물성 고기 Heura* (12,90€)", highlight: false }
          ]
        },
        ja: {
          subtitle: "かた焼きフォー",
          description: "パリパリに揚げた米粉麺に炒めた野菜をかけた一品：",
          options: [
            { text: "• A. 牛肉 (13,90€)", highlight: true },
            { text: "• B. エビ (12,90€)", highlight: false },
            { text: "• C. 鶏肉 (12,90€)", highlight: false },
            { text: "• D. 豆腐 (11,90€)", highlight: false },
            { text: "• E. 植物性肉 Heura* (12,90€)", highlight: false }
          ]
        },
        fr: {
          subtitle: "Nouilles Pho Croustillantes",
          description: "Nouilles de riz frites croustillantes garnies de légumes sautés avec :",
          options: [
            { text: "• A. Bœuf (13,90€)", highlight: true },
            { text: "• B. Crevettes (12,90€)", highlight: false },
            { text: "• C. Poulet (12,90€)", highlight: false },
            { text: "• D. Tofu (11,90€)", highlight: false },
            { text: "• E. Heura* (12,90€)", highlight: false }
          ]
        },
        it: {
          subtitle: "Tagliatelle Pho Croccanti",
          description: "Tagliatelle di riso fritte croccanti condite con verdure saltate con:",
          options: [
            { text: "• A. Manzo (13,90€)", highlight: true },
            { text: "• B. Gamberi (12,90€)", highlight: false },
            { text: "• C. Pollo (12,90€)", highlight: false },
            { text: "• D. Tofu (11,90€)", highlight: false },
            { text: "• E. Heura* (12,90€)", highlight: false }
          ]
        },
        price: '12,90€',
        image: '/menu_phoxaogion.png'
      },
      {
        id: 'pad-thai',
        name: '7. PAD THAI',
        es: {
          subtitle: "Pad Thái / Pad Thai",
          description: "Fideos de arroz salteados agridulces con camarones, verduras y huevos.",
          options: []
        },
        en: {
          subtitle: "Pad Thai",
          description: "Sweet and sour stir-fried rice noodles with shrimp, vegetables and eggs.",
          options: []
        },
        vi: {
          subtitle: "Pad Thái",
          description: "Bún gạo xào chua ngọt với tôm, rau và trứng.",
          options: []
        },
        zh: {
          subtitle: "泰式炒河粉",
          description: "酸甜味的泰式炒河粉，搭配鲜虾、蔬菜和鸡蛋。",
          options: []
        },
        ko: {
          subtitle: "팟타이",
          description: "새우, 야채, 계란과 함께 볶아낸 새콤달콤한 태국식 볶음 쌀국수.",
          options: []
        },
        ja: {
          subtitle: "パッタイ",
          description: "海老、野菜、卵と一緒に炒めた、甘酸っぱいタイ風炒め米粉麺。",
          options: []
        },
        fr: {
          subtitle: "Pad Thaï",
          description: "Nouilles de riz sautées aigre-douces avec crevettes, légumes et œufs.",
          options: []
        },
        it: {
          subtitle: "Pad Thai",
          description: "Tagliatelle di riso saltate in agrodolce con gamberi, verdure e uova.",
          options: []
        },
        price: '13,50€',
        image: '/menu_padthai.png'
      },
      {
        id: 'bun-thit-nuong',
        name: '8. BÚN THỊT NƯỚNG',
        es: {
          subtitle: "Bún thịt nướng / Grilled pork with vermicelli",
          description: "Fideos de arroz frescos con cerdo marinado a la parrilla, verduras frescas, hierbas, cacahuetes y salsa de pescado agridulce.",
          options: [{ text: "+ Con rollo frito (+3,00€) (Thêm chả giò / With fried spring roll)", highlight: false }]
        },
        en: {
          subtitle: "Grilled pork with rice vermicelli",
          description: "Fresh rice vermicelli with grilled marinated pork, fresh herbs, peanuts, salad and sweet and sour fish sauce.",
          options: [{ text: "+ With fried spring roll (+3,00€)", highlight: false }]
        },
        vi: {
          subtitle: "Bún Thịt Nướng",
          description: "Bún tươi ăn kèm thịt nướng thơm lừng, rau sống, lạc rang, hành phi và nước mắm chua ngọt.",
          options: [{ text: "+ Thêm chả giò chiên (+3,00€)", highlight: false }]
        },
        zh: {
          subtitle: "烤肉米粉",
          description: "米粉搭配烤肉、新鲜香草、花生碎、生菜和酸甜鱼露。",
          options: [{ text: "+ 加购炸春卷 (+3,00€)", highlight: false }]
        },
        ko: {
          subtitle: "숯불 돼지고기 비빔 쌀국수",
          description: "그릴에 구운 양념 돼지고기, 신선한 야채, 땅콩, 허브와 새콤달콤한 소스를 곁들인 비빔 쌀국수.",
          options: [{ text: "+ 스프링롤 추가 (+3,00€)", highlight: false }]
        },
        ja: {
          subtitle: "豚焼肉のせライスヌードル",
          description: "炭火風に焼いた味付け豚肉、新鮮な生野菜、ピーナッツ、ハーブに甘酸っぱい魚醤だれをかけた米粉麺。",
          options: [{ text: "+ 揚げ春巻き追加 (+3,00€)", highlight: false }]
        },
        fr: {
          subtitle: "Porc grillé avec vermicelles de riz",
          description: "Vermicelles de riz frais avec porc mariné grillé, herbes fraîches, cacahuètes, salade et sauce de poisson aigre-douce.",
          options: [{ text: "+ Avec rouleau de printemps frit (+3,00€)", highlight: false }]
        },
        it: {
          subtitle: "Maiale grigliato con vermicelli di riso",
          description: "Vermicelli di riso freschi con maiale grigliato marinato, erbe fresche, arachidi, insalata e salsa di pesce agrodolce.",
          options: [{ text: "+ Con involtino primavera fritto (+3,00€)", highlight: false }]
        },
        price: '11,90€',
        image: '/menu_bunthitnuong.png'
      },
      {
        id: 'bun-nem',
        name: '9. BÚN NEM',
        es: {
          subtitle: "Bún nem / Fried spring rolls with vermicelli",
          description: "Fideos de arroz con rollos de primavera fritos crujientes, verduras frescas, hierbas, cacahuetes y salsa de pescado.",
          options: []
        },
        en: {
          subtitle: "Fried spring rolls with rice vermicelli",
          description: "Rice vermicelli served with crispy fried spring rolls, fresh herbs, peanuts, salad and fish sauce.",
          options: []
        },
        vi: {
          subtitle: "Bún Nem",
          description: "Bún tươi ăn kèm nem rán giòn rụm, rau sống, lạc rang, hành phi và nước mắm chua ngọt.",
          options: []
        },
        zh: {
          subtitle: "春卷米粉",
          description: "米粉搭配香脆炸春卷、新鲜香草、花生碎、生菜和鱼露。",
          options: []
        },
        ko: {
          subtitle: "짜조 비빔 쌀국수",
          description: "바삭하게 튀긴 짜조, 신선한 야채, 땅콩, 허브와 느억맘 소스를 곁들인 쌀국수.",
          options: []
        },
        ja: {
          subtitle: "揚げ春巻きのせライスヌードル",
          description: "サクサクの揚げ春巻き、新鮮な生野菜、ピーナッツ、ハーブに甘酸っぱいたれをかけた米粉麺。",
          options: []
        },
        fr: {
          subtitle: "Rouleaux de printemps frits avec vermicelles",
          description: "Vermicelles de riz avec rouleaux de printemps croustillants, herbes fraîches, cacahuètes, salade et sauce de poisson.",
          options: []
        },
        it: {
          subtitle: "Involtini fritti con vermicelli di riso",
          description: "Vermicelli di riso con involtini primavera fritti croccanti, erbe fresche, arachidi, insalata e salsa.",
          options: []
        },
        price: '11,90€',
        image: '/menu_bunnem.png'
      },
      {
        id: 'bun-bo-nam-bo',
        name: '10. BÚN BÒ NAM BỘ',
        es: {
          subtitle: "Bún bò nam bộ / Southern-style beef noodles",
          description: "Plato salteado con fideos de arroz, verduras, hierbas, cacahuetes asados, cebollas fritas con:",
          options: [
            { text: "• A. Ternera (12,90€) (Thịt bò / Beef)", highlight: true },
            { text: "• B. Pollo (11,90€) (Thịt gà / Chicken)", highlight: false },
            { text: "• C. Tofu* (11,90€) (Đậu hũ / Tofu)", highlight: false },
            { text: "• D. Heura* (11,90€)", highlight: false },
            { text: "+ Con rollo frito (+3,00€) (Thêm chả giò chiên / With fried spring roll)", highlight: false }
          ]
        },
        en: {
          subtitle: "Southern-style beef noodles",
          description: "Stir-fried rice noodles with vegetables, herbs, roasted peanuts, and fried onions with:",
          options: [
            { text: "• A. Beef (12,90€)", highlight: true },
            { text: "• B. Chicken (11,90€)", highlight: false },
            { text: "• C. Tofu* (11,90€)", highlight: false },
            { text: "• D. Heura* (11,90€)", highlight: false },
            { text: "+ With fried spring roll (+3,00€)", highlight: false }
          ]
        },
        vi: {
          subtitle: "Bún Bò Nam Bộ",
          description: "Món xào với bún gạo, rau củ, rau thơm, đậu phộng rang, hành phi kèm với:",
          options: [
            { text: "• A. Thịt bò (12,90€)", highlight: true },
            { text: "• B. Thịt gà (11,90€)", highlight: false },
            { text: "• C. Đậu hũ* (11,90€)", highlight: false },
            { text: "• D. Heura* (11,90€)", highlight: false },
            { text: "+ Thêm chả giò chiên (+3,00€)", highlight: false }
          ]
        },
        zh: {
          subtitle: "越式南部拌粉",
          description: "米粉搭配炒蔬菜、香草、烤花生碎和油葱酥，可选配：",
          options: [
            { text: "• A. 牛肉 (12,90€)", highlight: true },
            { text: "• B. 鸡肉 (11,90€)", highlight: false },
            { text: "• C. 豆腐* (11,90€)", highlight: false },
            { text: "• D. 素肉 Heura* (11,90€)", highlight: false },
            { text: "+ 加购炸春卷 (+3,00€)", highlight: false }
          ]
        },
        ko: {
          subtitle: "남부식 비빔 쌀국수",
          description: "야채, 허브, 구운 땅콩, 튀긴 양파를 곁들인 비빔 쌀국수:",
          options: [
            { text: "• A. 소고기 (12,90€)", highlight: true },
            { text: "• B. 닭고기 (11,90€)", highlight: false },
            { text: "• C. 두부* (11,90€)", highlight: false },
            { text: "• D. 식물성 고기 Heura* (11,90€)", highlight: false },
            { text: "+ 스프링롤 추가 (+3,00€)", highlight: false }
          ]
        },
        ja: {
          subtitle: "南部風混ぜライスヌードル",
          description: "野菜,  ハーブ,  ローストピーナッツ,  フライドオニオンを添えた混ぜ米粉麺：",
          options: [
            { text: "• A. 牛肉 (12,90€)", highlight: true },
            { text: "• B. 鶏肉 (11,90€)", highlight: false },
            { text: "• C. 豆腐* (11,90€)", highlight: false },
            { text: "• D. 植物性肉 Heura* (11,90€)", highlight: false },
            { text: "+ 揚げ春巻き追加 (+3,00€)", highlight: false }
          ]
        },
        fr: {
          subtitle: "Salade de nouilles du Sud",
          description: "Nouilles de riz avec légumes, herbes, cacahuètes grillées et oignons frits avec :",
          options: [
            { text: "• A. Bœuf (12,90€)", highlight: true },
            { text: "• B. Poulet (11,90€)", highlight: false },
            { text: "• C. Tofu* (11,90€)", highlight: false },
            { text: "• D. Heura* (11,90€)", highlight: false },
            { text: "+ Avec rouleau de printemps frit (+3,00€)", highlight: false }
          ]
        },
        it: {
          subtitle: "Insalata di vermicelli del Sud",
          description: "Vermicelli di riso con verdure, erbe aromatiche, arachidi tostate e cipolle fritte con:",
          options: [
            { text: "• A. Manzo (12,90€)", highlight: true },
            { text: "• B. Pollo (11,90€)", highlight: false },
            { text: "• C. Tofu* (11,90€)", highlight: false },
            { text: "• D. Heura* (11,90€)", highlight: false },
            { text: "+ Con involtino primavera fritto (+3,00€)", highlight: false }
          ]
        },
        price: '11,90€ - 12,90€',
        image: '/menu_bunbonambo.png'
      },
      {
        id: 'bun-heo-quay',
        name: '11. BÚN TRỘN HEO QUAY',
        es: {
          subtitle: "Bun heo quay / Crispy roasted pork belly with vermicelli",
          description: "Fideos de arroz con panceta de cerdo crujiente asada, verduras frescas, hierbas, cacahuetes y salsa de pescado.",
          options: []
        },
        en: {
          subtitle: "Crispy roasted pork belly with rice vermicelli",
          description: "Rice vermicelli served with crispy roasted pork belly, fresh herbs, peanuts, salad and fish sauce.",
          options: []
        },
        vi: {
          subtitle: "Bún Trộn Heo Quay",
          description: "Bún tươi ăn kèm thịt heo quay da giòn, rau sống, lạc rang, hành phi và nước mắm chua ngọt.",
          options: []
        },
        zh: {
          subtitle: "脆皮烧肉拌粉",
          description: "米粉搭配脆皮烧肉、新鲜香草、花生碎、生菜和鱼露。",
          options: []
        },
        ko: {
          subtitle: "크리스피 삼겹살 비빔 쌀국수",
          description: "껍질을 바삭하게 구운 삼겹살, 신선한 야채, 땅콩, 허브와 새콤달콤한 소스를 곁들인 쌀국수.",
          options: []
        },
        ja: {
          subtitle: "クリスピー豚バラのせライスヌードル",
          description: "皮をカリカリに焼き上げた豚バラ肉、新鮮な生野菜、ピーナッツ、ハーブにタレをかけた米粉麺。",
          options: []
        },
        fr: {
          subtitle: "Poitrine de porc croustillante avec vermicelles",
          description: "Vermicelles de riz avec poitrine de porc rôtie croustillante, herbes fraîches, cacahuètes, salade et sauce.",
          options: []
        },
        it: {
          subtitle: "Pancetta croccante con vermicelli di riso",
          description: "Vermicelli di riso con pancetta di maiale arrosto croccante, erbe fresche, arachidi, insalata e salsa.",
          options: []
        },
        price: '11,90€',
        image: '/menu_bunheoquay.png'
      },
      {
        id: 'ternera-con-pimienta',
        name: '12. TERNERA CON PIMIENTA',
        es: {
          subtitle: "Bò sốt tiêu đen / Beef with black pepper sauce",
          description: "Este es un plato muy popular en las fiestas con un toque ligeramente picante, servido con:",
          options: [
            { text: "• A. Arroz (13,90€) (Cơm / Rice)", highlight: true },
            { text: "• B. Empanadillas (13,90€) (Há cảo / Dumplings)", highlight: false }
          ]
        },
        en: {
          subtitle: "Beef with black pepper sauce",
          description: "This is a very popular dish at parties with a slightly spicy touch, served with:",
          options: [
            { text: "• A. Rice (13,90€)", highlight: true },
            { text: "• B. Dumplings (13,90€)", highlight: false }
          ]
        },
        vi: {
          subtitle: "Bò Sốt Tiêu Đen",
          description: "Đây là món ăn rất được ưa chuộng trong các bữa tiệc, có vị hơi cay, thường được dùng kèm với:",
          options: [
            { text: "• A. Cơm (13,90€)", highlight: true },
            { text: "• B. Há cảo (13,90€)", highlight: false }
          ]
        },
        zh: {
          subtitle: "黑椒牛肉",
          description: "宴会上非常受欢迎的一道微辣菜肴，搭配：",
          options: [
            { text: "• A. 米饭 (13,90€)", highlight: true },
            { text: "• B. 饺子 (13,90€)", highlight: false }
          ]
        },
        ko: {
          subtitle: "블랙페퍼 소스 소고기 볶음",
          description: "파티에서 매우 인기 있는 약간 매콤한 요리로, 다음과 함께 제공됩니다:",
          options: [
            { text: "• A. 밥 (13,90€)", highlight: true },
            { text: "• B. 만두 (13,90€)", highlight: false }
          ]
        },
        ja: {
          subtitle: "黒胡椒ソース牛肉炒め",
          description: "パーティーで非常に人気の高い、少しスパイシーな料理。以下と一緒にお召し上がりください：",
          options: [
            { text: "• A. ライス (13,90€)", highlight: true },
            { text: "• B. 餃子 (13,90€)", highlight: false }
          ]
        },
        fr: {
          subtitle: "Bœuf sauce poivre noir",
          description: "C'est un plat très populaire lors des fêtes avec une touche légèrement épicée, servi avec :",
          options: [
            { text: "• A. Riz (13,90€)", highlight: true },
            { text: "• B. Raviolis (13,90€)", highlight: false }
          ]
        },
        it: {
          subtitle: "Manzo in salsa al pepe nero",
          description: "Questo è un piatto molto popolare alle feste con un tocco leggermente piccante, servito con:",
          options: [
            { text: "• A. Riso (13,90€)", highlight: true },
            { text: "• B. Ravioli (13,90€)", highlight: false }
          ]
        },
        price: '13,90€',
        image: '/menu_bo_tieu_den.png'
      },
      {
        id: 'ga-sot-lac',
        name: '13. POLLO CON SALSA DE CACAHUETE',
        es: {
          subtitle: "Gà sốt lạc / Chicken with peanut sauce",
          description: "Pollo salteado con verduras en una deliciosa y cremosa salsa de cacahuetes, servido con arroz jazmín.",
          options: []
        },
        en: {
          subtitle: "Chicken with peanut sauce",
          description: "Stir-fried chicken with vegetables in a rich and creamy peanut sauce, served with jasmine rice.",
          options: []
        },
        vi: {
          subtitle: "Gà Sốt Lạc",
          description: "Thịt gà xào rau củ sốt lạc béo ngậy, đậm đà, ăn kèm cơm trắng thơm dẻo.",
          options: []
        },
        zh: {
          subtitle: "花生酱炒鸡肉",
          description: "鸡肉与蔬菜在浓郁香甜的花生酱中炒制，附香米饭。",
          options: []
        },
        ko: {
          subtitle: "피넛 소스 치킨 볶음",
          description: "부드러운 피넛 소스에 야채와 함께 볶아낸 치킨 요리, 재스민 밥과 함께 제공됩니다.",
          options: []
        },
        ja: {
          subtitle: "ピーナッツソースチキン炒め",
          description: "濃厚でクリーミーなピーナッツソースで野菜とお肉を炒めた一品。ジャスミンライス添え。",
          options: []
        },
        fr: {
          subtitle: "Poulet sauce cacahuète",
          description: "Poulet sauté avec des légumes dans une sauce crémeuse aux cacahuètes, servi avec du riz jasmin.",
          options: []
        },
        it: {
          subtitle: "Pollo in salsa di arachidi",
          description: "Pollo saltato con verdure in una ricca e cremosa salsa di arachidi, servito con riso gelsomino.",
          options: []
        },
        price: '11,90€',
        image: '/menu_ga_sot_lac.png'
      },
      {
        id: 'tamarindo-salteado',
        name: '14. TAMARINDO SALTEADO',
        es: {
          subtitle: "Me xào / Stir-fried tamarind",
          description: "Excelente combinación de tamarindo, cacahuetes, verduras + arroz jazmín y:",
          options: [
            { text: "• A. Gambas (12,90€) (Thịt tôm / Prawn)", highlight: true },
            { text: "• B. Ternera (12,90€) (Thịt bò / Beef)", highlight: false },
            { text: "• C. Tofu* (11,90€) (Đậu hũ / Tofu)", highlight: false },
            { text: "• D. Heura* (11,90€)", highlight: false }
          ]
        },
        en: {
          subtitle: "Stir-fried tamarind",
          description: "Excellent combination of tamarind, peanuts, vegetables + jasmine rice and:",
          options: [
            { text: "• A. Prawn (12,90€)", highlight: true },
            { text: "• B. Beef (12,90€)", highlight: false },
            { text: "• C. Tofu* (11,90€)", highlight: false },
            { text: "• D. Heura* (11,90€)", highlight: false }
          ]
        },
        vi: {
          subtitle: "Me Xào",
          description: "Sự kết hợp tuyệt vời giữa sốt me, đậu phộng, rau củ + gạo thơm lài và:",
          options: [
            { text: "• A. Tôm (12,90€)", highlight: true },
            { text: "• B. Thịt bò (12,90€)", highlight: false },
            { text: "• C. Đậu hũ* (11,90€)", highlight: false },
            { text: "• D. Heura* (11,90€)", highlight: false }
          ]
        },
        zh: {
          subtitle: "酸子酱炒河粉",
          description: "酸子酱、花生、蔬菜搭配香米饭的绝妙组合，可选配：",
          options: [
            { text: "• A. 鲜虾 (12,90€)", highlight: true },
            { text: "• B. 牛肉 (12,90€)", highlight: false },
            { text: "• C. 豆腐* (11,90€)", highlight: false },
            { text: "• D. 素肉 Heura* (11,90€)", highlight: false }
          ]
        },
        ko: {
          subtitle: "타마린드 소스 볶음",
          description: "새콤달콤한 타마린드 소스, 땅콩, 야채의 조화, 재스민 밥과 함께 제공되며 선택 가능:",
          options: [
            { text: "• A. 새우 (12,90€)", highlight: true },
            { text: "• B. 소고기 (12,90€)", highlight: false },
            { text: "• C. 두부* (11,90€)", highlight: false },
            { text: "• D. 식물성 고기 Heura* (11,90€)", highlight: false }
          ]
        },
        ja: {
          subtitle: "タマリンド炒め",
          description: "タマリンドソース、ピーナッツ、野菜の絶妙な組み合わせ。ジャスミンライス添えで、以下から選択：",
          options: [
            { text: "• A. エビ (12,90€)", highlight: true },
            { text: "• B. 牛肉 (12,90€)", highlight: false },
            { text: "• C. 豆腐* (11,90€)", highlight: false },
            { text: "• D. 植物性肉 Heura* (11,90€)", highlight: false }
          ]
        },
        fr: {
          subtitle: "Sauté au tamarin",
          description: "Excellente combinaison de tamarin, cacahuètes, légumes + riz jasmin et :",
          options: [
            { text: "• A. Crevettes (12,90€)", highlight: true },
            { text: "• B. Bœuf (12,90€)", highlight: false },
            { text: "• C. Tofu* (11,90€)", highlight: false },
            { text: "• D. Heura* (11,90€)", highlight: false }
          ]
        },
        it: {
          subtitle: "Saltato al tamarindo",
          description: "Eccellente combinazione di tamarindo, arachidi, verdure + riso gelsomino e:",
          options: [
            { text: "• A. Gamberi (12,90€)", highlight: true },
            { text: "• B. Manzo (12,90€)", highlight: false },
            { text: "• C. Tofu* (11,90€)", highlight: false },
            { text: "• D. Heura* (11,90€)", highlight: false }
          ]
        },
        price: '11,90€ - 12,90€',
        image: '/menu_me_xao.png'
      },
      {
        id: 'thit-rang-tom',
        name: '15. CERDO CRUJIENTE CON CAMARÓN',
        es: {
          subtitle: "Thịt rang tôm / Caramelized pork and shrimp",
          description: "Panceta de cerdo y langostinos caramelizados en una salsa dulce y salada, servido con arroz jazmín.",
          options: []
        },
        en: {
          subtitle: "Caramelized pork and shrimp",
          description: "Pork belly and prawns caramelized in a savory sweet and salty sauce, served with jasmine rice.",
          options: []
        },
        vi: {
          subtitle: "Thịt Rang Tôm",
          description: "Thịt ba chỉ cháy cạnh cùng tôm đất rim mặn ngọt đậm đà, ăn kèm cơm trắng nóng hổi.",
          options: []
        },
        zh: {
          subtitle: "鲜虾焖五花肉",
          description: "五花肉与鲜虾在咸甜适口的酱汁中焖至入味，附香米饭。",
          options: []
        },
        ko: {
          subtitle: "새우 돼지고기 조림",
          description: "단짠 소스에 졸여낸 삼겹살과 새우 요리, 재스민 밥과 함께 제공됩니다.",
          options: []
        },
        ja: {
          subtitle: "豚バラと海老の甘辛炒め",
          description: "豚バラ肉とエビを甘辛くカラメル状に炒めたご飯が進む一品。ジャスミンライス添え。",
          options: []
        },
        fr: {
          subtitle: "Porc et crevettes caramélisés",
          description: "Poitrine de porc et crevettes caramélisés dans une sauce sucrée-salée, servis avec du riz jasmin.",
          options: []
        },
        it: {
          subtitle: "Maiale e gamberi caramellati",
          description: "Pancetta di maiale e gamberi caramellati in una salsa saporita dolce-salata, serviti con riso gelsomino.",
          options: []
        },
        price: '13,90€',
        image: '/menu_thit_rang_tom.png'
      },
      {
        id: 'costillas-de-cerdo-caramelizadas',
        name: '16. COSTILLAS DE CERDO CARAMELIZADAS',
        es: {
          subtitle: "Sườn ram mặn / Salty braised ribs",
          description: "Jugosas y tiernas costillas de cerdo asadas lentamente con salsa de caramelo + arroz jazmín.",
          options: []
        },
        en: {
          subtitle: "Salty braised ribs",
          description: "Juicy slow-roasted pork ribs with caramel sauce and jasmine rice.",
          options: []
        },
        vi: {
          subtitle: "Sườn Ram Mặn",
          description: "Sườn heo quay chậm mọng nước với sốt caramel ăn kèm gạo thơm lài.",
          options: []
        },
        zh: {
          subtitle: "焦糖排骨",
          description: "多汁嫩滑的慢烤猪排淋上焦糖酱，配上茉莉香米饭。",
          options: []
        },
        ko: {
          subtitle: "단짠 돼지갈비 구이",
          description: "재스민 밥과 함께 제공되는 달콤하고 짭조름한 소스의 부드러운 돼지갈비 요리.",
          options: []
        },
        ja: {
          subtitle: "スペアリブの甘辛煮",
          description: "ジューシーで柔らかいスペアリブを甘辛いタレでじっくり煮込んだ一品。ジャスミンライス添え。",
          options: []
        },
        fr: {
          subtitle: "Travers de Porc Caramelisés",
          description: "Travers de porc juteux et tendres rôtis lentamente avec sauce caramel, servis avec du riz jasmin.",
          options: []
        },
        it: {
          subtitle: "Costolette di Maiale Caramellate",
          description: "Costolette di maiale succose e tenere arrostite lentamente con salsa al caramello, servite con riso gelsomino.",
          options: []
        },
        price: '11,90€',
        image: '/menu_suon_ram.png'
      },
      {
        id: 'thit-kho-tau',
        name: '17. ESTOFADO DE PANCETA',
        es: {
          subtitle: "Thịt kho tàu / Caramelized pork belly with eggs",
          description: "Panceta de cerdo tierna estofada lentamente con agua de coco y salsa de soja, servida con huevo cocido y arroz jazmín.",
          options: []
        },
        en: {
          subtitle: "Caramelized pork belly with eggs",
          description: "Tender pork belly slow-braised in coconut water and soy sauce, served with a hard-boiled egg and jasmine rice.",
          options: []
        },
        vi: {
          subtitle: "Thịt Kho Tàu",
          description: "Thịt ba chỉ kho mềm rục cùng nước dừa và trứng vịt, vị béo ngậy đậm đà ăn kèm cơm trắng.",
          options: []
        },
        zh: {
          subtitle: "卤肉配蛋",
          description: "五花肉在椰子水和酱油中慢火卤至软烂，配卤蛋和香米饭。",
          options: []
        },
        ko: {
          subtitle: "베트남식 장조림 (틸코토)",
          description: "코코넛 워터와 간장에 푹 졸여 부드러운 삼겹살과 삶은 계란 요리, 재스민 밥 제공.",
          options: []
        },
        ja: {
          subtitle: "豚バラ肉と卵のココナッツ煮",
          description: "豚バラ肉をココナッツウォーターと醤油で柔らかく煮込み、ゆで卵を添えたベトナムの家庭料理。ジャスミンライス添え。",
          options: []
        },
        fr: {
          subtitle: "Poitrine de porc caramélisée aux œufs",
          description: "Poitrine de porc tendre mijotée lentement dans de l'eau de coco et de la sauce soja, servie avec un œuf dur et du riz jasmin.",
          options: []
        },
        it: {
          subtitle: "Pancetta caramellata con uova",
          description: "Tenera pancetta di maiale stufata lentamente in acqua di cocco e salsa di soia, servita con un uovo sodo e riso gelsomino.",
          options: []
        },
        price: '11,90€',
        image: '/menu_thit_kho_tau.png'
      },
      {
        id: 'ba-chi-quay',
        name: '19. BA CHỈ QUAY',
        es: {
          subtitle: "Ba chỉ quay / Roasted pork belly",
          description: "Panceta de cerdo asada con piel crujiente, servida con una salsa especial.",
          options: []
        },
        en: {
          subtitle: "Roasted pork belly",
          description: "Roasted pork belly with crispy skin, served with a special sauce.",
          options: []
        },
        vi: {
          subtitle: "Ba Chỉ Quay",
          description: "Thịt ba chỉ nướng với lớp da giòn rụm, ăn kèm với nước chấm đặc biệt.",
          options: []
        },
        zh: {
          subtitle: "脆皮烧肉",
          description: "烤至表皮酥脆的五花肉，附特制蘸酱。",
          options: []
        },
        ko: {
          subtitle: "크리스피 껍질 돼지 삼겹살 구이",
          description: "껍질을 바삭하게 구운 삼겹살 요리, 특제 소스 포함.",
          options: []
        },
        ja: {
          subtitle: "カリカリ皮付き豚バラロースト",
          description: "皮をカリカリに焼き上げた豚バラ肉のロースト。特製ソース添え。",
          options: []
        },
        fr: {
          subtitle: "Poitrine de Porc Rôtie Croustillante",
          description: "Poitrine de porc rôtie avec couenne croustillante, servie avec une sauce spéciale.",
          options: []
        },
        it: {
          subtitle: "Pancetta di Maiale Arrosto Croccante",
          description: "Pancetta di maiale arrosto con cotenna croccante, servita con una salsa speciale.",
          options: []
        },
        price: '12,90€',
        image: '/menu_ba_chi_quay.png'
      },
      {
        id: 'dau-hu-tam-xi-dau',
        name: '20. ĐẬU HŨ TẨM XÌ DẦU',
        es: {
          subtitle: "Đậu hũ tẩm xì dầu / Tofu in soy sauce",
          description: "Tofu frito crujiente salteado con salsa de soja sazonada, ajo y cebollín, servido con arroz jazmín.",
          options: []
        },
        en: {
          subtitle: "Tofu in soy sauce",
          description: "Crispy fried tofu stir-fried with seasoned soy sauce, garlic and scallions, served with jasmine rice.",
          options: []
        },
        vi: {
          subtitle: "Đậu Hũ Tẩm Xì Dầu",
          description: "Đậu hũ rán giòn rưới nước tương tỏi ớt hành lá đậm đà, ăn kèm cơm trắng.",
          options: []
        },
        zh: {
          subtitle: "酱油豆腐",
          description: "香脆炸豆腐与调味酱油、大蒜和青葱一同翻炒，附白米饭。",
          options: []
        },
        ko: {
          subtitle: "양념간장 두부 부침",
          description: "바삭하게 부친 두부에 마늘, 파를 넣은 양념간장을 곁들인 요리, 재스민 밥 제공.",
          options: []
        },
        ja: {
          subtitle: "豆腐の醤油たれ和え",
          description: "カリッと揚げた豆腐に、にんにくとネギを効かせた醤油だれを絡めた一品。ジャスミンライス添え。",
          options: []
        },
        fr: {
          subtitle: "Tofu à la sauce soja",
          description: "Tofu frit croustillant sauté avec sauce soja assaisonnée, ail et ciboule, servi avec du riz jasmin.",
          options: []
        },
        it: {
          subtitle: "Tofu in salsa di soia",
          description: "Tofu fritto croccante saltato con salsa di soia condita, aglio e cipollotti, servito con riso gelsomino.",
          options: []
        },
        price: '10,90€',
        image: '/menu_dau_hu_xi_dau.png'
      },
      {
        id: 'com-chien',
        name: '21. ARROZ FRITO',
        es: {
          subtitle: "Cơm chiên / Fried rice",
          description: "Arroz jazmín salteado al wok con verduras frescas y huevo, con opción de:",
          options: [
            { text: "• A. Pollo (11,90€) (Thịt gà)", highlight: true },
            { text: "• B. Gambas (12,90€) (Thịt tôm)", highlight: false }
          ]
        },
        en: {
          subtitle: "Vietnamese fried rice",
          description: "Wok-tossed jasmine rice with fresh vegetables and egg, with choice of:",
          options: [
            { text: "• A. Chicken (11,90€)", highlight: true },
            { text: "• B. Prawn (12,90€)", highlight: false }
          ]
        },
        vi: {
          subtitle: "Cơm Chiên",
          description: "Cơm chiên tơi xốp xào cùng rau củ quả và trứng, kèm lựa chọn:",
          options: [
            { text: "• A. Thịt gà (11,90€)", highlight: true },
            { text: "• B. Tôm (12,90€)", highlight: false }
          ]
        },
        zh: {
          subtitle: "越式炒饭",
          description: "大火翻炒的茉莉香米饭搭配新鲜蔬菜 and 鸡蛋，可选配：",
          options: [
            { text: "• A. 鸡肉 (11,90€)", highlight: true },
            { text: "• B. 鲜虾 (12,90€)", highlight: false }
          ]
        },
        ko: {
          subtitle: "베트남식 볶음밥",
          description: "야채, 계란과 함께 웍에서 볶아낸 재스민 볶음밥, 선택 가능:",
          options: [
            { text: "• A. 닭고기 (11,90€)", highlight: true },
            { text: "• B. 새우 (12,90€)", highlight: false }
          ]
        },
        ja: {
          subtitle: "ベトナム風チャーハン",
          description: "新鮮な野菜と卵を一緒にパラパラに炒めたジャスミン米のチャーハン。以下から選択：",
          options: [
            { text: "• A. 鶏肉 (11,90€)", highlight: true },
            { text: "• B. エ비 (12,90€)", highlight: false }
          ]
        },
        fr: {
          subtitle: "Riz sauté vietnamien",
          description: "Riz jasmin sauté au wok avec légumes frais et œuf, avec choix de :",
          options: [
            { text: "• A. Poulet (11,90€)", highlight: true },
            { text: "• B. Crevettes (12,90€)", highlight: false }
          ]
        },
        it: {
          subtitle: "Riso fritto vietnamita",
          description: "Riso gelsomino saltato al wok con verdure fresche e uovo, con scelta di:",
          options: [
            { text: "• A. Pollo (11,90€)", highlight: true },
            { text: "• B. Gamberi (12,90€)", highlight: false }
          ]
        },
        price: '11,90€ - 12,90€',
        image: '/menu_com_chien.png'
      },
      {
        id: 'com-thit-sot-xi-dau',
        name: '22. CƠM THỊT SỐT XÌ DẦU',
        es: {
          subtitle: "Cơm thịt sốt xì dầu / Rice with meat in soy sauce",
          description: "La carne se fríe y se sirve con salsa de soja sazonada.",
          options: [
            { text: "• A. Pato (13,90€) (Thịt vịt / Duck meat)", highlight: true },
            { text: "• B. Pollo (11,90€) (Thịt gà / Chicken)", highlight: false }
          ]
        },
        en: {
          subtitle: "Rice with meat in soy sauce",
          description: "The meat is fried and served with seasoned soy sauce.",
          options: [
            { text: "• A. Duck (13,90€)", highlight: true },
            { text: "• B. Chicken (11,90€)", highlight: false }
          ]
        },
        vi: {
          subtitle: "Cơm Thịt Sốt Xì Dầu",
          description: "Thịt được chiên và ăn kèm với nước tương nêm gia vị.",
          options: [
            { text: "• A. Thịt vịt (13,90€)", highlight: true },
            { text: "• B. Thịt gà (11,90€)", highlight: false }
          ]
        },
        zh: {
          subtitle: "酱油肉配米饭",
          description: "肉类炸至金黄，淋上调味酱油，搭配白米饭。",
          options: [
            { text: "• A. 鸭肉 (13,90€)", highlight: true },
            { text: "• B. 鸡肉 (11,90€)", highlight: false }
          ]
        },
        ko: {
          subtitle: "간장 소스 고기 덮밥",
          description: "구운 고기에 양념 간장 소스를 곁들여 밥과 함께 제공하는 요리:",
          options: [
            { text: "• A. 오리고기 (13,90€)", highlight: true },
            { text: "• B. 닭고기 (11,90€)", highlight: false }
          ]
        },
        ja: {
          subtitle: "お肉の醤油たれ炒めライス",
          description: "カリッと揚げたお肉に味付け醤油だれをかけた一品。白ご飯添え：",
          options: [
            { text: "• A. 鴨肉 (13,90€)", highlight: true },
            { text: "• B. 鶏肉 (11,90€)", highlight: false }
          ]
        },
        fr: {
          subtitle: "Riz avec viande sauce soja",
          description: "La viande est frite et servie avec une sauce soja assaisonnée.",
          options: [
            { text: "• A. Canard (13,90€)", highlight: true },
            { text: "• B. Poulet (11,90€)", highlight: false }
          ]
        },
        it: {
          subtitle: "Riso con carne in salsa di soia",
          description: "La carne viene fritta e servita con salsa di soia condita.",
          options: [
            { text: "• A. Anatra (13,90€)", highlight: true },
            { text: "• B. Pollo (11,90€)", highlight: false }
          ]
        },
        price: '11,90€ - 13,90€',
        image: '/menu_com_thit_xi_dau.png'
      },
      {
        id: 'com-thit-sot-mam-toi',
        name: '23. CƠM THỊT SỐT MẮM TỎI',
        es: {
          subtitle: "Cơm thịt sốt mắm tỏi / Rice with meat in garlic fish sauce",
          description: "La carne se fríe crujiente y se baña en una aromática salsa de pescado con ajo, servida con arroz blanco.",
          options: [
            { text: "• A. Pato (13,90€) (Thịt vịt / Duck meat)", highlight: true },
            { text: "• B. Pollo (11,90€) (Thịt gà / Chicken)", highlight: false }
          ]
        },
        en: {
          subtitle: "Rice with meat in garlic fish sauce",
          description: "The meat is fried crispy and coated in an aromatic garlic fish sauce, served with white rice.",
          options: [
            { text: "• A. Duck (13,90€)", highlight: true },
            { text: "• B. Chicken (11,90€)", highlight: false }
          ]
        },
        vi: {
          subtitle: "Cơm Thịt Sốt Mắm Tỏi",
          description: "Thịt được chiên và ăn kèm với nước sốt mắm tỏi thơm ngon.",
          options: [
            { text: "• A. Thịt vịt (13,90€)", highlight: true },
            { text: "• B. Thịt gà (11,90€)", highlight: false }
          ]
        },
        zh: {
          subtitle: "蒜香鱼露肉配米饭",
          description: "肉类炸至金黄，裹上香气扑鼻的蒜香鱼露酱汁，附白米饭。",
          options: [
            { text: "• A. 鸭肉 (13,90€)", highlight: true },
            { text: "• B. 鸡肉 (11,90€)", highlight: false }
          ]
        },
        ko: {
          subtitle: "마늘 피시소스 고기 덮밥",
          description: "바삭하게 튀긴 고기에 향긋한 마늘 피시소스를 버무려 밥과 함께 제공:",
          options: [
            { text: "• A. 오리고기 (13,90€)", highlight: true },
            { text: "• B. 닭고기 (11,90€)", highlight: false }
          ]
        },
        ja: {
          subtitle: "にんにくナンプラーお肉炒めライス",
          description: "カリッと揚げたお肉に、風味豊かなにんにくナンプラーだれを絡めた一品。白ご飯添え：",
          options: [
            { text: "• A. 鴨肉 (13,90€)", highlight: true },
            { text: "• B. 鶏肉 (11,90€)", highlight: false }
          ]
        },
        fr: {
          subtitle: "Riz avec viande sauce poisson ail",
          description: "La viande est frite croustillante et nappée d'une sauce de poisson à l'ail, servie avec du riz blanc.",
          options: [
            { text: "• A. Canard (13,90€)", highlight: true },
            { text: "• B. Poulet (11,90€)", highlight: false }
          ]
        },
        it: {
          subtitle: "Riso con carne in salsa agrodolce all'aglio",
          description: "La carne viene fritta croccante e condita con una salsa di pesce all'aglio, servita con riso bianco.",
          options: [
            { text: "• A. Anatra (13,90€)", highlight: true },
            { text: "• B. Pollo (11,90€)", highlight: false }
          ]
        },
        price: '11,90€ - 13,90€',
        image: '/menu_com_thit_mam_toi.png'
      },
      {
        id: 'com-thit-chien-gung',
        name: '24. CƠM THỊT CHIÊN GỪNG',
        es: {
          subtitle: "Cơm thịt chiên gừng / Rice with fried ginger meat",
          description: "La carne se marina con especias mezcladas con jengibre fresco y luego se fríe.",
          options: [
            { text: "• A. Pato (13,90€) (Thịt vịt / Duck meat)", highlight: true },
            { text: "• B. Pollo (11,90€) (Thịt gà / Chicken)", highlight: false },
            { text: "• C. Cerdo (12,90€) (Thịt heo / Pork)", highlight: false }
          ]
        },
        en: {
          subtitle: "Rice with fried ginger meat",
          description: "The meat is marinated with spices mixed with fresh ginger and then fried.",
          options: [
            { text: "• A. Duck (13,90€)", highlight: true },
            { text: "• B. Chicken (11,90€)", highlight: false },
            { text: "• C. Pork (12,90€)", highlight: false }
          ]
        },
        vi: {
          subtitle: "Cơm Thịt Chiên Gừng",
          description: "Thịt được ướp với các loại gia vị trộn với gừng tươi rồi chiên.",
          options: [
            { text: "• A. Thịt vịt (13,90€)", highlight: true },
            { text: "• B. Thịt gà (11,90€)", highlight: false },
            { text: "• C. Thịt heo (12,90€)", highlight: false }
          ]
        },
        zh: {
          subtitle: "姜炒肉配米饭",
          description: "肉类用香料和鲜生姜腌制，然后炸至金黄，附白米饭。",
          options: [
            { text: "• A. 鸭肉 (13,90€)", highlight: true },
            { text: "• B. 鸡肉 (11,90€)", highlight: false },
            { text: "• C. 猪肉 (12,90€)", highlight: false }
          ]
        },
        ko: {
          subtitle: "생강 고기 볶음 덮밥",
          description: "신선한 생강과 향신료로 마리네이드한 고기를 볶아낸 요리, 밥 제공:",
          options: [
            { text: "• A. 오리고기 (13,90€)", highlight: true },
            { text: "• B. 닭고기 (11,90€)", highlight: false },
            { text: "• C. 돼지고기 (12,90€)", highlight: false }
          ]
        },
        ja: {
          subtitle: "豚肉とお肉の生姜炒めライス",
          description: "お肉を生姜と香辛料でマリネし、炒めた一品。白ご飯添え：",
          options: [
            { text: "• A. 鴨肉 (13,90€)", highlight: true },
            { text: "• B. 鶏肉 (11,90€)", highlight: false },
            { text: "• C. 豚肉 (12,90€)", highlight: false }
          ]
        },
        fr: {
          subtitle: "Riz avec viande frite au gingembre",
          description: "La viande est marinée avec des épices et du gingembre frais, puis frite.",
          options: [
            { text: "• A. Canard (13,90€)", highlight: true },
            { text: "• B. Poulet (11,90€)", highlight: false },
            { text: "• C. Porc (12,90€)", highlight: false }
          ]
        },
        it: {
          subtitle: "Riso con carne allo zenzero",
          description: "La carne viene marinata con spezie e zenzero fresco, poi fritta.",
          options: [
            { text: "• A. Anatra (13,90€)", highlight: true },
            { text: "• B. Pollo (11,90€)", highlight: false },
            { text: "• C. Maiale (12,90€)", highlight: false }
          ]
        },
        price: '11,90€ - 13,90€',
        image: '/menu_com_chiengung.png'
      },
      {
        id: 'com-thit-nuong',
        name: '25. CƠM THỊT NƯỚNG',
        es: {
          subtitle: "Cơm thịt nướng / Rice with grilled meat",
          description: "La carne se marina con especias tradicionales y se asa a la parrilla, servida con arroz blanco.",
          options: [
            { text: "• A. Pato (13,90€) (Thịt vịt / Duck meat)", highlight: true },
            { text: "• B. Pollo (11,90€) (Thịt gà / Chicken)", highlight: false },
            { text: "• C. Cerdo (12,90€) (Thịt heo / Pork)", highlight: false }
          ]
        },
        en: {
          subtitle: "Rice with grilled meat",
          description: "The meat is marinated with traditional spices and grilled to perfection, served with white rice.",
          options: [
            { text: "• A. Duck (13,90€)", highlight: true },
            { text: "• B. Chicken (11,90€)", highlight: false },
            { text: "• C. Pork (12,90€)", highlight: false }
          ]
        },
        vi: {
          subtitle: "Cơm Thịt Nướng",
          description: "Thịt được ướp gia vị và nướng trên vỉ than.",
          options: [
            { text: "• A. Thịt vịt (13,90€)", highlight: true },
            { text: "• B. Thịt gà (11,90€)", highlight: false },
            { text: "• C. Thịt heo (12,90€)", highlight: false }
          ]
        },
        zh: {
          subtitle: "烤肉配米饭",
          description: "肉类用传统香料腌制并烤至完美，附白米饭。",
          options: [
            { text: "• A. 鸭肉 (13,90€)", highlight: true },
            { text: "• B. 鸡肉 (11,90€)", highlight: false },
            { text: "• C. 猪肉 (12,90€)", highlight: false }
          ]
        },
        ko: {
          subtitle: "석쇠 그릴 고기 구이 덮밥",
          description: "전통 양념으로 마리네이드하여 석쇠에 구운 고기 요리, 밥 제공:",
          options: [
            { text: "• A. 오리고기 (13,90€)", highlight: true },
            { text: "• B. 닭고기 (11,90€)", highlight: false },
            { text: "• C. 돼지고기 (12,90€)", highlight: false }
          ]
        },
        ja: {
          subtitle: "グリルお肉炒めライス",
          description: "伝統的な香辛料でマリネし、ジューシーに焼き上げたお肉。白ご飯添え：",
          options: [
            { text: "• A. 鴨肉 (13,90€)", highlight: true },
            { text: "• B. 鶏肉 (11,90€)", highlight: false },
            { text: "• C. 豚肉 (12,90€)", highlight: false }
          ]
        },
        fr: {
          subtitle: "Riz avec viande grillée",
          description: "La viande is marinée avec des épices traditionnelles et grillée à la perfection, servie avec du riz blanc.",
          options: [
            { text: "• A. Canard (13,90€)", highlight: true },
            { text: "• B. Poulet (11,90€)", highlight: false },
            { text: "• C. Porc (12,90€)", highlight: false }
          ]
        },
        it: {
          subtitle: "Riso con carne grigliata",
          description: "La carne viene marinata con spezie tradizionali e grigliata alla perfezione, servita con riso bianco.",
          options: [
            { text: "• A. Anatra (13,90€)", highlight: true },
            { text: "• B. Pollo (11,90€)", highlight: false },
            { text: "• C. Maiale (12,90€)", highlight: false }
          ]
        },
        price: '11,90€ - 13,90€',
        image: '/menu_com_thitnuong.png'
      },
      {
        id: 'com-goi-tron',
        name: '26. CƠM GỎI TRỘN',
        es: {
          subtitle: "Cơm gỏi trộn / Vietnamese rice bowl with mixed salad",
          description: "La salsa agridulce mezclada con verduras y carne, servida con arroz blanco.",
          options: [
            { text: "• A. Pato (13,90€) (Thịt vịt / Duck meat)", highlight: true },
            { text: "• B. Pollo (12,90€) (Thịt gà / Chicken)", highlight: false },
            { text: "• C. Gambas (12,90€) (Thịt tôm / Prawn)", highlight: false },
            { text: "• D. Cerdo (12,90€) (Thịt heo / Pork)", highlight: false }
          ]
        },
        en: {
          subtitle: "Vietnamese rice bowl with mixed salad",
          description: "Sweet and sour sauce mixed with vegetables and meat, served with white rice.",
          options: [
            { text: "• A. Duck (13,90€)", highlight: true },
            { text: "• B. Chicken (12,90€)", highlight: false },
            { text: "• C. Prawn (12,90€)", highlight: false },
            { text: "• D. Pork (12,90€)", highlight: false }
          ]
        },
        vi: {
          subtitle: "Cơm Gỏi Trộn",
          description: "Nước sốt chua ngọt trộn với rau và thịt, ăn kèm với cơm trắng.",
          options: [
            { text: "• A. Thịt vịt (13,90€)", highlight: true },
            { text: "• B. Thịt gà (12,90€)", highlight: false },
            { text: "• C. Tôm (12,90€)", highlight: false },
            { text: "• D. Thịt heo (12,90€)", highlight: false }
          ]
        },
        zh: {
          subtitle: "越式沙拉拌饭",
          description: "酸甜酱汁拌入蔬菜和肉类，搭配白米饭。",
          options: [
            { text: "• A. 鸭肉 (13,90€)", highlight: true },
            { text: "• B. 鸡肉 (12,90€)", highlight: false },
            { text: "• C. 鲜虾 (12,90€)", highlight: false },
            { text: "• D. 猪肉 (12,90€)", highlight: false }
          ]
        },
        ko: {
          subtitle: "비빔밥 스타일 라이스 보울",
          description: "새콤달콤한 소스에 야채와 고기를 비벼 먹는 베트남식 덮밥:",
          options: [
            { text: "• A. 오리고기 (13,90€)", highlight: true },
            { text: "• B. 닭고기 (12,90€)", highlight: false },
            { text: "• C. 새우 (12,90€)", highlight: false },
            { text: "• D. 돼지고기 (12,90€)", highlight: false }
          ]
        },
        ja: {
          subtitle: "越式まぜビビンバ",
          description: "甘酸っぱいたれで野菜とお肉を和え、白ご飯と合わせた丼もの：",
          options: [
            { text: "• A. 鴨肉 (13,90€)", highlight: true },
            { text: "• B. 鶏肉 (12,90€)", highlight: false },
            { text: "• C. エビ (12,90€)", highlight: false },
            { text: "• D. 豚肉 (12,90€)", highlight: false }
          ]
        },
        fr: {
          subtitle: "Bol de riz avec salade mélangée",
          description: "Sauce aigre-douce mélangée avec des légumes et de la viande, servie avec du riz blanc.",
          options: [
            { text: "• A. Canard (13,90€)", highlight: true },
            { text: "• B. Poulet (12,90€)", highlight: false },
            { text: "• C. Crevettes (12,90€)", highlight: false },
            { text: "• D. Porc (12,90€)", highlight: false }
          ]
        },
        it: {
          subtitle: "Ciotola di riso con insalata mista",
          description: "Salsa agrodolce mescolata con verdure e carne, servita con riso bianco.",
          options: [
            { text: "• A. Anatra (13,90€)", highlight: true },
            { text: "• B. Pollo (12,90€)", highlight: false },
            { text: "• C. Gamberi (12,90€)", highlight: false },
            { text: "• D. Maiale (12,90€)", highlight: false }
          ]
        },
        price: '11,90€ - 12,90€',
        image: '/menu_com_goi_tron.png'
      },
      {
        id: 'pollo-especial',
        name: '27. POLLO ESPECIAL',
        es: {
          subtitle: "Gà đặc biệt / Special chicken",
          description: "Pollo salteado con cebolla y una salsa especial premium de la casa, servido con arroz jazmín.",
          options: []
        },
        en: {
          subtitle: "Special chicken",
          description: "Stir-fried chicken with onions and a premium house special sauce, served with jasmine rice.",
          options: []
        },
        vi: {
          subtitle: "Gà Đặc Biệt",
          description: "Thịt gà xào hành tây cùng nước sốt đặc biệt thượng hạng của nhà hàng, ăn kèm cơm trắng.",
          options: []
        },
        zh: {
          subtitle: "特制鸡肉",
          description: "鸡肉与洋葱在餐厅特制高级酱汁中翻炒，附香米饭。",
          options: []
        },
        ko: {
          subtitle: "스페셜 치킨",
          description: "양파와 함께 하우스 특제 프리미엄 소스에 볶아낸 치킨 요리, 재스민 밥 제공.",
          options: []
        },
        ja: {
          subtitle: "特製チキン",
          description: "玉ねぎとお肉をハウス特製のプレミアムソースで炒めた一品。ジャスミンライス添え。",
          options: []
        },
        fr: {
          subtitle: "Poulet spécial",
          description: "Poulet sauté aux oignons avec une sauce spéciale maison de qualité supérieure, servi avec du riz jasmin.",
          options: []
        },
        it: {
          subtitle: "Pollo speciale",
          description: "Pollo saltato con cipolle in una speciale salsa premium della casa, servito con riso gelsomino.",
          options: []
        },
        price: '11,90€',
        image: '/menu_pollo_especial.png'
      },
      {
        id: 'curry',
        name: '28. CURRY',
        es: {
          subtitle: "Cà ri / Curry",
          description: "Curry Increíblemente aromático con salsa de coco + arroz jazmín con:",
          options: [
            { text: "• A. Gambas (12,90€) (Thịt tôm / Prawn)", highlight: true },
            { text: "• B. Pollo (11,90€) (Thịt gà / Chicken)", highlight: false },
            { text: "• C. Tofu (10,90€) (Đậu hũ / Tofu)", highlight: false },
            { text: "• D. Heura* (11,90€)", highlight: false }
          ]
        },
        en: {
          subtitle: "Curry",
          description: "Incredibly aromatic curry with coconut sauce + jasmine rice with:",
          options: [
            { text: "• A. Prawn (12,90€)", highlight: true },
            { text: "• B. Chicken (11,90€)", highlight: false },
            { text: "• C. Tofu (10,90€)", highlight: false },
            { text: "• D. Heura* (11,90€)", highlight: false }
          ]
        },
        vi: {
          subtitle: "Cà Ri",
          description: "Cà ri thơm lừng với nước cốt dừa + cơm trắng thơm ngát kèm:",
          options: [
            { text: "• A. Tôm (12,90€)", highlight: true },
            { text: "• B. Thịt gà (11,90€)", highlight: false },
            { text: "• C. Đậu hũ (10,90€)", highlight: false },
            { text: "• D. Thịt thực vật Heura* (11,90€)", highlight: false }
          ]
        },
        zh: {
          subtitle: "咖喱饭",
          description: "香气浓郁的椰香咖喱，搭配香米饭，可选配：",
          options: [
            { text: "• A. 鲜虾 (12,90€)", highlight: true },
            { text: "• B. 鸡肉 (11,90€)", highlight: false },
            { text: "• C. 豆腐 (10,90€)", highlight: false },
            { text: "• D. 素肉 Heura* (11,90€)", highlight: false }
          ]
        },
        ko: {
          subtitle: "카레",
          description: "코코넛 밀크를 넣어 향긋한 카레, 재스민 밥 제공 및 선택 가능:",
          options: [
            { text: "• A. 새우 (12,90€)", highlight: true },
            { text: "• B. 닭고기 (11,90€)", highlight: false },
            { text: "• C. 두부 (10,90€)", highlight: false },
            { text: "• D. 식물성 고기 Heura* (11,90€)", highlight: false }
          ]
        },
        ja: {
          subtitle: "カレー",
          description: "ココナッツミルクの風味豊かな香り高いカレー。ジャスミンライス添えで、以下から選択：",
          options: [
            { text: "• A. エビ (12,90€)", highlight: true },
            { text: "• B. 鶏肉 (11,90€)", highlight: false },
            { text: "• C. 豆腐 (10,90€)", highlight: false },
            { text: "• D. 植物性肉 Heura* (11,90€)", highlight: false }
          ]
        },
        fr: {
          subtitle: "Curry",
          description: "Curry incroyablement aromatique à la sauce coco + riz jasmin avec :",
          options: [
            { text: "• A. Crevettes (12,90€)", highlight: true },
            { text: "• B. Poulet (11,90€)", highlight: false },
            { text: "• C. Tofu (10,90€)", highlight: false },
            { text: "• D. Heura* (11,90€)", highlight: false }
          ]
        },
        it: {
          subtitle: "Curry",
          description: "Curry incredibilmente aromatico con salsa al cocco + riso gelsomino con:",
          options: [
            { text: "• A. Gamberi (12,90€)", highlight: true },
            { text: "• B. Pollo (11,90€)", highlight: false },
            { text: "• C. Tofu (10,90€)", highlight: false },
            { text: "• D. Heura* (11,90€)", highlight: false }
          ]
        },
        price: '11,90€ - 12,90€',
        image: '/menu_curry.png'
      }
    ],
    desserts: [
      {
        id: 'pudin-de-platano',
        name: 'Chè Chuối',
        es: {
          subtitle: "Pudin Caliente con Plátano",
          description: "Pudin caliente con plátano y leche de coco con perlas de tapioca.",
          options: []
        },
        en: {
          subtitle: "Vietnamese Banana Tapioca Pudding",
          description: "Warm banana and coconut milk pudding with tapioca pearls.",
          options: []
        },
        vi: {
          subtitle: "Chè Chuối",
          description: "Chè chuối và sữa dừa ấm với hạt trân châu.",
          options: []
        },
        zh: {
          subtitle: "椰香香蕉西米露",
          description: "热腾腾的香蕉椰奶布丁，搭配西米珍珠。",
          options: []
        },
        ko: {
          subtitle: "베트남식 따뜻한 바나나 타피오카 푸딩",
          description: "타피오카 펄을 넣은 따뜻한 바나나와 코코넛 밀크 푸딩.",
          options: []
        },
        ja: {
          subtitle: "ベトナム風温かいバナナのタピオカプディング",
          description: "タピオカパールが入った、温かいバナナとココナッツミルクのデザート。",
          options: []
        },
        fr: {
          subtitle: "Pudding Chaud à la Banane et au Tapioca",
          description: "Pudding chaud à la banane et au lait de coco avec des perles de tapioca.",
          options: []
        },
        it: {
          subtitle: "Budino Caldo di Banana e Tapioca",
          description: "Budino caldo di banana e latte di cocco con perle di tapioca.",
          options: []
        },
        price: '4,90€',
        image: '/menu_chechuoi.png'
      },
      {
        id: 'che-dau-den',
        name: 'Chè Đậu Đen',
        es: {
          subtitle: "Chè Đậu Đen",
          description: "Frijoles negros bien cocidos servidos con leche de coco y perlas de tapioca.",
          options: []
        },
        en: {
          subtitle: "Vietnamese Black Bean Sweet Soup",
          description: "Well-cooked black beans sweet soup served with coconut milk and tapioca pearls.",
          options: []
        },
        vi: {
          subtitle: "Chè Đậu Đen",
          description: "Đậu đen được nấu chín kĩ, ăn kèm nước cốt dừa béo ngậy và trân châu.",
          options: []
        },
        zh: {
          subtitle: "越式黑豆甜汤",
          description: "精心熬煮의 단팥죽/甜黑豆汤，搭配椰奶与西米。", // wait! Let's write standard Chinese without mix of korean
          description: "精心熬煮的甜黑豆汤，搭配椰奶与西米。",
          options: []
        },
        ko: {
          subtitle: "베트남식 검은콩 단팥탕",
          description: "부드럽게 푹 삶아낸 검은콩에 코코넛 밀크와 타피오카 펄을 곁들인 달콤한 디저트.",
          options: []
        },
        ja: {
          subtitle: "ベトナム風黒豆のチェー（お汁粉）",
          description: "じっくりコトコト煮込んだ黒豆に、ココナッツミルクとタピオカパールを合わせた甘いデザート。",
          options: []
        },
        fr: {
          subtitle: "Soupe Sucrée aux Haricots Noirs",
          description: "Soupe sucrée de haricots noirs bien cuits servie avec du lait de coco et des perles de tapioca.",
          options: []
        },
        it: {
          subtitle: "Zuppa Dolce di Fagioli Neri",
          description: "Zuppa dolce di fagioli neri ben cotti servita con latte di cocco e perle di tapioca.",
          options: []
        },
        price: '4,90€',
        image: '/menu_chedauden.png'
      },
      {
        id: 'panna-cotta',
        name: 'Panna Cotta Pandan',
        es: {
          subtitle: "Panna Cotta Tropical",
          description: "Deliciosa panna cotta cremosa con sabor de coco, pandan y cacahuete.",
          options: []
        },
        en: {
          subtitle: "Tropical Pandan Panna Cotta",
          description: "Creamy panna cotta infused with fragrant Vietnamese pandan leaf and coconut, topped with peanuts.",
          options: []
        },
        vi: {
          subtitle: "Panna Cotta Lá Dứa",
          description: "Món tráng miệng panna cotta béo ngậy vị cốt dừa hòa quyện cùng hương lá dứa thơm lừng và lạc rang.",
          options: []
        },
        zh: {
          subtitle: "斑兰椰香奶冻",
          description: "融入了越南斑兰叶与椰奶香气的丝滑奶冻，上面撒有香脆花生碎。",
          options: []
        },
        ko: {
          subtitle: "판단 판단코타",
          description: "향긋한 판단 잎과 코코넛 밀크가 조화를 이루는 부드러운 판나코타, 땅콩 토핑이 올라갑니다.",
          options: []
        },
        ja: {
          subtitle: "パンダン・パンナコッタ",
          description: "ベトナムの香るパンダンリーフとココナッツミルクで作る濃厚なパンナコッタ。ピーナッツのせ。",
          options: []
        },
        fr: {
          subtitle: "Panna Cotta Tropicale au Pandan",
          description: "Délicieuse panna cotta crémeuse infusée de feuille de pandan et de noix de coco, parsemée de cacahuètes.",
          options: []
        },
        it: {
          subtitle: "Panna Cotta Tropicale al Pandan",
          description: "Panna cotta cremosa aromatizzata con foglia di pandan e cocco, guarnita con arachidi croccanti.",
          options: []
        },
        price: '4,50€',
        image: '/menu_pannacottatropical.png'
      },
      {
        id: 'sua-chua-nep-cam',
        name: 'Sữa Chua Nếp Cẩm',
        es: {
          subtitle: "Pudin de Arroz Negro y Yogur",
          description: "Cremoso, rico y saludable postre de arroz negro servido con yogur y leche de coco.",
          options: []
        },
        en: {
          subtitle: "Black Sticky Rice Yogurt",
          description: "Creamy, rich and healthy black rice dessert served with yogurt and coconut milk.",
          options: []
        },
        vi: {
          subtitle: "Sữa Chua Nếp Cẩm",
          description: "Món tráng miệng làm từ gạo nếp cẩm béo ngậy, thơm ngon và bổ dưỡng, ăn kèm với sữa chua và nước cốt dừa.",
          options: []
        },
        zh: {
          subtitle: "椰香酸奶紫米露",
          description: "软糯香甜的紫米配上酸奶与浓郁椰奶，健康美味。",
          options: []
        },
        ko: {
          subtitle: "흑미 요거트 푸딩",
          description: "요거트와 코코넛 밀크를 곁들인 부드럽고 건강한 베트남식 흑미 디저트.",
          options: []
        },
        ja: {
          subtitle: "黒米ともち米のヨーグルトデザート",
          description: "ヨーグルトとココナッツミルクを添えた、もちもちでヘルシーな黒米のプディング。",
          options: []
        },
        fr: {
          subtitle: "Yaourt au Riz Gluant Noir",
          description: "Dessert crémeux, riche et sain à base de riz gluant noir, servi avec du yaourt et du lait de coco.",
          options: []
        },
        it: {
          subtitle: "Budino di Riso Nero e Yogurt",
          description: "Dessert cremoso, sano e nutriente a base di riso nero, servito con yogurt e latte di cocco.",
          options: []
        },
        price: '4,90€',
        image: '/menu_suachuanepcam.png'
      }
    ],
    drinks: [
      {
        id: 'agua-05',
        name: 'Agua 0.5L',
        es: {
          subtitle: "Agua Mineral Natural",
          description: "Agua mineral sin gas en formato botella de 0,5L.",
          options: []
        },
        en: {
          subtitle: "Still Mineral Water 0.5L",
          description: "Still mineral water in a 0.5L bottle.",
          options: []
        },
        vi: {
          subtitle: "Nước Khoáng 0.5L",
          description: "Nước khoáng không ga đóng chai dung tích 0.5L.",
          options: []
        },
        zh: {
          subtitle: "矿泉水 0.5L",
          description: "0.5升瓶装天然矿泉水。",
          options: []
        },
        ko: {
          subtitle: "생수 0.5L",
          description: "0.5L 병 생수.",
          options: []
        },
        ja: {
          subtitle: "ミネラルウォーター 0.5L",
          description: "0.5Lのボトル入りミネラルウォーター。",
          options: []
        },
        fr: {
          subtitle: "Eau Minérale 0,5L",
          description: "Bouteille d'eau minérale plate de 0,5L.",
          options: []
        },
        it: {
          subtitle: "Acqua Minerale 0.5L",
          description: "Bottiglia di acqua minerale naturale da 0.5L.",
          options: []
        },
        price: '2,50€',
        image: '/menu_agua.png'
      },
      {
        id: 'agua-1l',
        name: 'Agua 1L',
        es: {
          subtitle: "Agua Mineral Natural",
          description: "Agua mineral sin gas en formato botella de 1L.",
          options: []
        },
        en: {
          subtitle: "Still Mineral Water 1L",
          description: "Still mineral water in a 1L bottle.",
          options: []
        },
        vi: {
          subtitle: "Nước Khoáng 1L",
          description: "Nước khoáng không ga đóng chai dung tích 1L.",
          options: []
        },
        zh: {
          subtitle: "矿泉水 1L",
          description: "1升瓶装天然矿泉水。",
          options: []
        },
        ko: {
          subtitle: "생수 1L",
          description: "1L 병 생수.",
          options: []
        },
        ja: {
          subtitle: "ミネラルウォーター 1L",
          description: "1Lのボトル入りミネラルウォーター。",
          options: []
        },
        fr: {
          subtitle: "Eau Minérale 1L",
          description: "Bouteille d'eau minérale plate de 1L.",
          options: []
        },
        it: {
          subtitle: "Acqua Minerale 1L",
          description: "Bottiglia di acqua minerale naturale da 1L.",
          options: []
        },
        price: '4,00€',
        image: '/menu_agua.png'
      },
      {
        id: 'agua-con-gas',
        name: 'Agua con gas Vichy Catalan 0.33L',
        es: {
          subtitle: "Agua con Gas Vichy Catalan",
          description: "Agua mineral con gas premium de la marca Vichy Catalan en botella de 0,33L.",
          options: []
        },
        en: {
          subtitle: "Vichy Catalan Sparkling Water 0.33L",
          description: "Premium Vichy Catalan sparkling mineral water in a 0.33L bottle.",
          options: []
        },
        vi: {
          subtitle: "Nước Khoáng Có Ga Vichy Catalan 0.33L",
          description: "Nước khoáng có ga cao cấp hiệu Vichy Catalan chai 0.33L.",
          options: []
        },
        zh: {
          subtitle: "维希加泰罗尼亚气泡水 0.33L",
          description: "0.33升瓶装高端天然气泡水。",
          options: []
        },
        ko: {
          subtitle: "비쉬 카탈란 탄산수 0.33L",
          description: "0.33L 병 비쉬 카탈란 프리미엄 탄산수.",
          options: []
        },
        ja: {
          subtitle: "ヴィシーカタラン 炭酸水 0.33L",
          description: "0.33Lボトル入りのプレミアムスパークリングウォーター。",
          options: []
        },
        fr: {
          subtitle: "Eau Pétillante Vichy Catalan 0,33L",
          description: "Eau minérale pétillante premium Vichy Catalan en bouteille de 0,33L.",
          options: []
        },
        it: {
          subtitle: "Acqua Frizzante Vichy Catalan 0.33L",
          description: "Acqua minerale frizzante premium Vichy Catalan in bottiglia da 0.33L.",
          options: []
        },
        price: '2,80€',
        image: '/menu_agua.png'
      },
      {
        id: 'coca-cola',
        name: 'Coca-cola',
        es: {
          subtitle: "Refresco de Cola",
          description: "Refresco clásico sabor cola.",
          options: []
        },
        en: {
          subtitle: "Coca-cola",
          description: "Classic Coca-cola soft drink.",
          options: []
        },
        vi: {
          subtitle: "Coca-cola",
          description: "Nước ngọt Coca-cola truyền thống.",
          options: []
        },
        zh: {
          subtitle: "可口可乐",
          description: "经典可口可乐汽水。",
          options: []
        },
        ko: {
          subtitle: "코카콜라",
          description: "클래식 코카콜라 탄산음료.",
          options: []
        },
        ja: {
          subtitle: "コカ・コーラ",
          description: "クラシックなコカ・コーラ炭酸飲料。",
          options: []
        },
        fr: {
          subtitle: "Coca-cola",
          description: "Boisson rafraîchissante Coca-cola classique.",
          options: []
        },
        it: {
          subtitle: "Coca-cola",
          description: "Bevanda gassata classica Coca-cola.",
          options: []
        },
        price: '2,80€',
        image: '/menu_refresco.png'
      },
      {
        id: 'coca-cola-zero',
        name: 'Coca-cola Zero',
        es: {
          subtitle: "Refresco de Cola Zero Azúcar",
          description: "Coca-cola clásica con sabor original sin azúcar y sin calorías.",
          options: []
        },
        en: {
          subtitle: "Coca-cola Zero",
          description: "Original taste Coca-cola with zero sugar and zero calories.",
          options: []
        },
        vi: {
          subtitle: "Coca-cola Không Đường",
          description: "Nước ngọt Coca-cola không đường và không calo.",
          options: []
        },
        zh: {
          subtitle: "零度可口可乐",
          description: "无糖无热量的零度可口可乐。",
          options: []
        },
        ko: {
          subtitle: "코카콜라 제로",
          description: "설탕과 칼로리가 없는 코카콜라 제로.",
          options: []
        },
        ja: {
          subtitle: "コカ・コーラ ゼロ",
          description: "砂糖ゼロ・カロリーゼロのコカ・コーラ。",
          options: []
        },
        fr: {
          subtitle: "Coca-cola Zéro",
          description: "Coca-cola au goût original sans sucre et sans calories.",
          options: []
        },
        it: {
          subtitle: "Coca-cola Zero",
          description: "Coca-cola gusto classico senza zucchero e senza calorie.",
          options: []
        },
        price: '2,80€',
        image: '/menu_refresco.png'
      },
      {
        id: 'fanta-limon',
        name: 'Fanta Limón',
        es: {
          subtitle: "Refresco de Limón",
          description: "Refresco con gas con sabor a limón.",
          options: []
        },
        en: {
          subtitle: "Lemon Fanta",
          description: "Lemon-flavored carbonated soft drink.",
          options: []
        },
        vi: {
          subtitle: "Fanta Chanh",
          description: "Nước ngọt có ga hương vị chanh thanh mát.",
          options: []
        },
        zh: {
          subtitle: "柠檬味芬达",
          description: "柠檬口味的芬达碳酸饮料。",
          options: []
        },
        ko: {
          subtitle: "환타 레몬맛",
          description: "레몬 향이 상큼한 환타 탄산음료.",
          options: []
        },
        ja: {
          subtitle: "ファンタ レモン",
          description: "爽やかなレモン味のファンタ炭酸飲料。",
          options: []
        },
        fr: {
          subtitle: "Fanta Citron",
          description: "Boisson gazeuse rafraîchissante au goût citron.",
          options: []
        },
        it: {
          subtitle: "Fanta Limone",
          description: "Bevanda frizzante rinfrescante al gusto limone.",
          options: []
        },
        price: '2,80€',
        image: '/menu_refresco.png'
      },
      {
        id: 'fanta-naranja',
        name: 'Fanta Naranja',
        es: {
          subtitle: "Refresco de Naranja",
          description: "Refresco con gas con sabor a naranja.",
          options: []
        },
        en: {
          subtitle: "Orange Fanta",
          description: "Orange-flavored carbonated soft drink.",
          options: []
        },
        vi: {
          subtitle: "Fanta Cam",
          description: "Nước ngọt có ga hương vị cam thơm ngon.",
          options: []
        },
        zh: {
          subtitle: "橙味芬达",
          description: "橙子口味的芬达碳酸饮料。",
          options: []
        },
        ko: {
          subtitle: "환타 오렌지맛",
          description: "오렌지 향이 달콤한 환타 탄산음료.",
          options: []
        },
        ja: {
          subtitle: "ファンタ オレンジ",
          description: "ジューシーなオレンジ味のファンタ炭酸飲料。",
          options: []
        },
        fr: {
          subtitle: "Fanta Orange",
          description: "Boisson gazeuse rafraîchissante au goût orange.",
          options: []
        },
        it: {
          subtitle: "Fanta Arancia",
          description: "Bevanda frizzante rinfrescante al gusto arancia.",
          options: []
        },
        price: '2,80€',
        image: '/menu_refresco.png'
      },
      {
        id: 'nestea',
        name: 'Nestea',
        es: {
          subtitle: "Té Frío al Limón",
          description: "Refresco de té frío sabor limón sin gas.",
          options: []
        },
        en: {
          subtitle: "Nestea Lemon",
          description: "Still iced tea beverage with lemon flavor.",
          options: []
        },
        vi: {
          subtitle: "Trà Đen Nestea Hương Chanh",
          description: "Nước trà đen Nestea chanh đóng chai giải khát.",
          options: []
        },
        zh: {
          subtitle: "雀巢柠檬红茶",
          description: "清新好喝的柠檬口味冰红茶。",
          options: []
        },
        ko: {
          subtitle: "네스티 아이스티 레몬",
          description: "상큼한 레몬 향의 아이스티 음료.",
          options: []
        },
        ja: {
          subtitle: "ネスティ レモンティー",
          description: "すっきり爽快なレモン味のアイスティー。",
          options: []
        },
        fr: {
          subtitle: "Nestea Citron",
          description: "Boisson plate de thé glacé au goût citron.",
          options: []
        },
        it: {
          subtitle: "Nestea Limone",
          description: "Tè freddo al limone rinfrescante senza gas.",
          options: []
        },
        price: '2,80€',
        image: '/menu_refresco.png'
      },
      {
        id: 'te-de-melocoton',
        name: 'Té de Melocotón',
        es: {
          subtitle: "Té de Melocotón",
          description: "Refrescante té de melocotón natural preparado en casa con naranja, kiwi, lima y limoncillo.",
          options: []
        },
        en: {
          subtitle: "Peach Tea",
          description: "Refreshing homemade peach tea brewed with fresh orange, kiwi, lime, and lemongrass.",
          options: []
        },
        vi: {
          subtitle: "Trà Đào Đặc Biệt",
          description: "Trà đào thơm ngon nhà làm pha cùng cam tươi, kiwi, chanh xanh và sả.",
          options: []
        },
        zh: {
          subtitle: "水蜜桃水果茶",
          description: "自制清爽蜜桃茶，加入新鲜 orange, kiwi, lime và sả调制。",
          options: []
        },
        ko: {
          subtitle: "복숭아 아이스티",
          description: "오렌지, 키위, 라임, 레몬그라스를 곁들인 상큼하고 시원한 수제 복숭아 티.",
          options: []
        },
        ja: {
          subtitle: "ピーチフルーツティー",
          description: "オレンジ, キウイ, ライム, レモングラスが入った自家製のさっぱりピーチティー。",
          options: []
        },
        fr: {
          subtitle: "Thé à la Pêche",
          description: "Thé glacé à la pêche fait maison, rafraîchi avec de l'orange, du kiwi, du citron vert et de la citronnelle.",
          options: []
        },
        it: {
          subtitle: "Tè alla Pesca",
          description: "Tè freddo alla pesca fatto in casa, arricchito con arancia, kiwi, lime e citronella.",
          options: []
        },
        price: '4,00€',
        image: '/menu_tedao.png'
      },
      {
        id: 'te-de-lichi',
        name: 'Té de Lichi',
        es: {
          subtitle: "Té de Lichi",
          description: "Delicioso té de lichi casero con lima, limón y kiwi.",
          options: []
        },
        en: {
          subtitle: "Lychee Tea",
          description: "Delicious homemade lychee tea with fresh lime, lemon, and kiwi slices.",
          options: []
        },
        vi: {
          subtitle: "Trà Vải Đặc Biệt",
          description: "Trà vải thơm mát nhà làm pha cùng chanh xanh, chanh vàng và kiwi.",
          options: []
        },
        zh: {
          subtitle: "荔枝水果茶",
          description: "自制美味荔枝茶, 加入青柠, 黄柠檬与奇异果片调制。",
          options: []
        },
        ko: {
          subtitle: "리치 아이스티",
          description: "라임, 레몬, 키위를 곁들여 향긋하고 달콤한 수제 리치 티.",
          options: []
        },
        ja: {
          subtitle: "ライチフルーツティー",
          description: "ライム, レモン, キウイが入った自家製の贅沢なライチティー。",
          options: []
        },
        fr: {
          subtitle: "Thé au Litchi",
          description: "Thé glacé au litchi fait maison avec du citron vert, du citron jaune et du kiwi.",
          options: []
        },
        it: {
          subtitle: "Tè al Litchi",
          description: "Tè freddo al litchi fatto in casa con lime, limone e kiwi.",
          options: []
        },
        price: '4,00€',
        image: '/menu_travai.png'
      },
      {
        id: 'coctel-limon-menta',
        name: 'Cóctel de limón y menta',
        es: {
          subtitle: "Cóctel de Limón y Menta",
          description: "Refrescante cóctel preparado con zumo de limón fresco y hojas de menta machacadas.",
          options: []
        },
        en: {
          subtitle: "Lemon and Mint Cocktail",
          description: "Refreshing cocktail prepared with fresh lemon juice and muddled mint leaves.",
          options: []
        },
        vi: {
          subtitle: "Cocktail Chanh Bạc Hà",
          description: "Thức uống cocktail mát lạnh từ nước cốt chanh tươi và lá bạc hà nghiền.",
          options: []
        },
        zh: {
          subtitle: "柠檬薄荷鸡尾酒",
          description: "使用新鲜柠檬汁与薄荷叶碎调制的清凉鸡尾酒。",
          options: []
        },
        ko: {
          subtitle: "레몬 민트 칵테일",
          description: "신선한 레몬 주스와 으깬 민트 잎으로 만든 청량하고 시원한 칵테일.",
          options: []
        },
        ja: {
          subtitle: "レモンとミントのカクテル",
          description: "フレッシュレモンジュースとつぶしたミントの葉で作る爽やかなカクテル。",
          options: []
        },
        fr: {
          subtitle: "Cocktail Citron et Menthe",
          description: "Cocktail rafraîchissant préparé avec du jus de citron frais et des feuilles de menthe écrasées.",
          options: []
        },
        it: {
          subtitle: "Cocktail Limone e Menta",
          description: "Cocktail rinfrescante preparato con succo di limone fresco e foglie di menta pestate.",
          options: []
        },
        price: '5,00€',
        image: '/menu_coctel_limon.png'
      },
      {
        id: 'zumo-naranja',
        name: 'Zumo de naranja',
        es: {
          subtitle: "Zumo de Naranja Natural",
          description: "Zumo de naranja recién exprimido 100% natural.",
          options: []
        },
        en: {
          subtitle: "Fresh Orange Juice",
          description: "100% freshly squeezed natural orange juice.",
          options: []
        },
        vi: {
          subtitle: "Nước Cam Ép Nguyên Chất",
          description: "Nước cam vắt nguyên chất 100% tươi ngon mỗi ngày.",
          options: []
        },
        zh: {
          subtitle: "鲜榨橙汁",
          description: "100%新鲜压榨的天然纯橙汁。",
          options: []
        },
        ko: {
          subtitle: "생오렌지 주스",
          description: "100% 즉석에서 착즙한 신선한 오렌지 주스.",
          options: []
        },
        ja: {
          subtitle: "生搾りオレンジジュース",
          description: "注文を受けてから搾る、100%天然のフレッシュオレンジジュース。",
          options: []
        },
        fr: {
          subtitle: "Jus d'Orange Pressé",
          description: "Jus d'orange fraîchement pressé 100% naturel.",
          options: []
        },
        it: {
          subtitle: "Spremuta d'Arancia",
          description: "Spremuta fresca di arancia 100% naturale.",
          options: []
        },
        price: '5,00€',
        image: '/menu_zumonaranja.png'
      },
      {
        id: 'sua-chua-chanh-da',
        name: 'Sữa chua chanh đá',
        es: {
          subtitle: "Yogur Helado Mezclado con Limón",
          description: "Yogur cremoso batido con hielo y jugo de limón fresco.",
          options: []
        },
        en: {
          subtitle: "Ice Lemon Yogurt",
          description: "Creamy yogurt blended with crushed ice and fresh lemon juice.",
          options: []
        },
        vi: {
          subtitle: "Sữa Chua Chanh Đá",
          description: "Sữa chua sánh mịn xay cùng đá bào và nước cốt chanh tươi mát lạnh.",
          options: []
        },
        zh: {
          subtitle: "柠檬冰沙酸奶",
          description: "将香浓酸奶与碎冰及新鲜柠檬汁混合搅拌的爽口饮品。",
          options: []
        },
        ko: {
          subtitle: "아이스 레몬 요거트",
          description: "부드러운 요거트에 부순 얼음과 신선한 레몬즙을 함께 갈아 만든 음료.",
          options: []
        },
        ja: {
          subtitle: "ヨーグルト・レモン・フローズン",
          description: "なめらかなヨーグルトに砕いた氷とレモン果汁を合わせてブレンドしたフローズンドリンク。",
          options: []
        },
        fr: {
          subtitle: "Yaourt Frappé au Citron",
          description: "Yaourt crémeux mixé avec de la glace pilée et du jus de citron frais.",
          options: []
        },
        it: {
          subtitle: "Yogurt blended con Ghiaccio e Limone",
          description: "Yogurt cremoso frullato con ghiaccio tritato e succo di limone fresco.",
          options: []
        },
        price: '4,50€',
        image: '/menu_suachuachanhda.png'
      },
      {
        id: 'sinh-to-bo',
        name: 'Sinh tố bơ',
        es: {
          subtitle: "Batido de Aguacate",
          description: "Aguacate fresco triturado y batido con leche condensada y hielo.",
          options: []
        },
        en: {
          subtitle: "Avocado Smoothie",
          description: "Creamy, rich shake made with fresh avocado, condensed milk, and ice.",
          options: []
        },
        vi: {
          subtitle: "Sinh Tố Bơ",
          description: "Bơ sáp tươi ngon xay nhuyễn cùng sữa đặc và đá bào ngậy thơm.",
          options: []
        },
        zh: {
          subtitle: "牛油果奶昔",
          description: "使用新鲜牛油果与甜炼乳及冰块打制而成的香浓果昔。",
          options: []
        },
        ko: {
          subtitle: "아보카도 스무디",
          description: "신선한 아보카도와 연유, 얼음을 함께 갈아 만든 고소하고 부드러운 스무디.",
          options: []
        },
        ja: {
          subtitle: "アボカドスムージー",
          description: "フレッシュなアボカドに練乳と氷を加えてブレンドした、クリーミーで濃厚なスムージー。",
          options: []
        },
        fr: {
          subtitle: "Smoothie à l'Avocat",
          description: "Smoothie onctueux et crémeux à base d'avocat frais, de lait concentré sucré et de glace.",
          options: []
        },
        it: {
          subtitle: "Smoothie all'Avocado",
          description: "Smoothie cremoso e vellutato preparato con avocado fresco, latte condensato dolce e ghiaccio.",
          options: []
        },
        price: '4,50€',
        image: '/menu_avocado_smoothie.png'
      },
      {
        id: 'cafe-vietnamita',
        name: 'Cà phê sữa đá de Vietnam',
        es: {
          subtitle: "Cà phê sữa đá / Vietnamese iced milk coffee",
          description: "Fuerte café de goteo tradicional vietnamita mezclado con leche condensada dulce y abundante hielo.",
          options: []
        },
        en: {
          subtitle: "Traditional Vietnamese Iced Coffee",
          description: "Strong slow-drip Vietnamese coffee combined with sweet condensed milk and served over plenty of crushed ice.",
          options: []
        },
        vi: {
          subtitle: "Cà Phê Sữa Đá Việt Nam",
          description: "Cà phê phin truyền thống Việt Nam đậm đà, hòa quyện cùng sữa đặc ngọt ngào và đá lạnh.",
          options: []
        },
        zh: {
          subtitle: "传统越南冰奶咖啡",
          description: "浓郁的传统越南滴滤咖啡，融合甜炼乳与满满冰块。",
          options: []
        },
        ko: {
          subtitle: "정통 베트남 연유 커피",
          description: "천천히 내린 진한 베트남 드립 커피에 달콤한 연유와 부순 얼음을 듬뿍 넣은 커피.",
          options: []
        },
        ja: {
          subtitle: "伝統ベトナム練乳コーヒー",
          description: "じっくりドリップした濃いベトナムコーヒーに, 甘い練乳とたっぷりの砕いた氷を合わせた一杯。",
          options: []
        },
        fr: {
          subtitle: "Café Vietnamien Traditionnel",
          description: "Café filtre vietnamien corsé mélangé avec du lait condensé sucré et servi sur de la glace pilée.",
          options: []
        },
        it: {
          subtitle: "Caffè Vietnamita Tradizionale",
          description: "Caffè filtro vietnamita unito a latte condensato dolce e servito con ghiaccio tritato.",
          options: []
        },
        price: '4,00€',
        image: '/menu_cafe.png'
      },
      {
        id: 'cafe-solo',
        name: 'Café solo',
        es: {
          subtitle: "Cà phê đen / Black coffee",
          description: "Café negro intenso y aromático sin leche.",
          options: []
        },
        en: {
          subtitle: "Espresso / Black Coffee",
          description: "Rich and aromatic intense black coffee without milk.",
          options: []
        },
        vi: {
          subtitle: "Cà Phê Đen",
          description: "Cà phê đen đậm đà, thơm nồng không pha sữa.",
          options: []
        },
        zh: {
          subtitle: "意式浓缩/黑咖啡",
          description: "浓郁芳香的纯黑咖啡，不加奶。",
          options: []
        },
        ko: {
          subtitle: "에스프레소 / 블랙 커피",
          description: "우유를 넣지 않은 진하고 향긋한 블랙 커피.",
          options: []
        },
        ja: {
          subtitle: "エスプレッソ / ブラックコーヒー",
          description: "ミルクなしの, 濃厚で香り高いブラックコーヒー。",
          options: []
        },
        fr: {
          subtitle: "Café Noir / Expresso",
          description: "Café noir intense et aromatique sans lait.",
          options: []
        },
        it: {
          subtitle: "Caffè Nero / Espresso",
          description: "Caffè nero intenso e aromatico senza latte.",
          options: []
        },
        price: '1,60€',
        image: ''
      },
      {
        id: 'cafe-cortado',
        name: 'Café cortado',
        es: {
          subtitle: "Cà phê Cortado của Tây Ban Nha / Spanish Cortado coffee",
          description: "Café espresso con una pequeña cantidad de leche caliente.",
          options: []
        },
        en: {
          subtitle: "Cortado Coffee",
          description: "Espresso coffee cut with a small amount of warm milk.",
          options: []
        },
        vi: {
          subtitle: "Cà Phê Cortado",
          description: "Cà phê espresso pha thêm một lượng nhỏ sữa nóng kiểu Tây Ban Nha.",
          options: []
        },
        zh: {
          subtitle: "告尔多咖啡",
          description: "浓缩咖啡中加入少量温牛奶调制而成。",
          options: []
        },
        ko: {
          subtitle: "코르타도",
          description: "에스프레소에 약간의 따뜻한 우유를 넣은 커피.",
          options: []
        },
        ja: {
          subtitle: "コルタード",
          description: "エスプレッソに少量の温かいミルクを加えたコーヒー。",
          options: []
        },
        fr: {
          subtitle: "Café Noisette / Cortado",
          description: "Café expresso coupé avec une petite quantité de lait chaud.",
          options: []
        },
        it: {
          subtitle: "Caffè Macchiato / Cortado",
          description: "Caffè espresso macchiato con una piccola quantità di latte caldo.",
          options: []
        },
        price: '1,70€',
        image: ''
      },
      {
        id: 'cafe-latte',
        name: 'Latte',
        es: {
          subtitle: "Café con Leche / Latte",
          description: "Café espresso con abundante leche vaporizada y una fina capa de espuma.",
          options: []
        },
        en: {
          subtitle: "Caffè Latte",
          description: "Espresso coffee with steamed milk and a thin layer of foam.",
          options: []
        },
        vi: {
          subtitle: "Cà Phê Latte",
          description: "Cà phê espresso kết hợp với nhiều sữa nóng và một lớp bọt mịn.",
          options: []
        },
        zh: {
          subtitle: "拿铁咖啡",
          description: "经典浓缩咖啡与大量蒸气牛奶，覆以薄奶泡。",
          options: []
        },
        ko: {
          subtitle: "카페 라떼",
          description: "에스프레소에 부드러운 스팀 우유와 고운 거품을 올린 커피.",
          options: []
        },
        ja: {
          subtitle: "カフェラテ",
          description: "エスプレッソにたっぷりのスチームミルクと薄い泡をのせた定番コーヒー。",
          options: []
        },
        fr: {
          subtitle: "Café au Lait / Latte",
          description: "Café expresso avec du lait chaud et une fine couche de mousse.",
          options: []
        },
        it: {
          subtitle: "Caffellatte / Latte",
          description: "Caffè espresso con latte caldo e un sottile strato di schiuma.",
          options: []
        },
        price: '2,20€',
        image: ''
      },
      {
        id: 'cafe-americano',
        name: 'Americano',
        es: {
          subtitle: "Café Americano",
          description: "Café espresso rebajado con agua caliente para un sabor más suave.",
          options: []
        },
        en: {
          subtitle: "Caffè Americano",
          description: "Espresso coffee diluted with hot water for a smoother taste.",
          options: []
        },
        vi: {
          subtitle: "Cà Phê Americano",
          description: "Cà phê espresso pha loãng với nước nóng mang lại hương vị nhẹ nhàng hơn.",
          options: []
        },
        zh: {
          subtitle: "美式咖啡",
          description: "浓缩咖啡中加入热水稀释，口感更柔和温润。",
          options: []
        },
        ko: {
          subtitle: "아메리카노",
          description: "에스프레소에 뜨거운 물을 더해 부드럽게 즐기는 커피.",
          options: []
        },
        ja: {
          subtitle: "アメリカーノ",
          description: "エスプレッソをお湯で割った, すっきりとして飲みやすいコーヒー。",
          options: []
        },
        fr: {
          subtitle: "Café Américain",
          description: "Café expresso allongé d'eau chaude pour un goût plus doux.",
          options: []
        },
        it: {
          subtitle: "Caffè Americano",
          description: "Caffè espresso allungato con acqua calda per un gusto più leggero.",
          options: []
        },
        price: '1,80€',
        image: ''
      },
      {
        id: 'vino-blanco-verdejo',
        name: 'Blanco Verdejo "Treintaytantos"',
        es: {
          subtitle: "Vang trắng Verdejo Treintaytantos / Verdejo Treintaytantos white wine",
          description: "Vino blanco fresco y afrutado de uva Verdejo.",
          options: [{ text: "Copa: 3,50€ / Botella: 13,50€", highlight: true }]
        },
        en: {
          subtitle: "Verdejo White Wine",
          description: "Fresh and fruity white wine made from Verdejo grapes.",
          options: [{ text: "Glass: 3.50€ / Bottle: 13.50€", highlight: true }]
        },
        vi: {
          subtitle: "Rượu Vang Trắng Verdejo",
          description: "Rượu vang trắng tươi mát, thơm hương trái cây từ giống nho Verdejo đặc trưng.",
          options: [{ text: "Ly: 3,50€ / Chai: 13,50€", highlight: true }]
        },
        zh: {
          subtitle: "Verdejo 白葡萄酒",
          description: "选用Verdejo葡萄酿制的清爽果香型白葡萄酒。",
          options: [{ text: "杯装: 3.50€ / 瓶装: 13.50€", highlight: true }]
        },
        ko: {
          subtitle: "베르데호 화이트 와인",
          description: "베르데호 품종의 상큼하고 과일 향이 풍부한 화이트 와인.",
          options: [{ text: "글라스: 3.50€ / 보틀: 13.50€", highlight: true }]
        },
        ja: {
          subtitle: "ベルデホ 白ワイン",
          description: "ベルデホ種のブドウから造られる, 爽やかでフルーティーな白ワイン。",
          options: [{ text: "グラス: 3.50€ / ボトル: 13.50€", highlight: true }]
        },
        fr: {
          subtitle: "Vin Blanc Verdejo",
          description: "Vin blanc frais et fruité issu de cépage Verdejo.",
          options: [{ text: "Verre : 3,50€ / Bouteille : 13,50€", highlight: true }]
        },
        it: {
          subtitle: "Vino Bianco Verdejo",
          description: "Vino bianco fresco e fruttato da uve Verdejo.",
          options: [{ text: "Calice: 3,50€ / Bottiglia: 13,50€", highlight: true }]
        },
        price: '3,50€ / 13,50€',
        image: ''
      },
      {
        id: 'vino-blanco-grand-vina',
        name: 'Blanco "Grand Viña"',
        es: {
          subtitle: "Vang trắng Grand Viña / Grand Viña white wine",
          description: "Vino blanco aromático con notas florales y de frutas blancas.",
          options: [{ text: "Copa: 3,50€ / Botella: 13,50€", highlight: true }]
        },
        en: {
          subtitle: "Grand Viña White Wine",
          description: "Aromatic white wine with floral and white fruit notes.",
          options: [{ text: "Glass: 3.50€ / Bottle: 13.50€", highlight: true }]
        },
        vi: {
          subtitle: "Rượu Vang Trắng Grand Viña",
          description: "Vang trắng tinh tế, ngát hương hoa và các loại quả chín trắng.",
          options: [{ text: "Ly: 3,50€ / Chai: 13,50€", highlight: true }]
        },
        zh: {
          subtitle: "Grand Viña 白葡萄酒",
          description: "伴有花香与白果香气的优质白葡萄酒。",
          options: [{ text: "杯装: 3.50€ / 瓶装: 13.50€", highlight: true }]
        },
        ko: {
          subtitle: "그랑 비냐 화이트 와인",
          description: "꽃 향기와 흰 과일 향이 어우러진 향긋한 화이트 와인.",
          options: [{ text: "글라스: 3.50€ / 보틀: 13.50€", highlight: true }]
        },
        ja: {
          subtitle: "グラン・ヴィーニャ 白ワイン",
          description: "花と白い果実の香りが上品に広がる華やかな白ワイン。",
          options: [{ text: "グラス: 3.50€ / ボトル: 13.50€", highlight: true }]
        },
        fr: {
          subtitle: "Vin Blanc Grand Viña",
          description: "Vin blanc aromatique aux notes florales et de fruits blancs.",
          options: [{ text: "Verre : 3,50€ / Bouteille : 13,50€", highlight: true }]
        },
        it: {
          subtitle: "Vino Bianco Grand Viña",
          description: "Vino bianco aromatico con note floreali e di frutta a polpa bianca.",
          options: [{ text: "Calice: 3,50€ / Bottiglia: 13,50€", highlight: true }]
        },
        price: '3,50€ / 13,50€',
        image: ''
      },
      {
        id: 'vino-rosado-grand-vina',
        name: 'Rosado "Grand Viña"',
        es: {
          subtitle: "Vang hồng Grand Viña / Grand Viña rose wine",
          description: "Vino rosado suave, refrescante y con notas de frutos rojos.",
          options: [{ text: "Copa: 3,50€ / Botella: 13,50€", highlight: true }]
        },
        en: {
          subtitle: "Grand Viña Rosé Wine",
          description: "Smooth, refreshing rosé wine with notes of red berries.",
          options: [{ text: "Glass: 3.50€ / Bottle: 13.50€", highlight: true }]
        },
        vi: {
          subtitle: "Rượu Vang Hồng Grand Viña",
          description: "Rượu vang hồng mềm mại, thanh mát và thoảng hương quả mọng đỏ.",
          options: [{ text: "Ly: 3,50€ / Chai: 13,50€", highlight: true }]
        },
        zh: {
          subtitle: "Grand Viña 桃红葡萄酒",
          description: "口感温润清爽, 带有红色浆果香气的桃红酒。",
          options: [{ text: "杯装: 3.50€ / 瓶装: 13.50€", highlight: true }]
        },
        ko: {
          subtitle: "그랑 비냐 로제 와인",
          description: "붉은 과일 향이 은은하고 가볍고 상쾌한 로제 와인.",
          options: [{ text: "글라스: 3.50€ / 보틀: 13.50€", highlight: true }]
        },
        ja: {
          subtitle: "グラン・ヴィーニャ ロゼワイン",
          description: "赤いベリーの香りが爽やかに香る, すっきりとしたロゼワイン。",
          options: [{ text: "グラス: 3.50€ / ボトル: 13.50€", highlight: true }]
        },
        fr: {
          subtitle: "Vin Rosé Grand Viña",
          description: "Vin rosé doux, rafraîchissant aux notes de fruits rouges.",
          options: [{ text: "Verre : 3,50€ / Bouteille : 13,50€", highlight: true }]
        },
        it: {
          subtitle: "Vino Rosato Grand Viña",
          description: "Vino rosato morbido, rinfrescante con note di frutti rossi.",
          options: [{ text: "Calice: 3,50€ / Bottiglia: 13,50€", highlight: true }]
        },
        price: '3,50€ / 13,50€',
        image: ''
      },
      {
        id: 'vino-tinto-grand-vina',
        name: 'Tinto "Grand Viña"',
        es: {
          subtitle: "Vang đỏ Grand Viña / Grand Viña red wine",
          description: "Vino tinto joven y equilibrado, perfecto para acompañar comidas.",
          options: [{ text: "Copa: 3,50€ / Botella: 13,50€", highlight: true }]
        },
        en: {
          subtitle: "Grand Viña Red Wine",
          description: "Young, well-balanced red wine, perfect for pairing with meals.",
          options: [{ text: "Glass: 3.50€ / Bottle: 13.50€", highlight: true }]
        },
        vi: {
          subtitle: "Rượu Vang Đỏ Grand Viña",
          description: "Rượu vang đỏ trẻ trung, cân bằng, sự kết hợp lý tưởng cho các món ăn.",
          options: [{ text: "Ly: 3,50€ / Chai: 13,50€", highlight: true }]
        },
        zh: {
          subtitle: "Grand Viña 红葡萄酒",
          description: "口感均衡、酒体年轻的经典红葡萄酒，非常配餐。",
          options: [{ text: "杯装: 3.50€ / 瓶装: 13.50€", highlight: true }]
        },
        ko: {
          subtitle: "그랑 비냐 레드 와인",
          description: "가볍고 균형 잡힌 영 레드 와인, 음식과 곁들이기 매우 좋습니다.",
          options: [{ text: "글라스: 3.50€ / 보틀: 13.50€", highlight: true }]
        },
        ja: {
          subtitle: "グラン・ヴィーニャ 赤ワイン",
          description: "お食事にも合わせやすい, バランスの取れた軽やかな味わいの赤ワイン。",
          options: [{ text: "グラス: 3.50€ / ボトル: 13.50€", highlight: true }]
        },
        fr: {
          subtitle: "Vin Rouge Grand Viña",
          description: "Vin rouge jeune et équilibré, idéal para accompagner vos plats.",
          options: [{ text: "Verre : 3,50€ / Bouteille : 13,50€", highlight: true }]
        },
        it: {
          subtitle: "Vino Rosso Grand Viña",
          description: "Vino rosso giovane ed equilibrato, perfetto da abbinare ai pasti.",
          options: [{ text: "Calice: 3,50€ / Bottiglia: 13,50€", highlight: true }]
        },
        price: '3,50€ / 13,50€',
        image: ''
      },
      {
        id: 'vino-tinto-ramon-bilbao',
        name: 'Tinto "Ramón Bilbao"',
        es: {
          subtitle: "Vang đỏ Ramón Bilbao / Ramón Bilbao red wine",
          description: "Vino tinto Crianza D.O.Ca. Rioja, elegante con notas de barrica y fruta madura.",
          options: [{ text: "Copa: 4,20€ / Botella: 18,50€", highlight: true }]
        },
        en: {
          subtitle: "Ramón Bilbao Rioja Red Wine",
          description: "Elegant D.O.Ca. Rioja Crianza red wine with oak barrel and ripe fruit notes.",
          options: [{ text: "Glass: 4.20€ / Bottle: 18.50€", highlight: true }]
        },
        vi: {
          subtitle: "Rượu Vang Đỏ Ramón Bilbao Crianza",
          description: "Vang đỏ Tây Ban Nha vùng Rioja nổi tiếng, trưởng thành trong thùng gỗ sồi, hương vị chín muồi sâu lắng.",
          options: [{ text: "Ly: 4,20€ / Chai: 18,50€", highlight: true }]
        },
        zh: {
          subtitle: "Ramón Bilbao 里奥哈红葡萄酒",
          description: "里奥哈法定产区培养级红酒, 伴有木桶陈酿与成熟果香。",
          options: [{ text: "杯装: 4.20€ / 瓶装: 18.50€", highlight: true }]
        },
        ko: {
          subtitle: "라몬 빌바오 리오하 레드 와인",
          description: "리오하산 크리안사 등급의 오크 향과 완숙한 과일 맛이 우아한 레드 와인.",
          options: [{ text: "글라스: 4.20€ / 보틀: 18.50€", highlight: true }]
        },
        ja: {
          subtitle: "ラモン・ビルバオ リオハ赤ワイン",
          description: "リオハ産の高級赤ワイン。樽熟成による深みと熟した果実味がエレガントに香ります。",
          options: [{ text: "グラス: 4.20€ / ボトル: 18.50€", highlight: true }]
        },
        fr: {
          subtitle: "Vin Rouge Ramón Bilbao",
          description: "Vin rouge Crianza D.O.Ca. Rioja, élégant aux notes de fût de chêne et de fruits mûrs.",
          options: [{ text: "Verre : 4,20€ / Bouteille : 18,50€", highlight: true }]
        },
        it: {
          subtitle: "Vino Rosso Ramón Bilbao",
          description: "Vino rosso Crianza D.O.Ca. Rioja, elegante con sentori di legno e fruta matura.", // wait: frutta
          description: "Vino rosso Crianza D.O.Ca. Rioja, elegante con sentori di legno e frutta matura.",
          options: [{ text: "Calice: 4,20€ / Bottiglia: 18,50€", highlight: true }]
        },
        price: '4,20€ / 18,50€',
        image: ''
      },
      {
        id: 'vino-tinto-protos',
        name: 'Tinto "Protos"',
        es: {
          subtitle: "Vang đỏ Protos / Protos red wine",
          description: "Excelente vino tinto D.O. Ribera del Duero con cuerpo estructurado y notas especiadas.",
          options: []
        },
        en: {
          subtitle: "Protos Ribera del Duero Red Wine",
          description: "Excellent D.O. Ribera del Duero red wine with structured body and spiced notes.",
          options: []
        },
        vi: {
          subtitle: "Rượu Vang Đỏ Protos",
          description: "Vang đỏ thượng hạng vùng Ribera del Duero Tây Ban Nha, hương vị đậm đà cấu trúc tinh tế.",
          options: []
        },
        zh: {
          subtitle: "Protos 杜埃罗河畔红葡萄酒",
          description: "杜埃罗河畔产区高品质红酒，口感饱满且带有辛香气息。",
          options: []
        },
        ko: {
          subtitle: "프로토스 리베라 델 두에로 레드 와인",
          description: "리베라 델 두에로산 고품격 레드 와인, 균형 잡힌 바디감과 스파이시한 여운.",
          options: []
        },
        ja: {
          subtitle: "プロトス リベラ・デル・ドゥエロ赤ワイン",
          description: "リベラ・デル・ドゥエロ産の卓越した赤ワイン。深みのあるボディとスパイシーな余韻。",
          options: []
        },
        fr: {
          subtitle: "Vin Rouge Protos",
          description: "Excellent vin rouge D.O. Ribera del Duero avec un corps structuré et des notes d'épices.",
          options: []
        },
        it: {
          subtitle: "Vino Rosso Protos",
          description: "Eccellente vino rosso D.O. Ribera del Duero dal corpo strutturato e note speziate.",
          options: []
        },
        price: '19,50€',
        image: ''
      },
      {
        id: 'cava-champan-gran-amat',
        name: 'Champán "Gran Amat"',
        es: {
          subtitle: "Sâm panh Gran Amat / Gran Amat champagne",
          description: "Espumoso selecto de burbuja fina y persistente, fresco y elegante.",
          options: []
        },
        en: {
          subtitle: "Gran Amat Champagne / Cava",
          description: "Select sparkling wine with fine and persistent bubbles, fresh and elegant.",
          options: []
        },
        vi: {
          subtitle: "Sâm Panh / Cava Gran Amat",
          description: "Rượu sủi tăm (cava) thượng hạng với sủi bọt mịn li ti, vị sảng khoái thanh lịch.",
          options: []
        },
        zh: {
          subtitle: "Gran Amat 起泡酒/香槟",
          description: "精选气泡细腻持久的卡瓦起泡酒，清新爽口而优雅。",
          options: []
        },
        ko: {
          subtitle: "그랑 아마트 샴페인 / 카바",
          description: "기포가 가늘고 지속적이며 가벼운 산미와 우아한 스파클링 와인.",
          options: []
        },
        ja: {
          subtitle: "グラン・アマット スパークリングワイン / カバ",
          description: "きめ細やかで長続きする泡立ちが特徴の、爽やかでエレガントなカバ（スパークリングワイン）。",
          options: []
        },
        fr: {
          subtitle: "Champagne / Cava Gran Amat",
          description: "Mousseux sélectionné aux bulles fines et persistantes, frais et élégant.",
          options: []
        },
        it: {
          subtitle: "Spumante / Cava Gran Amat",
          description: "Spumante selezionato a grana fine e persistente, fresco ed elegante.",
          options: []
        },
        price: '16,00€',
        image: ''
      },
      {
        id: 'cerveza-saigon',
        name: 'Cerveza vietnamita (Saigon)',
        es: {
          subtitle: "Bia Việt Nam - Sài Gòn / Vietnamese beer - Saigon",
          description: "Cerveza rubia lager de Vietnam, ligera, refrescante e ideal para acompañar platos vietnamitas.",
          options: []
        },
        en: {
          subtitle: "Saigon Vietnamese Beer",
          description: "Vietnamese lager beer, light and refreshing, perfect to pair with Vietnamese food.",
          options: []
        },
        vi: {
          subtitle: "Bia Sài Gòn Việt Nam",
          description: "Bia lager Sài Gòn đặc trưng của Việt Nam, thanh mát và dễ uống, cực kỳ hợp vị với các món ăn Việt.",
          options: []
        },
        zh: {
          subtitle: "越南西贡啤酒",
          description: "经典的越南拉格啤酒，清爽顺口，与越式料理是绝配。",
          options: []
        },
        ko: {
          subtitle: "사이공 베트남 맥주",
          description: "베트남을 대표하는 가볍고 청량한 라거 맥주, 베트남 요리와 훌륭한 조화.",
          options: []
        },
        ja: {
          subtitle: "サイゴン ベトナムビール",
          description: "ベトナムを代表するラガービール。すっきりと軽快なのどごしでベトナム料理によく合います。",
          options: []
        },
        fr: {
          subtitle: "Bière Vietnamienne Saigon",
          description: "Bière blonde vietnamienne, légère et rafraîchissante, idéale avec la cuisine vietnamienne.",
          options: []
        },
        it: {
          subtitle: "Birra Vietnamita Saigon",
          description: "Birra lager vietnamita, leggera e rinfrescante, perfetta da abbinare alla cucina locale.",
          options: []
        },
        price: '3,60€',
        image: ''
      },
      {
        id: 'cerveza-heineken',
        name: 'Heiniken',
        es: {
          subtitle: "Bia Heineken / Heineken beer",
          description: "Cerveza pale lager premium de origen holandés.",
          options: []
        },
        en: {
          subtitle: "Heineken Beer",
          description: "Premium international pale lager beer of Dutch origin.",
          options: []
        },
        vi: {
          subtitle: "Bia Heineken",
          description: "Bia lager thương hiệu quốc tế cao cấp.",
          options: []
        },
        zh: {
          subtitle: "喜力啤酒",
          description: "源自荷兰的高品质国际淡色拉格啤酒。",
          options: []
        },
        ko: {
          subtitle: "하이네켄 맥주",
          description: "네덜란드 원산의 프리미엄 글로벌 라거 맥주.",
          options: []
        },
        ja: {
          subtitle: "ハイネケン ビール",
          description: "オランダ生まれの世界的プレミアムラガービール。",
          options: []
        },
        fr: {
          subtitle: "Bière Heineken",
          description: "Bière blonde premium d'origine hollandaise.",
          options: []
        },
        it: {
          subtitle: "Birra Heineken",
          description: "Birra pale lager premium di origine olandese.",
          options: []
        },
        price: '1,90€',
        image: ''
      },
      {
        id: 'cerveza-alhambra-1925',
        name: 'Alhambra 1925',
        es: {
          subtitle: "Bia Alhambra 1925 / Alhambra 1925 beer",
          description: "Cerveza artesanal española premium de color ámbar y notas de lúpulo intenso.",
          options: []
        },
        en: {
          subtitle: "Alhambra 1925 Beer",
          description: "Premium Spanish craft lager beer with amber color and intense hops notes.",
          options: []
        },
        vi: {
          subtitle: "Bia Alhambra 1925",
          description: "Bia thủ công Tây Ban Nha cao cấp, màu hổ phách sang trọng và hương hoa bia đậm đà.",
          options: []
        },
        zh: {
          subtitle: "阿兰布拉 1925 啤酒",
          description: "西班牙高端手工精酿拉格啤酒，琥珀色泽与浓郁啤酒花香。",
          options: []
        },
        ko: {
          subtitle: "알함브라 1925 맥주",
          description: "스페인산 프리미엄 크래프트 맥주, 호박색 빛깔과 깊고 진한 홉 향.",
          options: []
        },
        ja: {
          subtitle: "アルハンブラ 1925 ビール",
          description: "スペインのプレミアムクラフトラガービール。琥珀色の美しい色合いと豊かなホップのコク。",
          options: []
        },
        fr: {
          subtitle: "Bière Alhambra 1925",
          description: "Bière artisanale espagnole de qualité supérieure, couleur ambrée et notes de houblon intense.",
          options: []
        },
        it: {
          subtitle: "Birra Alhambra 1925",
          description: "Birra artigianale spagnola premium dal colore ambrato e note di luppolo intenso.",
          options: []
        },
        price: '2,90€',
        image: ''
      },
      {
        id: 'cerveza-clara',
        name: 'Clara',
        es: {
          subtitle: "Bia nhẹ / Light beer",
          description: "Cerveza con limón fresca, ligera y muy refrescante.",
          options: []
        },
        en: {
          subtitle: "Lemon Beer / Radler",
          description: "Fresh, light, and very refreshing beer mixed with lemon soda.",
          options: []
        },
        vi: {
          subtitle: "Bia Pha Chanh (Clara)",
          description: "Bia kết hợp nước ngọt chanh tươi mát, nồng độ cồn nhẹ nhàng dễ chịu.",
          options: []
        },
        zh: {
          subtitle: "柠檬啤酒/克拉拉",
          description: "啤酒与柠檬汽水混合而成的低度清凉饮品。",
          options: []
        },
        ko: {
          subtitle: "클라라 (레몬 맥주)",
          description: "맥주에 상큼한 레몬 탄산음료를 섞은 알코올 도수가 낮은 가벼운 음료.",
          options: []
        },
        ja: {
          subtitle: "クララ (レモンビール)",
          description: "ビールにレモンソーダを合わせた、爽やかで飲みやすいカクテル。",
          options: []
        },
        fr: {
          subtitle: "Bière Panachée / Radler",
          description: "Bière coupée au soda citron, fraîche, légère et désaltérante.",
          options: []
        },
        it: {
          subtitle: "Radler / Shandy",
          description: "Birra unita a gassosa al limone, fresca, leggera e dissetante.",
          options: []
        },
        price: '2,70€',
        image: ''
      },
      {
        id: 'cerveza-cana',
        name: 'Caña',
        es: {
          subtitle: "Bia tươi / Fresh beer",
          description: "Vaso clásico de cerveza de barril recién tirada.",
          options: []
        },
        en: {
          subtitle: "Draft Beer (Glass)",
          description: "Classic glass of freshly tapped draft beer.",
          options: []
        },
        vi: {
          subtitle: "Bia Hơi / Bia Tươi (Ly)",
          description: "Ly bia tươi rót trực tiếp từ vòi lạnh mát lạnh sảng khoái.",
          options: []
        },
        zh: {
          subtitle: "生啤酒（小杯）",
          description: "从生啤机中新鲜打出的经典生啤酒。",
          options: []
        },
        ko: {
          subtitle: "생맥주 (작은 잔)",
          description: "생맥주 탭에서 바로 뽑아낸 시원한 클래식 드래프트 생맥주.",
          options: []
        },
        ja: {
          subtitle: "生ビール（グラス）",
          description: "サーバーから注ぎたての、のどごし爽快な生ビール。",
          options: []
        },
        fr: {
          subtitle: "Demi de Bière Pression",
          description: "Verre classique de bière pression fraîchement tirée.",
          options: []
        },
        it: {
          subtitle: "Birra alla Spina (Piccola)",
          description: "Calice classico di birra alla spina appena spillata.",
          options: []
        },
        price: '2,60€',
        image: ''
      },
      {
        id: 'cerveza-san-miguel-especial',
        name: 'San Miguel Especial',
        es: {
          subtitle: "Đặc sản San Miguel / San Miguel special",
          description: "Cerveza lager dorada de barril con sabor equilibrado.",
          options: []
        },
        en: {
          subtitle: "San Miguel Especial Beer",
          description: "Classic golden lager beer with balanced and refreshing taste.",
          options: []
        },
        vi: {
          subtitle: "Bia San Miguel Đặc Biệt",
          description: "Bia lager vàng óng với hương vị cân bằng sảng khoái đặc trưng.",
          options: []
        },
        zh: {
          subtitle: "生力特别啤酒",
          description: "经典金黄拉格啤酒，口感均衡，麦香纯正。",
          options: []
        },
        ko: {
          subtitle: "산 미겔 에스페셜 맥주",
          description: "균형 잡힌 맛과 청량감을 자랑하는 정통 라거 맥주.",
          options: []
        },
        ja: {
          subtitle: "サン・ミゲル エスペシャル ビール",
          description: "バランスの良い味わいとのどごしが人気の、伝統的なゴールデンラガービール。",
          options: []
        },
        fr: {
          subtitle: "Bière San Miguel Especial",
          description: "Bière lager dorée au goût équilibré et désaltérant.",
          options: []
        },
        it: {
          subtitle: "Birra San Miguel Especial",
          description: "Birra lager dorata dal gusto equilibrato ed armónico.",
          options: []
        },
        price: '2,60€',
        image: ''
      },
      {
        id: 'cerveza-tostada-sin-alcohol',
        name: 'Tostada sin alcohol',
        es: {
          subtitle: "Bia không cồn / Non-alcoholic beer",
          description: "Cerveza tostada sin alcohol con gran cuerpo y notas de malta tostada.",
          options: []
        },
        en: {
          subtitle: "Non-Alcoholic Amber Beer",
          description: "Full-bodied amber beer with zero alcohol, featuring notes of roasted malt.",
          options: []
        },
        vi: {
          subtitle: "Bia Đen Không Cồn (Tostada)",
          description: "Bia sẫm màu không cồn đậm vị, thoảng hương mạch nha rang thơm ngậy.",
          options: []
        },
        zh: {
          subtitle: "无酒精黑啤",
          description: "带有烤麦芽香气、口感醇厚的无酒精深色啤酒。",
          options: []
        },
        ko: {
          subtitle: "무알코올 흑맥주",
          description: "풍부한 바디감과 구운 맥아 향이 특징인 무알코올 아시아 앰버 맥주.",
          options: []
        },
        ja: {
          subtitle: "ノンアルコール黒ビール",
          description: "ノンアルコールでありながら、ロースト麦芽の豊かなコクと深みを楽しめる本格派ビール。",
          options: []
        },
        fr: {
          subtitle: "Bière Ambrée Sans Alcool",
          description: "Bière ambrée sans alcool avec du corps et des notes de malt torréfié.",
          options: []
        },
        it: {
          subtitle: "Birra Scura Analcolica",
          description: "Birra scura analcolica dal corpo pieno con note di malto tostato.",
          options: []
        },
        price: '2,80€',
        image: ''
      },
      {
        id: 'cerveza-san-miguel-sin-gluten',
        name: 'San Miguel sin gluten',
        es: {
          subtitle: "Bia San Miguel không gluten / Gluten-free San Miguel beer",
          description: "Cerveza lager tradicional adaptada para celíacos, conservando todo el sabor.",
          options: []
        },
        en: {
          subtitle: "Gluten-Free San Miguel Beer",
          description: "Traditional lager beer adapted for coeliacs, keeping all the flavor.",
          options: []
        },
        vi: {
          subtitle: "Bia San Miguel Không Gluten",
          description: "Bia lager truyền thống được điều chế đặc biệt cho người nhạy cảm với gluten nhưng vẫn giữ trọn hương vị tuyệt hảo.",
          options: []
        },
        zh: {
          subtitle: "无麸质生力啤酒",
          description: "专为麸质过敏人士特别研制的经典拉格啤酒, 口感毫不妥协。",
          options: []
        },
        ko: {
          subtitle: "글루텐 프리 산 미겔 맥주",
          description: "맥주의 맛을 그대로 살려 글루텐 과민증이 있는 분도 즐길 수 있는 라거 맥주.",
          options: []
        },
        ja: {
          subtitle: "グルテンフリー サン・ミゲル ビール",
          description: "本来のコクと美味しさはそのままに, グルテンを含まないラガービール。",
          options: []
        },
        fr: {
          subtitle: "Bière Sans Gluten",
          description: "Bière blonde traditionnelle adaptée aux coeliaques, conservant toute sa saveur.",
          options: []
        },
        it: {
          subtitle: "Birra Senza Glutine",
          description: "Birra lager tradicional adatta ai celiaci, che conserva tutto il gusto originario.", // wait: tradizionale
          description: "Birra lager tradizionale adatta ai celiaci, che conserva tutto il gusto originario.",
          options: []
        },
        price: '2,90€',
        image: ''
      },
      {
        id: 'cerveza-corona',
        name: 'Corona',
        es: {
          subtitle: "Bia Corona / Corona beer",
          description: "Cerveza rubia suave mexicana premium, servida habitualmente con una rodaja de lima.",
          options: []
        },
        en: {
          subtitle: "Corona Beer",
          description: "Mild premium Mexican lager beer, usually served with a lime wedge.",
          options: []
        },
        vi: {
          subtitle: "Bia Corona",
          description: "Bia nhập khẩu Mexico nổi tiếng dịu nhẹ, thường dùng kèm một lát chanh tươi.",
          options: []
        },
        zh: {
          subtitle: "科罗娜啤酒",
          description: "经典的墨西哥清爽拉格啤酒, 饮用时常伴以一片柠檬。",
          options: []
        },
        ko: {
          subtitle: "코로나 맥주",
          description: "라임 조각을 곁들여 마시는 멕시코산 청량한 프리미엄 맥주.",
          options: []
        },
        ja: {
          subtitle: "コロナ ビール",
          description: "ライムを挿して飲むことでおなじみの, ライトで飲みやすいメキシコ産ビール。",
          options: []
        },
        fr: {
          subtitle: "Bière Corona",
          description: "Bière blonde mexicaine douce, généralement servie avec un quartier de citron vert.",
          options: []
        },
        it: {
          subtitle: "Birra Corona",
          description: "Birra messicana leggera e rinfrescante, servita tipicamente con uno spicchio di lime.",
          options: []
        },
        price: '2,80€',
        image: ''
      },
      {
        id: 'te-verde-vietnam',
        name: 'Té verde de Vietnam',
        es: {
          subtitle: "Trà Xanh Việt Nam / Green Tea from Vietnam",
          description: "Té verde tradicional importado de Vietnam, aromático y purificante.",
          options: []
        },
        en: {
          subtitle: "Vietnamese Green Tea",
          description: "Traditional green tea imported from Vietnam, aromatic and purifying.",
          options: []
        },
        vi: {
          subtitle: "Trà Xanh Việt Nam",
          description: "Trà xanh truyền thống Việt Nam thơm hương dịu nhẹ và thanh lọc cơ thể.",
          options: []
        },
        zh: {
          subtitle: "越南绿茶",
          description: "从越南进口的传统绿茶，茶香浓郁，提神清心。",
          options: []
        },
        ko: {
          subtitle: "베트남 녹차",
          description: "베트남에서 수입한 정통 녹차, 향긋하고 깔끔한 맛.",
          options: []
        },
        ja: {
          subtitle: "ベトナム緑茶",
          description: "ベトナムから直輸入した伝統的な緑茶。香り高くすっきりとした味わい。",
          options: []
        },
        fr: {
          subtitle: "Thé Vert du Vietnam",
          description: "Thé vert traditionnel importé du Vietnam, aromatique et purifiant.",
          options: []
        },
        it: {
          subtitle: "Tè Verde del Vietnam",
          description: "Tè verde tradizionale importato dal Vietnam, aromatico e purificante.",
          options: []
        },
        price: '2,50€',
        image: ''
      },
      {
        id: 'te-jengibre-limon',
        name: 'Té de jengibre con limón',
        es: {
          subtitle: "Trà Gừng Chanh / Ginger Tea with Lemon",
          description: "Infusión reconfortante de jengibre fresco y limón, ideal para la digestión.",
          options: []
        },
        en: {
          subtitle: "Ginger Tea with Lemon",
          description: "Comforting infusion of fresh ginger and lemon, ideal for digestion.",
          options: []
        },
        vi: {
          subtitle: "Trà Gừng Chanh",
          description: "Trà gừng ấm áp kết hợp cùng chanh tươi thơm mát, hỗ trợ tiêu hóa tốt.",
          options: []
        },
        zh: {
          subtitle: "柠檬生姜茶",
          description: "新鲜生姜与柠檬的暖胃特调花草茶，有助于消化。",
          options: []
        },
        ko: {
          subtitle: "레몬 생강차",
          description: "신선한 생강과 레몬을 우려내어 속을 따뜻하게 해주는 건강차.",
          options: []
        },
        ja: {
          subtitle: "レモンジンジャーティー",
          description: "新鮮な生姜とレモンをブレンドした、体を温めるヘルシーなハーブティー。",
          options: []
        },
        fr: {
          subtitle: "Infusion Gingembre Citron",
          description: "Infusion réconfortante de gingembre frais et de citron, idéale pour la digestion.",
          options: []
        },
        it: {
          subtitle: "Infuso di Zenzero e Limone",
          description: "Infuso confortante di zenzero fresco e limone, ideale per la digestione.",
          options: []
        },
        price: '3,50€',
        image: ''
      },
      {
        id: 'manzanilla',
        name: 'Manzanilla',
        es: {
          subtitle: "Trà Hoa Cúc / Chamomile Tea",
          description: "Infusión clásica de flores de manzanilla, relajante y digestiva.",
          options: []
        },
        en: {
          subtitle: "Chamomile Tea",
          description: "Classic chamomile flower infusion, relaxing and soothing for digestion.",
          options: []
        },
        vi: {
          subtitle: "Trà Hoa Cúc",
          description: "Trà hoa cúc khô thiên nhiên, giúp thanh nhiệt, thư giãn và ngủ ngon.",
          options: []
        },
        zh: {
          subtitle: "洋甘菊茶",
          description: "经典的洋甘菊花茶，温和舒缓，有助于放松与消化。",
          options: []
        },
        ko: {
          subtitle: "캐모마일 티",
          description: "마음을 편안하게 해주는 클래식 캐모마일 꽃차.",
          options: []
        },
        ja: {
          subtitle: "カモミールティー",
          description: "リラックス効果が高く、消化にも優しい定番のカモミールハーブティー。",
          options: []
        },
        fr: {
          subtitle: "Camomille",
          description: "Infusion classique de flores de manzanilla, relaxante et digestive.",
          options: []
        },
        it: {
          subtitle: "Camomilla",
          description: "Infuso classico di fiori di camomilla, rilassante e digestivo.",
          options: []
        },
        price: '2,50€',
        image: ''
      },
      {
        id: 'frutos-de-bosque',
        name: 'Frutos de Bosque',
        es: {
          subtitle: "Trà Dâu Rừng / Forest Berries Tea",
          description: "Deliciosa infusión frutal con una mezcla selecta de bayas y frutos rojos del bosque.",
          options: []
        },
        en: {
          subtitle: "Forest Berries Tea",
          description: "Delicious fruit infusion with a select blend of forest berries and red fruits.",
          options: []
        },
        vi: {
          subtitle: "Trà Dâu Rừng",
          description: "Trà trái cây thơm ngon phối trộn từ các loại dâu rừng và quả mọng đỏ.",
          options: []
        },
        zh: {
          subtitle: "森林野莓果茶",
          description: "甄选多种森林野莓与红果混合调配而成的美味果茶。",
          options: []
        },
        ko: {
          subtitle: "포레스트 베리 티",
          description: "다양한 야생 베리와 붉은 과일들을 블렌딩하여 만든 새콤달콤한 과일차.",
          options: []
        },
        ja: {
          subtitle: "フォレストベリーティー",
          description: "数種類の野いちごや赤い果実を贅沢にブレンドした、甘酸っぱいフルーツティー。",
          options: []
        },
        fr: {
          subtitle: "Fruits des Bois",
          description: "Délicieuse infusion fruitée avec un mélange sélectionné de baies et de fruits rouges des bois.",
          options: []
        },
        it: {
          subtitle: "Frutti di Bosco",
          description: "Delizioso infuso fruttato con una miscela selezionata di bacche e frutti rossi del bosco.",
          options: []
        },
        price: '2,50€',
        image: ''
      },
      {
        id: 'poleo-menta',
        name: 'Poleo Menta',
        es: {
          subtitle: "Trà Bạc Hà / Mint Tea",
          description: "Infusión refrescante de menta poleo, excelente para después de las comidas.",
          options: []
        },
        en: {
          subtitle: "Mint Tea",
          description: "Refreshing pennyroyal mint infusion, excellent for after meals.",
          options: []
        },
        vi: {
          subtitle: "Trà Bạc Hà",
          description: "Trà lá bạc hà thanh mát, sảng khoái, rất tốt cho tiêu hóa sau bữa ăn.",
          options: []
        },
        zh: {
          subtitle: "薄荷茶",
          description: "清新提神的薄荷草本茶，饭后饮用极佳。",
          options: []
        },
        ko: {
          subtitle: "페퍼민트/민트 티",
          description: "식후에 마시기 좋은 깔끔하고 청량한 민트 허브차.",
          options: []
        },
        ja: {
          subtitle: "ペパーミントティー",
          description: "爽やかな風味で、食後のお口直しにもぴったりのミントハーブティー。",
          options: []
        },
        fr: {
          subtitle: "Menthe Pouliot",
          description: "Infusion rafraîchissante de menthe pouliot, excellente après les repas.",
          options: []
        },
        it: {
          subtitle: "Menta Piperita",
          description: "Infuso rinfrescante di menta piperita, eccellente dopo i pasti.",
          options: []
        },
        price: '2,50€',
        image: ''
      },
      {
        id: 'english-breakfast',
        name: 'English breakfast (té negro)',
        es: {
          subtitle: "Bữa Sáng Kiểu Anh - Trà Đen / English Breakfast - Black Tea",
          description: "Té negro tradicional de cuerpo robusto, ideal para comenzar el día o tomar con leche.",
          options: []
        },
        en: {
          subtitle: "English Breakfast Black Tea",
          description: "Traditional robust-bodied black tea, ideal to start the day or drink with milk.",
          options: []
        },
        vi: {
          subtitle: "Hồng Trà Bữa Sáng Kiểu Anh",
          description: "Hồng trà (trà đen) truyền thống đậm đà, lý tưởng để khởi đầu ngày mới hoặc uống cùng sữa.",
          options: []
        },
        zh: {
          subtitle: "英式早餐红茶",
          description: "经典的浓郁红茶，非常适合搭配牛奶或开启活力一天。",
          options: []
        },
        ko: {
          subtitle: "잉글리시 브렉퍼스트 홍차",
          description: "진하고 깊은 맛의 전통 홍차, 우유와 곁들이거나 아침에 마시기 좋습니다.",
          options: []
        },
        ja: {
          subtitle: "イングリッシュ・ブレックファスト紅茶",
          description: "コク深くまろやかな伝統のブラックティー。ミルクティーにも最適。",
          options: []
        },
        fr: {
          subtitle: "Thé Noir English Breakfast",
          description: "Thé noir traditionnel au corps robuste, idéal pour commencer la journée ou à déguster avec du lait.",
          options: []
        },
        it: {
          subtitle: "Tè Nero English Breakfast",
          description: "Tè nero tradizionale dal corpo robusto, ideale per iniziare la giornata o da gustare con il latte.",
          options: []
        },
        price: '2,50€',
        image: ''
      }
    ]
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
              <span className="daily-menu-subtitle">
                {dailyMenuTranslations[currentLang]?.subtitle || 'Solo Días Laborales'}
              </span>
              <h3 className="daily-menu-title">
                {dailyMenuTranslations[currentLang]?.title || 'Menú Medio de Día'}
              </h3>
              <div className="daily-menu-price-tag">
                {dailyMenuTranslations[currentLang]?.price || '13,90€'}
              </div>
              <p className="daily-menu-rules">
                {dailyMenuTranslations[currentLang]?.rule || 'Incluye: 1 Entrante + 1 Plato Principal + 1 Café o Postre + 1 Bebida'}
              </p>
            </div>

            <div className="daily-menu-grid-layout">
              {[
                { key: 'starters', title: dailyMenuTranslations[currentLang]?.starters || 'Entrantes', items: menuItems.starters },
                { key: 'mains', title: dailyMenuTranslations[currentLang]?.mains || 'Platos Principales', items: menuItems.mains },
                { key: 'desserts', title: dailyMenuTranslations[currentLang]?.desserts || 'Postres o Café', items: menuItems.desserts },
                { key: 'drinks', title: dailyMenuTranslations[currentLang]?.drinks || 'Bebidas', items: menuItems.drinks },
              ].map((section) => (
                <div key={section.key} className="daily-menu-section">
                  <h4 className="daily-menu-section-title">
                    <span>{section.title}</span>
                    <span className="daily-menu-section-badge">
                      {dailyMenuTranslations[currentLang]?.select || 'Selecciona 1'}
                    </span>
                  </h4>
                  <div className="daily-menu-cards-list">
                    {section.items && section.items.map((item) => {
                      const details = item[currentLang] || item.es;
                      return (
                        <div key={item.id} className="custom-menu-item" style={{ marginBottom: '28px', paddingBottom: '24px' }}>
                          <div className="menu-item-info">
                            <h3 className="menu-item-title">{item.name}</h3>
                            <p className="menu-item-subtitle">{details.subtitle}</p>
                            <p className="menu-item-desc">{details.description}</p>
                            {details.options && details.options.length > 0 && (
                              <ul className="menu-item-options">
                                {details.options.map((opt, idx) => (
                                  <li key={idx} className={opt.highlight ? 'highlight-option' : ''}>
                                    {opt.text}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                          {item.image && (
                            <div className="menu-item-image-container">
                              <div className="menu-item-image-circle">
                                <img src={item.image} alt={item.name} className="menu-item-image" />
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="daily-menu-footer-note">
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
                        <img src={item.image} alt={item.name} className="menu-item-image" />
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
