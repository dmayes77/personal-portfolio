import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import ButtonGroup from "@/components/ui/ButtonGroup";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import primitives from "@/styles/primitives.module.css";
import styles from "./home.module.css";

const starterChecklist = [
  "Replace the site name, metadata, and links in src/lib/constants.js.",
  "Rewrite this homepage to match your actual content and structure.",
  "Keep, extend, or remove the core framework pieces to fit the project.",
  "Add or remove routes in src/app to fit the project.",
  "Point NEXT_PUBLIC_SITE_URL at your production domain before launch.",
];

export default function Home() {
  return (
    <main>
      <Section id="hero" spacing="roomy">
        <Container className={styles.grid} variant="large">
          <div className={primitives.stackLg}>
            <p className={primitives.eyebrow}>Next.js site starter</p>
            <h1>Start from a minimal SSR-first base for public-facing projects.</h1>
            <p className={primitives.lede}>
              This starter is meant to work across marketing sites, portfolios,
              studios, blogs, small business sites, editorial sites, and
              documentation-style projects without forcing a heavy visual or
              structural opinion on top of them.
            </p>
            <p className={styles.frameworkNote}>
              It also includes a small reusable framework layer for layout,
              theme, and starter-safe UI primitives, so you can move faster
              without getting boxed into a product-style template.
            </p>
            <ButtonGroup>
              <Button asChild>
                <Link href="/about">View example page</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/contact">View contact page</Link>
              </Button>
            </ButtonGroup>
          </div>

          <div className={[primitives.stackMd, styles.note].join(" ")}>
            <p className={styles.noteTitle}>Included</p>
            <ul className={primitives.list}>
              <li>App Router with `src/` structure</li>
              <li>`layout` and `ui` component layers with clear boundaries</li>
              <li>Metadata, sitemap, robots, and web manifest</li>
              <li>Light and dark mode with a small toggle</li>
              <li>Component-owned CSS Modules with minimal global CSS</li>
            </ul>
          </div>
        </Container>
      </Section>

      <Section id="start" spacing="compact" variant="subtle">
        <Container className={styles.splitSection} variant="large">
          <div className={primitives.stackMd}>
            <p className={primitives.eyebrow}>Start here</p>
            <h2>Shape it into your project without undoing a lot first.</h2>
            <p>
              The goal is to give you a working public-site baseline without
              locking you into a niche template, content model, or homepage
              structure you did not ask for.
            </p>
          </div>
          <ol className={[primitives.list, primitives.orderedList].join(" ")}>
            {starterChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </Container>
      </Section>
    </main>
  );
}
