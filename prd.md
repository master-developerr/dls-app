# Product Requirements Document (PRD)
## Diligence Learning Solutions (DLS) Web Platform

---

## 1. Overview

Diligence Learning Solutions (DLS) is an educational platform offering entrance coaching (NEET, JEE, KEAM, CUET), school tuition, and foundation programs.

This project includes:
- A high-conversion marketing website
- An admin dashboard for managing leads and content

---

## 2. Goals

### Primary Goals
- Generate leads via:
  - WhatsApp clicks
  - Demo booking form

### Secondary Goals
- Build trust through results and testimonials
- Clearly present courses and offerings
- Enable internal management via admin panel

---

## 3. Target Users

### Students
- Class 8–12
- NEET/JEE aspirants

### Parents
- Decision makers
- Focus on results and trust

### UAE Students
- Need remote learning
- Prefer flexible access

### Admin (Internal)
- Manage leads
- Update courses and content

---

## 4. Core Features

### Public Website
- Landing page (conversion-focused)
- Programs listing
- Course detail pages
- Results showcase
- About page
- Contact page
- WhatsApp integration
- Lead capture form

### Admin Dashboard
- Dashboard overview (stats)
- Leads management (table view)
- Course management (CRUD)
- Content management (testimonials, results)

---

## 5. User Flow

### Visitor Flow
1. User lands on homepage
2. Views headline and CTA
3. Scrolls through content (programs, results, testimonials)
4. Clicks WhatsApp OR submits form
5. Converts into lead

### Admin Flow
1. Admin logs into dashboard
2. Views leads
3. Updates courses/content
4. Manages platform data

---

## 6. Pages & Routes

### Public Pages
- `/` → Landing Page
- `/programs` → Programs Listing
- `/programs/[slug]` → Course Detail
- `/about` → About Page
- `/results` → Results Page
- `/contact` → Contact Page

### Admin Pages
- `/admin` → Dashboard
- `/admin/leads` → Leads Table
- `/admin/courses` → Course Management
- `/admin/content` → Content Management

---

## 7. UI/UX Requirements

### Design Style
- Premium, modern, minimal
- Dark theme (based on brand)
- Clean spacing and typography

### Color System
- Background: Dark / black
- Primary: Orange (CTA)
- Secondary: Green accents
- Text: Light / off-white

### UX Principles
- Clear hierarchy
- Easy scanning
- Repeated CTAs
- Mobile-first design

---

## 8. Components

Reusable components:
- Navbar
- Sidebar (admin)
- Buttons
- Cards
- Forms
- Tables
- CTA sections

---

## 9. Animations

Use subtle animations:
- Fade-in on scroll
- Hover effects
- Small transitions

Avoid:
- Heavy animations
- Performance-heavy effects

---

## 10. Backend Requirements

Use Convex (BaaS)

### Tables

#### Leads
- name
- phone
- course
- location
- created_at

#### Courses
- title
- description
- duration
- mode

#### Testimonials
- name
- content
- role

#### Results
- student_name
- exam
- rank
- year

---

## 11. Functional Requirements

- Form submission stores data
- WhatsApp CTA works
- Admin can manage data
- Responsive across devices
- Smooth navigation

---

## 12. Non-Functional Requirements

### Performance
- Fast load time
- Optimized images

### Responsiveness
- Mobile-first
- Works on all devices

### Maintainability
- Clean code
- Modular components

---

## 13. Analytics

Track:
- Form submissions
- WhatsApp clicks
- CTA clicks

---

## 14. Constraints

- Low cost (use free-tier tools)
- Fast development using AI
- Avoid over-engineering
- Keep system simple and scalable

---

## 15. Success Criteria

- High conversion rate
- Smooth user experience
- Clean UI
- Easy admin management

---

## 16. Notes

- Prioritize conversion over complexity
- Keep UI clean and premium
- Ensure consistency across all pages