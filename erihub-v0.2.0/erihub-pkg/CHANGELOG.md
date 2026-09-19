# Changelog

## 0.2.0

- **Breaking:** unified all class names under a single `eh-` naming convention. Removed legacy/duplicate classes from the original brand sheet:
  - `.navbar-erihub` → `.eh-navbar`, `.navbar-brand` → `.eh-navbar-brand`, `.nav-link` → `.eh-nav-link`
  - `.btn-eh-green` / `.btn-eh-gold` / `.btn-eh-outline-blue` → consolidated into the existing `.eh-btn-primary` / `.eh-btn-accent` / `.eh-btn-outline-secondary` (no more duplicate button systems)
  - `.card-eh` → `.eh-card`, `.card-icon` → `.eh-card-icon`, `.icon-green/gold/blue` → `.eh-icon-green/gold/blue`
  - `.badge-eh` and `.tag` → unified into one `.eh-badge` system with `.eh-badge-primary/secondary/accent/neutral` variants
  - `.hero-section` → `.eh-hero`, `.subhead` → `.eh-hero-subhead`
  - `.section` / `.section-light` / `.section-title` / `.section-subtitle` → `.eh-section*`
  - `.auth-*`, `.profile-*`, `.testimonial-card`, `.avatar-circle`, `.cta-section`, `.site-footer`, `.social-icons`, `.page-header`, `.filter-bar`, `.step-circle`, `.impact-*` → all re-prefixed to `.eh-*`
- Added standard components to reach Bootstrap-equivalent coverage: breadcrumb, button group, close button, dropdown, list group, progress, spinner, toast, tooltip, carousel, input group, floating label, switch.
- Added `dist/` build: concatenated `erihub.css`/`erihub.js` and minified `erihub.min.css`/`erihub.min.js`.
- Added `package.json` for npm distribution (`npm install erihub`).
- Added full documentation (`docs/getting-started.md`, `docs/tokens.md`, `docs/components.md`).

## 0.1.0

- Initial framework: tokens, reset, type scale, grid, utilities (`erihub-core.css`).
- Original brand-sheet components preserved as first components layer.
- Added forms, alerts, tabs, accordion, modal, table, pagination, base button system.
- Interactive behaviors added in `erihub.js`.
