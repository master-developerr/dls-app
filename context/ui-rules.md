# UI Rules

Concise implementation rules for building the Diligence Learning Solutions (DLS) Web Platform UI. These rules define visual patterns, typography, component behaviors, and constraints to ensure consistency across the public marketing website and internal admin dashboard.

---

## Font

Use Next.js font optimization (`next/font/google`) in the root layout to load the DLS typography system:
- **Serif (Headline/Display)**: An editorial serif (e.g. Playfair Display or Newsreader) for high-impact headlines and display moments (`--font-serif`).
- **Sans-Serif (UI/Body)**: A clean, modern sans-serif (e.g. Inter or Plus Jakarta Sans) for body copy, navigation, controls, labels, and admin UI (`--font-sans`).

```typescript
// app/layout.tsx
import { Playfair_Display, Inter } from "next/font/google";

const fontSerif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });
```

Apply both font variables to the `<html>` element. Never use raw un-optimized system fonts as primary typeface declarations.

---

## Layout

- **Container Bounds**: Centered content container with a max-width of `1280px` (`max-w-7xl` or custom design container).
- **Horizontal Gutters**: Responsive padding (`px-4 sm:px-6 lg:px-8`).
- **Vertical Rhythm**: Generous vertical spacing between major page sections (`py-12 md:py-20 lg:py-24`).
- **Section Formats**: DLS uses an open, editorial layout strategy with full-width background bands (warm cream `--background`, subtle borders, contrast CTA sections) and contained inner content. Do not force every section into a card container.
- **Responsive Layouts**: Layouts fluidly adapt across mobile, tablet, and desktop viewports.

---

## Navbar

- **Public Navigation**: Links for `Home`, `Programs`, `About`, `Results`, `Contact`, and a prominent primary CTA button (`Enquire Now` / `WhatsApp`).
- **Visual Styling**: Light, warm background (`var(--background)`), subtle bottom border (`var(--border)`), sticky top header (`sticky top-0 z-50`).
- **Active & Hover States**: Active menu item highlighted with primary accent (`var(--primary)`) or font weight; hover transition on links.
- **Mobile Navigation**: Collapsible drawer menu triggered by a hamburger button on smaller viewports.
- **Admin Navigation**: Internal sidebar and topbar navigation for `/admin/*` routes, clean and compact.

---

## Cards

Cards are used selectively for program offerings, student result cards, testimonials, form wrappers, and admin dashboard widgets.

```css
background-color: var(--card);
border: 1px solid var(--border);
border-radius: var(--radius-lg, 12px);
padding: 1.5rem;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
```

- **Restrained Styling**: Use thin borders, subtle surfaces, and modest corner radii. Avoid heavy drop shadows or aggressive gradients.
- **Accent Usage**: The DLS brand accent (`#EE5622`) is used intentionally for CTAs, selected tab states, badges, and focal indicators — never for entire card surface backgrounds.

---

## Typography Hierarchy

- **Display / Hero Headings**: Large editorial serif headlines (`font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground`) with optional serif italic emphasis on key words.
- **Section Headings**: High-contrast, clear section titles (`font-serif text-2xl md:text-3xl font-semibold text-foreground`).
- **Body / Primary Content**: Highly readable sans-serif text (`font-sans text-base leading-relaxed text-foreground`).
- **Secondary / Muted Text**: Labels, metadata, timestamps, and supporting context (`font-sans text-sm text-muted-foreground`).

Reference design token classes (`text-foreground`, `text-muted-foreground`) rather than hardcoding gray hex codes.

---

## Badges

Badges display metadata such as program mode (Offline, Online, Hybrid), duration (1 Year, Crash Course), exam category (NEET, JEE), or admin status.

- **Shape**: Compact pill shapes (`rounded-full px-3 py-1 text-xs font-medium`).
- **Colors**: Use design token backgrounds (`bg-secondary text-secondary-foreground` or subtle accent tints). Avoid cluttering UI with excessive badges.

---

## Buttons

### Primary Button

Used for key conversion actions (Enquire Now, Book Demo, Explore Programs, Contact DLS):

```css
background-color: #EE5622; /* Primary Burnt Orange Accent */
color: #FFFFFF;
border-radius: 8px;
padding: 10px 20px;
font-weight: 500;
transition: background-color 0.2s ease;
```

### Secondary Button

Used for supporting or alternate choices:

```css
background-color: transparent;
border: 1px solid var(--border);
color: var(--foreground);
border-radius: 8px;
padding: 10px 20px;
```

### Button Rules

- No aggressive gradients or heavy 3D drop shadows.
- Keep labels short, action-oriented, and concise.
- Ensure minimum touch target sizes (`min-h-[44px]`) on mobile devices.
- Always use the shared `<Button>` component primitive (`components/ui/button.tsx`).

---

## Form Inputs

Form controls for lead capture and contact inquiries must be clean, responsive, and accessible:

```css
background-color: var(--input-bg, #FFFFFF);
border: 1px solid var(--border);
border-radius: 8px;
padding: 10px 14px;
font-size: 14px;
color: var(--foreground);
focus: ring-2 ring-primary border-primary;
```

- **Validation & Errors**: Show inline validation error messages in red below the input. User feedback must be human-readable ("Please enter a valid phone number").
- **States**: Provide clear disabled, loading spinner, and success feedback states. Never display raw technical error tracebacks to visitors.

---

## Tables

Admin data tables (`/admin/leads`, `/admin/courses`, `/admin/content`):

- **Header Styling**: Uppercase, 12px, font-medium, muted foreground text with subtle bottom border.
- **Row Styling**: Clean white/cream rows separated by thin borders (`border-b border-border`). Subtle hover highlight (`bg-muted/50`).
- **Responsiveness**: Overflow horizontal scroll wrapper (`overflow-x-auto`) for table containers on mobile viewports.

---

## Results & Trust UI

Components presenting competitive exam ranks and student/parent testimonials:

- **Student Result Cards**: Render student name, exam (NEET, JEE, KEAM), rank achieved, and year. Emphasize rank badges clearly without aggressive decorative noise.
- **Testimonial Cards**: Display student/parent quotes, reviewer name, role context, and optional rating stars in an elegant, restrained card block.

---

## Program Cards

Cards representing educational course offerings:

- **Core Information**: Display program title, short description, duration tag, and delivery mode tag.
- **CTAs**: Provide a clear dual action: "View Details" (link to `/programs/[slug]`) and "Enquire via WhatsApp".
- **Clutter-Free**: Do not overcrowding card layouts with unconfirmed fee schedules or speculative statistics.

---

## CTA Sections

Conversion callouts across public marketing pages:

- **Hierarchy**: Single primary conversion focal point per section (Lead Form or WhatsApp CTA).
- **Accent Color**: Apply `#EE5622` deliberately for CTA buttons and highlighted accents.
- **Mobile Usability**: Ensure CTA banners stack cleanly on mobile viewports without blocking page reading flow.

---

## Empty States

Dynamic components with zero records (e.g. empty leads table, no active search results):

- Display a friendly icon, short descriptive message, and relevant action CTA when applicable.
- Never show raw database errors or blank unformatted containers as empty states.

---

## Loading & Error States

- **Loading**: Use lightweight skeleton components (`<Skeleton />`) matching content dimensions to prevent layout shifts.
- **Form Submissions**: Disable submit buttons while processing requests to prevent duplicate submissions.
- **Error Handling**: Present friendly, actionable error messages with a retry button where appropriate.

---

## Responsive Design

- **Mobile-First Approach**: Write mobile-first Tailwind utility classes, expanding layout via breakpoints (`sm:`, `md:`, `lg:`, `xl:`).
- **Touch-Friendly**: Touch targets must measure at least `44x44px`.
- **No Overflow**: Prevent horizontal page overflow (`overflow-x-hidden` on root wrappers).

---

## Animation

Keep UI motion subtle, purposeful, and lightweight:

- **Allowed**: Smooth hover state transitions (`transition-all duration-200`), subtle opacity fade-ins on scroll, and micro-interactions on button clicks.
- **Avoided**: Heavy canvas animations, complex continuous parallax loops, or blocking entrance animations.

---

## Tailwind v4 Note

This project uses Tailwind CSS v4. Design tokens are defined via `@theme` directives in `app/globals.css`.

```css
@theme {
  --color-primary: #EE5622;
  --font-serif: var(--font-serif);
  --font-sans: var(--font-sans);
}
```

Never hardcode duplicate hex values directly in component class names when CSS variable design tokens are available.

---

## Accessibility

- Maintain WCAG AA compliant text contrast against warm cream backgrounds.
- Use semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`, `<button>`).
- Provide explicit `aria-label` attributes on icon-only buttons.
- Ensure visible focus outlines (`focus-visible:ring-2`) for keyboard navigation.

---

## Do Nots

- **Never** hardcode raw hex values in component files when design tokens are available.
- **Never** use the legacy purple JobPilot palette or SaaS dashboard styling for DLS.
- **Never** force every public section into a card container; maintain editorial flow.
- **Never** display raw Convex or backend error messages to end users.
- **Never** add heavy gradients, 3D shadows, or neon colors.
- **Never** allow horizontal viewport overflow.
- **Never** duplicate shared UI components when existing primitives can be extended.

