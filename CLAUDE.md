@AGENTS.md

# Engineering Guide — David Mayes Portfolio

## Mission

Build a portfolio that convinces engineering managers, recruiters, and clients that David Mayes designs and builds production-ready software. Every page should make a hiring manager think: "I want to interview this developer."

This is not a project gallery. It is a curated engineering argument.

## Audience

1. **Engineering managers** evaluating technical depth, architecture decisions, and product thinking
2. **Recruiters** scanning for role fit, technology alignment, and communication clarity
3. **Clients** assessing reliability, taste, and professional credibility

## Portfolio Goals

- Establish credibility through demonstrated engineering maturity, not claimed credentials
- Show product thinking through case studies that explain problems, decisions, and tradeoffs
- Communicate UI/UX excellence through the portfolio's own design and interaction quality
- Make contact frictionless for all three audience types

Every decision should be answerable by three tests:
1. Does this improve the visitor experience?
2. Does this better demonstrate engineering ability?
3. Would this impress a senior frontend engineer?

---

## Technology Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js App Router (v16.x) | Server Components by default |
| Language | JavaScript | No TypeScript — keep it consistent |
| Package manager | pnpm | Workspace-aware, fast |
| Styling | Tailwind CSS v4 + CSS Modules | See CSS architecture below |
| Theme | `next-themes` | Class-based, system default |
| Deployment | Vercel | Zero-config, edge-ready |
| Image hosting | Supabase Storage | CDN-backed, cost-effective |
| Version control | Git + GitHub | Main branch only until scale warrants more |

---

## Development Philosophy

- **Server Components by default.** Move to `"use client"` only when the component needs browser APIs, event handlers, or hooks. Every `"use client"` is a cost worth justifying.
- **Minimal JavaScript to the client.** The ThemeToggle is the only intended client island at baseline. New interactivity should ask: can this be solved with HTML, CSS, or a Server Action first?
- **Progressive enhancement.** The site must be functional without JavaScript. Forms use Server Actions. Navigation works without JS.
- **No unnecessary dependencies.** Add a dependency only when building the same thing from scratch would be unreasonable. `next-themes`, `clsx`, `tailwind-merge`, CVA, and Radix Slot are the intentional baseline.
- **Composition over configuration.** Prefer small, focused components over large configurable ones. Three similar lines is better than a premature abstraction.
- **Readable over clever.** Write code that a competent engineer can understand in 30 seconds without context.

---

## Design Philosophy

The portfolio should feel: **modern, intelligent, premium, fast, intentional, minimal without feeling empty.**

Quality comes from consistency, not decoration. Remove anything that does not support the page goal. Every element must earn its place.

### Hierarchy

Each screen delivers three things instantly:
1. Where the visitor is
2. What matters most here
3. What to do next

Every page has one primary call to action. Competing calls to action weaken both.

### Motion

Motion should improve usability, not decorate. Use it for hover feedback, state transitions, and loading indicators. Respect `prefers-reduced-motion` — every animation needs a `@media (prefers-reduced-motion: reduce)` fallback.

Timing guidelines:
- Micro-interactions: 100–200ms
- Component transitions: 200–300ms
- Page transitions: 250–400ms

Avoid entrance animations, looping motion, and any animation that delays interaction.

---

## CSS Architecture

This project uses a deliberate three-layer CSS system. Understanding it before writing styles is required.

### Layer 1 — `src/app/globals.css`
Tailwind import + minimal CSS resets (box-sizing, margins, media defaults). Nothing else goes here.

### Layer 2 — `src/styles/site.css`
The design token layer. All CSS custom properties live here. Also contains global typography rules and the `@theme inline` bridge that exposes tokens to Tailwind's utility system. This is where color, spacing, container widths, section padding, and font stacks are defined.

```css
/* All design tokens live in site.css */
--background: #faf8f4;
--accent: #2f5a8a;
--container-large: 72rem;
--section-padding-roomy: 5.5rem;
--font-ui: "Inter", "Avenir Next", "Segoe UI", sans-serif;
```

Tokens scale responsively via `@media` blocks in this file, not in components.

### Layer 3 — Component CSS Modules
Component-scoped styles reference design tokens via `var(--token)`. They do not use Tailwind utility classes. This keeps components independent of Tailwind's configuration while remaining consistent with the token system.

```css
/* Button.module.css — correct */
.default {
  background: var(--accent);
  color: var(--accent-foreground);
}

/* Button.module.css — wrong */
.default {
  @apply bg-blue-600 text-white;
}
```

### Layer 4 — `src/styles/primitives.module.css`
Shared layout utilities (`.stackLg`, `.stackMd`, `.eyebrow`, `.lede`, `.list`, `.inlineLink`, `.proseBlock`, `.interiorLayout`). These are imported directly in page and section components. Add primitives here only after a pattern appears in more than two places.

### Tailwind utilities
Tailwind classes are used for one-off layout adjustments on HTML elements in `layout.js` (e.g., `h-full scroll-smooth`) and for quick spacing overrides in pages. They are not used inside component CSS Modules.

### Design Token Reference

```
Colors: --background, --background-subtle, --surface, --foreground, --muted-foreground, --border, --accent, --accent-foreground
Spacing: --page-padding-x, --section-padding-compact/default/roomy
Containers: --container-full/large/medium/small
Fonts: --font-sans (serif, headings), --font-ui (sans-serif, body)
```

---

## Component Architecture

### Directory Structure

```
src/
  app/                    # Routes
  components/
    layout/               # Structural, page-framing components
      Container/
      Section/
      SiteHeader/
      SiteFooter/
    ui/                   # Reusable interface primitives
      Button/
      ButtonGroup/
    sections/             # Portfolio-specific section components
  lib/
    constants.js          # Site config, nav, static routes
    utils.js              # cn() utility
  styles/
    site.css              # Design tokens + global typography
    primitives.module.css # Shared layout utilities
  data/
    projects.js
    experience.js
    skills.js
```

### `layout/` vs `ui/` vs `sections/` separation

`layout/` components handle structural page concerns: width control, section rhythm, the shared shell. They have no awareness of portfolio content.

`ui/` components are reusable interface primitives: buttons, inputs, badges, cards. They are content-agnostic.

`sections/` components are portfolio-specific section compositions: HeroSection, ProjectCard, SkillGrid, TimelineEntry. They know about portfolio data shapes.

### Component file conventions

Each component lives in its own folder:
```
components/ui/Button/
  index.jsx           # Component logic and export
  Button.module.css   # Component-scoped styles
```

- `index.jsx` is the entry point
- CSS Module file is named after the component, not `styles.module.css`
- No `index.css` — styles live in the named CSS Module

### Variant system

Use CVA (class-variance-authority) for components with variants. Map variants to CSS Module class names, not Tailwind utilities:

```js
const buttonVariants = cva(styles.button, {
  variants: {
    variant: { default: styles.default, secondary: styles.secondary },
    size: { sm: styles.sizeSm, default: styles.sizeDefault },
  },
  defaultVariants: { variant: "default", size: "default" },
});
```

### Polymorphic rendering

Use Radix `Slot` for `asChild` props. This is already established in `Button`. Use the same pattern for any component that needs to render as a different element.

### Server vs. Client Components

Default to Server Components. Add `"use client"` only when the component needs:
- Event handlers (`onClick`, `onSubmit`)
- Browser-only APIs (`window`, `localStorage`)
- React hooks that require client context (`useState`, `useEffect`, `useTheme`)

`ThemeProvider.js` and `ThemeToggle/index.jsx` are the established client islands. New client components should be as small and leaf-level as possible.

---

## Folder Organization

```
src/
  app/
    layout.js             # Root layout, metadata, shell
    page.js               # Home route
    home.module.css       # Home-page-specific styles (co-located)
    about/page.js
    contact/page.js
    projects/
      page.js             # Projects index
      [slug]/page.js      # Case study detail
    resume/page.js
    not-found.js          # 404
    robots.js
    sitemap.js
    manifest.js
    opengraph-image.js
    twitter-image.js
    favicon.ico
  components/
    layout/               # Structural, shell-level components
    ui/                   # Reusable primitives
    sections/             # Portfolio-specific section components
  lib/
    constants.js          # Site config, nav, static routes
    utils.js              # Utility functions
  data/
    projects.js           # Project case study data
    experience.js         # Work history data
    skills.js             # Technology skills data
  styles/
    site.css              # Design tokens, global type rules
    primitives.module.css # Shared layout utilities
public/
  (static assets — icons, small SVGs only; images go to Supabase Storage)
docs/
  roadmap.md
  architecture/
  decisions/
```

---

## Content Data Layer

All portfolio content lives in `src/data/` as plain JavaScript. Pages import and render this data as Server Components — no API calls, no CMS overhead at this stage.

```js
// src/data/projects.js
export const projects = [
  {
    slug: "project-name",
    title: "Project Title",
    tagline: "One-sentence value description",
    status: "live",             // "live" | "archived" | "in-progress"
    featured: true,
    year: 2024,
    thumbnail: "https://...supabase.co/storage/v1/object/public/...",
    tags: ["Next.js", "TypeScript", "Supabase"],
    summary: "...",
    problem: "...",
    goals: [],
    constraints: [],
    solution: "...",
    architecture: "...",
    decisions: [],
    challenges: [],
    results: [],
    lessonsLearned: [],
    futureImprovements: [],
    links: {
      live: "https://...",
      github: "https://...",
    },
  },
];
```

Update `src/lib/constants.js` to reflect real portfolio data (name, URL, email, nav).

---

## Coding Conventions

- **JavaScript only** — no TypeScript, no `.ts`/`.tsx` files
- **Named exports from pages** for `metadata`; default export for the page component
- **Async Server Components** for any data fetching
- **Server Actions** for form submissions — no API routes for form handling
- **No prop drilling beyond 2 levels** — co-locate state or use composition
- **No inline styles** except in `opengraph-image.js` where the OG image renderer requires them
- **`cn()` utility** for combining CSS Module class names with conditional logic
- **Absolute imports** via `@/` alias (`@/components/...`, `@/lib/...`, `@/data/...`)

### Naming

| Thing | Convention |
|---|---|
| Files | `camelCase.js` for lib/data, `PascalCase` folder names for components |
| Component functions | `PascalCase` |
| CSS class names | `camelCase` in CSS Modules |
| CSS custom properties | `--kebab-case` |
| Route segments | `kebab-case` folder names |
| Data slugs | `kebab-case` strings |

### No comments by default

Only comment when the WHY is genuinely non-obvious: a hidden constraint, a workaround for a specific bug, a subtle invariant. Never write "what" comments.

---

## Accessibility Standards

Every page must meet WCAG 2.1 AA.

Required on every page:
- One `<h1>` — never zero, never two
- Logical heading order (h1 → h2 → h3, no skipping)
- Semantic landmark elements: `<header>`, `<nav>`, `<main>`, `<footer>`
- Skip-to-content link as the first focusable element in `layout.js`
- `aria-current="page"` on the active nav link
- Visible focus styles on all interactive elements (keyboard ring via `:focus-visible`)
- All images: meaningful `alt` text for content images, `alt=""` for decorative
- Form inputs: `<label>` connected via `htmlFor`, helpful error messages, no placeholder-only labels
- `aria-label` on icon-only buttons (ThemeToggle is already correct)
- `prefers-reduced-motion` respected on all animations
- Color contrast: WCAG AA minimum (4.5:1 body text, 3:1 large text)

Test before shipping: keyboard-only navigation, screen reader (VoiceOver), mobile viewport, desktop viewport.

---

## Performance Standards

Performance is part of the user experience. The portfolio must feel instant.

Targets:
- Lighthouse Performance: 95+
- Lighthouse Accessibility: 100
- Lighthouse Best Practices: 100
- Lighthouse SEO: 100
- LCP: < 2s
- CLS: < 0.1
- INP: < 200ms

Implementation rules:
- Use `next/image` for all content images — never `<img>` for raster images
- Host images on Supabase Storage — never commit large binaries to the repo
- Lazy-load below-the-fold images (Next.js Image default)
- Prioritize the LCP image with `priority` prop on hero images
- Serve responsive images — define `sizes` prop on all images
- Optimize font loading — use `next/font` or a well-cached system font stack
- Zero layout shift — give images explicit dimensions, reserve space for dynamic content
- No console errors or hydration warnings in production
- Ship no unused assets

---

## SEO Standards

- `metadataBase` set to `NEXT_PUBLIC_SITE_URL` — required for absolute OG image URLs
- Every page exports its own `metadata` with a unique `title` and `description`
- Sitemap in `src/app/sitemap.js` — add new routes to `staticRoutes` in `constants.js`
- Canonical URLs via `alternates.canonical`
- OG image at `/opengraph-image` and Twitter card at `/twitter-image`
- `robots.js` allows all crawlers
- Structured data (JSON-LD) for the portfolio home and project case studies — add when content exists
- No orphan pages — every route is in the sitemap

---

## Case Study Standards

Projects are engineering case studies, not portfolio cards. Every featured project follows this structure:

1. **Summary** — what is this and why does it matter
2. **Problem** — the specific business or user problem being solved
3. **Goals** — measurable objectives
4. **Constraints** — time, budget, technology, team
5. **Solution** — the chosen approach and why
6. **Architecture** — system design, data flow, key technical decisions
7. **Engineering Decisions** — tradeoffs made and why; alternatives considered and rejected
8. **Features** — implemented capabilities
9. **Challenges** — what was harder than expected and how it was resolved
10. **Results** — measurable outcomes (performance, adoption, satisfaction)
11. **Lessons Learned** — what you would do differently
12. **Future Improvements** — what comes next and why it was deferred

Case studies must demonstrate:
- Business problem awareness, not just technical implementation
- Decision-making under real constraints
- Ability to communicate tradeoffs clearly
- Self-awareness about what worked and what did not

---

## Responsive Design Requirements

- **Mobile-first**: write base styles for mobile, layer up with `min-width` breakpoints
- Test at 375px, 768px, 1024px, and 1440px for every component and every page
- The header has a mobile layout at `max-width: 699px` — keep the mobile nav functional with 5+ items
- Container widths are set via CSS variables in `site.css`: full (90rem), large (72rem), medium (60rem), small (48rem)
- Section padding scales via `@media` breakpoints in `site.css` — never hardcode section padding in components

---

## Git Workflow

- `main` is the production branch — it deploys to Vercel on every push
- Feature branches: `feat/description` — merge via PR with squash commit
- Fix branches: `fix/description`
- Never force-push `main`
- Commit messages: present tense imperative ("Add Projects page", "Fix nav mobile layout")
- One logical change per commit

---

## Pull Request Standards

Every PR must:
- Describe what changed and why (not just what)
- Note any accessibility, performance, or SEO considerations
- Include a test plan (what to click, what to verify)
- Pass `pnpm lint` with no errors
- Have no console errors or hydration warnings
- Pass a Lighthouse run if it touches layout, images, or performance-sensitive paths

---

## Definition of Done

A change is complete when:

- [ ] Page goal is clear within 3 seconds on mobile
- [ ] Layout works at 375px, 768px, 1024px, 1440px
- [ ] Semantic HTML used throughout
- [ ] One `<h1>` per page, logical heading order
- [ ] All interactive elements are keyboard accessible
- [ ] Focus states are visible on all interactive elements
- [ ] Images have correct alt text
- [ ] Forms have labels, validation, and useful error messages
- [ ] `prefers-reduced-motion` respected
- [ ] No new unnecessary Client Components
- [ ] No new unnecessary dependencies
- [ ] No console errors or hydration warnings
- [ ] Sitemap updated if a new route was added
- [ ] Lighthouse targets maintained or improved
- [ ] The change makes a hiring manager more likely to reach out

---

## Things to Avoid

**In code:**
- `"use client"` without a clear reason that cannot be solved server-side
- Inline styles except in `opengraph-image.js`
- Tailwind utility classes inside component CSS Modules
- `<img>` tags for content images — use `next/image`
- `console.log` left in production code
- Prop drilling beyond 2 levels
- Large abstraction layers built for hypothetical future use
- Half-finished implementations committed to `main`

**In design:**
- Visual decoration that does not improve clarity, trust, or usability
- More than one primary call to action per page
- Buzzwords, vague claims, or filler copy
- Continuous looping animations
- Large entrance animations that delay reading content
- Font weights used for decoration rather than hierarchy

**In architecture:**
- CMS or database assumptions before they are needed
- SaaS-specific components (pricing tables, testimonials, auth)
- Dependencies that solve problems we do not have

---

## Continuous Improvement

After each significant release:
1. Run Lighthouse on changed pages — record scores in `docs/releases/`
2. Test keyboard navigation on every modified page
3. Check mobile layout at 375px
4. Identify what could be improved next and update `docs/roadmap.md`
5. Update this `CLAUDE.md` if a new convention was established

The portfolio should improve with each commit. No regressions, no placeholder content.

---

## Immediate Build Priorities

These are required before the portfolio is usable. All are blockers.

1. Update `src/lib/constants.js` — real name, URL, email, nav (add Projects + Resume)
2. Fix `src/components/layout/SiteFooter/index.jsx` — remove starter content
3. Add skip-to-content link to `src/app/layout.js`
4. Add focus-visible styles to nav links and brand mark in `SiteHeader.module.css`
5. Create `src/data/projects.js`, `src/data/experience.js`, `src/data/skills.js`
6. Build `src/app/page.js` — real hero, featured projects, skills, CTA
7. Build `src/app/about/page.js` — real story, values, philosophy
8. Build `src/app/projects/page.js` — project index
9. Build `src/app/projects/[slug]/page.js` — case study template
10. Build `src/app/resume/page.js`
11. Build `src/app/contact/page.js` — contact form with Server Action
