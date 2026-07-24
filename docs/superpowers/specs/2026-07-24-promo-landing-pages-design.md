# Design Specification: Google Ads Promo Landing Pages

## 1. Overview
The goal of this task is to create 3 high-converting landing pages for Pho Viet restaurant in Barcelona, Spain to run Google Ads campaigns. Each landing page introduces a traditional Vietnamese dish or dish category, encouraging local customers to visit the restaurant by clicking a prominent "Get Directions" Call-to-Action.

The default language for these pages is **English**, but they support seamless language switching (Spanish, Vietnamese, etc.) using the existing `LanguageContext`.

## 2. Target Dishes & Paths
We will support three pathname-based routes:
1.  **Path:** `/promo/bun-bo-hue`
    *   **Dish:** Bún Bò Huế (Spicy Hue Beef Noodle Soup)
    *   **Description:** Robust spicy beef soup from Central Vietnam, simmered for 12 hours with lemongrass, beef bones, and chili.
2.  **Path:** `/promo/banh-xeo`
    *   **Dish:** Bánh Xèo (Vietnamese Crispy Pancake)
    *   **Description:** Crispy turmeric crepe filled with pork, shrimp, and bean sprouts, served with fresh herbs and lettuce for wrapping.
3.  **Path:** `/promo/bun-tron`
    *   **Dishes:** Bún Bò Nam Bộ (Southern Noodle Salad) & Bún Thịt Nướng (Grilled Pork Vermicelli)
    *   **Description:** Refreshing rice vermicelli bowls served cold with fresh herbs, cucumbers, crushed peanuts, fried shallots, and sweet & sour fish sauce.

## 3. Architecture & Routing
Since we are using React + Vite without `react-router-dom`, we will implement simple pathname-based routing in [App.jsx](file:///d:/Code/restaurante-phoviet/src/App.jsx):
```javascript
const path = window.location.pathname;
const isPromoPage = path.startsWith('/promo/');
const promoDish = path.split('/').pop(); // 'bun-bo-hue', 'banh-xeo', or 'bun-tron'
```
*   If `isPromoPage` is true, we render the `<PromoLayout>` with the specific dish data.
*   Otherwise, we render the standard homepage (`<MainApp>`).

To support static host deployments (like Vercel, Netlify), a redirection/rewrite rule will be created in `vercel.json` (or similar) to route all `/promo/*` requests back to `index.html`.

## 4. UI Components & Layout
The promotional landing pages will share a unified structure (`src/components/promo/PromoLayout.jsx`):
*   **Header:** Clean, distraction-free header. Includes logo, quick contact link, and the multi-language dropdown.
*   **Hero Section:** 
    *   Appetizing high-resolution food image (generated).
    *   Punchy, emotional headlines in the active language.
    *   Primary CTA: **"Get Directions"** button (opens Google Maps directions to the restaurant address: *Carrer de Viladomat, 56, Barcelona*).
*   **Unique Selling Points (USPs):**
    *   Authentic Vietnamese recipes.
    *   100% fresh herbs and premium ingredients.
    *   Locally loved family restaurant in Barcelona.
*   **Ingredients Explorer:**
    *   Visual grid highlighting the key fresh ingredients for the selected dish.
*   **Special Google Ads Offer:**
    *   Conversion booster card: *"Show this screen to our staff on your first visit to get a FREE homemade drink with your dish! Code: **PHOVIETADS**"*.
*   **Location & Hours:**
    *   A compact Google Maps section showing address, phone number, and hours, with a secondary directions button.

## 5. Localized Translations
We will extend translations in [LanguageContext.jsx](file:///d:/Code/restaurante-phoviet/src/context/LanguageContext.jsx) to include:
*   Promo landing page strings (titles, descriptions, CTA buttons).
*   Ingredient names and descriptions for the three dishes.
*   Default English fallback, with complete translations for Spanish (`es`), Vietnamese (`vi`), and other languages where appropriate.

## 6. Image Generation Tasks
We will generate high-quality photos and place them in the project public folder:
*   `/assets/promo/bun-bo-hue.jpg`
*   `/assets/promo/banh-xeo.jpg`
*   `/assets/promo/bun-tron.jpg`
