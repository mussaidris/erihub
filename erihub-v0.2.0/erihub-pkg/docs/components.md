# Component Reference

Every class is prefixed `eh-`. State is expressed with `is-*` modifier classes (`is-active`, `is-open`, `is-invalid`, `is-clickable`) rather than separate class families, so you can always tell what's a base component vs. a state.

---

## Layout

### Container & Grid

```html
<div class="eh-container">...</div>          <!-- max-width 1200px, centered -->
<div class="eh-container-sm">...</div>        <!-- 640px -->
<div class="eh-container-md">...</div>        <!-- 768px -->
<div class="eh-container-lg">...</div>        <!-- 1024px -->

<!-- Auto-responsive grid: stacks to 1 column below 768px -->
<div class="eh-grid eh-grid-3">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>

<!-- Explicit-width row/column system (like Bootstrap's) -->
<div class="eh-row">
  <div class="eh-col-4">Sidebar</div>
  <div class="eh-col-8">Main</div>
</div>
```

`eh-col-1` through `eh-col-12` are available. Columns stack to full width below 768px.

### Utilities

Spacing: `eh-mt-0`…`eh-mt-6`, `eh-mb-0`…`eh-mb-6`, `eh-py-1`…`eh-py-6`, `eh-px-1`…`eh-px-6`, `eh-gap-1`…`eh-gap-5`
Flex: `eh-flex`, `eh-flex-col`, `eh-items-center`, `eh-justify-between`, `eh-justify-center`
Text: `eh-text-center`, `eh-text-green`, `eh-text-gold`, `eh-text-blue`, `eh-text-muted`
Shape: `eh-rounded`, `eh-rounded-sm`, `eh-rounded-lg`, `eh-shadow-sm`, `eh-shadow-md`, `eh-shadow-lg`

---

## Navbar

```html
<nav class="eh-navbar">
  <div class="eh-container eh-flex eh-items-center eh-justify-between eh-py-3">
    <div class="eh-navbar-brand">Eri<span class="eh-navbar-brand-accent">hub</span></div>
    <div class="eh-flex eh-gap-4 eh-items-center">
      <a class="eh-nav-link is-active" href="#">Directory</a>
      <a class="eh-nav-link" href="#">Mentorship</a>
      <button class="eh-btn eh-btn-primary">Join Erihub</button>
    </div>
  </div>
</nav>
```

---

## Buttons

```html
<button class="eh-btn eh-btn-primary">Primary</button>
<button class="eh-btn eh-btn-secondary">Secondary</button>
<button class="eh-btn eh-btn-accent">Accent</button>
<button class="eh-btn eh-btn-outline">Outline</button>
<button class="eh-btn eh-btn-outline-secondary">Outline Secondary</button>
<button class="eh-btn eh-btn-ghost">Ghost</button>
<button class="eh-btn eh-btn-danger">Danger</button>
<button class="eh-btn eh-btn-primary" disabled>Disabled</button>
```

Size modifiers: `eh-btn-sm`, `eh-btn-lg`, `eh-btn-block` (full width).

### Button group

```html
<div class="eh-btn-group">
  <button class="eh-btn eh-btn-outline">Grid</button>
  <button class="eh-btn eh-btn-outline">List</button>
  <button class="eh-btn eh-btn-outline">Map</button>
</div>
```

---

## Cards

```html
<div class="eh-card">
  <div class="eh-card-icon eh-icon-green">🤝</div>
  <h4>Find a mentor</h4>
  <p>Get matched with someone who's walked the same path.</p>
</div>
```

`eh-card-icon` variants: `eh-icon-green`, `eh-icon-gold`, `eh-icon-blue`.

---

## Badges

```html
<span class="eh-badge eh-badge-primary">Mentor</span>
<span class="eh-badge eh-badge-secondary">New</span>
<span class="eh-badge eh-badge-accent">Featured</span>
<span class="eh-badge eh-badge-neutral">Toronto</span>
```

---

## Forms

```html
<div class="eh-field">
  <label class="eh-label">Full name<span class="eh-required">*</span></label>
  <input class="eh-input" type="text" placeholder="Senait Tesfamichael">
</div>

<div class="eh-field">
  <label class="eh-label">Field of work</label>
  <select class="eh-select">
    <option>Software Engineering</option>
  </select>
</div>

<div class="eh-field is-invalid">
  <label class="eh-label">City</label>
  <input class="eh-input" type="text">
  <span class="eh-error-text">City is required.</span>
</div>

<label class="eh-checkbox"><input type="checkbox"> Mentor others in my field</label>
<label class="eh-radio"><input type="radio" name="r"> Option</label>
```

### Switch

```html
<label class="eh-switch">
  <input type="checkbox" checked>
  <span class="eh-switch-track"></span>
  Email me new opportunities
</label>
```

### Input group

```html
<div class="eh-input-group">
  <span class="eh-input-group-text">erihub.org/</span>
  <input class="eh-input" type="text" placeholder="meron-kidane">
</div>
```

### Floating label

```html
<div class="eh-form-floating">
  <input class="eh-input" type="text" id="email" placeholder=" ">
  <label for="email">Email address</label>
</div>
```

Note the placeholder must be a single space (`" "`) — the CSS relies on `:not(:placeholder-shown)` to animate the label.

---

## Alerts

```html
<div class="eh-alert eh-alert-success">
  <div><div class="eh-alert-title">Profile approved</div>You're now visible in the directory.</div>
</div>
```

Variants: `eh-alert-success`, `eh-alert-info`, `eh-alert-warning`, `eh-alert-danger`.

---

## Tabs

Requires `erihub.js`.

```html
<div class="eh-tabs" data-eh-tabs="profile">
  <button class="eh-tab is-active" data-eh-tab="about">About</button>
  <button class="eh-tab" data-eh-tab="mentorship">Mentorship</button>
</div>
<div data-eh-tab-panels="profile">
  <div class="eh-tab-panel" data-eh-tab-panel="about">About content…</div>
  <div class="eh-tab-panel" data-eh-tab-panel="mentorship" style="display:none;">Mentorship content…</div>
</div>
```

The `data-eh-tabs` value on the tab list must match `data-eh-tab-panels` on the panel container. Each `data-eh-tab` value must match a `data-eh-tab-panel` value.

---

## Accordion

Requires `erihub.js`.

```html
<div data-eh-accordion="single">
  <div class="eh-accordion-item is-open">
    <button class="eh-accordion-trigger">Question one <span class="eh-accordion-icon">+</span></button>
    <div class="eh-accordion-panel">Answer one.</div>
  </div>
  <div class="eh-accordion-item">
    <button class="eh-accordion-trigger">Question two <span class="eh-accordion-icon">+</span></button>
    <div class="eh-accordion-panel">Answer two.</div>
  </div>
</div>
```

`data-eh-accordion="single"` (default behavior even if omitted) closes other items when one opens. Use `data-eh-accordion="multi"` to allow several open at once.

---

## Dropdown

Requires `erihub.js`.

```html
<div class="eh-dropdown">
  <button class="eh-btn eh-btn-outline" data-eh-dropdown-trigger>Sort by ▾</button>
  <div class="eh-dropdown-menu">
    <button class="eh-dropdown-item">Newest members</button>
    <div class="eh-dropdown-divider"></div>
    <button class="eh-dropdown-item">Alphabetical</button>
  </div>
</div>
```

Add `eh-dropdown-end` to `eh-dropdown-menu` to right-align the menu.

---

## Breadcrumb

```html
<nav class="eh-breadcrumb">
  <a href="#">Directory</a><span class="eh-crumb-sep">/</span>
  <span class="eh-crumb-current">Meron Kidane</span>
</nav>
```

---

## Pagination

```html
<div class="eh-pagination">
  <button class="eh-page-link" disabled>‹</button>
  <button class="eh-page-link is-active">1</button>
  <button class="eh-page-link">2</button>
  <button class="eh-page-link">›</button>
</div>
```

---

## Modal

Requires `erihub.js`.

```html
<button class="eh-btn eh-btn-outline" data-eh-modal-open="demoModal">Open modal</button>

<div class="eh-modal-backdrop" id="demoModal" style="display:none;">
  <div class="eh-modal">
    <div class="eh-modal-header">
      <h4>Confirm mentor request</h4>
      <button class="eh-close" data-eh-modal-close>&times;</button>
    </div>
    <p>You're about to request Meron Kidane as a mentor.</p>
    <div class="eh-modal-footer">
      <button class="eh-btn eh-btn-ghost" data-eh-modal-close>Cancel</button>
      <button class="eh-btn eh-btn-primary" data-eh-modal-close>Send request</button>
    </div>
  </div>
</div>
```

Closes on: clicking `data-eh-modal-close`, clicking the backdrop, or pressing Escape.

---

## Table

```html
<table class="eh-table">
  <thead><tr><th>Member</th><th>Field</th></tr></thead>
  <tbody>
    <tr><td>Yohannes Ghebremedhin</td><td>Data Science</td></tr>
  </tbody>
</table>
```

---

## List group

```html
<div class="eh-list-group">
  <div class="eh-list-item is-active">Software Engineering <span class="eh-badge eh-badge-neutral">128</span></div>
  <div class="eh-list-item is-clickable">Medicine &amp; Nursing <span class="eh-badge eh-badge-neutral">76</span></div>
</div>
```

---

## Progress

```html
<div class="eh-progress"><div class="eh-progress-bar" style="width:70%;"></div></div>
```

Color modifiers on the bar: `eh-progress-gold`, `eh-progress-blue` (defaults to green).

---

## Spinner

```html
<div class="eh-spinner"></div>
<div class="eh-spinner eh-spinner-sm"></div>
```

---

## Toast

Requires `erihub.js`. Triggered from JS, not markup:

```js
EriHub.toast({
  title: "Saved",
  body: "Notification preferences updated.",
  variant: "success" // success | info | warning | danger
});
```

The toast container is created automatically on first use and toasts auto-dismiss after 4.5s (configurable via `duration` in ms).

---

## Tooltip

CSS-only, no JS required:

```html
<span data-eh-tooltip="Verified diaspora professional">Hover me</span>
```

---

## Carousel

Requires `erihub.js`.

```html
<div class="eh-carousel" data-eh-carousel>
  <div class="eh-carousel-track">
    <div class="eh-carousel-slide">Slide one</div>
    <div class="eh-carousel-slide">Slide two</div>
  </div>
  <div class="eh-carousel-controls">
    <button class="eh-carousel-dot is-active"></button>
    <button class="eh-carousel-dot"></button>
  </div>
</div>
```

Optional nav buttons anywhere inside the carousel: `data-eh-carousel-prev`, `data-eh-carousel-next`.

---

## Page-level patterns

These aren't atomic components — they're pre-styled section patterns built from the primitives above, used across the demo page.

| Class | Purpose |
|---|---|
| `.eh-hero` | Full-width gradient hero section |
| `.eh-hero-subhead`, `.eh-trust-indicators`, `.eh-stat-number`, `.eh-stat-label` | Hero sub-elements |
| `.eh-section`, `.eh-section-light`, `.eh-section-title`, `.eh-section-subtitle` | Generic content section wrapper |
| `.eh-cta` | Full-width closing call-to-action band |
| `.eh-footer`, `.eh-footer-heading`, `.eh-social-icons` | Site footer |
| `.eh-page-header` | Gradient header for inner (non-home) pages |
| `.eh-auth-wrapper`, `.eh-auth-card`, `.eh-auth-logo`, `.eh-brand-name`, `.eh-auth-divider` | Login / signup page shell |
| `.eh-profile-cover`, `.eh-profile-card`, `.eh-profile-info`, `.eh-profile-avatar` | Member profile page shell |
| `.eh-step-circle` | Numbered step marker for "how it works" sections |
| `.eh-impact-section`, `.eh-impact-number` | Dark stats/impact band |
| `.eh-testimonial`, `.eh-avatar` | Testimonial quote card |
| `.eh-filter-bar` | Floating filter bar (e.g. above a member directory) |
