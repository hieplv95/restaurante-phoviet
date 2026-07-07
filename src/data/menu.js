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
  },
  {
    id: 'lunch-menu',
    emoji: '🍱',
    es: 'Menú del Día',
    en: 'Lunch Menu'
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

export const LUNCH_SET_MENU = {
  id: 'menu-del-dia',
  basePrice: 13.90,
  es: {
    name: 'Menú Medio de Día',
    tagline: 'Solo días laborales (Lunes a Viernes)',
    description: 'Incluye: 1 entrante + 1 plato principal + 1 café o postre + 1 bebida (agua/caña/copa de vino)'
  },
  en: {
    name: 'Lunchtime Menu',
    tagline: 'Weekdays only (Monday to Friday)',
    description: 'Includes: 1 starter + 1 main course + 1 coffee/dessert + 1 drink (water/beer/glass of wine)'
  },
  starters: [
    {
      id: 'lunch-chagio',
      name: 'Chả Giò / Rollo Primavera',
      emoji: '🌯',
      es: {
        name: 'Rollo Primavera',
        description: 'Dos rollos fritos crujientes rellenos de verduras y fideos de cristal. Servidos con hojas de lechuga.'
      },
      en: {
        name: 'Fried Spring Rolls',
        description: 'Two crispy fried spring rolls filled with vegetables and glass noodles. Served with lettuce leaves.'
      },
      options: [
        { id: 'pork', es: 'Cerdo (Thịt heo)', en: 'Pork' },
        { id: 'mungbean', es: 'Judía mungo* (Đậu xanh)', en: 'Mung bean' }
      ],
      extra: { es: 'Rollo extra (Thêm cuốn)', en: 'Extra roll' }
    },
    {
      id: 'lunch-goicuon',
      name: 'Gỏi Cuốn / Rollo Fresco',
      emoji: '🥬',
      es: {
        name: 'Rollo Fresco',
        description: 'Dos rollos frescos envueltos a mano y servidos con salsa de cacahuete.'
      },
      en: {
        name: 'Summer Rolls',
        description: 'Two fresh hand-wrapped summer rolls served with peanut sauce.'
      },
      options: [
        { id: 'pork-prawn', es: 'Cerdo y gambas (Thịt heo và tôm)', en: 'Pork and prawn' },
        { id: 'prawn-mango', es: 'Gambas y mango (Tôm và xoài)', en: 'Prawn and mango' },
        { id: 'tofu-mango', es: 'Tofu y mango* (Đậu hũ và xoài)', en: 'Tofu and mango' }
      ]
    },
    {
      id: 'lunch-camaron',
      name: 'Tôm Chiên Xù / Camarón Frito',
      emoji: '🍤',
      es: {
        name: 'Camarón Frito',
        description: 'Langostino rebozado con tempura fresca, servido con salsa de chili dulce.'
      },
      en: {
        name: 'Crispy Fried Shrimp',
        description: 'Fresh battered tempura shrimp, served with sweet chili sauce.'
      }
    },
    {
      id: 'lunch-chacacom',
      name: 'Chả Cá Cốm / Croquetas de Pescado',
      emoji: '🧆',
      es: {
        name: 'Croquetas de Pescado Crujientes',
        description: 'Croquetas de pescado (4 piezas) marinadas en hierbas con copos de arroz crujientes.'
      },
      en: {
        name: 'Crispy Fish Cakes',
        description: 'Fish cakes (4 pieces) marinated in herbs with crispy green rice flakes.'
      },
      extra: { es: 'Pieza extra (Thêm 1 viên)', en: 'Extra piece' }
    },
    {
      id: 'lunch-goixoai',
      name: 'Gỏi Xoài / Ensalada de Mango',
      emoji: '🥭',
      es: {
        name: 'Ensalada Vietnam de Mango',
        description: 'Deliciosa ensalada de mango con verduras y hierbas frescas.'
      },
      en: {
        name: 'Vietnamese Green Mango Salad',
        description: 'Delicious green mango salad with vegetables and fresh herbs.'
      },
      options: [
        { id: 'pork-prawn', es: 'Cerdo y gambas (Thịt heo & tôm)', en: 'Pork and prawns' },
        { id: 'chicken', es: 'Pollo (Thịt gà)', en: 'Chicken' },
        { id: 'tofu', es: 'Tofu (Đậu hũ)', en: 'Tofu' }
      ]
    },
    {
      id: 'lunch-canhga',
      name: 'Cánh Gà Đặc Biệt / Alitas de Pollo',
      emoji: '🍗',
      es: {
        name: 'Alitas de Pollo Crujientes',
        description: 'Alitas crujientes con salsa de chili dulce casera (5 piezas).'
      },
      en: {
        name: 'Crispy Chicken Wings',
        description: 'Crispy chicken wings with homemade sweet chili sauce (5 pieces).'
      },
      extra: { es: 'Pieza extra (Thêm 1 viên)', en: 'Extra piece' }
    },
    {
      id: 'lunch-hacao',
      name: 'Há Cảo / Gyosas al Vapor',
      emoji: '🥟',
      es: {
        name: 'Gyosas al Vapor',
        description: 'Empanadillas rellenas de verduras y carne al estilo vietnamita.'
      },
      en: {
        name: 'Steamed Gyosas',
        description: 'Dumplings filled with vegetables and meat in Vietnamese style.'
      }
    }
  ],
  mains: [
    {
      id: 'lunch-ternera-pimienta',
      name: 'Bò sốt tiêu đen / Ternera con Pimienta',
      emoji: '🥩',
      es: {
        name: 'Ternera con Pimienta',
        description: 'Este es un plato muy popular en las fiestas con un toque ligeramente picante, servido con Arroz (Cơm) hoặc Bánh xếp (Empanadillas).'
      },
      en: {
        name: 'Beef with Black Pepper Sauce',
        description: 'A very popular festive dish with a slightly spicy touch, served with Rice or Dumplings.'
      },
      options: [
        { id: 'arroz', es: 'Con Arroz (Kèm cơm)', en: 'With Rice' },
        { id: 'empanadillas', es: 'Con Empanadillas (Kèm Bánh xếp)', en: 'With Dumplings' }
      ]
    },
    {
      id: 'lunch-pollo-cacahuete',
      name: 'Gà sốt lạc / Pollo con Salsa de Cacahuete',
      emoji: '🍗',
      es: {
        name: 'Pollo con Salsa de Cacahuete',
        description: 'Pollo con salsa de cacahuete cremosa, servido con arroz.'
      },
      en: {
        name: 'Chicken with Peanut Sauce',
        description: 'Chicken cooked in a rich peanut sauce, served with rice.'
      }
    },
    {
      id: 'lunch-costillas-cerdo',
      name: 'Sườn ram mặn / Costillas de Cerdo',
      emoji: '🍖',
      es: {
        name: 'Costillas de Cerdo Caramelizadas',
        description: 'Jugosas y tiernas costillas de cerdo asadas lentamente con salsa de caramelo + arroz jazmín.'
      },
      en: {
        name: 'Salty Braised Pork Ribs',
        description: 'Juicy and tender slow-roasted pork ribs with caramel sauce and jasmine rice.'
      }
    },
    {
      id: 'lunch-estofado-panceta',
      name: 'Thịt kho tàu / Estofado de Panceta',
      emoji: '🍲',
      es: {
        name: 'Estofado de Panceta',
        description: 'Panceta de cerdo, huevos cocidos cocinados en agua de coco, salsa de pescado, azúcar y chalotas.'
      },
      en: {
        name: 'Vietnamese Braised Pork with Eggs',
        description: 'Pork belly and boiled eggs simmered in sweet coconut water and fish sauce.'
      }
    },
    {
      id: 'lunch-bachi-quay',
      name: 'Ba chỉ quay / Roasted Pork Belly',
      emoji: '🥓',
      es: {
        name: 'Ba Chỉ Quay (Roasted Pork Belly)',
        description: 'Panceta de cerdo asada con piel crujiente, servida con una salsa especial.'
      },
      en: {
        name: 'Roasted Pork Belly',
        description: 'Vietnamese roasted pork belly with super crispy skin, served with a special sauce.'
      }
    },
    {
      id: 'lunch-tamarindo',
      name: 'Me xào / Tamarindo Salteado',
      emoji: '🍤',
      es: {
        name: 'Tamarindo Salteado',
        description: 'Excelente combinación de salsa de tamarindo agridulce, cacahuetes, verduras + arroz jazmín.'
      },
      en: {
        name: 'Stir-fried Tamarind',
        description: 'Stir-fried in sweet & sour tamarind sauce, peanuts, and vegetables, served with jasmine rice.'
      },
      options: [
        { id: 'gambas', es: 'Gambas (Tôm)', en: 'Prawns' },
        { id: 'beef', es: 'Ternera (+1.00€) (Bò)', en: 'Beef (+1.00€)', extraPrice: 1.00 },
        { id: 'tofu', es: 'Tofu* (Đậu hũ)', en: 'Tofu*' },
        { id: 'heura', es: 'Heura* (Thịt chay Heura)', en: 'Heura*' }
      ]
    },
    {
      id: 'lunch-sopa-pho',
      name: 'Phở / Sopa Phở',
      emoji: '🍜',
      es: {
        name: 'Sopa Phở Tradicional',
        description: 'El plato más popular de Vietnam. Caldo aromático de 12 horas con fideos de arroz planos y hierbas frescas.'
      },
      en: {
        name: 'Traditional Vietnamese Phở',
        description: 'Vietnam\'s most famous noodle soup. Aromatic broth with flat rice noodles and fresh herbs.'
      },
      options: [
        { id: 'beef', es: 'Ternera (+1.00€) (Bò)', en: 'Beef (+1.00€)', extraPrice: 1.00 },
        { id: 'chicken', es: 'Pollo (Gà)', en: 'Chicken' },
        { id: 'tofu-mushrooms', es: 'Tofu y champiñones* (Đậu hũ & nấm)', en: 'Tofu and mushrooms*' },
        { id: 'heura', es: 'Heura* (Thịt chay Heura)', en: 'Heura*' }
      ],
      extra: { es: 'Bola de ternera casera (+1.80€) (Bò viên)', en: 'Homemade beef ball (+1.80€)' }
    },
    {
      id: 'lunch-curry',
      name: 'Cà ri / Curry',
      emoji: '🍛',
      es: {
        name: 'Curry Vietnamita',
        description: 'Curry increíblemente aromático con salsa de coco + arroz jazmín.'
      },
      en: {
        name: 'Vietnamese Curry',
        description: 'Incredibly aromatic curry made with coconut milk sauce, served with jasmine rice.'
      },
      options: [
        { id: 'gambas', es: 'Gambas (Tôm)', en: 'Prawns' },
        { id: 'chicken', es: 'Pollo (Gà)', en: 'Chicken' },
        { id: 'tofu', es: 'Tofu (Đậu hũ)', en: 'Tofu' },
        { id: 'heura', es: 'Heura* (Thịt chay Heura)', en: 'Heura*' }
      ]
    },
    {
      id: 'lunch-wok-fideos',
      name: 'Phở xào / Wok Fideos de Arroz',
      emoji: '🍝',
      es: {
        name: 'Wok Fideos de Arroz (Phở xào)',
        description: 'Plato salteado con fideos de arroz, verduras, hierbas, cacahuetes asados y cebollas fritas.'
      },
      en: {
        name: 'Stir-fried Pho Noodles',
        description: 'Stir-fried flat rice noodles with vegetables, herbs, roasted peanuts, and fried onions.'
      },
      options: [
        { id: 'beef', es: 'Ternera (+1.00€) (Bò)', en: 'Beef (+1.00€)', extraPrice: 1.00 },
        { id: 'gambas', es: 'Gambas (Tôm)', en: 'Prawns' },
        { id: 'chicken', es: 'Pollo (Gà)', en: 'Chicken' },
        { id: 'tofu', es: 'Tofu (Đậu hũ)', en: 'Tofu' },
        { id: 'heura', es: 'Heura* (Thịt chay Heura)', en: 'Heura*' }
      ]
    },
    {
      id: 'lunch-bun-thit-nuong',
      name: 'Bún thịt nướng / Cerdo con Vermicelli',
      emoji: '🍢',
      es: {
        name: 'Bún Thịt Nướng',
        description: 'Cerdo a la barbacoa marinado sobre fideos de arroz vermicelli, verduras y un rollito de primavera.'
      },
      en: {
        name: 'Grilled Pork with Rice Vermicelli',
        description: 'Barbecued marinated pork served over rice vermicelli noodles, fresh herbs, and a spring roll.'
      },
      extra: { es: 'Con chả giò chiên (Thêm chả giò)', en: 'With extra fried spring roll' }
    },
    {
      id: 'lunch-bun-nem',
      name: 'Bún nem / Vermicelli con Rollitos',
      emoji: '🍥',
      es: {
        name: 'Bún Nem (Estilo Hanoi)',
        description: 'Fideos vermicelli de arroz con rollitos de primavera crujientes troceados, verduras y salsa nước chấm.'
      },
      en: {
        name: 'Vermicelli Noodles with Fried Spring Rolls',
        description: 'Hanoi style. Rice vermicelli noodles served with crispy cut spring rolls, fresh salad, and dipping sauce.'
      }
    },
    {
      id: 'lunch-bun-bo-nam-bo',
      name: 'Bún bò nam bộ / Southern Noodles',
      emoji: '🍲',
      es: {
        name: 'Bún Bò Nam Bộ',
        description: 'Fideos de arroz vermicelli con verduras frescas, hierbas, cacahuetes, cebolla frita y carne salteada.'
      },
      en: {
        name: 'Southern-style Rice Vermicelli Salad',
        description: 'Stir-fried meat, fresh herbs, vegetables, peanuts, and fried onions over rice vermicelli.'
      },
      options: [
        { id: 'beef', es: 'Ternera (+1.00€) (Bò)', en: 'Beef (+1.00€)', extraPrice: 1.00 },
        { id: 'chicken', es: 'Pollo (Gà)', en: 'Chicken' },
        { id: 'tofu', es: 'Tofu* (Đậu hũ)', en: 'Tofu*' },
        { id: 'heura', es: 'Heura* (Thịt chay Heura)', en: 'Heura*' }
      ],
      extra: { es: 'Con chả giò chiên (Thêm chả giò)', en: 'With extra fried spring roll' }
    },
    {
      id: 'lunch-bun-heo-quay',
      name: 'Bún trộn heo quay / Vermicelli con Cerdo Crujiente',
      emoji: '🐖',
      es: {
        name: 'Bún Trộn Heo Quay',
        description: 'Los fideos de arroz vermicelli mezclados con cerdo asado de piel crujiente, verduras frescas y salsa nước chấm.'
      },
      en: {
        name: 'Mixed Vermicelli with Crispy Roasted Pork',
        description: 'Rice noodles mixed with crispy-skin roasted pork belly, fresh vegetables, and savory sauce.'
      }
    },
    {
      id: 'lunch-com-xidau',
      name: 'Cơm thịt sốt xì dầu / Arroz con Carne en Salsa de Soja',
      emoji: '🍚',
      es: {
        name: 'Arroz con Carne en Salsa de Soja',
        description: 'La carne se fríe y se sirve con salsa de soja sazonada y arroz blanco.'
      },
      en: {
        name: 'Rice with Meat in Soy Sauce',
        description: 'Pan-fried meat served with seasoned soy dipping sauce and steamed white rice.'
      },
      options: [
        { id: 'duck', es: 'Pato (Thịt vịt)', en: 'Duck' },
        { id: 'chicken', es: 'Pollo (Thịt gà)', en: 'Chicken' }
      ]
    },
    {
      id: 'lunch-com-mamtoi',
      name: 'Cơm thịt sốt mắm tỏi / Arroz con Carne en Salsa de Ajo',
      emoji: '🧄',
      es: {
        name: 'Arroz con Carne en Salsa de Mắm Tỏi',
        description: 'La carne se fríe y se sirve con una deliciosa salsa de pescado con ajo y arroz.'
      },
      en: {
        name: 'Rice with Pork in Garlic Fish Sauce',
        description: 'Fried meat served with a savory and aromatic garlic fish sauce and steamed rice.'
      },
      options: [
        { id: 'duck', es: 'Pato (Thịt vịt)', en: 'Duck' },
        { id: 'chicken', es: 'Pollo (Thịt gà)', en: 'Chicken' }
      ]
    },
    {
      id: 'lunch-com-goitron',
      name: 'Cơm gỏi trộn / Arroz con Ensalada Mezclada',
      emoji: '🥗',
      es: {
        name: 'Cơm Gỏi Trộn (Rice Bowl with Mixed Salad)',
        description: 'Salsa agridulce mezclada con verduras frescas y carne, servida con arroz blanco.'
      },
      en: {
        name: 'Vietnamese Rice Bowl with Mixed Salad',
        description: 'Fresh vegetables and meat tossed in a sweet & sour dressing, served over steamed rice.'
      },
      options: [
        { id: 'duck', es: 'Pato (Thịt vịt)', en: 'Duck' },
        { id: 'chicken', es: 'Pollo (Thịt gà)', en: 'Chicken' },
        { id: 'prawn', es: 'Gambas (Tôm)', en: 'Prawns' },
        { id: 'pork', es: 'Cerdo (Thịt heo)', en: 'Pork' }
      ]
    }
  ],
  desserts: [
    {
      id: 'lunch-chechuoi',
      emoji: '🍌',
      es: {
        name: 'Pudín Caliente con Plátano (Chè chuối)',
        description: 'Pudin caliente con plátano y leche de coco con perlas de tapioca y hạt trân châu.'
      },
      en: {
        name: 'Warm Banana Tapioca Pudding (Chè chuối)',
        description: 'Sweet warm banana and rich coconut milk pudding with chewy tapioca pearls.'
      }
    },
    {
      id: 'lunch-chedauden',
      emoji: '🫘',
      es: {
        name: 'Chè Đậu Đen',
        description: 'Los frijoles negros bien cocidos servidos con leche de coco y hielo.'
      },
      en: {
        name: 'Vietnamese Black Bean Sweet Soup (Chè đậu đen)',
        description: 'Well-cooked sweet black bean soup topped with creamy coconut sauce.'
      }
    },
    {
      id: 'lunch-pannacotta',
      emoji: '🍮',
      es: {
        name: 'Panna Cotta Tropical',
        description: 'Deliciosa panna cotta con sabor de coco, pandan y cacahuete.'
      },
      en: {
        name: 'Pandan Panna Cotta',
        description: 'Creamy panna cotta infused with fragrant Vietnamese pandan leaf and coconut, topped with peanuts.'
      }
    },
    {
      id: 'lunch-suachuanepcam',
      emoji: '🍚',
      es: {
        name: 'Pudín de Arroz Negro y Yogur (Sữa chua nếp cẩm)',
        description: 'Arroz glutinoso negro con yogur natural al estilo vietnamita.'
      },
      en: {
        name: 'Black Sticky Rice Yogurt (Sữa chua nếp cẩm)',
        description: 'Chewy black glutinous rice paired with fresh natural yogurt.'
      }
    }
  ],
  drinks: [
    {
      id: 'lunch-water',
      emoji: '💧',
      es: { name: 'Agua', description: 'Agua mineral' },
      en: { name: 'Water', description: 'Mineral water' }
    },
    {
      id: 'lunch-cana',
      emoji: '🍺',
      es: { name: 'Caña de Cerveza', description: 'Cerveza de barril' },
      en: { name: 'Draft Beer', description: 'Draft beer' }
    },
    {
      id: 'lunch-vino',
      emoji: '🍷',
      es: { name: 'Copa de Vino', description: 'Vino tinto o blanco' },
      en: { name: 'Glass of Wine', description: 'Red or white wine' }
    },
    {
      id: 'lunch-cerveza-saigon',
      emoji: '🍻',
      es: {
        name: 'Cerveza Saigon (+2.00€)',
        description: 'Cerveza importada de Vietnam',
        extraPrice: 2.00
      },
      en: {
        name: 'Saigon Beer (+2.00€)',
        description: 'Imported Vietnamese beer',
        extraPrice: 2.00
      }
    },
    {
      id: 'lunch-bebida-casera',
      emoji: '🍹',
      es: {
        name: 'Bebida Casera (+2.00€)',
        description: 'Bebidas especiales de la casa',
        extraPrice: 2.00
      },
      en: {
        name: 'Homemade Drink (+2.00€)',
        description: 'Special homemade drinks',
        extraPrice: 2.00
      }
    },
    {
      id: 'lunch-cafe-vietnamita',
      emoji: '☕',
      es: {
        name: 'Café Vietnamita Tradicional (+2.00€) (Cà phê sữa đá)',
        description: 'Fuerte café de goteo tradicional vietnamita mezclado con leche condensada dulce y hielo.',
        extraPrice: 2.00
      },
      en: {
        name: 'Traditional Vietnamese Coffee (+2.00€) (Cà phê sữa đá)',
        description: 'Strong slow-drip Vietnamese coffee combined with sweet condensed milk and ice.',
        extraPrice: 2.00
      }
    }
  ]
};

