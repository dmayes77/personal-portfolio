# Content Style Guide

## Voice

Write like an engineer explaining a decision to a colleague — professional, direct, specific. Not like a resume cover letter.

**Do:** "The original data model stored invoice line items as a JSON blob in a single column. This made filtering and aggregation expensive at query time. I normalized it into a separate `line_items` table, which reduced the average report query from 1.4s to 80ms."

**Don't:** "I leveraged best-in-class technology solutions to optimize database performance and deliver synergistic business value."

## Principles

- **Specific over vague.** Name the technology, the number, the outcome.
- **Reasoning over listing.** Explain why a decision was made, not just what was done.
- **Honest over polished.** Real challenges and real lessons are more credible than a perfect narrative.
- **Short paragraphs.** Three sentences maximum per paragraph in case studies.

## Headings

- Use headings to create scannable structure, not just as decoration
- Every heading should tell the reader what they're about to learn
- Don't use a heading just because a section feels "big"

## Page Copy

| Page | Tone | Goal |
|---|---|---|
| Home | Confident, inviting | Communicate value in < 5 seconds |
| About | Personal, thoughtful | Explain who David is, not just what he's done |
| Projects | Technical, precise | Show engineering thinking |
| Resume | Factual, clean | Make scanning easy for time-pressed reviewers |
| Contact | Warm, low-friction | Remove every barrier to reaching out |

## Things to Avoid

- Buzzwords: "passionate", "innovative", "leverage", "synergy", "guru", "ninja"
- Vague claims: "improved performance", "better user experience" (how much? compared to what?)
- Filler: "In today's fast-paced world..." — start with the actual point
- First-person overuse: vary sentence structure so not every sentence starts with "I"
- Multiple competing calls to action on one page
