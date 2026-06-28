# Northstar Site Starter

A minimal public-site starter for marketing sites, portfolios, studios, blogs,
small business sites, editorial sites, and documentation-style projects.

## What is included

- `src/`-based App Router structure
- Tailwind CSS v4 with minimal global CSS and component-owned CSS Modules
- Simple shared shell with header, footer, theme toggle, and basic UI primitives
- A small reusable public-site framework for layout, theme, and starter-safe UI
- Baseline SEO metadata in `src/app/layout.js`
- Generated `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, Open Graph image, and Twitter image
- Custom `not-found` page
- Example interior routes for `/about` and `/contact`
- `@/` import alias mapped to `src/`

## Getting started

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

This starter is configured for `pnpm`, including the build-script approvals
needed by Next.js dependencies on fresh installs.

Copy `.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## First edits to make

1. Update the site name, description, URL, navigation, and content in `src/lib/constants.js`.
2. Replace the homepage content in `src/app/page.js`.
3. Decide which parts of the core framework you want to keep, extend, or remove for this project.
4. Replace the example `/about` and `/contact` routes or swap them for your own.
5. Set `NEXT_PUBLIC_SITE_URL` in production so canonical URLs, sitemap entries, and share images use your real domain.

## Project structure

```text
src/
  app/
    layout.js
    page.js
    home.module.css
    about/page.js
    contact/page.js
    not-found.js
    manifest.js
    opengraph-image.js
    twitter-image.js
    robots.js
    sitemap.js
  components/
    ThemeProvider.js
    ThemeToggle/
      index.jsx
      ThemeToggle.module.css
    ui/
      Button/
        index.jsx
        Button.module.css
      ButtonGroup/
        index.jsx
        ButtonGroup.module.css
    layout/
      Container/
        index.jsx
        Container.module.css
      Section/
        index.jsx
        Section.module.css
      SiteHeader/
        index.jsx
        SiteHeader.module.css
      SiteFooter/
        index.jsx
        SiteFooter.module.css
  lib/
    constants.js
  styles/
    site.css
    primitives.module.css
docs/
  roadmap.md
```

## Core Framework Surface Area

This starter includes a small reusable public-site framework. Its job is to
provide rhythm, structure, theme, and shell, without assuming what kind of
public site you are making.

### Core in scope

- Theme tokens, dark mode, and resets
- `Container` for centered width control
- `Section` for vertical rhythm and surface variants
- `SiteHeader` and `SiteFooter` for shared page framing
- `ThemeToggle` as a small client-side island
- A small `ui` layer with starter-safe basics such as `Button` and `ButtonGroup`
- Small shared primitives such as lists, stacks, and inline links
- Site metadata and static route definitions in `src/lib/constants.js`

### Why this exists

The framework layer is meant to help you move faster across public-site work
without pushing you into a SaaS template or a heavy design system. It gives you
consistent spacing, page framing, theming, and a few dependable primitives, but
it should still feel easy to reshape or ignore on a per-project basis.

### Intentionally out of scope

- SaaS-specific marketing sections
- Pricing, feature grids, testimonial systems, dashboards, auth, or billing
- CMS, blog engine, MDX, docs engine, or data model assumptions
- Large abstraction layers that make page-level customization harder

### Current core components

- `layout/Container` for centered width variants
- `layout/Section` for section spacing and subtle surface treatment
- `layout/SiteHeader` and `layout/SiteFooter` for shared shell composition
- `ThemeToggle` for light and dark mode control
- `ui/Button` and `ui/ButtonGroup` for the first layer of reusable UI

### How to extend it

- Add to `components/layout` when the pattern is structural and page-framing oriented
- Add to `components/ui` when the pattern is a reusable interface primitive
- Add route-level `page.module.css` only when a page truly needs unique styling
- Prefer adding new shared components only after they repeat across multiple projects or sections
- Use `docs/roadmap.md` to track intentional framework growth instead of letting the starter drift

## File conventions

The starter uses different patterns for routes and shared components on purpose.

### App routes

- Use `page.js` for the route entry
- Add `page.module.css` only when that route has truly page-specific styling

### Shared components

- Use a folder per component
- Use `index.jsx` as the component entry
- Use `ComponentName.module.css` for component-owned styles
- Group components by role, such as `components/layout` and `components/ui`

Example:

```text
src/components/layout/Container/
  index.jsx
  Container.module.css
```

This keeps route conventions and component conventions clearly separated.

## Notes

- The starter uses a local/system font stack so builds do not depend on external font downloads.
- The goal is to stay SSR-first and lightweight, with only the theme toggle as a small client-side island.
- The project intentionally separates `layout` components from `ui` components so the framework stays easier to navigate as it grows.
- If you want blog, docs, CMS, or MDX support, this starter is meant to be a base layer to build on top of rather than a full framework.
- `src/lib/constants.js` keeps site metadata and static route definitions in one place.
- `components.json` points shadcn at `src/styles/site.css`, which is where the theme tokens and CSS variables live.
