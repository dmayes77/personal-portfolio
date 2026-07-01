# Design Principles

## The Standard

Every design decision should pass three tests:
1. Does this improve the visitor experience?
2. Does this better demonstrate engineering ability?
3. Would this impress a senior frontend engineer?

When there is a choice between something visually impressive and something that demonstrates engineering maturity, prioritize engineering maturity.

## Hierarchy First

Each screen should communicate three things within 3 seconds:
1. Where the visitor is
2. What matters most here
3. What to do next

Establish hierarchy through typography and spacing before reaching for color or decoration.

## Intentional Simplicity

Minimal does not mean empty. Every element must earn its place by improving:
- Understanding (does this help the visitor grasp something faster?)
- Usability (does this make an action easier to take?)
- Trust (does this make David look more credible?)

If removing an element wouldn't hurt any of those three, remove it.

## Premium Through Consistency

Quality is perceived through consistency, not decoration:
- Aligned spacing using the token system
- Balanced typography with a clear hierarchy
- Polished hover states on every interactive element
- Smooth, purposeful transitions
- Clean responsive behavior at every breakpoint
- No misaligned elements, orphaned text, or broken states

## Color Usage

- Use color to communicate meaning, not for decoration
- The accent color (`--accent`) is reserved for primary actions, links, and active states
- `--muted-foreground` for secondary text — use it aggressively; not everything needs to shout
- Dark mode is first-class, not an afterthought — test every component in both modes

## Typography Hierarchy

Six levels in order of visual weight:
1. `h1` — page title, serif, large clamp
2. Eyebrow — uppercase, small, high letter-spacing, `--foreground`
3. `h2` — section title, serif
4. `h3` — subsection title, serif
5. Lede — body text at 1.1rem, `--muted-foreground`, max-width 42rem
6. Body / `p` — standard body, `--muted-foreground`, line-height 1.7

## Spacing

Use the token system — never guess spacing values. Section rhythm comes from `--section-padding-*` variables. Internal component spacing uses `gap` values from the `.stackSm/.stackMd/.stackLg` primitives.
