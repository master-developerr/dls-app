# UI Tokens

Centralized design tokens for the Diligence Learning Solutions (DLS) Web Platform. All colors, typography, spacing, and component values are extracted from the DLS design language. These tokens are shared across the DLS public marketing website and the administrative dashboard.

Use these exact values throughout the codebase — never hardcode brand colors or use raw Tailwind color classes in individual components when a project token exists.

---

## How to Use

This project uses **Tailwind CSS v4**. All design tokens are defined using the `@theme` directive in `app/globals.css`. No `tailwind.config.ts` is required for token definitions.

Tailwind v4 automatically generates utility classes from `--color-*` tokens defined under `@theme`:

- `--color-accent` → `bg-accent`, `text-accent`, `border-accent`
- `--color-background` → `bg-background`
- `--color-surface` → `bg-surface`, `text-surface`, `border-surface`

```tsx
// Correct — uses generated utility classes from tokens
className="bg-background text-text-primary border-border"

// Also correct — references CSS variable directly in inline style if required
style={{ color: "var(--color-text-primary)" }}

// Never — hardcoded hex values
className="bg-[#F5F0E8] text-[#252525]"

// Never — raw Tailwind color classes
className="bg-purple-500 text-gray-600"
```

**Key Rule:** NEVER hardcode brand colors in individual components when a project token exists.

---

## Global Token Definition

```css
@import "tailwindcss";

@theme {
  /* Typography Fonts */
  --font-sans: var(--font-sans, "Inter", "Plus Jakarta Sans", sans-serif);
  --font-display: var(--font-serif, "Playfair Display", "Newsreader", serif);

  /* Page and Surface Backgrounds (Warm Cream / Ivory Foundation) */
  --color-background: #f7f2e8;
  --color-surface: #fffdf8;
  --color-surface-secondary: #f1eadf;
  --color-surface-muted: #eae1d4;

  /* Borders */
  --color-border: #d9d0c3;
  --color-border-light: #e7ded2;
  --color-border-strong: #bdb2a4;

  /* Text (Charcoal & Warm Dark Neutrals) */
  --color-text-primary: #24211d;
  --color-text-secondary: #5f5951;
  --color-text-muted: #8b8379;
  --color-text-inverse: #fffdf8;

  /* Primary DLS Accent — Burnt Orange (#EE5622) */
  --color-accent: #ee5622;
  --color-accent-dark: #d44312;
  --color-accent-light: #fdf1ec;
  --color-accent-muted: #fff7f4;
  --color-accent-foreground: #ffffff;

  /* Semantic States */
  --color-success: #10b981;
  --color-success-light: #ecfdf5;
  --color-success-foreground: #047857;

  --color-info: #3b82f6;
  --color-info-light: #dbeafe;
  --color-info-foreground: #1e40af;

  --color-warning: #f59e0b;
  --color-warning-light: #fef3c7;
  --color-warning-foreground: #92400e;

  --color-error: #ef4444;
  --color-error-light: #fee2e2;
  --color-error-foreground: #991b1b;

  /* Overlays */
  --color-overlay: rgba(36, 33, 29, 0.4);

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
}
```

Tailwind v4 automatically derives utilities for `bg-*`, `text-*`, `border-*`, and `ring-*` from every `--color-*` token listed above.

---

## Color Usage Guide

### Page Layout

| Element | Token | Hex Value | Usage Description |
| --- | --- | --- | --- |
| Page Background | `bg-background` | `#F7F2E8` | Warm cream/ivory overall page background |
| Primary Surface | `bg-surface` | `#FFFDF8` | Card backgrounds, modals, main content containers |
| Secondary Surface | `bg-surface-secondary` | `#F1EADF` | Nested cards, table headers, secondary blocks |
| Muted Surface | `bg-surface-muted` | `#EAE1D4` | Subtle hover states, subtle background highlights |
| Default Border | `border-border` | `#D9D0C3` | Default subtle structural dividers and card borders |
| Light Border | `border-border-light` | `#E7DED2` | Hairline dividers, light container boundaries |

### Typography

| Element | Token | Hex Value | Usage Description |
| --- | --- | --- | --- |
| Primary Text | `text-text-primary` | `#24211D` | Headings, primary body text, title text |
| Secondary Text | `text-text-secondary` | `#5F5951` | Subtitles, labels, metadata, captions |
| Muted Text | `text-text-muted` | `#8B8379` | Placeholders, disabled states, timestamps |
| Inverse Text | `text-text-inverse` | `#FFFDF8` | Light text on dark surfaces or primary buttons |

### Accent — Primary Burnt Orange (#EE5622)

Used intentionally to direct user focus toward primary conversion actions, active navigation states, and focal brand elements.

| Element | Token | Hex Value | Usage Description |
| --- | --- | --- | --- |
| Primary Accent | `bg-accent` / `text-accent` | `#EE5622` | Primary action buttons, active tab indicators, CTAs |
| Accent Hover | `bg-accent-dark` | `#D44312` | Hover/active state for primary accent buttons |
| Accent Light | `bg-accent-light` | `#FDF1EC` | Highlight badges, active background fills |
| Accent Muted | `bg-accent-muted` | `#FFF7F4` | Soft background tints for conversion cards |
| Accent Foreground | `text-accent-foreground` | `#FFFFFF` | Text color rendered on top of `bg-accent` |

### Semantic Colors

Semantic colors provide visual feedback for form validation, system notifications, and admin lead statuses.

| Semantic Role | Token | Light Fill Token | Foreground Text Token | Usage |
| --- | --- | --- | --- | --- |
| Success | `bg-success` (#10B981) | `bg-success-light` (#ECFDF5) | `text-success-foreground` (#047857) | Published status, success alerts |
| Info | `bg-info` (#3B82F6) | `bg-info-light` (#DBEAFE) | `text-info-foreground` (#1E40AF) | Online/UAE mode tag, info banners |
| Warning | `bg-warning` (#F59E0B) | `bg-warning-light` (#FEF3C7) | `text-warning-foreground` (#92400E) | Pending inquiry status, crash course tag |
| Error | `bg-error` (#EF4444) | `bg-error-light` (#FEE2E2) | `text-error-foreground` (#991B1B) | Form validation errors, destructive actions |

---

## Typography

The DLS platform pairs an elegant editorial display font for major headlines with a clean, readable sans-serif font for UI and body copy.

| Element | Size Scale | Weight | Line Height | Color Token | Font Style |
| --- | ---: | -----: | ----------: | --- | --- |
| Display / Hero Heading | 48px - 64px | 700 | 1.1 | `text-text-primary` | Display / Editorial Serif |
| Page Heading | 32px - 40px | 600 | 1.2 | `text-text-primary` | Display / Editorial Serif |
| Section Heading | 24px - 30px | 600 | 1.25 | `text-text-primary` | Display / Editorial Serif |
| Navigation Link | 14px - 15px | 500 / 600 | 1.4 | `text-text-primary` | Clean Sans-Serif |
| Body Text | 16px | 400 | 1.5 | `text-text-primary` | Clean Sans-Serif |
| Secondary Text | 14px | 400 / 500 | 1.4 | `text-text-secondary` | Clean Sans-Serif |
| Muted / Caption | 12px - 13px | 400 | 1.4 | `text-text-muted` | Clean Sans-Serif |
| CTA Button Text | 14px - 16px | 600 | 1.0 | `text-accent-foreground` | Clean Sans-Serif |

---

## Spacing

Generous editorial spacing and rhythmic whitespace are central to the DLS brand visual experience.

| Token | Value | Usage Scope |
| --- | --- | --- |
| `gap-1` | 4px | Tight inline icon gaps, inline badge elements |
| `gap-2` | 8px | Button icon spacing, pill tag clusters |
| `gap-3` | 12px | Form input field stacks, compact list items |
| `gap-4` | 16px | Card internal element margins, tight grid gaps |
| `gap-6` | 24px | Card grid spacing, standard component margins |
| `gap-8` | 32px | Container margins, sub-section spacing |
| `gap-10` | 40px | Medium section vertical spacing |
| `gap-12` | 48px | Large section vertical spacing |
| `gap-16` | 64px | Major page section dividers (Tablet / Desktop) |
| `gap-20` | 80px | Hero and primary section rhythm (Desktop) |

- **Smaller spacing (4px - 16px)**: Internal component layout and micro-gaps.
- **Medium spacing (24px - 32px)**: Card grids, form sections, and group spacing.
- **Larger spacing (40px - 80px)**: Major page section transitions and editorial whitespace rhythm.

---

## Component Tokens

### Cards

DLS cards use a warm surface foundation with a subtle border and generous padding:

```
background: bg-surface (#FFFDF8)
border: 1px solid var(--color-border) (#D9D0C3)
border-radius: var(--radius-lg) (12px / rounded-lg)
padding: 24px (p-6)
box-shadow: 0px 1px 3px rgba(36, 33, 29, 0.04)
```

Use cards primarily for programs, testimonials, results/rankers, admin data rows, and bounded interactive blocks. Avoid framing every text section inside a card.

### Buttons

**Primary (Burnt Orange Brand CTA):**
```
background: bg-accent (#EE5622)
hover: bg-accent-dark (#D44312)
text: text-accent-foreground (#FFFFFF)
border-radius: rounded-md (8px)
padding: px-5 py-2.5
font-weight: font-semibold (600)
```

**Secondary (Warm Outline):**
```
background: bg-surface (#FFFDF8)
border: 1px solid var(--color-border) (#D9D0C3)
text: text-text-primary (#24211D)
border-radius: rounded-md (8px)
padding: px-5 py-2.5
font-weight: font-medium (500)
```

**Ghost:**
```
background: transparent
hover background: bg-surface-secondary (#F1EADF)
text: text-text-secondary (#5F5951)
border-radius: rounded-md (8px)
padding: px-4 py-2
```

### Input Fields

```
background: bg-surface (#FFFDF8)
border: 1px solid var(--color-border) (#D9D0C3)
border-radius: rounded-md (8px)
padding: px-3.5 py-2.5
text: text-text-primary (#24211D)
placeholder: text-text-muted (#8B8379)
focus: ring-2 ring-accent border-accent
```

### Badges

```
border-radius: rounded-full (9999px)
padding: px-3 py-1
font-size: text-xs (12px)
font-weight: font-medium (500)
```

### CTA / Conversion Sections

```
background: bg-surface-secondary (#F1EADF) or bg-accent-muted (#FFF7F4)
border: 1px solid var(--color-border) (#D9D0C3)
heading text: text-text-primary (#24211D)
action button: Primary Accent (#EE5622)
```

---

## Responsive Tokens

The DLS Web Platform follows a mobile-first design strategy:

- **Mobile (< 768px)**: Compact section spacing (`py-10`, `gap-6`), hero headings scale down (`text-3xl` / `32px`).
- **Tablet (768px - 1024px)**: Intermediate spacing (`py-16`, `gap-10`), 2-column program/results grid.
- **Desktop (> 1024px)**: Generous editorial whitespace (`py-20`, `gap-16` to `gap-20`), hero headlines scale (`text-5xl` / `48px`+), 3-column grid layouts.

---

## DLS Visual Principles

- **Warm, Editorial, Premium Education Aesthetic**: The visual atmosphere communicates trust, elegance, and academic excellence.
- **Cream/Ivory Foundation**: Warm ivory (`#F7F2E8`) replaces cold blue-gray or harsh clinical white backgrounds.
- **Charcoal Typography**: Deep charcoal (`#24211D`) provides soft, high-contrast readability without harsh pure black (`#000000`).
- **Burnt Orange `#EE5622`**: Used purposefully to draw focus toward high-value conversions, CTAs, and active states.
- **Generous Whitespace**: Space is used deliberately to organize content hierarchically and avoid cluttered dashboard visuals.
- **Restrained Borders & Shadows**: Subtle borders (`#D9D0C3`) and soft shadows frame interactive elements without visually overwhelming the user.

---

## Invariants

- **Single Source of Truth**: This file is the centralized reference for all visual design tokens.
- **No Raw Hex Values**: Never hardcode hex colors (e.g. `#EE5622` or `#F7F2E8`) inside component JSX/TSX files when a token exists.
- **No Raw Tailwind Color Scale Utility Classes**: Do not use raw classes like `bg-purple-500`, `bg-orange-500`, or `text-gray-900` in components. Use `bg-accent`, `bg-background`, `text-text-primary`, etc.
- **Strict Brand Accent**: Primary DLS accent is strictly `#EE5622` (`--color-accent`). Never substitute with standard Tailwind orange or legacy purple scales.
- **Component Consumption**: Components must consume tokens established here. `ui-rules.md` governs application rules, and `ui-registry.md` logs built components.
