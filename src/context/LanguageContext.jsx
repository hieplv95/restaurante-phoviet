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
    
    // Cart sidebar
    'cart.title': 'Tu Pedido',
    'cart.empty': 'Tu carrito está vacío. ¡Añade algunas delicias vietnamitas!',
    'cart.notes.label': 'Instrucciones para la Cocina:',
    'cart.notes.placeholder': 'Ej. Sin cilantro, picante aparte...',
    'cart.order_type.delivery': 'A domicilio',
    'cart.order_type.takeaway': 'Para llevar',
    'cart.order_type.dine_in': 'En el local',
    'cart.subtotal': 'Subtotal',
    'cart.delivery': 'Envío',
    'cart.free': 'Gratis',
    'cart.tax': 'IVA (10%)',
    'cart.total': 'Total',
    'cart.checkout': 'Proceder al Pago',
    
    // Checkout
    'checkout.title': 'Completar Pedido',
    'checkout.name.label': 'Nombre Completo',
    'checkout.name.placeholder': 'Ej. María García',
    'checkout.phone.label': 'Teléfono de Contacto',
    'checkout.phone.placeholder': 'Ej. +34 600 000 000',
    'checkout.address.label': 'Dirección de Entrega',
    'checkout.address.placeholder': 'Ej. Calle Mayor 123, 2B',
    'checkout.table.label': 'Número de Mesa',
    'checkout.table.placeholder': 'Ej. Mesa 4',
    'checkout.time.label': 'Hora de Entrega / Recogida',
    'checkout.time.asap': 'Lo antes posible (ASAP)',
    'checkout.payment.label': 'Método de Pago',
    'checkout.payment.card': 'Tarjeta',
    'checkout.payment.bizum': 'Bizum',
    'checkout.payment.cash': 'Efectivo',
    'checkout.cancel': 'Cancelar',
    'checkout.submit': 'Confirmar Pedido',
    
    // Order Tracking
    'track.title': 'Estado del Pedido',
    'track.order_id': 'Pedido #',
    'track.eta': 'Hora Estimada',
    'track.status.received': 'Recibido',
    'track.status.preparing': 'Preparando',
    'track.status.out_for_delivery': 'En Reparto',
    'track.status.delivered': 'Entregado',
    'track.status.received.desc': 'Hemos recibido tu pedido y está en cola.',
    'track.status.preparing.desc': 'Nuestros chefs están cocinando tus platos.',
    'track.status.out_for_delivery.desc': 'El repartidor va camino a tu dirección.',
    'track.status.delivered.desc': '¡Buen provecho! Tu comida ha sido entregada.',
    'track.status.dine_in.desc': 'Tus platos se están sirviendo directamente en tu mesa.',
    'track.notes.chef': 'Nota para la cocina: ',
    'track.summary': 'Resumen del Pedido',
    'track.type': 'Método:',
    'track.type.delivery': 'Entrega a Domicilio',
    'track.type.takeaway': 'Recogida en Tienda',
    'track.type.dine_in': 'Servicio en Mesa',
    
    // Kitchen simulator dashboard
    'kitchen.title': 'Consola de Cocina',
    'kitchen.subtitle': 'Administrador en Tiempo Real',
    'kitchen.active': 'Pedidos Activos',
    'kitchen.no_orders': 'No hay pedidos pendientes. ¡Todo al día!',
    'kitchen.btn.next': 'Siguiente Tránsito',
    'kitchen.btn.cancel': 'Cancelar Pedido',
    'kitchen.action.prepare': 'Empezar a Cocinar',
    'kitchen.action.ship': 'Enviar a Domicilio',
    'kitchen.action.serve': 'Servir a la Mesa',
    'kitchen.action.complete': 'Completar Pedido',
    
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
    'footer.rights': '© 2026 Restaurante Phở Việt. Todos los derechos reservados.'
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
    
    // Cart sidebar
    'cart.title': 'Your Order',
    'cart.empty': 'Your cart is empty. Add some Vietnamese delicacies!',
    'cart.notes.label': 'Special Instructions for Kitchen:',
    'cart.notes.placeholder': 'E.g. No cilantro, chili on the side...',
    'cart.order_type.delivery': 'Delivery',
    'cart.order_type.takeaway': 'Takeaway',
    'cart.order_type.dine_in': 'Dine-In',
    'cart.subtotal': 'Subtotal',
    'cart.delivery': 'Delivery',
    'cart.free': 'Free',
    'cart.tax': 'Tax (10%)',
    'cart.total': 'Total',
    'cart.checkout': 'Proceed to Checkout',
    
    // Checkout
    'checkout.title': 'Complete Order',
    'checkout.name.label': 'Full Name',
    'checkout.name.placeholder': 'E.g. John Doe',
    'checkout.phone.label': 'Contact Phone',
    'checkout.phone.placeholder': 'E.g. +34 600 000 000',
    'checkout.address.label': 'Delivery Address',
    'checkout.address.placeholder': 'E.g. 123 Main Street, Apt 2B',
    'checkout.table.label': 'Table Number',
    'checkout.table.placeholder': 'E.g. Table 4',
    'checkout.time.label': 'Delivery / Collection Time',
    'checkout.time.asap': 'As soon as possible (ASAP)',
    'checkout.payment.label': 'Payment Method',
    'checkout.payment.card': 'Card',
    'checkout.payment.bizum': 'Bizum',
    'checkout.payment.cash': 'Cash',
    'checkout.cancel': 'Cancel',
    'checkout.submit': 'Confirm Order',
    
    // Order Tracking
    'track.title': 'Order Status',
    'track.order_id': 'Order #',
    'track.eta': 'Estimated Time',
    'track.status.received': 'Received',
    'track.status.preparing': 'Preparing',
    'track.status.out_for_delivery': 'Out for Delivery',
    'track.status.delivered': 'Delivered',
    'track.status.received.desc': 'We have received your order and it is in queue.',
    'track.status.preparing.desc': 'Our chefs are cooking your dishes.',
    'track.status.out_for_delivery.desc': 'The courier is on the way to your address.',
    'track.status.delivered.desc': 'Enjoy your meal! Your order has been delivered.',
    'track.status.dine_in.desc': 'Your dishes are being served directly to your table.',
    'track.notes.chef': 'Kitchen Note: ',
    'track.summary': 'Order Summary',
    'track.type': 'Method:',
    'track.type.delivery': 'Home Delivery',
    'track.type.takeaway': 'Store Pickup',
    'track.type.dine_in': 'Table Service',
    
    // Kitchen simulator dashboard
    'kitchen.title': 'Kitchen Console',
    'kitchen.subtitle': 'Real-Time Admin',
    'kitchen.active': 'Active Orders',
    'kitchen.no_orders': 'No pending orders. All caught up!',
    'kitchen.btn.next': 'Advance Status',
    'kitchen.btn.cancel': 'Cancel Order',
    'kitchen.action.prepare': 'Start Cooking',
    'kitchen.action.ship': 'Send for Delivery',
    'kitchen.action.serve': 'Serve to Table',
    'kitchen.action.complete': 'Complete Order',
    
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
    'footer.rights': '© 2026 Phở Việt Restaurant. All rights reserved.'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // Default is Spanish as requested

  const t = (key) => {
    return translations[language][key] || key;
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
