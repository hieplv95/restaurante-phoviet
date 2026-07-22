# Daily Menu Cards Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the plain text list layout in Menú del Día with rich visual dish cards (matching the main menu card style with circular dish photos, multi-language subtitles, descriptions, and option tags).

**Architecture:** Update `src/components/Menu.jsx` to map Menú del Día categories (`starters`, `mains`, `desserts`, `drinks`) using the existing `custom-menu-item` card component structure instead of `daily-menu-items-list`.

**Tech Stack:** React (JSX), Vanilla CSS.

---

### Task 1: Update Menú del Día rendering in Menu.jsx

**Files:**
- Modify: `src/components/Menu.jsx`

- [ ] **Step 1: Replace text list markup with custom-menu-item grid for Menú del Día**
Update the rendering inside `{activeCategory === 'menudia' ? (...) : (...)}` to iterate over categories (`starters`, `mains`, `desserts`, `drinks`) and render their items using `custom-menu-item` cards with image circles.

- [ ] **Step 2: Verify in browser dev server**
Verify that selecting Menú del Día shows the dish cards with food photos, titles, subtitles, and descriptions.

- [ ] **Step 3: Commit changes**
Run `git add src/components/Menu.jsx` and commit.
