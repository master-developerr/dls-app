# Memory — DLS Homepage Redesign & Dedicated DNST Campaign Portal

Last updated: 2026-09-05 13:25

## What was built

- **Dedicated DNST Campaign Page (`/dnst`)**:
  - `src/app/dnst/page.tsx`: Standalone campaign portal for the DLS National Scholarship Test. Begins immediately with the approved DNST first-viewport hero, followed in sequence by Why DNST, 5 Core Differentiators, 4-Tier Academic Benchmarking, Syllabus Teaser, and Registration CTA.
- **Modular DNST Component Layer (`src/components/dnst/`)**:
  - `DNSTHero.tsx`: First-view hero with eyebrow, editorial serif heading (*"Discover Talent. Reward Excellence. Shape the Future."*), subtitle, scholarship highlight (*₹25 Lakhs*, *Classes I–XII*), and dual CTAs (*"Register for DNST"* and *"View Syllabus"*).
  - `DNSTWhy.tsx`: Two-column editorial section detailing what students discover and eligible rewards for top performers.
  - `DNSTDifferentiators.tsx`: 5 numbered editorial rows (`01` to `05`) detailing core institutional standards.
  - `DNSTBenchmarking.tsx`: 4-tier horizontal benchmark progression bar (*School → District → State → National*).
  - `DNSTTeasers.tsx`: Open editorial teasers: `DNSTSyllabusTeaser` (pointing to `/dnst/syllabus`) and `DNSTRegistrationCTA` (pointing to `/dnst/register` and WhatsApp).
- **Dedicated Sub-Routes**:
  - `src/app/dnst/syllabus/page.tsx`: Class-wise syllabus portal for Classes 1 to 12 with interactive tab selector and official placeholders.
  - `src/app/dnst/register/page.tsx`: Registration form with lead capture (Name, Phone, Class, Location) and instant WhatsApp enquiry.
- **DLS Institutional Homepage (`/`)**:
  - `src/app/page.tsx`: Completely cleaned of heavy DNST sections. Restored the authentic DLS institutional presence:
    - Single slim announcement bar linking to `/dnst`
    - DLS Brand Hero (*"Diligence Learning."*, *Kerala · Tamil Nadu · UAE*, *View Programs*, *Book Free Demo*)
    - Framed Classroom Photography with caption
    - 4-Column Verified Stats Ticker (*2K+ Students, 150+ Centers, 50+ Districts, 15 Years*)
    - Educational Philosophy (*"Combining traditional coaching with modern digital learning for consistent outcomes."*)
    - Regional Network (*"One System. Multiple Regions."* — Kerala, Tamil Nadu, UAE)
    - System Built for Consistency (*5 core pillars*)
    - Programs & Courses (*NEET, JEE, KEAM, Foundation list with arrow links*)
    - International Reach (*Dubai & Abu Dhabi callout*)
    - Final Conversion CTA (*"Start your journey."*)
- **Navigation (`src/components/layout/Navbar.tsx`)**:
  - Updated `DNST 2025` navigation link on both desktop and mobile drawer to navigate directly to `/dnst`.
  - Rectangular button styling (`rounded-none`, `#EE5622` accent) and solid warm backgrounds preserved.

## Decisions made

- **Clean Architecture Decoupling**: Separated the general DLS institutional ecosystem (`/`) from the high-conversion DNST scholarship campaign (`/dnst`), linked seamlessly via a single top announcement banner on the homepage and the main navigation header.
- **Visual Stability**: Replaced negative margin motion animations with solid HTML/motion thresholds to eliminate layout shifts, flashing, or invisible text states.
- **Strict Brand Token Adherence**: Restrained Burnt Orange (`#EE5622`) strictly to primary CTAs, active states, and small labels against a warm cream/ivory foundation (`#F7F2E8` / `#FFFDF8`).
- **No Card Wall**: Replaced boxy floating cards with open editorial dividers, asymmetric grids, and numbered horizontal rows.

## Problems solved

- **Text Washout & Accent Conflict**: Resolved an issue where `--accent` had previously fallen back to a pale grey-beige `#EAE1D4`. Fixed by binding `--color-accent: #EE5622` directly in Tailwind CSS v4 `@theme`.
- **First Viewport Scroll Cutoff**: Reduced excessive vertical padding and oversized display typography so the entire hero composition, scholarship highlight, and both action buttons are 100% visible above the fold on desktop and mobile without scrolling.
- **Mobile Horizontal Overflow**: Ensured container padding, image wrappers, and ticker grids remain strictly within 390px viewport bounds (`bodyScrollWidth = 390px`).

## Current state

- Homepage (`/`), Dedicated DNST Page (`/dnst`), Syllabus (`/dnst/syllabus`), and Registration (`/dnst/register`) are fully functional, responsive, type-checked, and visually verified.
- Build status: `npx tsc --noEmit` passes with 0 errors.
- Git repository has all changes ready to be staged and pushed.

## Next session starts with

- Proceed with **Phase 2 — Programs**:
  - Build `app/programs/page.tsx` full UI (program catalog with filters for Grade/Exam: NEET, JEE, KEAM, Foundation).
  - Build `app/programs/[slug]/page.tsx` course detail page.
  - Connect programs with Convex database schema.

## Open questions

- None.
