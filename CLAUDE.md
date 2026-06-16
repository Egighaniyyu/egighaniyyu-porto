# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Next.js dev server (default http://localhost:3000)
- `npm run build` — production build
- `npm start` — serve the production build
- `npm run lint` — run ESLint (config in [eslint.config.mjs](eslint.config.mjs): `next/core-web-vitals` + `next/typescript`, ignores `.next`, `out`, `build`, `next-env.d.ts`)

There is no test runner configured.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript (strict)
- Tailwind CSS v4 via `@tailwindcss/postcss` ([postcss.config.mjs](postcss.config.mjs)); imported once at the top of [app/globals.css](app/globals.css)
- GSAP 3 (`gsap`, `ScrollTrigger`, `ScrollToPlugin`) for animation
- Path alias `@/*` → repo root ([tsconfig.json](tsconfig.json))
- Fonts: `Syne` (display) and `DM Sans` (body) loaded via `next/font/google` in [app/layout.tsx](app/layout.tsx) and exposed as CSS variables `--font-syne` / `--font-dm-sans`

## Architecture

This is a single-page marketing/portfolio site. Everything renders from [app/page.tsx](app/page.tsx), which composes section components from [app/components/](app/components/) in fixed order: `Cursor`, `Navbar`, `Hero`, `Marquee`, `About`, `Projects`, `Services`, `Pricing`, `Testimonials`, `FAQContact`, `ClosingCTA`, `Footer`, `Animations`.

Two cross-cutting client components drive almost all interactive behavior; the rest are presentational and rendered on the server:

- **[app/components/Animations.tsx](app/components/Animations.tsx)** — single `useEffect` that dynamically imports GSAP + plugins and wires every scroll/entry animation on the page via **class-name selectors** (e.g. `.hero-bg-text`, `.hero-pill-1`, `.reveal`, `.reveal-left`, `.reveal-right`, `.acard`, `.acard-counter[data-target][data-suffix]`, `.project-item`, `.project-num`, `.service-card`, `.pricing-card`, `.testimonial-card`, `.about-cards-grid`, `.projects-list`, `.services-grid`, `.pricing-grid`, `.testimonials-grid`). It also intercepts `a[href^="#"]` clicks for smooth scroll with an 80px offset. **Consequence:** when you add a section/card/element that should animate, give it the matching class — don't add a second animation orchestrator. When you change a class name, update [Animations.tsx](app/components/Animations.tsx) too.
- **[app/components/Cursor.tsx](app/components/Cursor.tsx)** — custom cursor (system cursor is hidden globally via `body { cursor: none }` in [app/globals.css](app/globals.css)). Hover-grow uses a static selector list: `a, button, .project-item, .service-card, .testimonial-card, .pricing-card`. Add new "interactive" container classes here if you want the hover state on them. Listeners are attached once on mount, so elements added later won't trigger hover growth.

## Styling

Styling is centralized in [app/globals.css](app/globals.css) (~1.4k lines of hand-written CSS using design-token CSS variables under `:root` — `--bg`, `--accent`, `--accent2`, `--font-display`, `--font-body`, `--radius`, etc.). Tailwind is available but the existing components mostly use semantic CSS classes plus inline `style` for one-offs. Match this convention: prefer adding a class to `globals.css` over a long Tailwind utility chain when extending existing sections.

## Content

The content (copy, project list, pricing tiers, testimonials, FAQ) is hard-coded inside the section components — there's no CMS, data file, or i18n. To change wording or add a project/service/testimonial, edit the corresponding component directly. Images live in [public/images/](public/images/) and are referenced as `/images/...`.
