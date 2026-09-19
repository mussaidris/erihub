# Design Tokens

All tokens are CSS custom properties defined on `:root` in `erihub-core.css`. Override any of them in your own stylesheet, loaded after Erihub's, to reskin the framework without touching component code.

## Brand colors

| Token | Value | Use |
|---|---|---|
| `--eh-green` | `#0B6B3A` | Primary brand color — primary buttons, links, active states |
| `--eh-green-dark` | `#084F2B` | Hover/pressed state for green |
| `--eh-green-light` | `#0a8048` | Lighter green accent |
| `--eh-gold` | `#D4A017` | Accent — highlights, stats, CTA emphasis |
| `--eh-gold-light` | `#e8b520` | Lighter gold accent |
| `--eh-blue` | `#0066A1` | Secondary brand color — secondary actions, info states |
| `--eh-blue-light` | `#0078bb` | Lighter blue accent |
| `--eh-light` | `#F7F9F8` | Light section background |
| `--eh-dark` | `#14241C` | Body text, dark sections (footer, impact stats) |
| `--eh-white` | `#FAF9F6` | Off-white |
| `--eh-charcoal` | `#1F2937` | Form text, table text |

## Neutral scale

| Token | Value |
|---|---|
| `--eh-gray-50` | `#fbfbfa` |
| `--eh-gray-100` | `#f3f4f6` |
| `--eh-gray-200` | `#e5e7eb` |
| `--eh-gray-300` | `#d1d5db` |
| `--eh-gray-400` | `#9ca3af` |
| `--eh-gray-500` | `#6b7280` |
| `--eh-gray-600` | `#4b5563` |
| `--eh-gray-700` | `#374151` |
| `--eh-gray-800` | `#1f2937` |
| `--eh-gray-900` | `#111827` |

## Feedback colors

| Token | Value | Paired background |
|---|---|---|
| `--eh-success` | `var(--eh-green)` | `--eh-success-bg` `#e6f4ec` |
| `--eh-warning` | `var(--eh-gold)` | `--eh-warning-bg` `#fbf1d9` |
| `--eh-danger` | `#B3261E` | `--eh-danger-bg` `#fbe9e7` |
| `--eh-info` | `var(--eh-blue)` | `--eh-info-bg` `#e5f1f8` |

## Elevation & shape

| Token | Value |
|---|---|
| `--eh-shadow-sm` | `0 1px 3px rgba(0,0,0,.10)` |
| `--eh-shadow-md` | `0 4px 16px rgba(0,0,0,.12)` |
| `--eh-shadow-lg` | `0 12px 40px rgba(0,0,0,.16)` |
| `--eh-radius` | `12px` |
| `--eh-radius-sm` | `8px` |
| `--eh-radius-lg` | `20px` |
| `--eh-radius-pill` | `999px` |

## Typography

- Font family (`--eh-font-body`, `--eh-font-display`): **Poppins**, falling back to Segoe UI / Roboto / Helvetica Neue / Arial.
- Type scale (Major Third, 1.25 ratio, base 16px):

| Token | Size |
|---|---|
| `--eh-text-xs` | 12px |
| `--eh-text-sm` | 14px |
| `--eh-text-base` | 16px |
| `--eh-text-lg` | 18px |
| `--eh-text-xl` | ~22px |
| `--eh-text-2xl` | 28px |
| `--eh-text-3xl` | ~35px |
| `--eh-text-4xl` | 44px |

## Spacing (4px base unit)

| Token | Value |
|---|---|
| `--eh-space-1` | 4px |
| `--eh-space-2` | 8px |
| `--eh-space-3` | 12px |
| `--eh-space-4` | 16px |
| `--eh-space-5` | 24px |
| `--eh-space-6` | 32px |
| `--eh-space-7` | 48px |
| `--eh-space-8` | 64px |
| `--eh-space-9` | 96px |

## Layout

| Token | Value |
|---|---|
| `--eh-container-sm` | 640px |
| `--eh-container-md` | 768px |
| `--eh-container-lg` | 1024px |
| `--eh-container-xl` | 1200px |
| `--eh-gutter` | 24px |

## Motion

| Token | Value |
|---|---|
| `--eh-ease` | `cubic-bezier(.4,0,.2,1)` |
| `--eh-duration` | `180ms` |

All transitions and animations respect `prefers-reduced-motion: reduce` — this is handled once in `erihub-core.css` and applies framework-wide.
