# Performance Standards

## Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 100 |
| Lighthouse Best Practices | 100 |
| Lighthouse SEO | 100 |
| LCP | < 2s |
| CLS | < 0.1 |
| INP | < 200ms |

## Images

- Use `next/image` for all raster images — never `<img>`
- Host project images on Supabase Storage, not committed to the repo
- Set `priority` on the LCP image (hero image above the fold)
- Always define `sizes` prop for responsive image selection
- Use `width` and `height` props to reserve space and prevent CLS
- Lazy-load all images below the fold (Next.js Image default)

## Fonts

- Use the system font stack defined in `tokens.css` (`--font-ui`, `--font-sans`)
- If loading a web font via `next/font`, use `display: "swap"` and subset aggressively
- Do not load fonts from external CDNs — use `next/font/google` which self-hosts

## JavaScript

- Default to Server Components — only add `"use client"` when necessary
- Keep client islands small and leaf-level
- No large client-side data fetching libraries — fetch in Server Components
- Audit bundle size before adding any dependency: `pnpm build && pnpm analyze`

## Layout Stability (CLS)

- Give all images explicit `width` and `height`
- Reserve space for dynamic content (skeleton screens or min-height)
- Avoid inserting content above existing content after load
- Use `font-display: swap` if loading custom fonts

## Running Lighthouse

```bash
pnpm build && pnpm start
# In Chrome DevTools → Lighthouse → Desktop or Mobile → Generate report
```

Record scores in `docs/releases/` after significant changes.
