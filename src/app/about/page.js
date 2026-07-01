import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/layout/Section";
import primitives from "@/styles/primitives.module.css";
import styles from "./about.module.css";

export const metadata = {
  title: "About",
  description:
    "The story, leadership background, and engineering philosophy behind David Mayes' work.",
};

const profilePoints = [
  "Full-stack software engineer",
  "10+ years building web applications",
  "15+ years leading teams and operations",
  "Passionate about scalable SaaS products",
  "Based in Chattanooga, TN",
];

const philosophyPoints = [
  "Understand the business problem",
  "Design intuitive experiences",
  "Build maintainable systems",
  "Deliver measurable value",
  "Continuously improve",
];

const strengths = [
  {
    title: "Problem Solver",
    body: "I turn complex challenges into practical, high-impact software solutions.",
  },
  {
    title: "Collaborative Leader",
    body: "I work closely with teams and stakeholders to move ideas into production.",
  },
  {
    title: "Results Driven",
    body: "I focus on software that serves users, supports growth, and creates value.",
  },
];

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

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        id="about-hero"
        kicker="About"
        title="David Mayes"
        lede="Full-stack software engineer blending 15+ years of leadership and operations experience with 10+ years of hands-on engineering."
      />

      <Section id="about-profile" spacing="roomy">
        <Container variant="large">
          <div className={styles.grid}>
            <article className={primitives.card}>
              <div className={primitives.cardHeading}>
                <h2>Who I Am</h2>
              </div>
              <ul className={primitives.checkList} role="list">
                {profilePoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>

            <article className={primitives.card}>
              <div className={primitives.cardHeading}>
                <h2>My Development Philosophy</h2>
              </div>
              <ul className={primitives.checkList} role="list">
                {philosophyPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </Section>

      <Section id="about-story" spacing="compact" variant="subtle">
        <Container variant="medium">
          <div className={primitives.stackLg}>
            <p className={primitives.eyebrow}>About Me</p>
            <div className={primitives.proseBlock}>
              <p className={primitives.lede}>
                I build software that solves real business problems through
                thoughtful architecture, clean design, and scalable
                engineering.
              </p>
              <p className={primitives.lede}>
                My background in leadership and operations shapes how I
                approach development: think strategically, communicate
                clearly, and deliver solutions that make an impact.
              </p>
            </div>

            <div className={styles.strengthGrid}>
              {strengths.map((strength) => (
                <article key={strength.title} className={styles.strengthCard}>
                  <h3>{strength.title}</h3>
                  <p>{strength.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="about-leadership" spacing="roomy">
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
            <p className={styles.leadershipSummary}>
              My background in leadership strengthens how I approach software
              development. I communicate clearly, solve problems
              systematically, and keep delivery aligned with business goals.
            </p>
          </article>
        </Container>
      </Section>

      <Section id="about-principles" spacing="compact" variant="subtle">
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
    </main>
  );
}
