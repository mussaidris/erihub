# Erihub
# Author Mussa Mohammed Idris

A CSS + vanilla JS UI framework built for the **Erihub initiative** — connecting Eritrean talent worldwide. It covers the standard component set you'd expect from a framework like Bootstrap, with its own brand identity: forest green, gold, and blue drawn from Habesha textile and ceremonial color, set in Poppins.

No build step required to use it. No framework dependency (React/Vue/etc.) — plain HTML classes and a small vanilla JS file for the interactive pieces.

## What's in the box

```
erihub/
├── src/                    Uncompiled source — edit these
│   ├── css/
│   │   ├── erihub-core.css        tokens, reset, type scale, grid, utilities
│   │   └── erihub-components.css  every component
│   └── js/
│       └── erihub.js              dropdown, tabs, accordion, modal, toast, carousel
├── dist/                   Built output — use these in a project
│   ├── erihub.css                 core + components, concatenated, unminified
│   ├── erihub.min.css             minified
│   ├── erihub.js                  unminified
│   └── erihub.min.js              minified
├── demo/
│   └── index.html          every component, live, on one page
└── docs/
    ├── getting-started.md
    ├── tokens.md           full design token reference
    └── components.md       every class, with markup examples
```

## Install

### Option A — npm

```bash
npm install erihub
```

```html
<link rel="stylesheet" href="node_modules/erihub/dist/erihub.min.css">
<script src="node_modules/erihub/dist/erihub.min.js" defer></script>
```

Or import in a bundler-based project:

```js
import "erihub/dist/erihub.min.css";
import "erihub/dist/erihub.min.js";
```

### Option B — direct file

Copy `dist/erihub.min.css` and `dist/erihub.min.js` into your project and link them directly:

```html
<link rel="stylesheet" href="/assets/erihub.min.css">
<script src="/assets/erihub.min.js" defer></script>
```

## Quick start

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="dist/erihub.min.css">
</head>
<body>
  <nav class="eh-navbar">
    <div class="eh-container eh-flex eh-items-center eh-justify-between eh-py-3">
      <div class="eh-navbar-brand">Eri<span class="eh-navbar-brand-accent">hub</span></div>
      <button class="eh-btn eh-btn-primary">Join Erihub</button>
    </div>
  </nav>

  <script src="dist/erihub.min.js" defer></script>
</body>
</html>
```

See `demo/index.html` for a full page using every component, and `docs/components.md` for copy-pasteable markup per component.

## Naming convention

Every class and CSS custom property in this framework is prefixed `eh-`. There is exactly one way to build each component — no duplicate or legacy class names. See `docs/components.md` for the full reference.

## Building from source

If you edit anything in `src/`, rebuild `dist/` with:

```bash
npm install
npm run build
```

This concatenates the two `src/css` files and minifies both the CSS and JS into `dist/`.

## Browser support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge — last 2 versions). Uses CSS custom properties, `gap`, and `:focus-visible`; no IE11 support.

## License

MIT — see `LICENSE`.
