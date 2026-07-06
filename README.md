# David Mayes Portfolio

A product-minded portfolio built with the Next.js App Router, CSS Modules, and
a small custom primitive system.

## Stack

- Next.js App Router
- React 19
- CSS Modules
- `next-themes` for theme switching
- `class-variance-authority` for component variants

## Getting started

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

Create a `.env.local` file for the contact form:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_FORM_FROM_EMAIL="Portfolio Contact <onboarding@resend.dev>"
CONTACT_FORM_TO_EMAIL=dmayes77@gmail.com
```

`CONTACT_FORM_FROM_EMAIL` must be a sender Resend allows for your account. The
default `onboarding@resend.dev` sender is fine for testing, but for production
you should switch it to a verified domain you control.

The contact form uses Vercel BotID plus a honeypot field to help block bot
submissions. BotID is configured in `src/instrumentation-client.js` and checked
server-side in `src/app/contact/actions.js`.

## Project shape

```text
src/
  app/                 Route entries, metadata routes, route-local CSS, actions
  components/
    home/              Home page compositions and home-only styling
    layout/            Structural shell components
    ui/                Reusable primitives
  content/             Portfolio content and case-study data
  lib/                 Constants and utilities
  styles/              Global tokens, typography, utilities, animations
docs/                  Project rules, principles, and working docs
```

## Conventions

### File types

- Use `.jsx` for files that render JSX
- Use `.js` for non-rendering modules such as actions, content, constants,
  helpers, registries, and metadata config

Examples:

- `src/app/contact/page.jsx`
- `src/app/contact/actions.js`
- `src/components/ui/Icon/index.jsx`
- `src/components/ui/Icon/ui-icons.js`

### Components

- Every reusable component lives in its own folder
- `index.jsx` is the entry point
- `ComponentName.module.css` owns that component's scoped styles
- No Tailwind utilities

Example:

```text
src/components/ui/Button/
  index.jsx
  Button.module.css
```

### Styling ownership

- Global concerns belong in `src/app/globals.css` and `src/styles/*`
- Primitive/component styles belong beside the component
- Route-only styles stay with the route
- Home page styles are split between:
  - `components/home/common.module.css` for truly shared home-section patterns
  - section-local CSS Modules for section-specific styling

### Component layers

- `components/layout/`: shell, framing, spacing, and structural primitives
- `components/ui/`: reusable UI primitives such as `Button`, `Card`, `Icon`,
  `Pill`, `Stack`, `ThemeToggle`
- `components/home/`: page-specific assemblies for the home page

### Icon system

- `Icon` is the primitive API
- Icon sources live under `components/ui/Icon/`
- `ui-icons.js` and `brand-icons.js` are data registries, not rendering
  components
- The primitive decides rendering behavior, size, tone, stroke, and labeling

## Current architecture notes

- `SiteShell` owns the shared page frame
- `PageHero` is the reusable hero primitive
- `HomeHero` composes `PageHero` instead of re-owning hero structure
- Theme behavior is handled by `ThemeProvider`; styling lives in CSS

## Docs

- [docs/component-standards.md](docs/component-standards.md)
- [docs/design-principles.md](docs/design-principles.md)
- [docs/animation-guidelines.md](docs/animation-guidelines.md)
- [docs/accessibility-checklist.md](docs/accessibility-checklist.md)
