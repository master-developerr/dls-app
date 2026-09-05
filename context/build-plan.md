# Build Plan

## Core Principle

Full page UI built with mock data first — verified visually before any logic is written. Then functionality is built and wired to the UI step by step. Every feature must be visible and testable before moving to the next. No invisible backend phases without first having a visible UI for the corresponding feature.

Priorities for DLS Web Platform:
1. Visual quality
2. User flow
3. Conversion
4. Functionality
5. Maintainability

Every public-facing phase is designed around clear programme discovery, trust building, lead conversion, and major academic offerings like the DLS National Scholarship Test (DNST) without over-engineering.

---

## Phase 1 — Foundation

### 01 Homepage — Full UI

Build the complete DLS homepage UI with mock content first. Visual direction follows warm cream/ivory backgrounds, deep charcoal typography, burnt-orange accent (`#EE5622`), editorial serif headlines with italic serif emphasis, generous whitespace, thin borders, restrained shadows, and real educational imagery.

**UI:**

- Navbar — DLS logo, navigation links (Programs, DNST 2025 pointing to `/dnst`, About, Contact), primary CTA button
- Single subtle DNST announcement bar — slim top eyebrow announcing DNST 2025 for Classes I–XII linking to `/dnst`
- DLS Institutional Hero section — high-impact headline ("Diligence Learning."), regional indicator (Kerala · Tamil Nadu · UAE), supporting copy, Primary CTA ("View Programs") and "Book Free Demo" outline button
- Classroom photography — wide framed authentic classroom photo with physics session caption
- Verified statistics ticker — 4-column divided metrics (Students Trained 2K+, Top Ranks 150+, Senior Educators 50+, Years 15)
- Educational philosophy — "Combining traditional coaching with modern digital learning for consistent outcomes."
- Regional network — "One System. Multiple Regions." (Kerala, Tamil Nadu, UAE)
- Consistency pillars — "A system built for consistency." (5 institutional features)
- Programmes & courses preview — clean divided list (NEET, JEE, KEAM, Foundation) with badges, arrows, and catalog link
- International presence — Dubai & Abu Dhabi hybrid coaching callout
- Bottom conversion CTA section — "Start your journey." with "Book Free Demo" and "Explore Programs →"
- Footer — brand info, program links, DNST link, contact information, copyright

**Logic:**

- Primary CTA routes to `/programs` or `/contact`
- Top announcement link routes directly to dedicated `/dnst` campaign portal
- Navigation links route cleanly to public pages using Next.js routing
- No authentication required for public homepage browsing

---

### 02 Public Navigation + Shared Layout

Build and finalize the shared public website shell and responsive layout.

**UI:**

- Top Navbar with logo, desktop menu items (including DNST link), and persistent CTA
- Mobile drawer / burger menu navigation for mobile viewports
- Shared Footer with navigation columns, contact details, social links, and DNST link
- Consistent layout container with max-width bounds and responsive padding
- Active link visual indicators

**Logic:**

- Next.js App Router layout composition in `app/layout.tsx`
- Active route detection (`usePathname`) for active menu link styling
- Clean open/close toggle state for mobile drawer menu
- Persistent accessible CTA across viewports without obscuring page content

---

### 03 Design System + Responsive Foundation

Establish the reusable DLS visual token foundation and UI primitives before building additional pages.

**UI:**

- Color tokens: Primary accent (`#EE5622`), warm cream/ivory background (`--color-background`), deep charcoal text (`--color-text-primary`), muted neutrals for supporting elements
- Typography hierarchy: Editorial serif for major headlines (`font-serif`), modern sans-serif for body/UI (`font-sans`), serif italic for emphasis
- UI Primitives in `components/ui/`: Buttons (Primary, Secondary, WhatsApp green, Ghost), Cards (Editorial card with thin borders), Form controls (Input, Select, Textarea), Section labels & badges, Responsive containers
- CTA patterns & image frame treatments

**Logic:**

- Design tokens defined in CSS variables (`app/globals.css`) and Tailwind config
- Component styling consumes CSS variables instead of hardcoded hex values
- Pure presentational primitives with no backend dependencies

---

### 04 Convex Database Schema

Create the DLS Convex database structure before wiring real persistent data into the UI.

**Logic:**

- Create `convex/schema.ts` defining data tables:
  - `leads`: `name` (string), `phone` (string), `course` (string), `location` (string), `created_at` (number)
  - `courses`: `title` (string), `description` (string), `duration` (string), `mode` (string)
  - `testimonials`: `name` (string), `content` (string), `role` (string)
  - `results`: `student_name` (string), `exam` (string), `rank` (string), `year` (string)
- Configure Convex client provider wrapper in `app/layout.tsx`
- Ensure strict type definitions generated via `npx convex dev`

---

## Phase 2 — Programmes

### 05 Programs Page — Full UI

Build the complete Programs listing page with mock data first.

**UI:**

- Editorial header banner — headline "Our Programs & Entrance Coaching", introductory description
- Program category filters / tabs (NEET, JEE, KEAM, CUET, School Tuition, Foundation)
- Program cards list featuring:
  - Program title & category badge
  - Short overview description
  - Duration tag (e.g. 1 Year, 2 Years, Crash Course)
  - Delivery mode tag (e.g. Offline, Online, Hybrid)
  - "View Details" CTA button & "Enquire via WhatsApp" button
- Bottom CTA banner section encouraging enrollment inquiries
- Cross-promotional card linking to DNST (DLS National Scholarship Test)

**Logic:**

- Pure presentational UI using realistic mock program array
- Category filter state switches visible cards smoothly
- Card buttons navigate to `/programs/[slug]` or launch inquiry flow

---

### 06 Course Detail Page — Full UI

Build the dynamic course detail page at `/programs/[slug]` with mock data.

**UI:**

- Breadcrumb navigation (`Home > Programs > [Course Title]`)
- Course Hero — headline, badge, duration, mode, "Apply Now" CTA and WhatsApp CTA
- Course Overview section — in-depth description, key features, target audience ("Who is it for?")
- Delivery & Syllabus section — class structure, schedule, subject breakdown
- Embedded Lead Capture form section tailored to this specific course
- Related programs preview cards at the bottom

**Logic:**

- Route parameters parsed from `/programs/[slug]`
- Mock lookup helper resolves course details or shows clean not-found state
- Direct inquiry CTAs pre-populate the target course name

---

### 07 Programs — Real Convex Data

Wire the Programs listing and Course detail pages to dynamic data from Convex.

**Logic:**

- Create `convex/courses.ts` with queries:
  - `list`: Fetches all courses ordered by title
  - `getBySlug`: Fetches single course record by title slug
- Update `/programs/page.tsx` to use Convex `useQuery(api.courses.list)`
- Update `/programs/[slug]/page.tsx` to query specific course data dynamically
- Handle loading skeletons and empty/invalid course states gracefully
- Public queries remain read-only; mutations restricted to admin dashboard

---

## Phase 3 — Trust + Conversion

### 08 Results Page — Full UI

Build the complete Results & Achievements showcase page with mock data.

**UI:**

- Results header section — headline "Proven Academic Excellence", statistics overview (e.g. Top Ranks in NEET/JEE/KEAM)
- Exam category filter tabs (All, NEET, JEE, KEAM, CUET)
- Student result card grid:
  - Student photo placeholder / avatar
  - Student name
  - Exam name & year (e.g. NEET 2025)
  - Highlighted rank / score badge (e.g. AIR 142, 695/720)
  - High school / branch location
- Supporting trust copy & founder quote section
- Strong conversion CTA section with lead form and WhatsApp link

**Logic:**

- Mock result dataset initially rendered
- Filter tabs toggle displayed results by exam type
- CTAs direct prospective students to demo booking

---

### 09 Testimonials + Trust Content

Build reusable testimonial components and wire them to Convex.

**UI:**

- Testimonial card grid and featured quote cards:
  - Quote content text
  - Student or Parent name
  - Role description (e.g. "Parent of NEET 2024 Qualifier", "JEE Main Student")
  - Rating stars / verified tag
- Integrated into Homepage, Results page, and Course Detail pages

**Logic:**

- Create `convex/testimonials.ts` with query `list` and `convex/results.ts` with query `list`
- Connect Results Page (`/results`) and Homepage sections to Convex real-time queries
- Fall back to default entries gracefully if database is empty

---

### 10 Lead Capture Form

Build the primary reusable DLS lead and demo inquiry form, supporting both course inquiries and DNST registrations.

**UI:**

- Input fields:
  - Full Name (text, required)
  - Phone Number (tel, required)
  - Program / Course Selection (select dropdown, pre-filled with course name or "DNST National Scholarship Test")
  - Location / City (text, optional)
- Submit button ("Book Free Demo / Register Now") with loading spinner
- Validation error messages (missing required fields, invalid phone format)
- Success confirmation message banner ("Thank you! Our admissions team will contact you shortly.")

**Logic:**

- Client-side validation in `components/contact/LeadForm.tsx`
- Server Action in `actions/leads.ts` invokes Convex mutation `convex/leads.ts:createLead`
- Stores lead record in `leads` table with `created_at: Date.now()`
- Triggers analytics `form_submission` event upon success
- Prevents duplicate submissions while request is in-flight
- Zero public read permissions on lead data

---

### 11 WhatsApp Conversion

Wire all DLS WhatsApp conversion touchpoints across the website.

**UI:**

- Persistent WhatsApp floating action button (bottom-right of viewport)
- WhatsApp CTA buttons in Navbar, Hero, Course Details, DNST Page, Results, and Contact sections
- Custom green WhatsApp brand button style (`#25D366` hover accents)

**Logic:**

- Helper utility `lib/whatsapp.ts` constructs WhatsApp URL: `https://wa.me/{phone}?text={encodedMessage}`
- Pre-filled message tailored to context (e.g. "Hi DLS, I would like to enquire about the DNST National Scholarship Test.")
- Clicking any WhatsApp CTA triggers `trackConversion({ type: "whatsapp_click", location })` via `lib/analytics.ts`
- Opens WhatsApp in new browser tab

---

## Phase 4 — Public Information Pages

### 12 About Page — Full UI

Build the complete About DLS page communicating institutional credibility and teaching philosophy.

**UI:**

- Header section — headline "Empowering Students to Achieve Academic Excellence"
- DLS Mission & Educational Philosophy pillars
- Teaching methodology & classroom experience showcase
- Leadership & faculty trust section with real educational photography
- DLS Learning Ecosystem highlight (Entrance coaching, School tuition, UAE remote access, DNST Assessment)
- Final conversion CTA banner with WhatsApp and enquiry form buttons

**Logic:**

- Pure presentational page built from approved project context
- Internal links route cleanly to `/programs`, `/dnst`, and `/contact`

---

### 13 Contact Page — Full UI

Build the complete Contact & Lead Capture page at `/contact`.

**UI:**

- Contact Hero — headline "Get in Touch with Admissions"
- Two-column grid layout:
  - Left column: Contact details (Phone, WhatsApp, Email, Center address, Operating hours)
  - Right column: Full interactive Lead Capture Form
- Direct WhatsApp quick-connect card
- Frequently Asked Questions (FAQ) accordion section regarding admissions, demo classes, and DNST scholarship test

**Logic:**

- Lead form connected to `actions/leads.ts` and Convex `createLead` mutation
- WhatsApp CTA triggers conversion tracking
- Displays immediate success feedback on submission

---

### 14 DNST Dedicated Page (`/dnst`), Syllabus (`/dnst/syllabus`) & Registration (`/dnst/register`)

Build the dedicated DLS National Scholarship Test campaign portal at `/dnst` along with dedicated sub-routes.

**UI:**

- DNST Hero (First View) — headline "DLS National Scholarship Test 2025", tagline "Discover Talent. Reward Excellence. Shape the Future.", subtitle "India's Next-Generation Student Assessment Platform", scholarships ₹25 Lakhs, Classes I–XII eligibility, and dual action CTAs ("Register for DNST" and "View Syllabus")
- "Why DNST?" section — discovering thinking, reasoning, problem solving, academic performance, and eligibility for scholarships, awards, certificates, medals, and national recognition
- "What Makes DNST Different?" section — 5 core numbered editorial rows (01 to 05)
- Academic Benchmarking section — 4-tier horizontal progression (School → District → State → National)
- Syllabus teaser — open editorial row linking to `/dnst/syllabus`
- Registration CTA section — open centered invitation linking to `/dnst/register` and direct WhatsApp inquiry
- Dedicated Syllabus Portal at `/dnst/syllabus` — interactive selector covering Classes I through XII with clear placeholder copy ("Syllabus details will be available soon.")
- Dedicated Registration Portal at `/dnst/register` — full lead capture form (Name, Phone, Class, Location) and instant WhatsApp inquiry

**Logic:**

- Dedicated route `/dnst` acts as the primary campaign hub
- Links cleanly to `/dnst/syllabus` and `/dnst/register`
- Lead submission reuses Convex `leads` table with `course: "DNST"`

**Logic:**

- Centralized static data model `lib/dnst-data.ts` powering syllabus class list and feature pillars
- Registration form submits lead to Convex with `course: "DNST"`
- WhatsApp CTA launches pre-filled message "Hi DLS, I want to register for the DNST Scholarship Test."
- Analytics tracking for `cta_click`, `form_submission`, and `whatsapp_click`

---

## Phase 5 — Admin Dashboard

### 15 Admin Dashboard — Full UI

Build the complete internal admin dashboard shell and overview at `/admin` with mock data first.

**UI:**

- Admin Sidebar — DLS logo, navigation links (Dashboard, Leads, Courses, Content), collapse button
- Admin Header — topbar with section title, quick links, admin user indicator
- Key Metrics Overview cards:
  - Total Leads Received (count + trend, including DNST registrations)
  - Active Courses (count)
  - Total Testimonials (count)
  - Total Results Published (count)
- Recent Leads summary table (latest 5 submissions)
- Quick management shortcut actions ("Add Course", "View Leads")

**Logic:**

- Clean, functional dashboard layout distinct from public website styling
- Public users redirected if unauthenticated/unauthorized
- Mock statistics populated before database wiring

---

### 16 Leads Management — Full UI + Real Data

Build the Leads management page at `/admin/leads` wired to live Convex data.

**UI:**

- Header with search input ("Search by name, phone, course...") and location filter dropdown
- Leads table columns:
  - STUDENT / PARENT NAME
  - PHONE NUMBER (clickable `tel:` link)
  - COURSE / PROGRAM INTEREST (e.g. NEET, JEE, DNST)
  - LOCATION
  - SUBMISSION DATE (formatted timestamptz)
- Pagination controls & total count indicator ("Showing 1-20 of 85 leads")
- Empty state ("No leads recorded yet"), loading skeleton, error handling

**Logic:**

- Query `convex/leads.ts:listLeads` to fetch all lead submissions ordered by `created_at` descending
- Access restricted exclusively to authenticated admin users
- Client-side search and filtering across name, phone, course, and location fields

---

### 17 Course + Content Management

Build the admin management interface for Courses (`/admin/courses`) and Marketing Content (`/admin/content`).

**UI:**

- **Course Management (`/admin/courses`)**:
  - Courses table (Title, Mode, Duration, Actions)
  - "Add New Course" modal/drawer with inputs for Title, Description, Duration, Mode
  - Edit & Delete action buttons per course row
- **Content Management (`/admin/content`)**:
  - Testimonials tab: list existing quotes, Add/Edit/Delete testimonial modal (Name, Content, Role)
  - Results tab: list exam results, Add/Edit/Delete result modal (Student Name, Exam, Rank, Year)

**Logic:**

- Convex mutations:
  - `courses.ts:createCourse`, `updateCourse`, `deleteCourse`
  - `testimonials.ts:saveTestimonial`, `deleteTestimonial`
  - `results.ts:saveResult`, `deleteResult`
- Input field validation before submitting mutations
- Public website routes immediately reflect database updates

---

## Phase 6 — Analytics + Polish

### 18 Conversion Analytics + Final QA

Implement conversion event tracking and perform complete end-to-end quality assurance across all pages including DNST.

**Logic & Analytics:**

- Modular analytics tracker in `lib/analytics.ts`:
  - `form_submission`: Tracked on lead form completion with course/DNST parameter
  - `whatsapp_click`: Tracked on all WhatsApp CTA triggers
  - `cta_click`: Tracked on main navigation, hero, and DNST CTAs
- **Final QA Verification Checklist**:
  1. Public routes (`/`, `/programs`, `/programs/[slug]`, `/dnst`, `/about`, `/results`, `/contact`) load without auth.
  2. Homepage DNST section and dedicated `/dnst` page render all source-supported information (₹25L scholarship, Classes I–XII, 5 differentiators, syllabus placeholders).
  3. Lead capture form saves DNST registrations to Convex `leads` table cleanly.
  4. WhatsApp CTAs launch WhatsApp application with correct context message.
  5. Dynamic course detail pages render Convex `courses` data properly.
  6. Admin pages (`/admin/*`) are isolated and protected.
  7. Admin CRUD operations update courses, testimonials, and results dynamically on public pages.
  8. Mobile navigation drawer and responsive layouts verified across mobile, tablet, and desktop viewports.
  9. Zero legacy job-search/resume/agent code or broken links remaining.

---

## Feature Count

| Phase                             | Features |
| --------------------------------- | -------- |
| Phase 1 — Foundation              | 4        |
| Phase 2 — Programmes              | 3        |
| Phase 3 — Trust + Conversion      | 4        |
| Phase 4 — Public Information Pages | 3        |
| Phase 5 — Admin Dashboard         | 3        |
| Phase 6 — Analytics + Polish      | 1        |
| **Total**                         | **18**   |
