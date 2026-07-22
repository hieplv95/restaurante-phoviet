# Daily Menu Visual Cards Design

## Summary
Transform the Menú del Día section from a plain text list layout into rich visual dish cards (matching the main menu card style with circular dish photos, multi-language subtitles, descriptions, and option tags).

## Design Specification
1. **Remove Old Plain Text Lists**:
   - Replace `daily-menu-items-list` with `daily-menu-cards-grid` using the `custom-menu-item` card component structure.

2. **Visual Dish Cards Integration**:
   - Each item in Entrantes, Platos Principales, Postres o Café, and Bebidas will render with:
     - Title (`item.name`)
     - Subtitle (`details.subtitle`)
     - Description (`details.description`)
     - Option badges (`details.options`)
     - Circular dish image (`item.image`)

3. **Sections Preserved**:
   - Header with price badge (13,90€) and rules ("Incluye 1 Entrante + 1 Plato Principal + 1 Postre/Café + 1 Bebida").
   - Categorized sections (Entrantes, Platos Principales, Postres o Café, Bebidas).
