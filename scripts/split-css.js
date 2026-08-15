import fs from 'fs';
import path from 'path';

const indexCssPath = path.resolve('src/index.css');
const lines = fs.readFileSync(indexCssPath, 'utf-8').split('\n');

// Helper to extract line ranges (1-based, inclusive)
function extract(startLine, endLine) {
  return lines.slice(startLine - 1, endLine).join('\n');
}

// 1. About.css
const aboutCss = extract(2305, 2409);
fs.writeFileSync(path.resolve('src/components/About.css'), aboutCss.trim() + '\n');
console.log('Created src/components/About.css');

// 2. Reviews.css
const reviewsCss = extract(1849, 2149);
fs.writeFileSync(path.resolve('src/components/Reviews.css'), reviewsCss.trim() + '\n');
console.log('Created src/components/Reviews.css');

// 3. MapSection.css
const mapCss = extract(3058, 3320);
fs.writeFileSync(path.resolve('src/components/MapSection.css'), mapCss.trim() + '\n');
console.log('Created src/components/MapSection.css');

// 4. PolicyModal.css
const policyCss = extract(3321, 3470);
fs.writeFileSync(path.resolve('src/components/PolicyModal.css'), policyCss.trim() + '\n');
console.log('Created src/components/PolicyModal.css');

// 5. DishPromo.css
const promoCss = extract(3471, 3836);
fs.writeFileSync(path.resolve('src/components/promo/DishPromo.css'), promoCss.trim() + '\n');
console.log('Created src/components/promo/DishPromo.css');

// 6. Menu.css (All menu & cart & checkout & daily menu & tab swiper styles)
const menuParts = [
  extract(636, 1726),
  extract(2150, 2304),
  extract(2472, 3057)
];
fs.writeFileSync(path.resolve('src/components/Menu.css'), menuParts.join('\n\n').trim() + '\n');
console.log('Created src/components/Menu.css');

// 7. Lean Critical index.css (Fonts, Tokens, Reset, Layout, Header, Hero, Footer, Animations, Language Flags)
const criticalParts = [
  extract(1, 635),
  extract(1727, 1848),
  extract(2410, 2471)
];
fs.writeFileSync(indexCssPath, criticalParts.join('\n\n').trim() + '\n');
console.log('Updated src/index.css (now super lean & fast!)');
