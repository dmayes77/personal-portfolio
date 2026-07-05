# Component Standards

## Layers

| Layer | Directory | Purpose |
|---|---|---|
| Layout | `components/layout/` | Structural, shell-level: Container, Section, Header, Footer, Navigation |
| Home | `components/home/` | Home page compositions and home-only layout/styling |
| UI | `components/ui/` | Reusable primitives: Button, Card, Icon, Pill, Stack, ThemeToggle, etc. |
| Icon sources | `components/ui/Icon/` | Data registries for UI icons and brand icons |

## File Structure

Every component lives in its own directory:

```
components/ui/Button/
  index.jsx           ← component logic and export
  Button.module.css   ← component-scoped styles only
```

- `index.jsx` is always the entry point
- The CSS Module is named after the component, not `styles.module.css`
- No barrel exports (`index.js` re-exporting everything) — import directly

## File Extensions

- Use `.jsx` for anything that renders JSX
- Use `.js` for non-rendering modules such as:
  - actions
  - content/data
  - constants
  - utilities
  - registries
  - metadata config

Examples:

```text
src/app/contact/page.jsx
src/app/contact/actions.js
src/components/ui/Icon/index.jsx
src/components/ui/Icon/ui-icons.js
```

## Variant System

Use CVA (class-variance-authority) to manage variants. Map variant keys to CSS Module class names:

```js
const variants = cva(styles.base, {
  variants: {
    variant: { default: styles.default, secondary: styles.secondary },
    size: { sm: styles.sizeSm, default: styles.sizeDefault },
  },
  defaultVariants: { variant: "default", size: "default" },
});
```

Never map variants to Tailwind utility classes — use `var(--token)` in the CSS Module instead.

## Polymorphic Rendering

Use Radix `Slot` with an `asChild` prop for components that need to render as a different element:

```jsx
import { Slot } from "@radix-ui/react-slot";

export default function Button({ asChild = false, ...props }) {
  const Component = asChild ? Slot : "button";
  return <Component {...props} />;
}
```

## Server vs Client

Default to Server Components. Mark `"use client"` only when the component needs:
- Event handlers
- Browser-only APIs
- React hooks that require client context (`useState`, `useEffect`, `usePathname`, etc.)

Keep client components as small and leaf-level as possible.

## CSS Rules Inside Modules

- Reference design tokens via `var(--token)` — never hardcode colors or spacing values
- No Tailwind utility classes inside CSS Modules
- Use `color-mix()` for hover/surface variants rather than separate token values
- Add `:focus-visible` styles on every interactive element

## Styling Ownership

- Global concerns live in `src/app/globals.css` and `src/styles/*`
- Primitive/component styles live beside the component
- Route-only styles live beside the route
- Home page styling is split intentionally:
  - `components/home/common.module.css` for truly shared section patterns
  - section-local CSS Modules for section-specific concerns

Avoid recreating a catch-all shared stylesheet once styles have clear owners.

## Icons

- `Icon` is the primitive API
- Raw icon definitions do not live inside `Icon/index.jsx`
- Keep icon sources in registry/data files under `components/ui/Icon/`
- `ui-icons.js` and `brand-icons.js` should stay data-only so they can remain `.js`
- Let the primitive own rendering rules such as `size`, `tone`, `label`, `color`, and `stroke`

## Naming

| Thing | Convention |
|---|---|
| Component functions | `PascalCase` |
| CSS class names | `camelCase` |
| CSS custom properties | `--kebab-case` |
| Prop names | `camelCase` |
| Boolean props | Verb form: `asChild`, `isActive`, `hasError` |
