import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import { skills } from "@/content/skills";
import primitives from "@/styles/primitives.module.css";
import Link from "next/link";
import styles from "./resume.module.css";

export const metadata = {
  title: "Resume",
  description:
    "Skills, leadership background, and engineering principles of David Mayes.",
};

const leadershipPoints = [
  "Led manufacturing teams and operations",
  "Managed multi-million dollar P&L responsibility",
  "Improved processes, quality, and efficiency",
  "Worked across functions to align teams and execution",
  "Coached, mentored, and developed people",
  "Delivered operational excellence with accountability",
];

const principles = [
  "User First",
  "Performance Matters",
  "Clean Architecture",
  "Accessibility",
  "Scalability",
  "Maintainability",
  "Collaboration",
  "Continuous Learning",
];

export default function ResumePage() {
  return (
    <main id="main-content">
      <PageHero
        id="resume-hero"
        kicker="Background"
        title="Resume"
        lede="Full-stack software engineer with 15+ years in leadership and operations, and 10+ years building modern web applications."
      />

      <Section id="resume-skills" spacing="roomy">
        <Container variant="large">
          <article className={primitives.card}>
            <div className={primitives.cardHeading}>
              <h2>Core Technologies</h2>
            </div>
            <div className={styles.skillGroups}>
              {skills.map((group) => (
                <div key={group.category} className={styles.skillGroup}>
                  <h3>{group.category}</h3>
                  <div className={primitives.pillRow}>
                    {group.items.map((item) => (
                      <span key={item} className={primitives.pill}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </Container>
      </Section>

      <Section id="resume-leadership" spacing="compact" variant="subtle">
        <Container variant="large">
          <article className={primitives.card}>
            <div className={primitives.cardHeading}>
              <h2>Leadership Experience</h2>
            </div>
            <ul className={primitives.checkList} role="list">
              {leadershipPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </Container>
      </Section>

      <Section id="resume-principles" spacing="compact">
        <Container variant="large">
          <div className={primitives.stackMd}>
            <p className={primitives.eyebrow}>Principles I Build By</p>
            <div className={primitives.pillRow}>
              {principles.map((principle) => (
                <span key={principle} className={primitives.pill}>
                  {principle}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="resume-cta" spacing="compact" variant="subtle">
        <Container variant="medium">
          <div className={styles.cta}>
            <p>
              Want the full work history, references, or a formatted copy?
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
