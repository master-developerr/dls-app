# Code Standards

Implementation rules and conventions for the Diligence Learning Solutions (DLS) Web Platform. The AI agent must follow these standards in every session without exception to maintain architectural integrity and prevent pattern drift.

---

## Engineering Mindset

The AI agent on this project operates as a senior engineer. This means:

- **Think before implementing** — understand what is being built and why before writing a single line of code.
- **Read context files first** — verify against `architecture.md`, `project-overview.md`, `build-plan.md`, `ui-tokens.md`, and `ui-rules.md` before making design decisions.
- **Scope is sacred** — build strictly what the current feature requires. Never add unrequested features or unnecessary complexity.
- **Every feature must be testable** — verify each feature visually and functionally before moving to the next.
- **Clean over clever** — simple, readable code is always preferred over complex or opaque abstractions.
- **One thing at a time** — complete one feature fully before touching the next.
- **Failures are handled gracefully** — wrap asynchronous operations in try/catch blocks, provide clear user feedback, and prevent unhandled crashes.
- **Never assume undocumented requirements** — adhere strictly to the documented DLS PRD and context files.

---

## TypeScript

- Strict mode enabled in `tsconfig.json` — no exceptions.
- Never use `any` — use `unknown` and narrow types safely with type guards or runtime validation.
- Avoid type assertions (`as SomeType`) unless strictly necessary, and document the reason with a comment.
- Function parameters and return values must be explicitly typed where appropriate.
- Use `type` for object shapes, function signatures, and union types.
- Use `interface` only when extendability is explicitly useful (e.g. component prop extension).
- Handle asynchronous operations properly — never leave unhandled Promises floating.
- Use `const` by default; use `let` only when variable reassignment is required.

---

## Next.js Conventions

- **App Router only** — use standard App Router conventions in the `app/` directory.
- **Server Components by default** — render components on the server whenever possible to minimize client bundle size.
- **Client Components on demand** — add `"use client"` strictly when a component requires:
  - `useState` or `useReducer`
  - `useEffect` or lifecycle hooks
  - Browser APIs (e.g., `window`, `localStorage`, navigator clipboard)
  - Interactive event listeners (`onClick`, `onSubmit`)
  - Third-party client-only UI hooks
- **Server Actions in dedicated files** — place Server Actions in the `actions/` directory (e.g., `actions/leads.ts`). Never define inline Server Actions inside component files.
- **No business logic in page components** — keep `page.tsx` files lean; compose presentational UI components and connect data layer hooks/actions.
- **API Routes strictly when necessary** — use Route Handlers (`app/api/`) only when required for external webhooks or third-party integrations; prefer Convex queries/mutations and Server Actions.

---

## Convex Conventions

Convex is the primary backend-as-a-service for persistent data and real-time query/mutation logic for DLS.

- **Centralized Database Logic**: Keep schema definitions and data access functions inside the `convex/` directory.
- **Queries (`convex/*.ts`)**:
  - `courses.ts` — Read public course listings and course detail by slug.
  - `results.ts` — Read public exam result achievements.
  - `testimonials.ts` — Read public student and parent testimonials.
  - `leads.ts` — Read lead submissions for admin dashboard.
  - `stats.ts` — Read aggregate statistics for admin dashboard.
- **Mutations (`convex/*.ts`)**:
  - `leads.ts` — Create prospective lead entries (`createLead`).
  - `courses.ts` — Create, update, or remove course offerings (admin only).
  - `testimonials.ts` — Create, update, or remove testimonials (admin only).
  - `results.ts` — Create, update, or remove exam results (admin only).
- **Data Isolation & Privacy**:
  - Public visitors can trigger the `createLead` mutation to submit inquiries.
  - Public visitors must never have read access to existing `leads` data.
  - Admin queries and mutations must be protected by the application's authentication/authorization mechanism.

---

## File and Folder Naming

- **Folders**: kebab-case (`course-details`, `lead-form`, `admin-dashboard`)
- **Component Files**: PascalCase (`CourseCard.tsx`, `LeadForm.tsx`, `Navbar.tsx`)
- **Utility Files**: camelCase (`analytics.ts`, `whatsapp.ts`, `utils.ts`)
- **Type Files**: camelCase (`index.ts`)
- **API Route Files**: `route.ts` inside route folders
- **Server Action Files**: camelCase (`leads.ts`, `content.ts`)
- **Convex Files**: lowercase standard names (`schema.ts`, `leads.ts`, `courses.ts`, `testimonials.ts`, `results.ts`)
- **Single Component per File**: Export one primary component per file using named exports.
- **No Barrel Exports**: Avoid unnecessary index re-exports except within atomic UI directories if required (`components/ui/`).

---

## Component Structure

Every React component file follows this order:

```typescript
"use client"; // Include only if interactivity/hooks are required

// 1. External imports
import { useState } from "react";
import { Button } from "@/components/ui/button";

// 2. Internal imports
import { trackConversion } from "@/lib/analytics";

// 3. Type definitions
type Props = {
  courseId: string;
  courseTitle: string;
};

// 4. Component definition
export function CourseCTA({ courseId, courseTitle }: Props) {
  // State
  const [isOpen, setIsOpen] = useState(false);

  // Derived values & handlers
  const handleEnquire = () => {
    trackConversion({ type: "cta_click", label: courseTitle, page: "course-details" });
    setIsOpen(true);
  };

  // JSX output
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <Button onClick={handleEnquire}>Enquire Now for {courseTitle}</Button>
    </div>
  );
}
```

- Always use named exports (`export function ComponentName`).
- Define component `Props` types directly above the component.
- Apply styling via Tailwind CSS utility classes linked to design token variables from `ui-tokens.md`.

---

## Server Actions & Mutation Patterns

Server Actions act as thin pre-validation wrappers for client forms before persisting data to Convex.

```typescript
// actions/leads.ts
"use server";

import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

type LeadInput = {
  name: string;
  phone: string;
  course: string;
  location?: string;
};

export async function submitLead(input: LeadInput) {
  try {
    if (!input.name.trim() || !input.phone.trim() || !input.course.trim()) {
      return { success: false, error: "Name, phone, and course are required fields." };
    }

    await fetchMutation(api.leads.createLead, {
      name: input.name.trim(),
      phone: input.phone.trim(),
      course: input.course.trim(),
      location: input.location?.trim() || "Not specified",
    });

    return { success: true };
  } catch (error) {
    console.error("[actions/leads]", error);
    return { success: false, error: "Failed to submit inquiry. Please try again." };
  }
}
```

- Wrap all Server Action execution logic in `try/catch` blocks.
- Always return a standard result shape: `{ success: boolean, error?: string }`.
- Never allow unhandled exceptions to bubble to the client user interface.

---

## Error Handling

- **No Empty Catch Blocks**: Always log or gracefully handle errors.
- **Console Log Prefixes**: Include a clear file/module prefix in console logs: `[actions/leads]`, `[convex/courses]`.
- **User-Facing Feedback**: Display clear, friendly messages to visitors ("Please enter a valid phone number") rather than raw technical stack traces.
- **API Error Responses**: API route handlers must return standard JSON `{ success: false, error: string }` with appropriate status codes (`400`, `401`, `500`).

---

## Conversion Analytics

Conversion events must use the modular tracking interface in `lib/analytics.ts`. Never hardcode vendor-specific tracking calls directly inside components.

| Event Name | Trigger Condition | Payload Properties |
| ---------- | ----------------- | ------------------ |
| `form_submission` | Lead capture form successfully submitted | `course`, `source` |
| `whatsapp_click` | Visitor clicks any WhatsApp link/button | `location` |
| `cta_click` | Primary action button clicked | `label`, `page` |

```typescript
// lib/analytics.ts
export type ConversionEvent =
  | { type: "form_submission"; course: string; source: string }
  | { type: "whatsapp_click"; location: string }
  | { type: "cta_click"; label: string; page: string };

export function trackConversion(event: ConversionEvent) {
  if (typeof window === "undefined") return;
  console.log(`[Analytics Event: ${event.type}]`, event);
}
```

---

## Environment Variables

All configuration keys and environment variables are managed in `.env.local`. Never hardcode URL secrets or credentials in source code.

| Variable | Scope | Usage |
| -------- | ----- | ----- |
| `NEXT_PUBLIC_CONVEX_URL` | Public (Client + Server) | Convex client deployment URL |
| `CONVEX_DEPLOYMENT` | Server-only | Convex deployment identifier |

Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Never prefix private secrets with `NEXT_PUBLIC_`.

---

## Import Aliases

Always use the `@/` path alias for internal imports. Never use relative imports that navigate up more than one directory level.

```typescript
// Correct
import { Button } from "@/components/ui/button";
import { submitLead } from "@/actions/leads";
import { trackConversion } from "@/lib/analytics";

// Prohibited
import { Button } from "../../../components/ui/button";
```

---

## Comments

- Self-explanatory code is preferred over redundant comments.
- Use comments to explain *why* a non-obvious design decision was made, not *what* standard code does.
- Do not commit dead code or unresolved `TODO` comments.

---

## Dependencies

Keep the application lightweight and performant. Do not install new npm packages without verifying existing primitives first.

**Approved Dependencies for DLS**:
- `convex` — Backend-as-a-Service client & server SDK
- `next` — React Framework (App Router)
- `react` / `react-dom` — React 19 UI library
- `tailwindcss` — Styling & design token system
- `lucide-react` — Lightweight UI icons
- `clsx` / `tailwind-merge` — Class name utility helpers
- `zod` — Schema and input validation

**Prohibited Dependencies**:
- `@insforge/ssr`, `@browserbasehq/sdk`, `@browserbasehq/stagehand`, `openai`, `posthog-js`, `posthog-node`, `@react-pdf/renderer`, `pdf-parse` (Legacy job-search packages).

---

## Non-Negotiable Standards

1. **No Hardcoded Hex Values**: Color values must use CSS variables mapped in `ui-tokens.md` (e.g. `bg-primary`, `text-foreground`). `#EE5622` must be referenced through the design token system.
2. **Convex Source of Truth**: All persistent data (`leads`, `courses`, `testimonials`, `results`) must reside in Convex.
3. **Data Security**: Lead inquiry records are private; public users can create leads but never read lead data.
4. **Mobile-First Layouts**: Every UI component must render seamlessly on mobile, tablet, and desktop viewports.
5. **No Legacy Code**: Zero tolerance for job-matching, resume-generation, browser-agent, or employment-search code.

