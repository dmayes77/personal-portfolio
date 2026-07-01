# Component Standards

## Layers

| Layer | Directory | Purpose |
|---|---|---|
| Layout | `components/layout/` | Structural, shell-level: Container, Section, Header, Footer, Navigation |
| Sections | `components/sections/` | Portfolio-specific compositions: Hero, FeaturedProjects, etc. |
| Project | `components/project/` | Case study components: ProjectCard, ProjectHero, TechStack, etc. |
| UI | `components/ui/` | Reusable primitives: Button, Card, Badge, Input, etc. |
| Icons | `components/icons/` | SVG icon components |

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

## Naming

| Thing | Convention |
|---|---|
| Component functions | `PascalCase` |
| CSS class names | `camelCase` |
| CSS custom properties | `--kebab-case` |
| Prop names | `camelCase` |
| Boolean props | Verb form: `asChild`, `isActive`, `hasError` |
