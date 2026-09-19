# Erihub
# Author Mussa Mohammed Idris

**v0.1.0** — Initial release

A CSS + vanilla JS UI framework for the Erihub initiative — connecting Eritrean talent worldwide. Built as two layers on top of the original Erihub brand sheet: **core** (tokens, reset, type scale, grid, utilities) and **components** (buttons, forms, cards, alerts, modals, and the rest of a standard component set).

> This is the first tagged version. It predates npm packaging, the `dist/` build, and the naming cleanup that landed in [v0.2.0](#) — see **Naming convention** below before you build anything on top of this version.

## What's included

```
erihub/
├── erihub-core.css         tokens, reset, type scale, grid, utilities
├── erihub-components.css   all components (see below)
├── erihub.js                interactive behaviors: tabs, accordion, modal
└── demo/index.html          every component, live, on one page
```

No `package.json`, no `dist/` build, no minified output yet — these three files are used directly.

## Install

There's no npm package at this version. Copy the files into your project and link them:

```html
<link rel="stylesheet" href="erihub-core.css">
<link rel="stylesheet" href="erihub-components.css">
<script src="erihub.js" defer></script>
```

`erihub-core.css` must load before `erihub-components.css` — components rely on the design tokens (CSS custom properties) core defines.

## Components

**From the original Erihub brand sheet** (preserved as-is): navbar, hero section, cards, badges/tags, auth page shell, profile page shell, generic content sections, CTA band, footer, page header, filter bar.

**New in this release**: a base button system, form controls (inputs, selects, textareas, checkboxes), alerts, tabs, an accordion, a modal, a table, and pagination.

Interactivity for tabs, the accordion, and the modal is handled by `erihub.js` — attribute-driven (`data-eh-tabs`, `data-eh-accordion`, `data-eh-modal-open`), no per-instance JavaScript required.

## Design tokens

Colors, spacing, radii, and type sizes are all CSS custom properties defined in `erihub-core.css`'s `:root`. The palette is drawn from Habesha textile and ceremonial color: forest green (`--eh-green`), gold (`--eh-gold`), and blue (`--eh-blue`), set in Poppins.

## ⚠️ Naming convention (read before extending)

This version carries **two coexisting naming conventions**, which is the main thing fixed in v0.2.0:

- Components newly added in this release use the `eh-` prefix consistently (`.eh-btn-primary`, `.eh-alert-success`, `.eh-tabs`, etc.)
- Components preserved from the original brand sheet use their original names (`.navbar-erihub`, `.card-eh`, `.badge-eh`, `.tag`, `.btn-eh-green`, etc.) — **not** `eh-` prefixed, and in the case of buttons and badges, a second parallel system that duplicates what the new components already do

If you're starting a new project, use [v0.2.0](#) or later, where every class follows one convention and the duplicate button/badge systems are consolidated. This version is documented here for historical reference.

## License

Not yet specified at this version — added in v0.2.0 (MIT).
