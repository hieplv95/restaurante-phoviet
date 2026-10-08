// Frequently asked questions, rendered in the FAQ section and mirrored as FAQPage structured data.
// Keep answers factual and self-contained: search engines and AI assistants quote them verbatim.

export const FAQ_TITLES = {
  es: { tag: 'PREGUNTAS FRECUENTES', title: 'Restaurante vietnamita en Barcelona: lo que debes saber' },
  en: { tag: 'FAQ', title: 'Vietnamese restaurant in Barcelona: good to know' },
  vi: { tag: 'CÂU HỎI THƯỜNG GẶP', title: 'Nhà hàng Việt Nam tại Barcelona: thông tin hữu ích' },
  zh: { tag: '常见问题', title: '巴塞罗那越南餐厅：用餐须知' },
  ja: { tag: 'よくある質問', title: 'バルセロナのベトナム料理店：ご来店前に' },
  ko: { tag: '자주 묻는 질문', title: '바르셀로나 베트남 레스토랑: 방문 전 알아두세요' },
  fr: { tag: 'FAQ', title: 'Restaurant vietnamien à Barcelone : bon à savoir' },
  it: { tag: 'DOMANDE FREQUENTI', title: 'Ristorante vietnamita a Barcellona: da sapere' }
};

export const FAQ_ITEMS = {
  es: [
    {
      q: '¿Dónde está el restaurante vietnamita Pho Viet en Barcelona?',
      a: 'Pho Viet está en Carrer de Viladomat, 56, en el barrio del Eixample, 08015 Barcelona. Es un restaurante vietnamita familiar especializado en Phở y comida callejera de Vietnam.'
    },
    {
      q: '¿Cuál es el horario de Pho Viet?',
      a: 'Abrimos todos los días, de lunes a domingo, de 13:00 a 17:00 y de 19:30 a 23:30.'
    },
    {
      q: '¿Tenéis menú del día?',
      a: 'Sí. De lunes a viernes ofrecemos un menú de mediodía por 13,90 € que incluye un entrante, un plato principal, café o postre y una bebida.'
    },
    {
      q: '¿Qué platos vietnamitas recomendáis?',
      a: 'Nuestro plato estrella es el Phở de ternera con un caldo cocinado a fuego lento durante 12 horas. También destacan el Bún Bò Huế, el Bánh Xèo crujiente, el Bún Chả Hà Nội y los rollitos frescos Gỏi Cuốn.'
    },
    {
      q: '¿Hay opciones vegetarianas o veganas?',
      a: 'Sí. Muchos platos se pueden pedir con tofu o Heura, y tenemos rollitos de judía mungo y Phở vegetariano. Los platos vegetarianos están marcados en la carta.'
    },
    {
      q: '¿Cómo puedo reservar mesa?',
      a: 'Puedes reservar llamando al +34 632 501 335. También aceptamos clientes sin reserva según disponibilidad.'
    },
    {
      q: '¿Cuánto cuesta comer en Pho Viet?',
      a: 'El precio medio es de 10 a 20 € por persona. El menú del día de lunes a viernes cuesta 13,90 €.'
    }
  ],
  en: [
    {
      q: 'Where is the Vietnamese restaurant Pho Viet in Barcelona?',
      a: 'Pho Viet is at Carrer de Viladomat, 56, in the Eixample district, 08015 Barcelona. It is a family-run Vietnamese restaurant specialising in Phở and Vietnamese street food.'
    },
    {
      q: 'What are Pho Viet\'s opening hours?',
      a: 'We are open every day, Monday to Sunday, from 13:00 to 17:00 and from 19:30 to 23:30.'
    },
    {
      q: 'Do you have a lunch menu (menú del día)?',
      a: 'Yes. Monday to Friday we serve a €13.90 lunch menu with a starter, a main course, coffee or dessert, and a drink.'
    },
    {
      q: 'Which Vietnamese dishes do you recommend?',
      a: 'Our signature dish is beef Phở made with a broth slow-cooked for 12 hours. Guests also love Bún Bò Huế, crispy Bánh Xèo, Bún Chả Hà Nội and fresh Gỏi Cuốn rolls.'
    },
    {
      q: 'Are there vegetarian or vegan options?',
      a: 'Yes. Many dishes can be ordered with tofu or Heura, and we serve mung bean spring rolls and a vegetarian Phở. Vegetarian dishes are marked on the menu.'
    },
    {
      q: 'How can I book a table?',
      a: 'Call us on +34 632 501 335 to book. Walk-ins are welcome when tables are available.'
    },
    {
      q: 'How much does a meal at Pho Viet cost?',
      a: 'Expect around €10–20 per person. The weekday lunch menu costs €13.90.'
    }
  ],
  vi: [
    {
      q: 'Nhà hàng Việt Nam Phở Việt ở Barcelona nằm ở đâu?',
      a: 'Phở Việt ở số 56 Carrer de Viladomat, quận Eixample, 08015 Barcelona. Đây là nhà hàng Việt Nam gia đình, chuyên phở và các món ăn đường phố Việt Nam.'
    },
    {
      q: 'Giờ mở cửa của Phở Việt?',
      a: 'Nhà hàng mở cửa tất cả các ngày từ Thứ Hai đến Chủ Nhật, 13:00 – 17:00 và 19:30 – 23:30.'
    },
    {
      q: 'Nhà hàng có menu trưa không?',
      a: 'Có. Từ Thứ Hai đến Thứ Sáu có menu trưa 13,90 € gồm món khai vị, món chính, cà phê hoặc tráng miệng và đồ uống.'
    },
    {
      q: 'Nên thử món gì?',
      a: 'Món đặc trưng là phở bò với nước dùng ninh 12 tiếng. Ngoài ra còn có Bún Bò Huế, Bánh Xèo giòn, Bún Chả Hà Nội và Gỏi Cuốn.'
    },
    {
      q: 'Có món chay không?',
      a: 'Có. Nhiều món có thể chọn đậu hũ hoặc Heura, có chả giò nhân đậu xanh và phở chay. Các món chay được đánh dấu trong thực đơn.'
    },
    {
      q: 'Đặt bàn như thế nào?',
      a: 'Gọi số +34 632 501 335 để đặt bàn. Khách vãng lai vẫn được phục vụ khi còn bàn trống.'
    },
    {
      q: 'Giá trung bình bao nhiêu?',
      a: 'Khoảng 10 – 20 € mỗi người. Menu trưa các ngày trong tuần giá 13,90 €.'
    }
  ],
  zh: [
    {
      q: 'Pho Viet 越南餐厅在巴塞罗那哪里？',
      a: 'Pho Viet 位于巴塞罗那 Eixample 区 Carrer de Viladomat, 56（邮编 08015），是一家主打越南河粉（Phở）和越南街头小吃的家庭式越南餐厅。'
    },
    {
      q: '营业时间是什么？',
      a: '每天营业（周一至周日）：13:00–17:00 和 19:30–23:30。'
    },
    {
      q: '有午市套餐吗？',
      a: '有。周一至周五提供 13.90 欧元午市套餐，包含前菜、主菜、咖啡或甜点以及一杯饮料。'
    },
    {
      q: '推荐哪些越南菜？',
      a: '招牌菜是汤底慢炖 12 小时的牛肉河粉，另外推荐顺化牛肉粉（Bún Bò Huế）、越南煎饼（Bánh Xèo）、河内烤肉米线（Bún Chả）和越南鲜春卷（Gỏi Cuốn）。'
    },
    {
      q: '有素食选择吗？',
      a: '有。很多菜品可选豆腐或 Heura 植物肉，还有绿豆春卷和素食河粉，菜单上已标注素食菜品。'
    },
    {
      q: '如何预订？',
      a: '请致电 +34 632 501 335 预订，如有空位也欢迎直接到店。'
    },
    {
      q: '人均消费多少？',
      a: '人均约 10–20 欧元，工作日午市套餐 13.90 欧元。'
    }
  ],
  ja: [
    {
      q: 'Pho Viet はバルセロナのどこにありますか？',
      a: 'Pho Viet はバルセロナ・エシャンプレ地区の Carrer de Viladomat, 56（08015）にある、フォーとベトナムの屋台料理を専門とする家族経営のベトナム料理店です。'
    },
    {
      q: '営業時間は？',
      a: '毎日（月曜〜日曜）13:00〜17:00 と 19:30〜23:30 に営業しています。'
    },
    {
      q: 'ランチメニューはありますか？',
      a: 'はい。月曜〜金曜は前菜・メイン・コーヒーまたはデザート・ドリンクが付いた 13.90 ユーロのランチセットがあります。'
    },
    {
      q: 'おすすめの料理は？',
      a: '12時間煮込んだスープの牛肉フォーが看板料理です。ブンボーフエ、バインセオ、ハノイ風ブンチャー、生春巻き（ゴイクン）も人気です。'
    },
    {
      q: 'ベジタリアン・ヴィーガン対応はありますか？',
      a: 'はい。多くの料理を豆腐や Heura（植物性ミート）に変更でき、緑豆の揚げ春巻きやベジタリアンフォーもあります。メニューに印があります。'
    },
    {
      q: '予約はできますか？',
      a: '+34 632 501 335 までお電話でご予約ください。空席があれば予約なしでもご利用いただけます。'
    },
    {
      q: '予算はどのくらいですか？',
      a: 'お一人様およそ 10〜20 ユーロです。平日ランチセットは 13.90 ユーロです。'
    }
  ],
  ko: [
    {
      q: 'Pho Viet 베트남 레스토랑은 바르셀로나 어디에 있나요?',
      a: 'Pho Viet는 바르셀로나 에이샴플레(Eixample) 지구 Carrer de Viladomat, 56 (08015)에 있는 가족 운영 베트남 레스토랑으로, 쌀국수(Phở)와 베트남 길거리 음식을 전문으로 합니다.'
    },
    {
      q: '영업시간은 어떻게 되나요?',
      a: '월요일부터 일요일까지 매일 13:00–17:00, 19:30–23:30에 영업합니다.'
    },
    {
      q: '점심 세트 메뉴가 있나요?',
      a: '네. 월요일부터 금요일까지 에피타이저, 메인 요리, 커피 또는 디저트, 음료가 포함된 13.90유로 점심 세트를 제공합니다.'
    },
    {
      q: '추천 메뉴는 무엇인가요?',
      a: '12시간 끓인 육수의 소고기 쌀국수가 대표 메뉴입니다. 분보후에, 반쎄오, 하노이식 분짜, 월남쌈(고이꾸온)도 인기가 많습니다.'
    },
    {
      q: '채식 메뉴가 있나요?',
      a: '네. 많은 요리를 두부나 Heura(식물성 고기)로 주문할 수 있고, 녹두 짜조와 채식 쌀국수도 있습니다. 메뉴에 채식 표시가 되어 있습니다.'
    },
    {
      q: '예약은 어떻게 하나요?',
      a: '+34 632 501 335로 전화해 예약해 주세요. 자리가 있으면 예약 없이도 방문 가능합니다.'
    },
    {
      q: '1인당 가격은 얼마인가요?',
      a: '1인당 약 10–20유로이며, 평일 점심 세트는 13.90유로입니다.'
    }
  ],
  fr: [
    {
      q: 'Où se trouve le restaurant vietnamien Pho Viet à Barcelone ?',
      a: 'Pho Viet se trouve Carrer de Viladomat, 56, dans le quartier de l\'Eixample, 08015 Barcelone. C\'est un restaurant vietnamien familial spécialisé dans le Phở et la street food vietnamienne.'
    },
    {
      q: 'Quels sont les horaires d\'ouverture ?',
      a: 'Nous sommes ouverts tous les jours, du lundi au dimanche, de 13h00 à 17h00 et de 19h30 à 23h30.'
    },
    {
      q: 'Proposez-vous un menu du midi ?',
      a: 'Oui. Du lundi au vendredi, un menu du midi à 13,90 € comprend une entrée, un plat, un café ou un dessert et une boisson.'
    },
    {
      q: 'Quels plats vietnamiens recommandez-vous ?',
      a: 'Notre plat signature est le Phở au bœuf, avec un bouillon mijoté pendant 12 heures. Essayez aussi le Bún Bò Huế, le Bánh Xèo croustillant, le Bún Chả Hà Nội et les rouleaux de printemps Gỏi Cuốn.'
    },
    {
      q: 'Y a-t-il des options végétariennes ou véganes ?',
      a: 'Oui. De nombreux plats existent avec tofu ou Heura, ainsi que des nems aux haricots mungo et un Phở végétarien. Les plats végétariens sont indiqués sur la carte.'
    },
    {
      q: 'Comment réserver une table ?',
      a: 'Appelez le +34 632 501 335 pour réserver. Nous accueillons aussi les clients sans réservation selon les disponibilités.'
    },
    {
      q: 'Quel est le prix moyen d\'un repas ?',
      a: 'Comptez environ 10 à 20 € par personne. Le menu du midi en semaine coûte 13,90 €.'
    }
  ],
  it: [
    {
      q: 'Dove si trova il ristorante vietnamita Pho Viet a Barcellona?',
      a: 'Pho Viet si trova in Carrer de Viladomat, 56, nel quartiere dell\'Eixample, 08015 Barcellona. È un ristorante vietnamita a conduzione familiare specializzato in Phở e street food vietnamita.'
    },
    {
      q: 'Quali sono gli orari di apertura?',
      a: 'Siamo aperti tutti i giorni, da lunedì a domenica, dalle 13:00 alle 17:00 e dalle 19:30 alle 23:30.'
    },
    {
      q: 'Avete un menu pranzo?',
      a: 'Sì. Dal lunedì al venerdì proponiamo un menu pranzo a 13,90 € con antipasto, piatto principale, caffè o dolce e una bevanda.'
    },
    {
      q: 'Quali piatti vietnamiti consigliate?',
      a: 'Il nostro piatto forte è il Phở di manzo con brodo cotto a fuoco lento per 12 ore. Da provare anche Bún Bò Huế, Bánh Xèo croccante, Bún Chả Hà Nội e gli involtini freschi Gỏi Cuốn.'
    },
    {
      q: 'Ci sono opzioni vegetariane o vegane?',
      a: 'Sì. Molti piatti si possono ordinare con tofu o Heura, e abbiamo involtini di fagioli mungo e un Phở vegetariano. I piatti vegetariani sono segnalati nel menu.'
    },
    {
      q: 'Come posso prenotare un tavolo?',
      a: 'Chiama il +34 632 501 335 per prenotare. Accettiamo anche clienti senza prenotazione in base alla disponibilità.'
    },
    {
      q: 'Quanto costa mangiare da Pho Viet?',
      a: 'Circa 10–20 € a persona. Il menu pranzo dei giorni feriali costa 13,90 €.'
    }
  ]
};
