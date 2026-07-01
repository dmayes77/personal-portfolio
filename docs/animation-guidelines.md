# Animation Guidelines

## Principle

Motion should improve usability, not decorate. Every animation must justify its existence by making the interface clearer or more responsive.

## When to Animate

| Use case | Appropriate |
|---|---|
| Hover feedback on interactive elements | Yes |
| Focus states | Yes |
| Expanding/collapsing content | Yes |
| Loading indicators | Yes |
| Page transitions | Yes, if subtle |
| Entrance animations that delay reading | No |
| Continuous looping motion | No |
| Motion that doesn't communicate state | No |

## Timing

| Type | Duration |
|---|---|
| Micro-interactions (hover, focus) | 100–200ms |
| Component transitions (expand, collapse) | 200–300ms |
| Page transitions | 250–400ms |

Use `ease` or `ease-out` for most transitions. Avoid `linear` for visual transitions.

## CSS Patterns

```css
/* Hover transition */
.element {
  transition: color 150ms ease, background-color 150ms ease;
}

/* Expand/collapse */
.panel {
  transition: height 250ms ease, opacity 200ms ease;
}
```

## Reduced Motion

All animations must have a reduced-motion alternative. The global `animations.css` provides a blanket override:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

This applies globally. For animations where the reduced-motion alternative should be more than "instant", override explicitly:

```css
@media (prefers-reduced-motion: reduce) {
  .carousel {
    scroll-behavior: auto;
  }
}
```

## Keyframes

Define `@keyframes` in `src/styles/animations.css`. Import that file in `layout.js`. Reference keyframes by name in component CSS Modules.

```css
/* animations.css */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Component.module.css */
.panel {
  animation: fadeIn 200ms ease;
}
```
