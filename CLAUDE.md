# CLAUDE.md

## Project Overview

Build a premium, modern, SEO-optimized website for **Dr. Govind Singh & Dr. Preeti Singh Dental Clinic** located in Ujjain, Madhya Pradesh.

The website should establish trust, educate patients, generate appointment bookings, and rank highly for local dental searches.

---

# Clinic Information

## Clinic Name

Dr. Govind Singh & Dr. Preeti Singh Dental Clinic

Brand name (updated 2026-07-30, client-provided clinic logo — supersedes the above for anything user-facing: site title, header, footer, page copy): **Dr. Singh Dental Clinic**. The two doctors are still referred to individually by their full names (Dr. Govind Singh, Dr. Preeti Singh) in doctor bios and body copy — only the clinic/brand name itself changed.

## Address

First Floor,
Mahakal Sampanna Complex,
Near Tower,
Freeganj,
Madhav Nagar,
Ujjain,
Madhya Pradesh 456010

## Phone

0000000000

---

# Primary Goals

1. Increase appointment bookings
2. Build credibility and patient trust
3. Showcase doctors and modern treatments
4. Rank on Google for local searches
5. Provide excellent mobile experience
6. Educate patients about oral health

---

# Target Audience

- Families
- Children
- Young professionals
- Senior citizens
- Cosmetic dentistry patients
- Emergency dental patients
- Visitors to Ujjain requiring urgent dental care

---

# Brand Personality

The clinic should feel:

- Professional
- Caring
- Gentle
- Trustworthy
- Modern
- Hygienic
- Affordable

---

# Design Language

Style:

- Minimal
- Clean
- Bright
- Premium Healthcare

Primary Colors (updated 2026-07-19, client-specified palette — supersedes the 2026-07-18 approximate violet pass and the original blue/teal/emerald palette)

- Primary: Violet (#6D5EF7)
- Secondary: Royal Blue (#3B82F6)
- Surface: White (#FFFFFF)
- Navy / Text Primary: (#1E293B)

Accent

- Purple (#8B5CF6)

Background

- Cool White (#F8FAFC)

Text Secondary

- Slate (#64748B)

Borders

- (#E2E8F0)

Status colors (Success/Warning/Error requested as #22C55E/#F59E0B/#EF4444; implemented one shade deeper — #15803D/#B45309/#DC2626 — so white button labels and small text on these colors clear WCAG AA 4.5:1; see the comment above `:root` in `globals.css` for the exact contrast numbers)

- Success: Green (#15803D)
- Warning: Amber (#B45309)
- Error: Red (#DC2626)

Gradients

- Violet → Blue, e.g. `linear-gradient(135deg, #6D5EF7 0%, #3B82F6 100%)` — used for buttons/icon fills/CTA text via the `brand-blue` → `brand-blue-dark` token pair, and the `.gradient-text` / `.gradient-text-light` utilities in `globals.css`.

Button color (updated 2026-07-27, explicit client request — supersedes the violet/blue button color implied above)

- All buttons: Near-black Navy (#00032A), via the `--brand-blue` / `--brand-blue-dark` tokens in `globals.css` (which `bg-primary` and every `bg-brand-blue` button in the codebase resolve through).

Avoid:

- Loud colors
- Generic medical templates

Note: "Excessive animations" was originally on this avoid-list, but a full reference-demo animation set (custom cursor, tilt cards, magnetic buttons, count-up rings, etc.) was explicitly requested and implemented — see "Motion / Animation Guidelines" below for the current, intentionally rich motion approach.

---

# Technology Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion (subtle only)
- React Hook Form
- Zod
- next-seo

Deployment

- Vercel

---

# Website Structure

## Home

Sections

- Hero
- Emergency Call CTA
- Why Choose Us
- About Clinic
- Meet the Doctors
- Services
- Modern Equipment
- Patient Testimonials
- FAQ
- Google Map
- Contact CTA

---

## About

- Clinic Story
- Mission
- Vision
- Patient Care Philosophy
- Sterilization Standards
- Technology Used

---

## Doctors

### Dr. Govind Singh

Include:

- Professional photo
- Qualifications
- Experience
- Areas of expertise
- Professional memberships
- Patient-first philosophy

### Dr. Preeti Singh

Include:

- Professional photo
- Qualifications
- Experience
- Special interests
- Professional memberships
- Patient care approach

Doctor photos (removed 2026-10-02, client request): doctor cards show details only — no portraits. Ignore the "Professional photo" items above unless the client supplies new photos.

Doctor facts (updated 2026-07-30, client-confirmed — supersedes any earlier MDS/specialization claims in data files): both doctors are **BDS only** (general dentists, not MDS specialists), each with **25+ years of individual experience**. Do not attribute Prosthodontics, Periodontics, or Pedodontics specialty degrees/memberships to either doctor.

---

## Services

Create dedicated SEO pages for:

- General Dentistry
- Dental Checkups
- Teeth Cleaning
- Dental Fillings
- Root Canal Treatment
- Tooth Extraction
- Teeth Whitening
- Smile Makeover
- Veneers
- Braces
- Invisalign
- Wisdom Tooth Removal
- Emergency Dental Care

Removed (client request, 2026-07-30): Dental Crowns, Bridges, Dentures, Dental Implants (prosthodontics-related), Pediatric Dentistry, and Gum Treatment (periodontics-related) were dropped from the service list and deleted from `src/data/services.ts` — the clinic's doctors are BDS generalists, not specialists in these areas, and the client asked for these pages removed rather than reframed.

Each service page should include:

- Overview
- Symptoms
- Benefits
- Treatment Process
- Recovery
- FAQs
- Appointment CTA

---

## Gallery

Showcase

- Reception
- Treatment rooms
- Equipment
- Sterilization
- Clinic interiors

---

## Testimonials

Include

- Google Reviews
- Patient Success Stories
- Before/After (with consent)

---

## Contact

Display prominently:

Address

First Floor,
Mahakal Sampanna Complex,
Near Tower,
Freeganj,
Madhav Nagar,
Ujjain,
Madhya Pradesh 456010

Phone

0000000000

Include:

- Embedded Google Map
- Working Hours
- WhatsApp CTA (if available)
- Appointment Form

Working hours (client-confirmed, 2026-07-30): Monday–Saturday 11:00 AM – 7:00 PM. **Closed Sunday, including emergencies** — do not imply 7-day or Sunday emergency availability anywhere on the site.

---

# Homepage Hero

Headline:

Healthy Smiles Begin Here

Subheadline:

Trusted Dental Care by Dr. Govind Singh & Dr. Preeti Singh in Ujjain.

Primary CTA

Book an Appointment

Secondary CTA

Call Now

---

# SEO Strategy

Target Keywords

Primary

- Dentist in Ujjain
- Best Dentist in Ujjain
- Dental Clinic in Ujjain
- Root Canal Treatment Ujjain
- Teeth Whitening Ujjain
- Dental Implants Ujjain
- Family Dentist Ujjain

Secondary

- Cosmetic Dentist Ujjain
- Pediatric Dentist Ujjain
- Emergency Dentist Ujjain
- Smile Makeover Ujjain
- Dental Checkup Ujjain

Use LocalBusiness, Dentist, FAQ, Review, and Breadcrumb schema.

---

# Motion / Animation Guidelines

Use `motion` (Framer Motion) only — no GSAP, jQuery, or other animation libraries.

Full "reference demo" animation set is intentionally implemented site-wide (explicit user decision overriding the original "subtle only" default). Every effect below must still respect `prefers-reduced-motion` (see Accessibility) — that gating is non-negotiable regardless of style choice.

**Implemented**

- Custom "magic" cursor with trail sparkles — desktop/fine-pointer only (`src/components/shared/magic-cursor.tsx`), disabled under reduced motion.
- Preloader spinner on initial load (`preloader.tsx`).
- Scroll progress bar, fixed top (`scroll-progress-bar.tsx`).
- Back-to-top button, appears after 600px scroll (`back-to-top.tsx`).
- Sticky header that shrinks + gains shadow on scroll (`layout/header.tsx`).
- Header logo (`layout/brand-logo.tsx`): the client's original `public/images/logo.png` shown plain on the solid white header (client request — no badge/frame), shrinks with the header.
- Split-letter heading reveal on scroll, used for Hero h1 and all `SectionHeading` titles (`split-heading.tsx`).
- Animated gradient text sweep — reserved for two high-impact spots only (final CTA banner headings), not applied to every heading, to avoid nonstop competing motion (`.gradient-text` / `.gradient-text-light` in globals.css).
- Count-up stat numbers wrapped in animated circular SVG progress rings (`circular-stat.tsx`, used in `stats-strip.tsx`).
- Hero image "breathing" scale pulse + scroll-linked parallax (`hero.tsx`).
- 3D pointer-tracked tilt on service cards (`tilt-card.tsx`).
- Icon-box gradient fill-from-bottom on hover (`trust-badges.tsx`).
- Magnetic pull on primary CTA buttons — header, hero, CTA banners (`magnetic.tsx`).
- Looping/autoplay testimonial carousel with prev/next arrows, scroll-snap based, pauses on hover/focus (`carousel.tsx`).
- Directional image wipe/mask reveal on About Clinic section (`image-wipe-reveal.tsx`).
- Fade-up entrance on scroll for most sections, staggered (`reveal.tsx`).

**Deliberately not added**

- Video popup with glow-ripple — no video asset exists in `site-config`/gallery data; add this effect if/when a real clinic-tour video is available, don't fabricate a placeholder.

Implementation notes:
- New client components wrap only what needs interactivity/animation; keep server components server-rendered where possible.
- Magnetic/tilt/cursor effects check `pointerType === "mouse"` or `(pointer: fine)` so touch devices get plain tap behavior, not stuck hover states.

---

# Accessibility

Meet WCAG AA

- Keyboard navigation
- Semantic HTML
- Screen reader support
- High contrast
- Focus indicators
- Image alt text
- Respect `prefers-reduced-motion` — gate all scroll/hover animations so users who opt out get a static experience

---

# Performance Goals

Lighthouse

Performance >95

Accessibility >95

SEO >95

Best Practices >95

---

# Forms

Appointment Form

Fields

- Name
- Phone
- Email
- Preferred Date
- Preferred Time
- Service
- Message

Validation required.

---

# Trust Signals

Highlight

- Experienced dentists
- Advanced equipment
- Hygienic clinic
- Personalized treatment plans
- Comfortable patient experience
- Transparent pricing

---

# Future Features

- Online appointment scheduling
- WhatsApp booking
- Online payments
- Patient portal
- Treatment cost estimator
- Oral health blog
- Hindi language support

---

# Security Rules

- Never read the contents/values of any `.env` file — this includes `.env`, `.env.local`, `.env.production`, `.env.*`, and any other secret/credential file (API keys, tokens, passwords), in this project or any nested project (e.g. `external/agents/.../.env`). It is fine to check that such a file exists, grep for whether a variable name is present or still a placeholder, or open it in the editor for the user to edit themselves — just never view, print, or repeat back the actual secret value.
