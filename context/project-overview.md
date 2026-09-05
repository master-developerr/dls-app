# Project Overview

## About the Project

Diligence Learning Solutions (DLS) is an educational platform offering entrance coaching (NEET, JEE, KEAM, CUET), school tuition, foundation programs for Class 8–12 students, UAE/overseas learners, and the **DLS National Scholarship Test (DNST)** — India's Next-Generation Student Assessment Platform.

The DLS Web Platform consists of two major parts:
- **Public High-Conversion Marketing Website**: Designed to showcase DLS programs, present the DNST National Scholarship Test, establish trust through student results and testimonials, and convert prospective students and parents into leads via WhatsApp clicks and demo/scholarship booking forms.
- **Internal Admin Dashboard**: Enables administrative staff to view and manage captured leads (including DNST registrations), update course offerings, and manage student results and testimonials across the marketing website.

The platform is powered by Next.js 16 (App Router), TypeScript, Convex (BaaS), and Tailwind CSS, adhering to an editorial visual design featuring warm cream/ivory backgrounds (`#F7F2E8`), deep charcoal typography (`#24211D`), and a signature burnt-orange accent (`#EE5622`).

---

## The Problem It Solves

Finding the right entrance coaching, academic tuition, or national benchmarking assessment can be overwhelming for students and parents due to fragmented course information, unverified achievement claims, and high-friction inquiry processes.

The DLS Web Platform solves this by:
- Presenting clear, structured program overviews (curriculum, duration, delivery mode) for NEET, JEE, KEAM, CUET, and school tuition.
- Featuring the **DLS National Scholarship Test (DNST)** — a national scholarship examination providing ₹25 Lakhs in scholarships, academic benchmarking (School, District, State, National), learning insights, and class-wise syllabus outlines for Classes I through XII.
- Showcasing verified student exam ranks and parent testimonials to build institutional trust.
- Eliminating friction in the enrollment process through direct WhatsApp CTAs and simple lead capture forms.
- Providing internal admissions staff with a centralized admin interface to manage inquiry leads and update website content in real time via Convex.

---

## Pages

```text
/                  → Homepage (high-conversion marketing landing page with DNST feature)
/programs          → Programs listing page
/programs/[slug]   → Individual course/program detail page
/dnst              → DLS National Scholarship Test (DNST) dedicated page & syllabus
/about             → About DLS, teaching philosophy & ecosystem
/results           → Results and student achievement showcase
/contact           → Contact page & lead capture form
/admin             → Admin dashboard overview & metrics
/admin/leads       → Leads management table (includes course & DNST leads)
/admin/courses     → Course management (CRUD)
/admin/content     → Testimonials & results content management
```

---

## Navigation

- **Public Top Navbar**: DLS logo, navigation links (`Programs`, `DNST`, `About`, `Results`, `Contact`), and persistent primary CTA button (`Enquire Now` / `WhatsApp`). Responsive mobile drawer navigation.
- **Admin Navigation**: Internal sidebar and topbar navigation for `/admin/*` routes providing access to Dashboard Overview, Leads Management, Course Management, and Content Management.

---

## Core User Flow

### Public Visitor Flow

1. **Landing Page Visit & Discovery**: Visitor explores high-impact hero headline, DNST announcement banner ("Discover Talent. Reward Excellence. Shape the Future."), key enrollment metrics, ecosystem pillars, program summaries, result highlights, and parent testimonials.
2. **DNST Discovery Path**: Visitor navigates to `/dnst` to review the ₹25 Lakhs scholarship opportunity, eligibility for Classes I–XII, 5 core differentiators (Scholarship, Performance Analysis, Academic Benchmarking, Learning Insights, School Recognition), and class-wise syllabus placeholders.
3. **Program Discovery Path**: Visitor browses `/programs` or selects a specific program card to view details at `/programs/[slug]`.
4. **Trust & Evaluation**: Visitor inspects verified competitive exam ranks on `/results` and institutional background on `/about`.
5. **Lead Conversion**: Visitor submits the interactive Lead Capture Form (for course demo or DNST registration) or clicks a direct WhatsApp CTA button.
6. **Confirmation & Tracking**: Conversion event (`form_submission` or `whatsapp_click`) is tracked; form data is stored in the Convex `leads` table; success confirmation is displayed.

### Admin Flow

1. **Dashboard Access**: Admin accesses protected `/admin` route to view metric cards (total leads, active courses, content totals) and recent lead activity.
2. **Leads Inspection**: Admin navigates to `/admin/leads` to view, search, filter, and export prospective lead entries (including course inquiries and DNST registrants).
3. **Course Management**: Admin navigates to `/admin/courses` to create, edit, or delete course offerings.
4. **Content Management**: Admin navigates to `/admin/content` to publish or update testimonials and student exam results, dynamically updating public website pages via Convex.

---

## DLS National Scholarship Test (DNST) Overview

**Tagline**: *"Discover Talent. Reward Excellence. Shape the Future."*  
**Positioning**: *"India's Next-Generation Student Assessment Platform"*

### Key Highlights & Differentiators:
- **Scholarship Pool**: Scholarships Worth ₹25 Lakhs to recognize and reward exceptional talent.
- **Classes Covered**: Open for students from **Classes I to XII**.
- **Assessment Philosophy**: Combines a nationally designed scholarship examination with detailed performance analysis to help students, parents, and schools make informed academic decisions.
- **Student Value**: Helps students discover how they think, reason, solve problems, and perform academically. Every participant receives valuable performance insights. Top performers become eligible for scholarships, awards, certificates, medals, and national recognition.
- **5 Core Differentiators**:
  1. *Scholarship Opportunities Worth ₹25 Lakhs*: Direct financial and academic recognition for top performers.
  2. *Comprehensive Performance Analysis*: Every student receives a detailed scorecard with performance insights.
  3. *Academic Benchmarking*: Compare student performance at School, District, State, and National levels.
  4. *Learning Insights*: Structured reports highlighting academic strengths and target areas for improvement.
  5. *School Excellence Recognition*: Participating schools receive institutional performance reports, benchmarking analytics, and national recognition.
- **Class-Wise Syllabus**: Structured syllabus section covering Classes I through XII with clear placeholder copy (*"Syllabus details will be available soon."*) ready to accept future subject outlines.

---

## Data Architecture

### Persistent Data (Convex BaaS)

- `leads`: Stores lead submissions (`name`, `phone`, `course` [e.g. course title or "DNST"], `location`, `created_at`).
- `courses`: Stores program offerings (`title`, `description`, `duration`, `mode`).
- `testimonials`: Stores student/parent reviews (`name`, `content`, `role`).
- `results`: Stores student achievements (`student_name`, `exam`, `rank`, `year`).

### Data Isolation & Privacy

- Public visitors can write to `leads` (`createLead`), but cannot read or query lead records.
- Admin queries and mutations are isolated and protected against unauthorized public access.

---

## Features In Scope

- Conversion-focused landing page with hero, statistics, DNST promotional banner, ecosystem overview, and CTAs.
- Dedicated DNST page (`/dnst`) detailing scholarships (₹25L), Classes I–XII eligibility, 5 differentiators, benchmarking levels, and class-wise syllabus section.
- Class-wise syllabus section for Classes I to XII with clean placeholder copy ("Syllabus details will be available soon.").
- Programs listing page (`/programs`) with category filtering (NEET, JEE, KEAM, CUET, Tuition, Foundation).
- Dynamic course detail page (`/programs/[slug]`) with course overview, syllabus, duration, mode, and lead form.
- Results showcase page (`/results`) with student exam ranks and achievements.
- Testimonials showcase integrated across marketing pages.
- Reusable Lead Capture Form with client/server validation, loading/success states, supporting course and DNST registrations in Convex `leads`.
- WhatsApp deep-link CTAs with context-specific pre-filled messages across navbar, hero, DNST page, course detail, and contact pages.
- About page (`/about`) presenting DLS mission, teaching methodology, and institutional credibility.
- Contact page (`/contact`) with full lead form, contact details, and admissions FAQs.
- Admin Dashboard (`/admin`) with aggregate lead, course, and content metrics.
- Leads Management table (`/admin/leads`) with search and filter capabilities across course and DNST inquiries.
- Course Management interface (`/admin/courses`) supporting full CRUD operations.
- Content Management interface (`/admin/content`) supporting testimonial and result CRUD operations.
- Conversion event tracking for `form_submission`, `whatsapp_click`, and `cta_click`.
- Mobile-first responsive layout optimized for mobile, tablet, and desktop viewports.

---

## Features Out of Scope

- Online test-taking engine or interactive examination portal.
- Question bank or automated question generation system.
- Exam timer, countdown clocks, or proctoring/invigilation software.
- Automated result calculation or scholarship allocation engine.
- Student login, portal accounts, or individual scorecard generator engine.
- Payment gateway integration or fee processing for DNST or courses.
- Exam venue scheduling, admit card generation, or seat allocation system.
- Automated certificate or medal distribution management portal.
- School administration portal or institutional login system.
- Third-party CRM synchronization integrations.
- Native mobile application builds (web responsive only).

---

## Conversion Analytics Events

```typescript
form_submission; // { course, source }  e.g., course: "DNST"
whatsapp_click; // { location }        e.g., location: "dnst_page"
cta_click; // { label, page }         e.g., label: "Register for DNST", page: "/dnst"
```

---

## Target User

### Students & Parents (Public)

- Class 1–12 students seeking national academic benchmarking, scholarship opportunities (DNST), entrance coaching (NEET/JEE/KEAM/CUET), and school tuition.
- Parents evaluating academic results, scholarship eligibility, institution trust, and program details to select coaching for their children.
- UAE and overseas students seeking flexible remote entrance coaching and assessment.
- Participating schools seeking institutional performance benchmarking and academic recognition.

### Admissions & Administrative Staff (Admin)

- DLS internal administrative staff managing student inquiry leads (course & DNST) and updating marketing content.

---

## Success Criteria

- Visitors immediately understand what DNST is upon landing on `/` or visiting `/dnst`.
- The ₹25 Lakhs scholarship opportunity and Classes I–XII eligibility are clearly communicated.
- Performance analysis value, academic benchmarking (School/District/State/National), learning insights, and school recognition are clearly explained.
- Users can easily navigate the class-wise syllabus section for Classes I to XII.
- High lead conversion driven by persistent WhatsApp CTAs and simple lead capture forms for both courses and DNST.
- Fast page load times and mobile-first responsive layout across all viewports.
- Public course offerings, testimonials, and results load dynamically from Convex.
- Lead capture submissions persist accurately to Convex `leads` table without exposing existing leads to public users.
- Admin dashboard enables swift CRUD management of courses, testimonials, and results.
- Conversion events (`form_submission`, `whatsapp_click`, `cta_click`) fire reliably across all touchpoints.
- DLS visual direction (warm cream background, deep charcoal text, `#EE5622` burnt orange accent, editorial serif typography) is consistently applied.
