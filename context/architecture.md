# Architecture

## Stack

| Layer                          | Tool                     | Purpose                                          |
| ------------------------------ | ------------------------ | ------------------------------------------------ |
| Framework                      | Next.js 16 (App Router)  | Full-stack React framework with Server Components|
| Backend & Database             | Convex                   | Backend-as-a-Service for persistent data & logic |
| Styling                        | Tailwind CSS             | Utility-first CSS framework and design tokens    |
| Component UI                   | Modular React Components | Custom reusable UI component architecture        |
| Analytics                      | Modular Tracking Layer   | Event tracking (Form submissions, WhatsApp, CTA) |
| Language                       | TypeScript strict        | Strict type safety across client and Convex      |

---

## Folder Structure

```
/
├── AGENTS.md
├── prd.md
├── context/
│   ├── project-overview.md
│   ├── architecture.md
│   ├── ui-tokens.md
│   ├── ui-rules.md
│   ├── ui-registry.md
│   ├── code-standards.md
│   ├── library-docs.md
│   ├── build-plan.md
│   └── progress-tracker.md
├── app/
│   ├── layout.tsx                          → Root layout with Convex client provider
│   ├── page.tsx                            → Landing page (high-conversion marketing)
│   ├── programs/
│   │   ├── page.tsx                        → Programs listing page
│   │   └── [slug]/
│   │       └── page.tsx                    → Individual course detail page
│   ├── about/
│   │   └── page.tsx                        → About DLS page
│   ├── results/
│   │   └── page.tsx                        → Student results & achievements showcase
│   ├── contact/
│   │   └── page.tsx                        → Contact & lead capture page
│   └── admin/
│       ├── page.tsx                        → Admin dashboard overview & statistics
│       ├── leads/
│       │   └── page.tsx                    → Leads management table
│       ├── courses/
│       │   └── page.tsx                    → Course management (CRUD)
│       └── content/
│           └── page.tsx                    → Testimonials & results content management
├── actions/
│   ├── leads.ts                            → Lead submission server actions
│   └── content.ts                          → Content management server action helpers
├── components/
│   ├── ui/                                 → Atomic UI primitives (buttons, inputs, cards)
│   ├── layout/
│   │   ├── Navbar.tsx                      → Public top navigation header
│   │   ├── Footer.tsx                      → Public footer section
│   │   └── CTASection.tsx                  → Reusable conversion CTA section
│   ├── homepage/
│   │   ├── Hero.tsx                        → High-impact headline with WhatsApp/Form CTA
│   │   ├── StatsProof.tsx                  → Key metrics & achievement highlights
│   │   ├── Ecosystem.tsx                   → Value proposition & methodology showcase
│   │   ├── ProgramPreview.tsx              → Featured programs summary
│   │   ├── ResultsPreview.tsx              → Top ranker highlights
│   │   └── Testimonials.tsx                → Parent & student reviews
│   ├── programs/
│   │   ├── ProgramGrid.tsx                 → Grid of available programs
│   │   └── ProgramCard.tsx                 → Program details card
│   ├── course-details/
│   │   ├── CourseHero.tsx                  → Course headline & enrollment CTA
│   │   ├── CourseOverview.tsx              → Detailed curriculum & syllabus summary
│   │   ├── CourseDetails.tsx               → Duration, eligibility, and mode info
│   │   └── CourseCTA.tsx                   → Direct WhatsApp/Lead capture trigger
│   ├── results/
│   │   ├── ResultsGrid.tsx                 → Grid of exam results
│   │   └── ResultCard.tsx                  → Individual student rank card
│   ├── contact/
│   │   ├── LeadForm.tsx                    → Interactive lead capture form
│   │   └── WhatsAppCTA.tsx                 → Direct WhatsApp click trigger
│   └── admin/
│       ├── AdminSidebar.tsx                → Admin navigation panel
│       ├── AdminHeader.tsx                 → Admin section topbar
│       ├── DashboardStats.tsx              → Lead and course statistics overview
│       ├── LeadsTable.tsx                  → Manage, filter, and inspect leads
│       ├── CourseManager.tsx               → Course CRUD interface
│       └── ContentManager.tsx              → Testimonials & results manager
├── convex/
│   ├── schema.ts                           → Convex schema definition (leads, courses, testimonials, results)
│   ├── leads.ts                            → Lead queries & creation mutations
│   ├── courses.ts                          → Public course queries & admin CRUD mutations
│   ├── testimonials.ts                     → Testimonial queries & admin mutations
│   ├── results.ts                          → Result queries & admin mutations
│   └── stats.ts                            → Admin dashboard statistics queries
├── lib/
│   ├── convex-client.ts                    → Convex React client instance wrapper
│   ├── analytics.ts                        → Modular event tracking utility (Form, WhatsApp, CTA)
│   ├── whatsapp.ts                         → WhatsApp deep link generator & tracker helper
│   └── utils.ts                            → Shared helper utilities (clsx, formatters)
└── types/
    └── index.ts                            → Global TypeScript types & interfaces
```

---

## System Boundaries

| Directory     | Owns                                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------ |
| `app/`        | Page composition, layout definitions, and routing. No direct DB business logic inside page components.|
| `components/` | Presentational UI components. Pure render logic with props/hooks. No direct backend persistence code. |
| `actions/`    | Server Actions for UI-triggered mutations (e.g. Lead submission, admin pre-validation logic).          |
| `convex/`     | Database schema, reactive queries, persistent mutations, and backend logic. Source of truth for data.|
| `lib/`        | Shared utilities, WhatsApp helper functions, and modular conversion tracking logic.                    |
| `types/`      | Shared TypeScript domain models and interface contracts.                                               |

---

## Data Flow

### Lead Capture Flow

```
Visitor fills form on Landing / Program / Contact page
        ↓
Server-side validation in actions/leads.ts
        ↓
Convex mutation (convex/leads.ts:createLead)
        ↓
Lead stored in Convex leads table
        ↓
Success confirmation state + Analytics event tracked
```

### WhatsApp Conversion Flow

```
Visitor clicks CTA / WhatsApp button
        ↓
lib/analytics.ts tracks whatsapp_click event
        ↓
lib/whatsapp.ts opens WhatsApp URL with pre-filled message
        ↓
WhatsApp client opens on visitor device
```

### Course Discovery Flow

```
Visitor navigates to /programs
        ↓
Convex query fetches programs (convex/courses.ts:listCourses)
        ↓
Visitor selects a program → Navigates to /programs/[slug]
        ↓
Convex query fetches course details (convex/courses.ts:getCourseBySlug)
        ↓
Visitor interacts with Lead Form or WhatsApp CTA → Conversion
```

### Admin Lead Flow

```
Admin accesses /admin/leads
        ↓
Convex query fetches all lead records (convex/leads.ts:listLeads)
        ↓
Admin views, filters, or manages lead entries in LeadsTable component
        ↓
Dashboard stats dynamically update (convex/stats.ts)
```

### Admin Course Flow

```
Admin navigates to /admin/courses
        ↓
Admin submits Create / Update / Delete form in CourseManager
        ↓
Convex mutation executes (convex/courses.ts)
        ↓
Convex database updates persistent courses table
        ↓
Public program routes (/programs & /programs/[slug]) immediately render updated data
```

### Admin Content Flow

```
Admin navigates to /admin/content
        ↓
Admin manages testimonials or student results in ContentManager
        ↓
Convex mutation executes (convex/testimonials.ts or convex/results.ts)
        ↓
Convex updates content tables
        ↓
Public marketing pages dynamically display updated testimonials and results
```

---

## Database Schema

The Convex schema (`convex/schema.ts`) defines four primary data entities:

### `leads`

| Field      | Type         | Notes                                                |
| ---------- | ------------ | ---------------------------------------------------- |
| name       | `v.string()` | Student or parent full name                          |
| phone      | `v.string()` | Contact phone number                                 |
| course     | `v.string()` | Program / course of interest                         |
| location   | `v.string()` | City / Region (e.g. Kerala, UAE)                     |
| created_at | `v.number()` | Lead submission timestamp (`Date.now()`)             |

### `courses`

| Field       | Type         | Notes                                                |
| ----------- | ------------ | ---------------------------------------------------- |
| title       | `v.string()` | Course title (e.g., NEET Repeaters, Class 10 Tuition)|
| description | `v.string()` | Detailed course overview and curriculum summary      |
| duration    | `v.string()` | Duration (e.g., 1 Year, 2 Years, Crash Course)       |
| mode        | `v.string()` | Delivery mode (e.g., Offline, Online, Hybrid)        |

### `testimonials`

| Field   | Type         | Notes                                                |
| ------- | ------------ | ---------------------------------------------------- |
| name    | `v.string()` | Name of student or parent                            |
| content | `v.string()` | Testimonial text / review                            |
| role    | `v.string()` | Context/role (e.g., NEET 2025 Ranker, Class 12 Parent)|

### `results`

| Field        | Type         | Notes                                                |
| ------------ | ------------ | ---------------------------------------------------- |
| student_name | `v.string()` | Name of student achiever                             |
| exam         | `v.string()` | Competitive exam (e.g. NEET, JEE Main, KEAM)         |
| rank         | `v.string()` | Rank or score achieved (e.g., AIR 142, 695/720)      |
| year         | `v.string()` | Year of achievement (e.g., 2024, 2025)               |

---

## Convex Architecture

Convex serves as the unified backend layer for persistent data, queries, and mutations.

### `convex/schema.ts` Pattern

```typescript
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leads: defineTable({
    name: v.string(),
    phone: v.string(),
    course: v.string(),
    location: v.string(),
    created_at: v.number(),
  }),
  courses: defineTable({
    title: v.string(),
    description: v.string(),
    duration: v.string(),
    mode: v.string(),
  }),
  testimonials: defineTable({
    name: v.string(),
    content: v.string(),
    role: v.string(),
  }),
  results: defineTable({
    student_name: v.string(),
    exam: v.string(),
    rank: v.string(),
    year: v.string(),
  }),
});
```

### Queries & Mutations Separation

- **Queries (`convex/*.ts`)**:
  - `courses.ts:list` — Public query for active programs
  - `courses.ts:getBySlug` — Public query for specific course details
  - `testimonials.ts:list` — Public query for featured testimonials
  - `results.ts:list` — Public query for exam results
  - `leads.ts:list` — Admin-only query for viewing captured leads
  - `stats.ts:getOverview` — Admin-only query for dashboard metrics

- **Mutations (`convex/*.ts`)**:
  - `leads.ts:createLead` — Public mutation for saving prospective leads
  - `courses.ts:create`, `update`, `remove` — Admin mutations for managing courses
  - `testimonials.ts:save`, `remove` — Admin mutations for managing testimonials
  - `results.ts:save`, `remove` — Admin mutations for managing result showcase entries

### `convex/leads.ts` Pattern

```typescript
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createLead = mutation({
  args: {
    name: v.string(),
    phone: v.string(),
    course: v.string(),
    location: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("leads", {
      ...args,
      created_at: Date.now(),
    });
  },
});

export const listLeads = query({
  handler: async (ctx) => {
    return await ctx.db.query("leads").order("desc").collect();
  },
});
```

---

## Authentication & Access Control

- **Public Marketing Access**: All marketing pages (`/`, `/programs`, `/programs/[slug]`, `/about`, `/results`, `/contact`) are publicly accessible without authentication.
- **Lead Creation**: Public visitors can trigger the `createLead` mutation to submit inquiries, but have zero read access to existing leads.
- **Admin Protected Routes**: `/admin/*` routes require authenticated admin access.
- **Admin Data Isolation**: Admin queries (`listLeads`, `stats:getOverview`) and administrative mutations (course/content CRUD) require authorized admin access via the project's selected Convex-compatible auth integration.

---

## Storage Architecture

- The DLS platform does not require document or file storage (e.g. resume uploads or PDF generation).
- Media assets and photography are hosted via standard static optimization assets in `public/` or external CDN references. No persistent storage buckets are required.

---

## API & Mutation Patterns

Prefer Convex real-time queries/mutations and Next.js Server Actions over custom REST API endpoints.

```typescript
// actions/leads.ts
"use server";

import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

export async function submitLeadAction(formData: {
  name: string;
  phone: string;
  course: string;
  location: string;
}) {
  if (!formData.name || !formData.phone || !formData.course) {
    return { success: false, error: "Name, phone, and course are required." };
  }

  try {
    await fetchMutation(api.leads.createLead, {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      course: formData.course.trim(),
      location: formData.location.trim() || "Not specified",
    });
    return { success: true };
  } catch (error) {
    console.error("Lead submission error:", error);
    return { success: false, error: "Submission failed." };
  }
}
```

---

## Analytics & Conversion Tracking

The architecture isolates analytics dispatch into a modular utility (`lib/analytics.ts`) to track primary conversion events without coupling UI code to a specific provider.

### Core Conversion Events

1. `form_submission`: Triggered upon successful lead capture form completion.
2. `whatsapp_click`: Triggered when a visitor clicks any WhatsApp CTA.
3. `cta_click`: Triggered when primary conversion buttons are clicked across pages.

```typescript
// lib/analytics.ts
export type ConversionEvent =
  | { type: "form_submission"; course: string; source: string }
  | { type: "whatsapp_click"; location: string }
  | { type: "cta_click"; label: string; page: string };

export function trackConversion(event: ConversionEvent) {
  if (typeof window === "undefined") return;

  // Dispatch to modular analytics target
  console.log(`[Analytics Event: ${event.type}]`, event);
}
```

---

## UI & Design Architecture

The UI architecture bridges component design with design tokens defined in `context/ui-tokens.md` and rules in `context/ui-rules.md`.

- **Primary Accent**: `#EE5622` (Burnt Orange) for conversion CTAs.
- **Aesthetic**: Premium, modern, clean editorial aesthetic with generous whitespace, thin borders, clear visual hierarchy, and restrained shadows.
- **Design Tokens**: All layout components consume CSS variables mapped to design tokens rather than inline hex codes.

---

## Component Architecture

Components are organized by domain and kept modular:

| Component Category | Key Components |
| ------------------ | -------------- |
| Layout             | `Navbar`, `Footer`, `CTASection` |
| Homepage           | `Hero`, `StatsProof`, `Ecosystem`, `ProgramPreview`, `ResultsPreview`, `Testimonials`, `FinalCTA` |
| Programs           | `ProgramGrid`, `ProgramCard` |
| Course Detail      | `CourseHero`, `CourseOverview`, `CourseDetails`, `CourseCTA` |
| Results            | `ResultsGrid`, `ResultCard` |
| Contact            | `LeadForm`, `WhatsAppCTA` |
| Admin              | `AdminSidebar`, `AdminHeader`, `DashboardStats`, `LeadsTable`, `CourseManager`, `ContentManager` |

---

## Responsiveness & Performance

- **Mobile-First Layouts**: All pages are designed mobile-first and expand fluidly to tablet and desktop viewports via responsive Tailwind breakpoints.
- **Next.js Image Optimization**: Use `next/image` for responsive sizes, fast load times, and format optimization.
- **Client Boundary Scoping**: Keep `'use client'` strictly at the interactive leaf node level to maximize React Server Component performance.

---

## Animation Strategy

- **Allowed**: Subtle scroll fade-ins, gentle button hover transitions, and clean micro-interactions.
- **Avoided**: Heavy canvas animations, complex parallax scrolling, or main-thread blocking effects.
- **Encapsulation**: Component transitions are modularized within isolated UI wrappers.

---

## Maintainability

- **Clear Separation**: Presentational UI components (`components/`), Server Actions (`actions/`), and Convex queries/mutations (`convex/`) strictly maintain clear boundaries.
- **Strict Typing**: Shared TypeScript interfaces in `types/` ensure data consistency across Convex schema and UI props.
- **No Over-Engineering**: The platform avoids unnecessary microservices, agent queues, or complex state stores.

---

## Invariants

Non-negotiable architectural rules:

1. Components must not contain direct database queries or raw persistence logic.
2. Convex is the sole source of truth for persistent application data (`leads`, `courses`, `testimonials`, `results`).
3. Admin routes (`/admin/*`) and administrative Convex queries/mutations must be restricted to authenticated admin users.
4. Public users can create leads via `createLead`, but cannot read, query, or export any lead data.
5. All lead form submissions and WhatsApp CTA clicks must trigger the modular conversion tracking layer.
6. Design tokens must be used for colors and typography; `#EE5622` is the primary brand accent and must be referenced via design tokens rather than hardcoded hex values in UI components.
7. Zero tolerance for job-search, resume-parsing, company-research, browser-agent, or employment-platform code and dependencies.
8. Public course offerings, testimonials, and results must be dynamically backed by Convex data models where content management is enabled.
9. Website layouts must strictly follow mobile-first responsive design principles across all viewports.
10. UI animations must remain subtle and lightweight to ensure fast page loads and high conversion rates.

