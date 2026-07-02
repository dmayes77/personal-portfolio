export const clearpoint = {
  slug: "clearpoint",
  title: "ClearPoint Inspections",
  tagline:
    "Inspection platform demonstrating scalable architecture, responsive design, and production-ready engineering practices.",
  category: "Inspection Platform",
  subtitle: "Scalable architecture & responsive design",
  impact: "Reframed inspection work from paper-driven processes into a structured digital workflow.",
  complexity:
    "Inspection workflows needed to move off spreadsheets and paper forms onto a scalable, mobile-ready platform that field teams would actually use.",
  status: "live",
  featured: true,
  year: 2024,
  thumbnail: "",
  tags: ["Next.js", "JavaScript", "Supabase"],
  summary:
    "ClearPoint Inspections is a workflow-focused platform built to replace manual inspection processes with a more structured, mobile-friendly application. The project emphasizes practical field usability, scalable architecture, and an implementation style that feels production-ready rather than purely experimental.",
  problem:
    "Inspection teams often rely on a mix of paper forms, spreadsheets, and ad hoc communication to complete and track work. That creates inconsistent data, slow follow-up, and extra administrative effort after every inspection cycle.",
  goals: [
    "Create a digital workflow that is straightforward for field use",
    "Support responsive usage for inspectors working away from a desk",
    "Lay a technical foundation that can scale as workflows become more complex",
    "Reduce dependence on disconnected manual processes",
  ],
  constraints: [
    "Field-facing software has to prioritize usability over visual complexity",
    "The data model needed to support structured records without slowing data entry",
    "The application needed to feel dependable enough for real operational use",
  ],
  solution:
    "I approached the platform as an operations tool first and a software exercise second. The experience is designed to keep core tasks moving, while the underlying structure supports repeatable workflows, cleaner data capture, and a more reliable inspection process.",
  architecture:
    "The project uses Next.js on the application side with Supabase for backend capabilities. The architecture supports responsive flows, structured data, and a modular foundation that can handle more inspection scenarios over time without requiring a major rewrite.",
  decisions: [
    "Prioritized responsive design so the platform feels usable in real field contexts",
    "Kept workflows structured and predictable to reduce operator friction",
    "Built with scalability in mind so additional inspection logic can be introduced cleanly",
  ],
  challenges: [
    "Designing interfaces that are fast to use in operational environments",
    "Balancing simplicity for inspectors with enough structure for reliable reporting",
    "Creating a codebase that stays maintainable as inspection requirements evolve",
  ],
  results: [
    "Established a digital-first approach for inspection workflows that are often still manual",
    "Created a clearer operational path from data capture to follow-up",
    "Showed how disciplined architecture can support practical field software, not just dashboard views",
  ],
  lessonsLearned: [
    "Field software succeeds when it minimizes hesitation and cognitive load",
    "Operational tools benefit from consistent data structures and opinionated workflow design",
  ],
  futureImprovements: [
    "Offline-friendly inspection flows",
    "Expanded reporting and issue tracking",
    "Role-specific views for inspectors, managers, and administrators",
  ],
  links: {
    live: "",
    github: "",
  },
};
