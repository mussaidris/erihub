# Getting Started

## 1. Install

```bash
npm install erihub
```

No npm? Download `dist/erihub.min.css` and `dist/erihub.min.js` directly and skip to step 3.

## 2. Link the files

At the end of `<head>`:

```html
<link rel="stylesheet" href="node_modules/erihub/dist/erihub.min.css">
```

Right before `</body>` (only needed if you use dropdowns, tabs, accordions, modals, toasts, or the carousel):

```html
<script src="node_modules/erihub/dist/erihub.min.js" defer></script>
```

## 3. Structure a page

Every page starts with a container and, optionally, the grid:

```html
<div class="eh-container">
  <div class="eh-grid eh-grid-3">
    <div>Column 1</div>
    <div>Column 2</div>
    <div>Column 3</div>
  </div>
</div>
```

`eh-container` centers content and caps width at 1200px. `eh-grid-2` / `eh-grid-3` / `eh-grid-4` create responsive columns that stack to one column below 768px automatically.

If you need explicit column widths instead (e.g. a 4/8 split), use the row/col system:

```html
<div class="eh-row">
  <div class="eh-col-4">Sidebar</div>
  <div class="eh-col-8">Main content</div>
</div>
```

## 4. Add components

Every component is documented with copy-pasteable markup in `docs/components.md`. As a taste:

```html
<button class="eh-btn eh-btn-primary">Create your profile</button>

<div class="eh-alert eh-alert-success">
  <div>
    <div class="eh-alert-title">Profile approved</div>
    You're now visible in the member directory.
  </div>
</div>
```

## 5. Interactive components

Components with moving parts (dropdown, tabs, accordion, modal, toast, carousel) work by adding `data-eh-*` attributes to plain HTML — `erihub.min.js` listens for clicks on those attributes globally. You don't instantiate anything per-component. See `docs/components.md` for the exact attributes each one needs.

The one exception is toasts, which are triggered from your own JS:

```js
EriHub.toast({
  title: "Saved",
  body: "Your profile was updated.",
  variant: "success" // success | info | warning | danger
});
```

## 6. Customizing the brand

All colors, spacing, radii, and type sizes are CSS custom properties defined in `:root` inside `erihub-core.css` (see `docs/tokens.md` for the full list). Override any of them after the Erihub stylesheet loads:

```html
<link rel="stylesheet" href="dist/erihub.min.css">
<style>
  :root {
    --eh-green: #0a5c33; /* darker brand green for this site */
  }
</style>
```

Every component references the tokens, not hardcoded values, so a token override cascades everywhere automatically.

## 7. Editing the framework itself

Don't edit `dist/` directly — it's generated. Edit `src/css/erihub-core.css` or `src/css/erihub-components.css`, then run:

```bash
npm install
npm run build
```

This regenerates all four `dist/` files.
