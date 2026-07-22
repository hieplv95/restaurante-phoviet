import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  es: {
    // Navigation
    'nav.menu': 'Menú',
    'nav.kitchen': 'Vista Cocina',
    'nav.client': 'Vista Cliente',
    'nav.cart': 'Mi Carrito',
    
    // Hero
    'hero.tagline': 'Sabor Tradicional de Hanoi',
    'hero.title.part1': 'El Arte del ',
    'hero.title.highlight': 'Phở Auténtico',
    'hero.title.part2': ' en tu Ciudad',
    'hero.desc': 'Disfruta de recetas familiares vietnamitas transmitidas durante generaciones. Preparadas con ingredientes frescos de la más alta calidad y un caldo cocinado a fuego lento durante 12 horas.',
    'hero.btn.menu': 'Ver Menú',
    'hero.btn.kitchen': 'Simular Cocina 🍳',
    'hero.badge.fresh': 'Ingredientes 100% Frescos',
    'hero.badge.hours': 'Caldo de 12 Horas',
    
    // Menu & Filters
    'menu.tagline': 'Platos Seleccionados',
    'menu.title': 'Explora Nuestro Menú',
    'menu.desc': 'Filtra por tus preferencias de dieta y selecciona tus platos tradicionales vietnamitas favoritos.',
    'menu.all': 'Todo',
    'menu.filter.spicy': 'Solo Picante 🌶️',
    'menu.filter.vegan': 'Solo Vegano 🌿',
    'menu.filter.gf': 'Sin Gluten 🌾',
    'menu.add_to_cart': 'Añadir al Carrito',
    
    // Reviews
    'reviews.badge': 'RESEÑAS DE GOOGLE',
    'reviews.title': 'Lo que dicen nuestros clientes',
    'reviews.subtitle': 'Opiniones reales extraídas de Google Maps',
    'reviews.reviews': 'reseñas',
    'reviews.photos': 'fotos',
    'reviews.ago.day': 'Hace 1 día',
    'reviews.ago.months': 'Hace 8 meses',
    'reviews.ago.months.6': 'Hace 6 meses',
    'reviews.guide': 'Guía Local',

    // Footer
    'footer.desc': 'Auténtica gastronomía vietnamita. Caldos reconfortantes, baguettes crujientes e ingredientes frescos elaborados a mano.',
    'footer.hours': 'Horarios',
    'footer.hours.desc': 'Lunes - Domingo: 12:00 - 23:30',
    'footer.contact': 'Contacto',
    'footer.rights': '© 2026 Restaurante Phở Việt. Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio'
  },
  en: {
    // Navigation
    'nav.menu': 'Menu',
    'nav.kitchen': 'Kitchen View',
    'nav.client': 'Customer View',
    'nav.cart': 'My Cart',
    
    // Hero
    'hero.tagline': 'Traditional Taste of Hanoi',
    'hero.title.part1': 'The Art of ',
    'hero.title.highlight': 'Authentic Phở',
    'hero.title.part2': ' in Your City',
    'hero.desc': 'Enjoy Vietnamese family recipes passed down through generations. Prepared with the highest quality fresh ingredients and a slow-cooked 12-hour broth.',
    'hero.btn.menu': 'View Menu',
    'hero.btn.kitchen': 'Simulate Kitchen 🍳',
    'hero.badge.fresh': '100% Fresh Ingredients',
    'hero.badge.hours': '12-Hour Broth',
    
    // Menu & Filters
    'menu.tagline': 'Selected Dishes',
    'menu.title': 'Explore Our Menu',
    'menu.desc': 'Filter by dietary preferences and select your favorite traditional Vietnamese dishes.',
    'menu.all': 'All',
    'menu.filter.spicy': 'Spicy Only 🌶️',
    'menu.filter.vegan': 'Vegan Only 🌿',
    'menu.filter.gf': 'Gluten Free 🌾',
    'menu.add_to_cart': 'Add to Cart',
    
    // Reviews
    'reviews.badge': 'GOOGLE REVIEWS',
    'reviews.title': 'What our customers say',
    'reviews.subtitle': 'Real reviews extracted from Google Maps',
    'reviews.reviews': 'reviews',
    'reviews.photos': 'photos',
    'reviews.ago.day': '1 day ago',
    'reviews.ago.months': '8 months ago',
    'reviews.ago.months.6': '6 months ago',
    'reviews.guide': 'Local Guide',

    // Footer
    'footer.desc': 'Authentic Vietnamese cuisine. Slow-cooked aromatic broths, crispy baguettes, and fresh hand-prepared ingredients.',
    'footer.hours': 'Hours',
    'footer.hours.desc': 'Monday - Sunday: 12:00 - 23:30',
    'footer.contact': 'Contact',
    'footer.rights': '© 2026 Phở Việt Restaurant. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service'
  },
  vi: {
    // Navigation
    'nav.menu': 'Thực Đơn',
    'nav.kitchen': 'Console Nhà Bếp',
    'nav.client': 'Giao Diện Khách',
    'nav.cart': 'Giỏ Hàng',
    
    // Hero
    'hero.tagline': 'Hương Vị Truyền Thống Hà Nội',
    'hero.title.part1': 'Nghệ Thuật ',
    'hero.title.highlight': 'Phở Tự Nhiên',
    'hero.title.part2': ' Trong Thành Phố Bạn',
    'hero.desc': 'Thưởng thức công thức nấu phở gia truyền của gia đình qua nhiều thế hệ. Chuẩn bị với các nguyên liệu tươi ngon nhất và nước dùng ninh liên tục trong 12 giờ.',
    'hero.btn.menu': 'Xem Thực Đơn',
    'hero.btn.kitchen': 'Simulate Kitchen 🍳',
    'hero.badge.fresh': 'Nguyên Liệu Tươi 100%',
    'hero.badge.hours': 'Nước Dùng Ninh 12h',
    
    // Menu & Filters
    'menu.tagline': 'Món Ăn Chọn Lọc',
    'menu.title': 'Khám Phá Thực Đơn',
    'menu.desc': 'Lọc món theo sở thích và tìm các món ăn truyền thống Việt Nam yêu thích của bạn.',
    'menu.all': 'Tất cả',
    'menu.filter.spicy': 'Chỉ cay 🌶️',
    'menu.filter.vegan': 'Chay 🌿',
    'menu.filter.gf': 'Không chứa Gluten 🌾',
    'menu.add_to_cart': 'Thêm vào Giỏ Hàng',
    
    // Reviews
    'reviews.badge': 'ĐÁNH GIÁ GOOGLE',
    'reviews.title': 'Khách hàng nói gì về chúng tôi',
    'reviews.subtitle': 'Ý kiến thực tế từ Google Maps',
    'reviews.reviews': 'đánh giá',
    'reviews.photos': 'hình ảnh',
    'reviews.ago.day': '1 ngày trước',
    'reviews.ago.months': '8 tháng trước',
    'reviews.ago.months.6': '6 tháng trước',
    'reviews.guide': 'Hướng Dẫn Viên Địa Phương',

    // Footer
    'footer.desc': 'Ẩm thực Việt Nam chính hiệu. Nước dùng ninh lâu thơm lừng, bánh mì giòn rụm và nguyên liệu tươi ngon tự làm.',
    'footer.hours': 'Giờ Mở Cửa',
    'footer.hours.desc': 'Thứ Hai - Chủ Nhật: 12:00 - 23:30',
    'footer.contact': 'Liên Hệ',
    'footer.rights': '© 2026 Nhà Hàng Phở Việt. Bảo lưu mọi quyền.',
    'footer.privacy': 'Chính sách Bảo mật',
    'footer.terms': 'Điều khoản Dịch vụ'
  },
  zh: {
    // Navigation
    'nav.menu': '菜单',
    'nav.kitchen': '厨房控制台',
    'nav.client': '顾客界面',
    'nav.cart': '购物车',
    
    // Hero
    'hero.tagline': '河内传统美味',
    'hero.title.part1': '您城市里的',
    'hero.title.highlight': '正宗越南粉',
    'hero.title.part2': '艺术',
    'hero.desc': '享受代代相传的越南家族配方。选用最优质的新鲜食材，汤底慢火熬制12小时。',
    'hero.btn.menu': '查看菜单',
    'hero.btn.kitchen': 'Simulate Kitchen 🍳',
    'hero.badge.fresh': '100% 新鲜食材',
    'hero.badge.hours': '12小时熬制高汤',
    
    // Menu & Filters
    'menu.tagline': '精选菜肴',
    'menu.title': '探索我们的菜单',
    'menu.desc': '按饮食偏好过滤，选择您喜爱的传统越南美食。',
    'menu.all': '全部',
    'menu.filter.spicy': '仅限辣味 🌶️',
    'menu.filter.vegan': '仅限素食 🌿',
    'menu.filter.gf': '无麸质 🌾',
    'menu.add_to_cart': '加入购物车',
    
    // Reviews
    'reviews.badge': '谷歌评价',
    'reviews.title': '顾客的心声',
    'reviews.subtitle': '来自谷歌地图的真实评价',
    'reviews.reviews': '条评价',
    'reviews.photos': '张照片',
    'reviews.ago.day': '1天前',
    'reviews.ago.months': '8个月前',
    'reviews.ago.months.6': '6个月前',
    'reviews.guide': '本地向导',

    // Footer
    'footer.desc': '正宗越南美食。慢熬高汤、香脆法棍以及纯手工制作的新鲜食材。',
    'footer.hours': '营业时间',
    'footer.hours.desc': '周一 - 周日：12:00 - 23:30',
    'footer.contact': '联系我们',
    'footer.rights': '© 2026 Phở Việt 餐厅。保留所有权利。',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款'
  },
  ko: {
    // Navigation
    'nav.menu': '메뉴',
    'nav.kitchen': '주방 콘솔',
    'nav.client': '고객 뷰',
    'nav.cart': '장바구니',
    
    // Hero
    'hero.tagline': '하노이 전통의 맛',
    'hero.title.part1': '우리 동네에서 만나는 ',
    'hero.title.highlight': '정통 쌀국수',
    'hero.title.part2': '의 예술',
    'hero.desc': '대대로 전해 내려오는 베트남 가족 레시피를 즐겨보세요. 최상급 신선한 재료와 12시간 동안 우려낸 깊은 육수로 정성껏 준비합니다.',
    'hero.btn.menu': '메뉴 보기',
    'hero.btn.kitchen': 'Simulate Kitchen 🍳',
    'hero.badge.fresh': '100% 신선한 재료',
    'hero.badge.hours': '12시간 정성 육수',
    
    // Menu & Filters
    'menu.tagline': '엄선된 요리',
    'menu.title': '메뉴 둘러보기',
    'menu.desc': '식단 선호도에 따라 분류하고 좋아하는 정통 베트남 요리를 선택해 보세요.',
    'menu.all': '전체',
    'menu.filter.spicy': '매운맛만 🌶️',
    'menu.filter.vegan': '비건만 🌿',
    'menu.filter.gf': '글루텐 프리 🌾',
    'menu.add_to_cart': '장바구니에 담기',
    
    // Reviews
    'reviews.badge': '구글 리뷰',
    'reviews.title': '고객 후기',
    'reviews.subtitle': '구글 지도에서 추출한 실제 리뷰',
    'reviews.reviews': '개의 리뷰',
    'reviews.photos': '개의 사진',
    'reviews.ago.day': '1일 전',
    'reviews.ago.months': '8개월 전',
    'reviews.ago.months.6': '6개월 전',
    'reviews.guide': '지역 가이드',

    // Footer
    'footer.desc': '정통 베트남 요리. 천천히 끓여낸 향긋한 육수, 바삭한 바게트, 그리고 매일 직접 준비하는 신선한 재료.',
    'footer.hours': '영업 시간',
    'footer.hours.desc': '월요일 - 일요일: 12:00 - 23:30',
    'footer.contact': '연락처',
    'footer.rights': '© 2026 Phở Việt 레스토랑. All rights reserved.',
    'footer.privacy': '개인정보 처리방침',
    'footer.terms': '서비스 약관'
  },
  ja: {
    // Navigation
    'nav.menu': 'メニュー',
    'nav.kitchen': '厨房コンソール',
    'nav.client': '顧客ビュー',
    'nav.cart': 'カート',
    
    // Hero
    'hero.tagline': 'ハノイ伝統の味',
    'hero.title.part1': 'あなたの街で味わう',
    'hero.title.highlight': '本物のフォー',
    'hero.title.part2': 'の芸術',
    'hero.desc': '何世代にもわたり受け継がれてきたベトナムの秘伝レシピ。最高品質の新鮮な食材と、12時間かけてじっくり煮込んだ秘伝のスープをお楽しみください。',
    'hero.btn.menu': 'メニューを見る',
    'hero.btn.kitchen': 'Simulate Kitchen 🍳',
    'hero.badge.fresh': '100% 新鮮な食材',
    'hero.badge.hours': '12時間煮込みスープ',
    
    // Menu & Filters
    'menu.tagline': '厳選された一品',
    'menu.title': 'メニューを見る',
    'menu.desc': '食事の好みに合わせて絞り込み、お気に入りの伝統的なベトナム料理をお選びください。',
    'menu.all': 'すべて',
    'menu.filter.spicy': '辛口のみ 🌶️',
    'menu.filter.vegan': 'ヴィーガンのみ 🌿',
    'menu.filter.gf': 'グルテンフリー 🌾',
    'menu.add_to_cart': 'カートに追加',
    
    // Reviews
    'reviews.badge': 'Google クチコミ',
    'reviews.title': 'お客様の声',
    'reviews.subtitle': 'Google マップから引用した実際のレビュー',
    'reviews.reviews': '件のレビュー',
    'reviews.photos': '枚の写真',
    'reviews.ago.day': '1日前',
    'reviews.ago.months': '8ヶ月前',
    'reviews.ago.months.6': '6ヶ月前',
    'reviews.guide': 'ローカルガイド',

    // Footer
    'footer.desc': '本格ベトナム料理。じっくり煮込んだスープ、パリッとしたバゲット、毎日手作りする新鮮な食材。',
    'footer.hours': '営業時間',
    'footer.hours.desc': '月曜日 - 日曜日: 12:00 - 23:30',
    'footer.contact': 'お問い合わせ',
    'footer.rights': '© 2026 Phở Việt レストラン. All rights reserved.',
    'footer.privacy': 'プライバシーポリシー',
    'footer.terms': '利用規約'
  },
  fr: {
    // Navigation
    'nav.menu': 'Menu',
    'nav.kitchen': 'Console Cuisine',
    'nav.client': 'Vue Client',
    'nav.cart': 'Mon Panier',
    
    // Hero
    'hero.tagline': 'Saveur Traditionnelle de Hanoï',
    'hero.title.part1': 'L\'Art du ',
    'hero.title.highlight': 'Phở Authentique',
    'hero.title.part2': ' dans Votre Ville',
    'hero.desc': 'Savourez des recettes familiales vietnamiennes transmises de génération en génération. Préparées avec des ingrédients frais de la plus haute qualité et un bouillon mijoté pendant 12 heures.',
    'hero.btn.menu': 'Voir le Menu',
    'hero.btn.kitchen': 'Simuler Cuisine 🍳',
    'hero.badge.fresh': 'Ingrédients 100% Frais',
    'hero.badge.hours': 'Bouillon de 12 Heures',
    
    // Menu & Filters
    'menu.tagline': 'Plats Sélectionnés',
    'menu.title': 'Explorez Notre Menu',
    'menu.desc': 'Filtrez par préférences alimentaires et sélectionnez vos plats vietnamiens traditionnels préférés.',
    'menu.all': 'Tout',
    'menu.filter.spicy': 'Épicé Uniquement 🌶️',
    'menu.filter.vegan': 'Végétalien Uniquement 🌿',
    'menu.filter.gf': 'Sans Gluten 🌾',
    'menu.add_to_cart': 'Ajouter au Panier',
    
    // Reviews
    'reviews.badge': 'AVIS GOOGLE',
    'reviews.title': 'Ce que disent nos clients',
    'reviews.subtitle': 'Avis réels extraits de Google Maps',
    'reviews.reviews': 'avis',
    'reviews.photos': 'photos',
    'reviews.ago.day': 'Il y a 1 jour',
    'reviews.ago.months': 'Il y a 8 mois',
    'reviews.ago.months.6': 'Il y a 6 mois',
    'reviews.guide': 'Local Guide',

    // Footer
    'footer.desc': 'Gastronomie vietnamienne authentique. Bouillons réconfortants mijotés, baguettes croustillantes et ingrédients frais faits maison.',
    'footer.hours': 'Horaires',
    'footer.hours.desc': 'Lundi - Dimanche: 12h00 - 23h30',
    'footer.contact': 'Contact',
    'footer.rights': '© 2026 Restaurant Phở Việt. Tous droits réservés.',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation'
  },
  it: {
    // Navigation
    'nav.menu': 'Menu',
    'nav.kitchen': 'Console Cucina',
    'nav.client': 'Vista Cliente',
    'nav.cart': 'Carrello',
    
    // Hero
    'hero.tagline': 'Sapore Tradizionale di Hanoi',
    'hero.title.part1': 'L\'Arte del ',
    'hero.title.highlight': 'Phở Autentico',
    'hero.title.part2': ' nella Tua Città',
    'hero.desc': 'Gusta le ricette di famiglia vietnamite tramandate da generazioni. Preparate con ingredienti freschi di altissima qualità e un brodo cotto a fuoco lento per 12 ore.',
    'hero.btn.menu': 'Vedi il Menu',
    'hero.btn.kitchen': 'Simula Cucina 🍳',
    'hero.badge.fresh': 'Ingredienti Freschi al 100%',
    'hero.badge.hours': 'Brodo di 12 Ore',
    
    // Menu & Filters
    'menu.tagline': 'Piatti Selezionati',
    'menu.title': 'Esplora il Nostro Menu',
    'menu.desc': 'Filtra per preferenze alimentari e scegli i tuoi piatti vietnamiti tradizionali preferiti.',
    'menu.all': 'Tutto',
    'menu.filter.spicy': 'Solo Piccante 🌶️',
    'menu.filter.vegan': 'Solo Vegano 🌿',
    'menu.filter.gf': 'Senza Glutine 🌾',
    'menu.add_to_cart': 'Aggiungi al Carrello',
    
    // Reviews
    'reviews.badge': 'RECENSIONI GOOGLE',
    'reviews.title': 'Cosa dicono i nostri clienti',
    'reviews.subtitle': 'Recensioni reali estratte da Google Maps',
    'reviews.reviews': 'recensioni',
    'reviews.photos': 'foto',
    'reviews.ago.day': '1 giorno fa',
    'reviews.ago.months': '8 mesi fa',
    'reviews.ago.months.6': '6 mesi fa',
    'reviews.guide': 'Local Guide',

    // Footer
    'footer.desc': 'Autentica gastronomia vietnamita. Brodi confortanti cotti lentamente, baguette croccanti e ingredienti freschi preparati a mano.',
    'footer.hours': 'Orari',
    'footer.hours.desc': 'Lunedì - Domenica: 12:00 - 23:30',
    'footer.contact': 'Contatto',
    'footer.rights': '© 2026 Ristorante Phở Việt. Tutti i diritti riservati.',
    'footer.privacy': 'Informativa sulla Privacy',
    'footer.terms': 'Termini di Servizio'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // Default is Spanish as requested

  const t = (key) => {
    return translations[language]?.[key] || translations['es']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

