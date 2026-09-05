# UI Registry

Living document for the Diligence Learning Solutions (DLS) Web Platform. Updated after every component is built across the public marketing website and internal admin dashboard. Read this before building any new component — match existing patterns exactly before inventing new ones.

---

## How to Use

Before building any UI component:

1. Check if a similar component already exists here
2. If yes — match its exact classes and design token patterns
3. If no — build it following `ui-rules.md` and `ui-tokens.md`, then register it here

After building any reusable UI component — update this file with the component name, file path, and exact Tailwind CSS classes used.

---

## Components

### `DNSTSection`
- **Path**: [`src/components/dnst/DNSTSection.tsx`](file:///d:/everything%20for%20coding/DLS/dls-app/src/components/dnst/DNSTSection.tsx)
- **Description**: Reusable promotional card banner component for the DLS National Scholarship Test featuring tagline, ₹25 Lakhs scholarship highlight, Classes I–XII badge, 5 key differentiators preview, and conversion CTAs.
- **Tokens Used**: `bg-surface-secondary`, `bg-surface`, `border-border`, `text-text-primary`, `text-accent`, `bg-accent`, `bg-accent-light`.

### `DNSTSyllabus`
- **Path**: [`src/components/dnst/DNSTSyllabus.tsx`](file:///d:/everything%20for%20coding/DLS/dls-app/src/components/dnst/DNSTSyllabus.tsx)
- **Description**: Reusable class-wise syllabus tab/selector component for Classes I through XII with placeholder displays for official curriculum topics.
- **Tokens Used**: `bg-surface`, `bg-background`, `border-border`, `text-text-primary`, `bg-accent`, `text-accent-foreground`.

### `DNSTRegistrationForm`
- **Path**: [`src/components/dnst/DNSTRegistrationForm.tsx`](file:///d:/everything%20for%20coding/DLS/dls-app/src/components/dnst/DNSTRegistrationForm.tsx)
- **Description**: Direct interactive registration and lead capture form for the DLS National Scholarship Test with Name, Phone, Class (1 to 12), Location fields, and instant WhatsApp inquiry action.
- **Tokens Used**: `bg-surface`, `bg-background`, `border-border`, `text-text-primary`, `bg-accent`, `text-accent-foreground`, `bg-whatsapp`.

### `Navbar`
- **Path**: [`src/components/layout/Navbar.tsx`](file:///d:/everything%20for%20coding/DLS/dls-app/src/components/layout/Navbar.tsx)
- **Description**: Sticky top navigation with DLS brand wordmark, desktop navigation links, crisp rectangular primary CTA (`rounded-none`, `bg-accent`), secondary consultation button, and responsive mobile drawer.
- **Tokens Used**: `bg-background`, `border-border`, `text-text-primary`, `text-text-secondary`, `text-accent`, `bg-accent`, `bg-surface`.

### `DNSTHero`
- **Path**: [`src/components/dnst/DNSTHero.tsx`](file:///d:/everything%20for%20coding/DLS/dls-app/src/components/dnst/DNSTHero.tsx)
- **Description**: Dedicated first-viewport hero for the DNST portal with restrained eyebrow, editorial serif headline, scholarship highlight, and dual CTAs.
- **Tokens Used**: `bg-background`, `border-border`, `text-text-primary`, `text-accent`, `bg-accent`, `text-accent-foreground`.

### `DNSTWhy`
- **Path**: [`src/components/dnst/DNSTWhy.tsx`](file:///d:/everything%20for%20coding/DLS/dls-app/src/components/dnst/DNSTWhy.tsx)
- **Description**: Two-column editorial section detailing what students discover and eligible honors for top performers.
- **Tokens Used**: `bg-background`, `border-border`, `text-text-primary`, `text-text-secondary`, `text-accent`.

### `DNSTDifferentiators`
- **Path**: [`src/components/dnst/DNSTDifferentiators.tsx`](file:///d:/everything%20for%20coding/DLS/dls-app/src/components/dnst/DNSTDifferentiators.tsx)
- **Description**: 5 numbered editorial rows with monospace numbers detailing the core DNST institutional standards.
- **Tokens Used**: `bg-surface-secondary`, `border-border`, `text-text-primary`, `text-text-secondary`, `text-accent`.

### `DNSTBenchmarking`
- **Path**: [`src/components/dnst/DNSTBenchmarking.tsx`](file:///d:/everything%20for%20coding/DLS/dls-app/src/components/dnst/DNSTBenchmarking.tsx)
- **Description**: 4-tier horizontal progression bar from School to National level with stage numbers and directional arrows.
- **Tokens Used**: `bg-background`, `bg-surface`, `border-border`, `text-text-primary`, `text-text-secondary`, `text-accent`.

### `DNSTTeasers`
- **Path**: [`src/components/dnst/DNSTTeasers.tsx`](file:///d:/everything%20for%20coding/DLS/dls-app/src/components/dnst/DNSTTeasers.tsx)
- **Description**: Reusable open editorial teasers `DNSTSyllabusTeaser` (linking to `/dnst/syllabus`) and `DNSTRegistrationCTA` (linking to `/dnst/register`).
- **Tokens Used**: `bg-surface-secondary`, `bg-background`, `border-border`, `text-text-primary`, `text-accent`, `bg-accent`, `text-whatsapp`.


