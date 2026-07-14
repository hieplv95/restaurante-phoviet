import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Menu() {
  const { language } = useLanguage();
  const currentLang = language || 'es';
  const [activeCategory, setActiveCategory] = useState('starters');

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
        name: 'Chả Giò',
        es: {
          subtitle: 'Rollo Primavera Crujiente',
          description: 'Dos rollos fritos crujientes rellenos de verduras y fideos de cristal. Servidos con hojas de lechuga.',
          options: [
            { text: '• A. Cerdo (Thịt heo)', highlight: true },
            { text: '• B. Judía mungo* (Đậu xanh)', highlight: false },
            { text: 'Rollo extra (Thêm cuốn) +3,40€', highlight: false }
          ]
        },
        en: {
          subtitle: 'Crispy Fried Spring Rolls',
          description: 'Two crispy fried spring rolls filled with vegetables and glass noodles. Served with lettuce leaves.',
          options: [
            { text: '• A. Pork (Thịt heo)', highlight: true },
            { text: '• B. Mung bean* (Đậu xanh)', highlight: false },
            { text: 'Extra roll (Thêm cuốn) +3,40€', highlight: false }
          ]
        },
        vi: {
          subtitle: 'Chả Giò Rán Giòn',
          description: 'Hai cuốn chả giò rán giòn nhân rau củ và miến. Ăn kèm xà lách.',
          options: [
            { text: '• A. Nhân Thịt Heo', highlight: true },
            { text: '• B. Nhân Đậu Xanh*', highlight: false },
            { text: 'Thêm cuốn +3,40€', highlight: false }
          ]
        },
        zh: {
          subtitle: '香脆炸春卷',
          description: '两个香脆的炸春卷，包裹着蔬菜和粉丝。配生菜叶食用。',
          options: [
            { text: '• A. 猪肉', highlight: true },
            { text: '• B. 绿豆*', highlight: false },
            { text: '加购春卷 +3,40€', highlight: false }
          ]
        },
        ko: {
          subtitle: '바삭한 짜조',
          description: '야채와 당면으로 속을 채워 바삭하게 튀겨낸 짜조 2개. 상추가 함께 제공됩니다.',
          options: [
            { text: '• A. 돼지고기', highlight: true },
            { text: '• B. 녹두*', highlight: false },
            { text: '짜조 추가 +3,40€', highlight: false }
          ]
        },
        ja: {
          subtitle: 'サクサク揚げ春巻き',
          description: '野菜と春雨を包んでサクサクに揚げた春巻き2本。レタスと一緒にお召し上がりください。',
          options: [
            { text: '• A. 豚肉', highlight: true },
            { text: '• B. 緑豆*', highlight: false },
            { text: '春巻き追加 +3,40€', highlight: false }
          ]
        },
        fr: {
          subtitle: 'Rouleaux de Printemps Croustillants',
          description: 'Deux rouleaux de printemps frits croustillants farcis de légumes et de vermicelles de verre. Servis avec des feuilles de laitue.',
          options: [
            { text: '• A. Porc', highlight: true },
            { text: '• B. Haricot mungo*', highlight: false },
            { text: 'Rouleau supplémentaire +3,40€', highlight: false }
          ]
        },
        it: {
          subtitle: 'Involtini Primavera Croccanti',
          description: 'Due involtini primavera fritti croccanti ripieni di verdure e vermicelli di vetro. Serviti con foglie di lattuga.',
          options: [
            { text: '• A. Maiale', highlight: true },
            { text: '• B. Fagioli mungo*', highlight: false },
            { text: 'Involtino extra +3,40€', highlight: false }
          ]
        },
        price: '7,20€',
        image: '/reviews/spring_rolls_review.png'
      },
      {
        id: 'goi-cuon',
        name: 'Gỏi Cuốn',
        es: {
          subtitle: 'Rollitos de Primavera Frescos',
          description: 'Dos rollitos de arroz frescos envueltos a mano con lechuga, menta, pepino, zanahoria y:',
          options: [
            { text: '• A. Gambas y Cerdo (+1€)', highlight: true },
            { text: '• B. Aguacate y Tofu Orgánico', highlight: false },
            { text: '(Rollito Extra +3,30€)', highlight: false }
          ]
        },
        en: {
          subtitle: 'Peacefull Summer Rolls',
          description: 'Two Fresh Hand-wrapped Summer Rolls with Lettuce, Mint, Cucumber, Carrot And:',
          options: [
            { text: '• A. Prawns And Pork (+1€)', highlight: true },
            { text: '• B. Avocado And Organic Tofu', highlight: false },
            { text: '(Extra Roll +3,30€)', highlight: false }
          ]
        },
        vi: {
          subtitle: 'Gỏi Cuốn Tươi',
          description: 'Hai cuốn gỏi cuốn tay tươi mát cuộn cùng xà lách, rau thơm, dưa leo, cà rốt và:',
          options: [
            { text: '• A. Tôm và Thịt Heo (+1€)', highlight: true },
            { text: '• B. Bơ và Đậu Hũ Hữu Cơ', highlight: false },
            { text: '(Thêm cuốn +3,30€)', highlight: false }
          ]
        },
        zh: {
          subtitle: '美味夏卷',
          description: '两个纯手工包裹的新鲜夏卷，含有生菜、薄荷、黄瓜、胡萝卜和：',
          options: [
            { text: '• A. 鲜虾与猪肉 (+1€)', highlight: true },
            { text: '• B. 牛油果与有机豆腐', highlight: false },
            { text: '(加购夏卷 +3,30€)', highlight: false }
          ]
        },
        ko: {
          subtitle: '상큼한 스프링롤',
          description: '상추, 민트, 오이, 당근을 라이스페이퍼에 손으로 직접 말아낸 신선한 스프링롤 2개:',
          options: [
            { text: '• A. 새우와 돼지고기 (+1€)', highlight: true },
            { text: '• B. 아보카도와 유기농 두부', highlight: false },
            { text: '(스프링롤 추가 +3,30€)', highlight: false }
          ]
        },
        ja: {
          subtitle: 'ヘルシー生春巻き',
          description: 'レタス、ミント、きゅうり、人参をライスペーパーで包んだ新鮮な生春巻き2本：',
          options: [
            { text: '• A. 海老と豚肉 (+1€)', highlight: true },
            { text: '• B. アボカドと有機豆腐', highlight: false },
            { text: '(生春巻き追加 +3,30€)', highlight: false }
          ]
        },
        fr: {
          subtitle: 'Rouleaux d\'Été Frais',
          description: 'Deux rouleaux de riz frais enveloppés à la main avec de la laitue, de la menthe, du concombre, de la carotte et :',
          options: [
            { text: '• A. Crevettes et Porc (+1€)', highlight: true },
            { text: '• B. Avocat et Tofu Biologique', highlight: false },
            { text: '(Rouleau supplémentaire +3,30€)', highlight: false }
          ]
        },
        it: {
          subtitle: 'Involtini d\'Estate Freschi',
          description: 'Due involtini di riso freschi avvolti a mano con lattuga, menta, cetriolo, carota e:',
          options: [
            { text: '• A. Gamberi e Maiale (+1€)', highlight: true },
            { text: '• B. Avocado e Tofu Biologico', highlight: false },
            { text: '(Involtino extra +3,30€)', highlight: false }
          ]
        },
        price: '5,90€',
        image: '/menu_goicuon.png'
      },
      {
        id: 'tom-chien-xu',
        name: 'Tôm Chiên Xù',
        es: {
          subtitle: 'Camarón Frito Crujiente',
          description: 'Langostino rebozado con tempura fresca, servido con salsa de chili dulce.',
          options: []
        },
        en: {
          subtitle: 'Crispy Fried Shrimp',
          description: 'Fresh battered tempura shrimp, served with sweet chili sauce.',
          options: []
        },
        vi: {
          subtitle: 'Tôm Chiên Xù',
          description: 'Tôm tươi tẩm bột chiên xù giòn rụm, ăn kèm với sốt tương ớt ngọt dịu.',
          options: []
        },
        zh: {
          subtitle: '天妇罗炸虾',
          description: '裹上面糊新鲜炸制的香脆天妇罗虾，搭配甜辣酱。',
          options: []
        },
        ko: {
          subtitle: '바삭한 새우 튀김',
          description: '신선한 튀김옷을 입혀 바삭하게 튀겨낸 새우 튀김, 스위트 칠리 소스와 함께 제공됩니다.',
          options: []
        },
        ja: {
          subtitle: '海老のサクサク揚げ',
          description: '新鮮な衣をつけてサクサクに揚げた海老の天ぷら。スイートチリソース添え。',
          options: []
        },
        fr: {
          subtitle: 'Beignets de Crevettes Croustillants',
          description: 'Crevettes fraîches panées en tempura, servies avec une sauce chili douce.',
          options: []
        },
        it: {
          subtitle: 'Gamberi Fritti Croccanti',
          description: 'Gamberi freschi impanati in tempura croccante, serviti con salsa chili dolce.',
          options: []
        },
        price: '7,20€',
        image: '/menu_camaron.png'
      }
    ],
    mains: [
      {
        id: 'banh-xeo',
        name: 'Bánh Xèo',
        es: {
          subtitle: 'Crepe Crujiente Vietnamita',
          description: 'Crepe vietnamita fino y crujiente de harina de arroz, relleno de brotes de soja y:',
          options: [
            { text: '• A. Gambas y cerdo (+1€)', highlight: true },
            { text: '• B. Tofu orgánico', highlight: false }
          ]
        },
        en: {
          subtitle: 'Pancake of Joy',
          description: 'Thin and crispy Vietnamese pancake made with rice flour, stuffed with bean sprouts and:',
          options: [
            { text: '• A. Prawns and pork (+1€)', highlight: true },
            { text: '• B. Organic tofu', highlight: false }
          ]
        },
        vi: {
          subtitle: 'Bánh Xèo Vàng Giòn',
          description: 'Bánh xèo vỏ mỏng giòn rụm làm từ bột gạo, nhân giá đỗ thanh mát và:',
          options: [
            { text: '• A. Tôm và thịt heo (+1€)', highlight: true },
            { text: '• B. Đậu hũ hữu cơ', highlight: false }
          ]
        },
        zh: {
          subtitle: '越式煎饼',
          description: '用米粉制作的薄脆越南煎饼，包裹着豆芽和：',
          options: [
            { text: '• A. 鲜虾与猪肉 (+1€)', highlight: true },
            { text: '• B. 有机豆腐', highlight: false }
          ]
        },
        ko: {
          subtitle: '베트남식 크레프 (반세오)',
          description: '쌀가루로 얇고 바삭하게 부쳐내어 숙주나물로 속을 채운 베트남식 부침개:',
          options: [
            { text: '• A. 새우와 돼지고기 (+1€)', highlight: true },
            { text: '• B. 유기농 두부', highlight: false }
          ]
        },
        ja: {
          subtitle: 'ベトナム風お好み焼き（バインセオ）',
          description: '米粉で作った薄くてパリパリの生地に、もやしをたっぷり挟んだベトナム風お好み焼き：',
          options: [
            { text: '• A. 海老と豚肉 (+1€)', highlight: true },
            { text: '• B. 有機豆腐', highlight: false }
          ]
        },
        fr: {
          subtitle: 'Crêpe Vietnamienne Croustillante',
          description: 'Fine crêpe vietnamienne croustillante à la farine de riz, farcie de pousses de soja et de :',
          options: [
            { text: '• A. Crevettes et porc (+1€)', highlight: true },
            { text: '• B. Tofu biologique', highlight: false }
          ]
        },
        it: {
          subtitle: 'Crepe Vietnamita Croccante',
          description: 'Sottile e croccante crepe vietnamita fatta con farina di riso, ripiena di germogli di soia e:',
          options: [
            { text: '• A. Gamberi e maiale (+1€)', highlight: true },
            { text: '• B. Tofu biologico', highlight: false }
          ]
        },
        price: '10,90€',
        image: '/menu_banhxeo.png'
      },
      {
        id: 'pho-bo',
        name: 'Phở Bò',
        es: {
          subtitle: 'Sopa Phở de Ternera Tradicional',
          description: 'La sopa Phở es el plato más popular de Vietnam. Sopa de fideos de arroz en un caldo cocinado a fuego lento durante 12 horas, con cebollino, cebolla, cilantro y:',
          options: [
            { text: '• A. Ternera (13.90€)', highlight: true },
            { text: '• B. Pollo (12.90€)', highlight: false }
          ]
        },
        en: {
          subtitle: 'Pho Ancient Hanoi',
          description: 'Pho soup is the most popular dish in Vietnam. A rice noodle soup in a broth simmered for 12 hours, with chives, onion, coriander and:',
          options: [
            { text: '• A. Beef (13.90€)', highlight: true },
            { text: '• B. Chicken (12.90€)', highlight: false }
          ]
        },
        vi: {
          subtitle: 'Phở Bò Hà Nội Cổ Kính',
          description: 'Món ăn truyền thức của Việt Nam. Bánh phở mềm cùng nước dùng bò ninh suốt 12 tiếng cùng quế, hồi, thảo quả, hành hoa, hành tây và rau mùi:',
          options: [
            { text: '• A. Bò viên chín/tái (13.90€)', highlight: true },
            { text: '• B. Thịt gà ta (12.90€)', highlight: false }
          ]
        },
        zh: {
          subtitle: '传统河内牛肉粉',
          description: '越南最受欢迎的国宝级美食。扁米粉搭配慢火熬制12小时的香浓骨汤，佐以小葱、洋葱、香菜和：',
          options: [
            { text: '• A. 牛肉 (13.90€)', highlight: true },
            { text: '• B. 鸡肉 (12.90€)', highlight: false }
          ]
        },
        ko: {
          subtitle: '하노이 정통 소고기 쌀국수',
          description: '베트남에서 가장 인기 있는 요리. 파, 양선파, 고수와 함께 12시간 동안 고아낸 깊은 육수에 말아내는 쌀국수:',
          options: [
            { text: '• A. 소고기 (13.90€)', highlight: true },
            { text: '• B. 닭고기 (12.90€)', highlight: false }
          ]
        },
        ja: {
          subtitle: '伝統ハノイ牛肉フォー',
          description: 'ベトナムで最も人気の国民食。ネギ、玉ねぎ、パクチーを添え、12時間かけてじっくり煮込んだスープに平打ち米粉麺を合わせた一杯：',
          options: [
            { text: '• A. 牛肉 (13.90€)', highlight: true },
            { text: '• B. 鶏肉 (12.90€)', highlight: false }
          ]
        },
        fr: {
          subtitle: 'Soupe Phở Traditionnelle de Hanoï',
          description: 'Le Phở est le plat emblématique du Vietnam. Une soupe de nouilles de riz dans un bouillon aromatique mijoté pendant 12 heures, avec de la ciboule, des oignons, de la coriandre et :',
          options: [
            { text: '• A. Bœuf (13.90€)', highlight: true },
            { text: '• B. Poulet (12.90€)', highlight: false }
          ]
        },
        it: {
          subtitle: 'Zuppa Phở Tradizionale di Hanoi',
          description: 'La zuppa Phở è il piatto più famoso del Vietnam. Tagliatelle di riso in un brodo cotto a fuoco lento per 12 ore, con erba cipollina, cipolla, coriandolo e:',
          options: [
            { text: '• A. Manzo (13.90€)', highlight: true },
            { text: '• B. Pollo (12.90€)', highlight: false }
          ]
        },
        price: '12,90€ / 13,90€',
        image: '/menu_phobo.png'
      },
      {
        id: 'bun-bo-nam-bo',
        name: 'Bún bò Nam bộ',
        es: {
          subtitle: 'Ensalada de Fideos del Sur',
          description: 'Fideos de arroz con ternera, menta, brotes de soja, cebolla frita, cacahuetes, lechuga, zanahoria, pepino y salsa de pescado.',
          options: [
            { text: '• A. Ternera +1€', highlight: true },
            { text: '• B. Tofu Orgánico (No Vegano)', highlight: false }
          ]
        },
        en: {
          subtitle: 'Southern flavor noodle',
          description: 'Rice noodles with beef, mint, bean sprouts, fried onion, peanuts, lettuce, carrot, cucumber and fish sauce.',
          options: [
            { text: '• A. Beef +1€', highlight: true },
            { text: '• B. Organic Tofu (Non Vegan)', highlight: false }
          ]
        },
        vi: {
          subtitle: 'Bún Bò Nam Bộ Trộn',
          description: 'Bún tươi trộn cùng thịt bò xào mềm thơm, rau sống, giá đỗ, hành phi, lạc rang giòn, dưa chuột và nước mắm chua ngọt đặc trưng.',
          options: [
            { text: '• A. Thịt Bò +1€', highlight: true },
            { text: '• B. Đậu Hũ Hữu Cơ (Món chay)', highlight: false }
          ]
        },
        zh: {
          subtitle: '越式南部拌粉',
          description: '米粉搭配炒牛肉、薄荷、豆芽、油葱酥、花生碎、生菜、胡萝卜、黄瓜及鱼露调味。',
          options: [
            { text: '• A. 牛肉 +1€', highlight: true },
            { text: '• B. 有机豆腐 (素食)', highlight: false }
          ]
        },
        ko: {
          subtitle: '남부식 소고기 비빔 쌀국수',
          description: '볶은 소고기, 민트, 숙주, 튀긴 양파, 땅콩, 상추, 당근, 오이에 새콤달콤한 느억맘 소스를 비벼 먹는 쌀국수.',
          options: [
            { text: '• A. 소고기 +1€', highlight: true },
            { text: '• B. 유기농 두부 (채식)', highlight: false }
          ]
        },
        ja: {
          subtitle: '南部風牛肉混ぜフォー',
          description: '炒め牛肉、ミント、もやし、フライドオニオン、ピーナッツ、レタス、人参、きゅうりに魚醤ソースを絡めた混ぜ麺。',
          options: [
            { text: '• A. 牛肉 +1€', highlight: true },
            { text: '• B. 有機豆腐（ベジタリアン）', highlight: false }
          ]
        },
        fr: {
          subtitle: 'Salade de Nouilles du Sud (Bún Bò)',
          description: 'Nouilles de riz avec du bœuf sauté, menthe fraîche, pousses de soja, oignons frits, cacahuètes, laitue, carotte, concombre et sauce de poisson.',
          options: [
            { text: '• A. Bœuf +1€', highlight: true },
            { text: '• B. Tofu Biologique (Végétarien)', highlight: false }
          ]
        },
        it: {
          subtitle: 'Insalata di Vermicelli del Sud (Bún Bò)',
          description: 'Vermicelli di riso con manzo saltato, menta, germogli di soia, cipolla fritta, arachidi, lattuga, carota, cetriolo e salsa di pesce.',
          options: [
            { text: '• A. Manzo +1€', highlight: true },
            { text: '• B. Tofu Biologico (Vegetariano)', highlight: false }
          ]
        },
        price: '12,90€',
        image: '/menu_bunbo.png'
      }
    ],
    desserts: [
      {
        id: 'panna-cotta',
        name: 'Panna Cotta Pandan',
        es: {
          subtitle: 'Panna Cotta Tropical',
          description: 'Deliciosa panna cotta cremosa con sabor de coco, pandan y cacahuete.',
          options: []
        },
        en: {
          subtitle: 'Tropical Pandan Panna Cotta',
          description: 'Creamy panna cotta infused with fragrant Vietnamese pandan leaf and coconut, topped with peanuts.',
          options: []
        },
        vi: {
          subtitle: 'Panna Cotta Lá Dứa',
          description: 'Món tráng miệng panna cotta béo ngậy vị cốt dừa hòa quyện cùng hương lá dứa thơm lừng và lạc rang.',
          options: []
        },
        zh: {
          subtitle: '斑兰椰香奶冻',
          description: '融入了越南斑兰叶与椰奶香气的丝滑奶冻，上面撒有香脆花生碎。',
          options: []
        },
        ko: {
          subtitle: '판단 판단코타',
          description: '향긋한 판단 잎과 코코넛 밀크가 조화를 이루는 부드러운 판나코타, 땅콩 토핑이 올라갑니다.',
          options: []
        },
        ja: {
          subtitle: 'パンダン・パンナコッタ',
          description: 'ベトナムの香るパンダンリーフとココナッツミルクで作る濃厚なパンナコッタ。ピーナッツのせ。',
          options: []
        },
        fr: {
          subtitle: 'Panna Cotta Tropicale au Pandan',
          description: 'Délicieuse panna cotta crémeuse infusée de feuille de pandan et de noix de coco, parsemée de cacahuètes.',
          options: []
        },
        it: {
          subtitle: 'Panna Cotta Tropicale al Pandan',
          description: 'Panna cotta cremosa aromatizzata con foglia di pandan e cocco, guarnita con arachidi croccanti.',
          options: []
        },
        price: '4,90€',
        image: '/menu_pannacotta.png'
      }
    ],
    drinks: [
      {
        id: 'cafe-vietnamita',
        name: 'Cà phê sữa đá',
        es: {
          subtitle: 'Café Vietnamita Tradicional',
          description: 'Fuerte café de goteo tradicional vietnamita mezclado con leche condensada dulce y abundante hielo.',
          options: []
        },
        en: {
          subtitle: 'Traditional Vietnamese Coffee',
          description: 'Strong slow-drip Vietnamese coffee combined with sweet condensed milk and served over plenty of crushed ice.',
          options: []
        },
        vi: {
          subtitle: 'Cà Phê Sữa Đá Phin',
          description: 'Cà phê phin truyền thống Việt Nam đậm đà, hòa quyện cùng sữa đặc ngọt ngào và đá lạnh xay.',
          options: []
        },
        zh: {
          subtitle: '传统越南冰咖啡',
          description: '浓郁的传统越南滴滤咖啡，融合甜炼乳与满满冰块。',
          options: []
        },
        ko: {
          subtitle: '정통 베트남 연유 커피',
          description: '천천히 내린 진한 베트남 드립 커피에 달콤한 연유와 부순 얼음을 듬뿍 넣은 커피.',
          options: []
        },
        ja: {
          subtitle: '伝統ベトナム練乳コーヒー',
          description: 'じっくりドリップした濃いベトナムコーヒーに、甘い練乳とたっぷりの砕いた氷を合わせた一杯。',
          options: []
        },
        fr: {
          subtitle: 'Café Vietnamien Traditionnel',
          description: 'Café filtre vietnamien corsé mélangé avec du lait concentré sucré et servi sur de la glace pilée.',
          options: []
        },
        it: {
          subtitle: 'Caffè Vietnamita Tradizionale',
          description: 'Forte caffè filtro vietnamita unito a latte condensato dolce e servito con ghiaccio tritato.',
          options: []
        },
        price: '4,50€',
        image: '/menu_cafe.png'
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

        {/* Categories Tab Swiper */}
        <div className="categories-container" style={{ marginBottom: '50px' }}>
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

        {/* Menu Grid */}
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
                <div className="menu-item-image-container">
                  <div className="menu-item-image-circle">
                    <img src={item.image} alt={item.name} className="menu-item-image" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
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

