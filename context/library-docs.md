# Library Docs

Project-specific usage patterns for third-party libraries and backend services in the Diligence Learning Solutions (DLS) Web Platform. This file covers how to use each library in this specific project — rules, patterns, and constraints specific to DLS.

Read the relevant section before implementing any feature that touches these libraries.

---

## Before Using Any Library

Before implementing any feature that uses a third-party library or service:

1. **Check AGENTS.md** at the project root — it lists installed skills for this project. Skills contain API documentation, usage patterns, and best practices specific to this codebase.

2. **Check if an MCP server is configured** for that library. If an MCP server (such as `convex` or `shadcn`) is available — use it to inspect schema, functions, or component registries before falling back to general knowledge.

3. **Read this file** for project-specific patterns that override general library knowledge.

The order of authority is:

```
MCP server (real-time docs) → Skills via AGENTS.md → This file (project rules) → General training knowledge
```

Never rely on general training knowledge alone for library APIs — APIs change frequently and training data may be outdated.

---

## Convex

**Check first:** Check `AGENTS.md` for installed Convex skills or MCP server (`convex`). Use MCP tools to inspect data schema, query specs, or run one-off functions.

Convex is the sole backend-as-a-service (BaaS) for persistent application data across the DLS platform.

### Client Provider Setup

```typescript
// lib/convex-client.ts — Client component provider wrapper
"use client";

import { ReactNode } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
```

```typescript
// app/layout.tsx — Root layout integration
import { ConvexClientProvider } from "@/lib/convex-client";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
```

---

### Database Schema Definition

`convex/schema.ts` defines the persistent data tables for DLS:

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

---

### Queries & Data Fetching

Queries represent read-only operations for public content and admin inspection.

```typescript
// convex/courses.ts — Public course queries
import { query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("courses").collect();
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const courses = await ctx.db.query("courses").collect();
    return courses.find((c) => c.title.toLowerCase().replace(/\s+/g, "-") === args.slug) ?? null;
  },
});
```

```typescript
// convex/leads.ts — Admin leads query
import { query } from "./_generated/server";

export const listLeads = query({
  handler: async (ctx) => {
    // Admin query — requires authorization check in production
    return await ctx.db.query("leads").order("desc").collect();
  },
});
```

---

### Mutations & Content Management

Mutations modify data state in the Convex database.

```typescript
// convex/leads.ts — Public lead creation mutation
import { mutation } from "./_generated/server";
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
      name: args.name.trim(),
      phone: args.phone.trim(),
      course: args.course.trim(),
      location: args.location.trim() || "Not specified",
      created_at: Date.now(),
    });
  },
});
```

```typescript
// convex/courses.ts — Admin course CRUD mutation
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    duration: v.string(),
    mode: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("courses", args);
  },
});
```

**Rules:**

- Convex is the sole source of truth for persistent application data (`leads`, `courses`, `testimonials`, `results`).
- Never introduce a secondary database or duplicate Convex functionality with redundant REST API endpoints.
- Always validate mutation arguments using Convex value validators (`v.string()`, `v.number()`).
- Public visitors can execute `createLead` to submit inquiry forms, but have zero read access to existing leads.
- Admin queries (`listLeads`) and mutations (`create`, `update`, `remove`) must be protected by the application's auth mechanism.
- Handle loading, empty, and error states gracefully in UI components when using `useQuery`.

---

## Server Actions

Server Actions in `actions/` serve as thin server-side pre-validation wrappers for client forms before executing Convex mutations.

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

export async function submitLeadAction(input: LeadInput) {
  try {
    if (!input.name?.trim() || !input.phone?.trim() || !input.course?.trim()) {
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
    return { success: false, error: "Failed to submit lead request." };
  }
}
```

**Rules:**

- Server Actions live in dedicated files inside `actions/` — never define inline Server Actions inside component files.
- Always wrap mutation calls in `try/catch` blocks and return standard `{ success: boolean, error?: string }` objects.
- Validate user inputs on the server before invoking Convex mutations.

---

## Analytics

The analytics tracking architecture decouples conversion dispatching inside `lib/analytics.ts`.

### Conversion Events

| Event Name | Trigger Context | Useful Payload Properties |
| ---------- | --------------- | ------------------------- |
| `form_submission` | Lead capture form successfully submitted | `course`, `source` (e.g. `homepage_hero`, `course_detail`) |
| `whatsapp_click` | Visitor clicks any WhatsApp link/button | `location` (e.g. `navbar`, `floating_button`, `course_cta`) |
| `cta_click` | Visitor clicks high-intent CTA button | `label`, `page` (e.g. `programs`, `about`, `results`) |

```typescript
// lib/analytics.ts
export type ConversionEvent =
  | { type: "form_submission"; course: string; source: string }
  | { type: "whatsapp_click"; location: string }
  | { type: "cta_click"; label: string; page: string };

export function trackConversion(event: ConversionEvent) {
  if (typeof window === "undefined") return;

  // Provider-neutral analytics dispatch
  console.log(`[Analytics Event: ${event.type}]`, event);
}
```

**Rules:**

- Event names must strictly match `form_submission`, `whatsapp_click`, and `cta_click`.
- Never track sensitive personal lead information (e.g. raw phone numbers or names) in analytics payloads.
- Dispatch analytics through `trackConversion` to keep UI components vendor-independent.

---

## WhatsApp Conversion Integration

Direct link helper for opening pre-filled WhatsApp conversations.

```typescript
// lib/whatsapp.ts
export function buildWhatsAppUrl(phone: string, message: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}
```

**Rules:**

- WhatsApp CTAs open standard outbound `wa.me` links in a new browser tab.
- Do not create backend API routes or chat storage for WhatsApp interactions.
- Every WhatsApp CTA click must trigger `trackConversion({ type: "whatsapp_click", location })`.
