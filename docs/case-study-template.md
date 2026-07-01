# Case Study Template

Use this structure for every project in `src/content/projects/`.

## Data Schema

```js
{
  slug: "project-slug",          // kebab-case, matches the /projects/[slug] route
  title: "Project Title",
  tagline: "One sentence — what it does and who it's for",
  status: "live",                // "live" | "archived" | "in-progress"
  featured: true,                // shown on home page and projects index
  year: 2024,
  thumbnail: "https://...",      // Supabase Storage URL, 16:9 ratio, 1200×675px minimum
  tags: ["Next.js", "Supabase"],

  // Prose fields — write these as plain strings (or markdown if rendered with a parser)
  summary: "",        // 2–4 sentences: what it is, what problem it solves, what you built
  problem: "",        // The business or user problem — not the technical one
  goals: [],          // String array: measurable objectives set before building
  constraints: [],    // String array: real constraints (time, budget, team, tech)
  solution: "",       // The approach chosen and why — explain the decision, not just the outcome
  architecture: "",   // System design, data flow, key architectural decisions
  decisions: [],      // Array of { decision, rationale, tradeoffs } objects
  challenges: [],     // Array of { challenge, resolution } objects
  results: [],        // String array: measurable outcomes (perf numbers, adoption, satisfaction)
  lessonsLearned: [], // String array: what you'd do differently
  futureImprovements: [], // String array: what comes next and why it was deferred

  links: {
    live: "https://...",
    github: "https://...",
  },
}
```

## Writing Guidelines

**Problem:** Start with the user or business pain, not the technology. "Clients were losing track of invoices" is stronger than "We needed a dashboard."

**Architecture:** Include a diagram description or ASCII diagram if the system has meaningful complexity. Explain why each layer exists.

**Decisions:** This is the highest-signal section for engineers. Show that you considered alternatives and chose deliberately.

**Results:** Be specific. "40% reduction in onboarding time" beats "improved user experience."

**Lessons Learned:** Honest self-reflection demonstrates maturity. Don't skip this.
