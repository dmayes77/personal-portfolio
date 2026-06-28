# Roadmap

This file tracks intentional framework growth for the starter.

## Current foundation

- App Router with `src/` structure
- SSR-first layout with a small theme toggle client island
- `layout` layer for `Container`, `Section`, `SiteHeader`, and `SiteFooter`
- `ui` layer for `Button` and `ButtonGroup`
- Component-owned CSS Modules with global resets and theme tokens

## Good next additions

- `Input`
- `Textarea`
- `Separator`
- `Badge`
- A small set of reusable section components only after they repeat

## Things to avoid by default

- SaaS-specific feature blocks
- Pricing tables
- Testimonial systems
- CMS assumptions
- Large abstraction layers that make page composition harder
