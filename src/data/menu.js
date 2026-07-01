export const CATEGORIES = [
  {
    id: 'all',
    emoji: '🍽️',
    es: 'Todo',
    en: 'All'
  },
  {
    id: 'starters',
    emoji: '🥗',
    es: 'Entradas',
    en: 'Starters'
  },
  {
    id: 'pho',
    emoji: '🍜',
    es: 'Sopas Phở',
    en: 'Phở Soups'
  },
  {
    id: 'mains',
    emoji: '🍲',
    es: 'Platos Principales',
    en: 'Main Dishes'
  },
  {
    id: 'drinks',
    emoji: '🥤',
    es: 'Bebidas y Postres',
    en: 'Drinks & Desserts'
  }
];

export const MENU_ITEMS = [
  {
    id: 'goi-cuon',
    name: 'Gỏi Cuốn',
    emoji: '🥬',
    price: 6.50,
    category: 'starters',
    badges: ['gf', 'vegan'],
    es: {
      name: 'Rollos de Primavera Frescos',
      description: 'Dos rollos frescos de papel de arroz rellenos de lechuga, menta fresca, fideos de arroz y tofu o gambas. Servidos con salsa de cacahuete casera.'
    },
    en: {
      name: 'Fresh Summer Rolls',
      description: 'Two fresh rice paper rolls filled with lettuce, fresh mint, rice vermicelli, and tofu or shrimp. Served with homemade peanut dipping sauce.'
    }
  },
  {
    id: 'cha-gio',
    name: 'Chả Giò',
    emoji: '🌯',
    price: 7.20,
    category: 'starters',
    badges: [],
    es: {
      name: 'Rollos Fritos Crujientes',
      description: 'Tres rollos fritos rellenos de carne picada de cerdo, setas, zanahorias y fideos de cristal. Servidos con salsa de pescado agridulce Nước Chấm y hojas de lechuga.'
    },
    en: {
      name: 'Crispy Fried Spring Rolls',
      description: 'Three crispy fried rolls filled with minced pork, mushrooms, carrots, and glass noodles. Served with sweet & sour fish sauce (Nước Chấm) and lettuce leaves.'
    }
  },
  {
    id: 'pho-bo',
    name: 'Phở Bò',
    emoji: '🍜',
    price: 13.90,
    category: 'pho',
    badges: ['gf'],
    es: {
      name: 'Phở de Ternera Tradicional',
      description: 'Nuestra sopa estrella. Caldo aromático de ternera cocinado a fuego lento durante 12 horas con canela, anís estrellado y jengibre, servido con fideos de arroz planos, finas rodajas de ternera y hierbas frescas.'
    },
    en: {
      name: 'Traditional Beef Phở',
      description: 'Our signature soup. Aromatic beef broth simmered for 12 hours with cinnamon, star anise, and ginger, served with flat rice noodles, thin cuts of beef, and fresh herbs.'
    }
  },
  {
    id: 'pho-ga',
    name: 'Phở Gà',
    emoji: '🍲',
    price: 12.90,
    category: 'pho',
    badges: ['gf'],
    es: {
      name: 'Phở de Pollo Campero',
      description: 'Caldo de pollo claro y reconfortante impregnado de cilantro y cebolleta, servido con tiernas tiras de pollo deshuesado, fideos de arroz frescos y lima.'
    },
    en: {
      name: 'Free-range Chicken Phở',
      description: 'Clear and comforting chicken broth infused with cilantro and green onions, served with tender shredded chicken, fresh rice noodles, and lime.'
    }
  },
  {
    id: 'pho-chay',
    name: 'Phở Chay',
    emoji: '🥦',
    price: 12.50,
    category: 'pho',
    badges: ['gf', 'vegan'],
    es: {
      name: 'Phở Vegano de Verduras',
      description: 'Un caldo aromático 100% vegetal cocinado con rábano blanco, zanahoria y especias tradicionales, acompañado de tofu frito, setas y brotes de soja.'
    },
    en: {
      name: 'Vegan Vegetable Phở',
      description: '100% plant-based aromatic broth simmered with white radish, carrots, and traditional spices, served with fried tofu, mushrooms, and bean sprouts.'
    }
  },
  {
    id: 'banh-mi',
    name: 'Bánh Mì Đặc Biệt',
    emoji: '🥖',
    price: 8.50,
    category: 'mains',
    badges: ['spicy'],
    es: {
      name: 'Sándwich Bánh Mì Especial',
      description: 'Baguette vietnamita crujiente untada con paté artesanal, mayonesa, cerdo asado, jamón vietnamita, pepino, encurtidos de zanahoria y nabo, cilantro y un toque de chile picante.'
    },
    en: {
      name: 'Special Bánh Mì Sandwich',
      description: 'Crispy Vietnamese baguette spread with artisanal pâté, mayonnaise, roasted pork, Vietnamese ham, cucumber, pickled carrots & daikon, fresh cilantro, and a touch of fresh chili.'
    }
  },
  {
    id: 'bun-cha',
    name: 'Bún Chả',
    emoji: '🍢',
    price: 14.50,
    category: 'mains',
    badges: [],
    es: {
      name: 'Bún Chả de Hanoi',
      description: 'El plato favorito de Hanoi. Cerdo marinado a la parrilla sobre carbón servido en un caldo tibio sazonado, acompañado de fideos de arroz, hierbas frescas frescas y rollitos fritos triturados.'
    },
    en: {
      name: 'Hanoi-style Bún Chả',
      description: 'Hanoi\'s absolute favorite. Charcoal-grilled marinated pork patties served in a warm seasoned broth, alongside rice vermicelli, fresh herbs, and crushed spring rolls.'
    }
  },
  {
    id: 'com-tam',
    name: 'Cơm Tấm',
    emoji: '🍳',
    price: 14.90,
    category: 'mains',
    badges: [],
    es: {
      name: 'Arroz Roto con Chuleta de Cerdo',
      description: 'Tradicional arroz roto vietnamita servido con chuleta de cerdo caramelizada a la parrilla, huevo frito, verduras encurtidas y salsa de pescado agridulce casera.'
    },
    en: {
      name: 'Broken Rice with Grilled Pork Chop',
      description: 'Traditional Vietnamese broken rice served with caramelized grilled pork chop, fried egg, pickled vegetables, and homemade sweet & sour fish dipping sauce.'
    }
  },
  {
    id: 'ca-phe-sua-da',
    name: 'Cà Phê Sữa Đá',
    emoji: '☕',
    price: 4.50,
    category: 'drinks',
    badges: [],
    es: {
      name: 'Café Helado con Leche Condensada',
      description: 'Fuerte café de goteo tradicional vietnamita mezclado con leche condensada dulce y servido con abundante hielo picado.'
    },
    en: {
      name: 'Vietnamese Iced Coffee',
      description: 'Strong, traditional slow-drip Vietnamese coffee combined with sweet condensed milk and served over plenty of crushed ice.'
    }
  },
  {
    id: 'che-ba-mau',
    name: 'Chè Ba Màu',
    emoji: '🍧',
    price: 5.50,
    category: 'drinks',
    badges: ['gf', 'vegan'],
    es: {
      name: 'Postre de Tres Colores',
      description: 'Postre dulce clásico de tres capas: alubias rojas endulzadas, pasta de judía mungo y gelatina de pandano, coronado con rica leche de coco y hielo picado.'
    },
    en: {
      name: 'Three Color Dessert',
      description: 'Classic sweet three-layered dessert: sweetened red beans, mung bean paste, and pandan jelly, topped with rich coconut milk and shaved ice.'
    }
  }
];
