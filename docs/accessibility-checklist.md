# Accessibility Checklist

Run through this before marking any page complete.

## Structure

- [ ] One `<h1>` per page — never zero, never two
- [ ] Heading order is logical (h1 → h2 → h3, no skipping levels)
- [ ] `<header>`, `<nav>`, `<main>`, `<footer>` landmarks present
- [ ] `<main>` has `id="main-content"` to match the skip link target
- [ ] Skip-to-content link is the first focusable element

## Navigation

- [ ] Active nav link has `aria-current="page"`
- [ ] All nav links are keyboard reachable via Tab
- [ ] Brand mark has a descriptive `aria-label`

## Interactive Elements

- [ ] Every button has a visible label or `aria-label`
- [ ] All interactive elements have `:focus-visible` styles
- [ ] Tab order follows reading order
- [ ] No keyboard traps

## Images

- [ ] Content images have descriptive `alt` text
- [ ] Decorative images have `alt=""`
- [ ] SVG icons that are decorative have `aria-hidden="true"`

## Forms

- [ ] Every input has a connected `<label>` via `htmlFor`
- [ ] Required fields are marked (not just with color)
- [ ] Validation errors are associated with the field via `aria-describedby`
- [ ] Error messages are descriptive ("Email is required", not "Invalid input")
- [ ] Success state is announced to screen readers

## Color and Motion

- [ ] Text meets WCAG AA contrast (4.5:1 for body text, 3:1 for large text)
- [ ] Information is not conveyed by color alone
- [ ] All animations respect `prefers-reduced-motion`

## Testing

- [ ] Keyboard-only navigation (Tab, Shift+Tab, Enter, Escape, arrow keys)
- [ ] VoiceOver on Safari (macOS) — at minimum the heading structure and nav
- [ ] 375px viewport — layout is functional
- [ ] Zoom to 200% — content reflows without horizontal scroll
