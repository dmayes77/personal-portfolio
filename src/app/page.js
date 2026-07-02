import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import ButtonGroup from "@/components/ui/ButtonGroup";
import Icon from "@/components/ui/Icon";
import TechIcon from "@/components/ui/TechIcon";
import { featuredProjects } from "@/content/projects";
import { skills } from "@/content/skills";
import { siteConfig, socialLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";

const heroHighlights = ["Full-Stack Development", "SaaS Architecture", "Modern Web Applications"];

const heroStats = [
  {
    value: "10+ Years",
    label: "Building Modern Software",
    icon: "code",
  },
  {
    value: "15+ Years",
    label: "Leading Teams & Operations",
    icon: "calendar",
  },
  {
    value: "Solutions Focused",
    label: "From Concept to Deployment",
    icon: "target",
  },
];

const heroTech = [
  "Next.js",
  "React",
  "TypeScript",
  "Supabase",
  "Tailwind CSS",
  "Node.js",
  "Vercel",
];

const processSteps = [
  {
    number: "1",
    title: "Discover",
    body: "Understand goals, users, and technical constraints before code starts.",
  },
  {
    number: "2",
    title: "Design",
    body: "Shape thoughtful UX, architecture, and scalable component systems.",
  },
  {
    number: "3",
    title: "Build",
    body: "Develop clean, maintainable full-stack applications with modern tooling.",
  },
  {
    number: "4",
    title: "Test",
    body: "Review quality, performance, and accessibility with production in mind.",
  },
  {
    number: "5",
    title: "Deploy",
    body: "Ship with confidence using reliable workflows and measurable outcomes.",
  },
  {
    number: "6",
    title: "Improve",
    body: "Iterate from feedback, analytics, and evolving business needs.",
  },
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
  "Own work from discovery through delivery, not just implementation",
  "Translate messy business workflows into clean product decisions",
  "Communicate clearly with product, stakeholders, and engineering teams",
  "Build systems that are maintainable, scalable, and practical to operate",
  "Bring remote-ready accountability, momentum, and follow-through",
  "Lead with calm execution instead of adding noise to the team",
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

const targetRoles = [
  "Full-Stack Product Engineer",
  "SaaS Platform Engineer",
  "Applications & Internal Tools",
  "Remote Product Teams",
];

export const metadata = {
  title: {
    absolute: "David Mayes — Software Developer",
  },
  description:
    "Software developer building modern web applications, SaaS platforms, and scalable digital products.",
};

export default function Home() {
  return (
    <main id="main-content" className={styles.page}>
      <Section id="hero" variant="hero" className={styles.heroSection}>
        <Container variant="hero">
          <div className={styles.heroShell}>
            <div className={styles.codeTexture} aria-hidden="true">
              <span>export default function Hero() {"{"}</span>
              <span> return &lt;DigitalSolutions /&gt;;</span>
              <span>{"}"}</span>
              <span>{"const craft = ['strategy', 'design', 'delivery'];"}</span>
              <span>{"const stack = ['Next.js', 'React', 'Supabase'];"}</span>
            </div>

            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                David <span>Mayes</span>
              </h1>
              <p className={styles.kicker}>Software Developer</p>
              <p className={styles.heroSubline}>
                {heroHighlights.map((item, index) => (
                  <span key={item}>
                    {item}
                    {index < heroHighlights.length - 1 ? (
                      <span className={styles.dot}>•</span>
                    ) : null}
                  </span>
                ))}
              </p>

              <div className={styles.mobilePortrait} aria-hidden="true">
                <div className={styles.mobilePortraitGlow} />
                <Image
                  src="/david-mayes-headshot.png"
                  alt=""
                  width={880}
                  height={910}
                  className={styles.mobilePortraitImage}
                  priority
                />
              </div>

              <div className={styles.techRow} aria-label="Core technologies">
                {heroTech.map((item) => (
                  <div key={item} className={styles.heroTechItem}>
                    <span className={styles.heroTechIconWrap}>
                      <TechIcon name={item} />
                    </span>
                    <span className={styles.heroTechLabel}>{item}</span>
                  </div>
                ))}
              </div>

              <ButtonGroup className={styles.heroActions}>
                <Button asChild size="lg" className={styles.heroButton}>
                  <Link href="/#featured-projects">View My Projects</Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className={styles.heroButton}>
                  <Link href="/contact">Let&apos;s Connect</Link>
                </Button>
              </ButtonGroup>
            </div>

            <div className={styles.heroStage}>
              <div className={styles.heroAside}>
                <aside className={styles.statPanel}>
                  {heroStats.map((stat) => (
                    <div key={stat.value} className={styles.statItem}>
                      <span className={styles.statIcon}>
                        <Icon name={stat.icon} />
                      </span>
                      <div>
                        <p className={styles.statValue}>{stat.value}</p>
                        <p className={styles.statLabel}>{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </aside>

                <div className={styles.heroQuote}>
                  <blockquote>
                    I build <span>product software</span> that brings clarity to complex
                    workflows.
                  </blockquote>
                  <div className={styles.quoteTags}>
                    <span>Innovate</span>
                    <span>Build</span>
                    <span>Deliver</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="featured-projects" spacing="compact" className={styles.lightSection}>
        <Container variant="large">
          <div className={styles.sectionStack}>
            <div className={`${styles.bandCard} ${styles.featuredProjectsPanel}`}>
              <div className={styles.bandHeader}>
                <p>Selected Work</p>
              </div>
              <p className={styles.sectionLead}>
                A few examples of the workflow-heavy, product-focused software I build best.
              </p>
              <div className={styles.projectGrid}>
                {featuredProjects.map((project) => (
                  <article key={project.slug} className={styles.projectCard}>
                    <div className={styles.projectMeta}>
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                    <h2>{project.title}</h2>
                    {project.subtitle ? (
                      <p className={styles.projectSubtitle}>{project.subtitle}</p>
                    ) : null}
                    <p>{project.tagline}</p>
                    {project.complexity ? (
                      <p className={styles.projectComplexity}>{project.complexity}</p>
                    ) : null}
                    <div className={styles.projectTags}>
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <Link href={`/projects/${project.slug}`} className={styles.projectLink}>
                      View Project
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            <div className={`${styles.bandCard} ${styles.hirePanel}`}>
              <div className={styles.bandHeader}>
                <p>Why Teams Hire Me</p>
              </div>
              <div className={styles.rolePillRow} aria-label="Best fit roles">
                {targetRoles.map((role) => (
                  <span key={role} className={styles.rolePill}>
                    {role}
                  </span>
                ))}
              </div>
              <div className={styles.statementBlock}>
                <p className={styles.whyHireCopy}>
                  I do my best work on product teams that need someone who can understand the
                  business problem, shape the solution, and ship software without creating chaos.
                </p>
                <p className={styles.leadershipSummary}>
                  My background in leadership and operations helps me make practical decisions,
                  communicate clearly, and build software that fits how teams actually work.
                </p>
              </div>
              <ul className={`${styles.checkList} ${styles.checkColumns}`} role="list">
                {leadershipPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <ButtonGroup>
                <Button asChild size="lg">
                  <Link href="/contact">Let&apos;s Connect</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/resume">View Resume</Link>
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="about" spacing="compact" className={styles.lightSection}>
        <Container variant="large">
          <div className={styles.sectionStack}>
            <article className={`${styles.bandCard} ${styles.editorialPanel}`}>
              <div className={styles.bandHeader}>
                <p>About David</p>
              </div>
              <div className={styles.aboutCopy}>
                <p>
                  I build software that solves real business problems through thoughtful
                  architecture, clean design, and scalable engineering.
                </p>
                <p>
                  My background in leadership and operations shapes how I approach development:
                  think strategically, communicate clearly, and deliver solutions that make an
                  impact.
                </p>
              </div>

              <div className={styles.cardDivider} />

              <div className={styles.strengthGrid}>
                {strengths.map((strength) => (
                  <article key={strength.title} className={styles.strengthCard}>
                    <h3>{strength.title}</h3>
                    <p>{strength.body}</p>
                  </article>
                ))}
              </div>
            </article>

            <article className={`${styles.bandCard} ${styles.supportPanel} ${styles.valuesPanel}`}>
              <div className={styles.bandHeader}>
                <p>How I Work</p>
              </div>
              <ul className={`${styles.checkList} ${styles.checkColumns}`} role="list">
                {philosophyPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className={styles.leadershipSummary}>
                Based in {siteConfig.location}, I bring a product mindset, operational discipline,
                and a collaborative approach to every build.
              </p>
            </article>
          </div>
        </Container>
      </Section>

      <Section id="capabilities" spacing="compact" className={styles.lightSection}>
        <Container variant="large">
          <div className={styles.sectionStack}>
            <div className={`${styles.bandCard} ${styles.processPanel}`}>
              <div className={styles.bandHeader}>
                <p>My Engineering Process</p>
              </div>
              <div className={styles.timeline}>
                {processSteps.map((step) => (
                  <article key={step.number} className={styles.timelineStep}>
                    <span className={styles.timelineNumber}>{step.number}</span>
                    <h2>{step.title}</h2>
                    <p>{step.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className={styles.supportRow}>
              <article className={`${styles.bandCard} ${styles.supportPanel} ${styles.techPanel}`}>
                <div className={styles.bandHeader}>
                  <p>Core Technologies</p>
                </div>
                <div className={styles.skillGroups}>
                  {skills.map((group) => (
                    <div key={group.category} className={styles.skillGroup}>
                      <h3>{group.category}</h3>
                      <div className={styles.techGrid}>
                        {group.items.map((item) => (
                          <span key={item} className={styles.techItem}>
                            <span className={styles.techDot} aria-hidden="true" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article
                className={`${styles.bandCard} ${styles.supportPanel} ${styles.principlesPanel}`}
              >
                <div className={styles.bandHeader}>
                  <p>Principles I Build By</p>
                </div>
                <div className={styles.principleGrid}>
                  {principles.map((principle) => (
                    <span key={principle} className={styles.principlePill}>
                      {principle}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="closing" spacing="compact" className={styles.lightSection}>
        <Container variant="large">
          <div className={styles.sectionStack}>
            <div className={styles.supportRow}>
              <article
                className={`${styles.bandCard} ${styles.supportPanel} ${styles.availabilityPanel}`}
              >
                <div className={styles.bandHeader}>
                  <p>Availability</p>
                </div>
                <p className={styles.whyHireCopy}>
                  Focused on full-time remote opportunities where clear systems, thoughtful
                  execution, and strong product instincts matter.
                </p>
                <ul className={styles.checkList} role="list">
                  <li>{siteConfig.location}</li>
                  <li>Available for remote full-time opportunities</li>
                  <li>Best aligned with remote SaaS and product teams building workflow-heavy applications</li>
                </ul>
              </article>

              <article className={`${styles.bandCard} ${styles.connectPanel}`}>
                <div className={styles.bandHeader}>
                  <p>Let&apos;s Connect</p>
                </div>
                <div className={styles.contactList}>
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={styles.contactItem}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      <span className={styles.contactIcon}>
                        <Icon name={item.icon} />
                      </span>
                      <span>
                        <strong>{item.label}</strong>
                        <em>{item.value}</em>
                      </span>
                    </a>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
