import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import ButtonGroup from "@/components/ui/ButtonGroup";
import Icon from "@/components/ui/Icon";
import { siteConfig, socialLinks } from "@/lib/constants";
import { featuredProjects } from "@/content/projects";
import { skills } from "@/content/skills";
import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";

const heroHighlights = [
  "Full-Stack Development",
  "SaaS Architecture",
  "Modern Web Applications",
];

const heroStats = [
  {
    value: "10+ Years",
    label: "Building modern software",
    icon: "code",
  },
  {
    value: "15+ Years",
    label: "Leading teams & operations",
    icon: "calendar",
  },
  {
    value: "Solutions Focused",
    label: "From concept to deployment",
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

const profilePoints = [
  "Full-stack software engineer",
  "10+ years building web applications",
  "15+ years leading teams and operations",
  "Passionate about scalable SaaS products",
  `Based in ${siteConfig.location}`,
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
        <Container variant="large">
          <div className={styles.heroShell}>
            <div className={styles.codeTexture} aria-hidden="true">
              <span>export default function Hero() {"{"}</span>
              <span>  return &lt;DigitalSolutions /&gt;;</span>
              <span>{"}"}</span>
              <span>{"const craft = ['strategy', 'design', 'delivery'];"}</span>
              <span>{"const stack = ['Next.js', 'React', 'Supabase'];"}</span>
            </div>

            <div className={styles.heroContent}>
              <p className={styles.kicker}>Software Developer</p>
              <h1 className={styles.heroTitle}>
                David <span>Mayes</span>
              </h1>
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

              <div className={styles.techRow} aria-label="Core technologies">
                {heroTech.map((item) => (
                  <span key={item} className={styles.techBadge}>
                    {item}
                  </span>
                ))}
              </div>

              <div className={styles.processPreview}>
                <div className={styles.processHeader}>
                  <span>My Process</span>
                </div>
                <div className={styles.processGrid}>
                  {processSteps.slice(0, 4).map((step) => (
                    <article key={step.number} className={styles.processCard}>
                      <span className={styles.processNumber}>{step.number}</span>
                      <h2>{step.title}</h2>
                      <p>{step.body}</p>
                    </article>
                  ))}
                </div>
              </div>

              <ButtonGroup>
                <Button asChild size="lg">
                  <Link href="/#featured-projects">View Projects</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/contact">Let&apos;s Connect</Link>
                </Button>
              </ButtonGroup>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.portraitWrap}>
                <div className={styles.portraitGlow} aria-hidden="true" />
                <Image
                  src="/david-mayes-headshot.png"
                  alt="Portrait of David Mayes"
                  width={880}
                  height={910}
                  className={styles.portrait}
                  priority
                />
              </div>

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
                <p>
                  I build <span>digital solutions</span> that solve real
                  problems and create value.
                </p>
                <div className={styles.quoteTags}>
                  <span>Innovate</span>
                  <span>Build</span>
                  <span>Deliver</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="profile" spacing="roomy" className={styles.lightSection}>
        <Container variant="large">
          <div className={styles.profileGrid}>
            <article className={styles.infoCard}>
              <div className={styles.cardHeading}>
                <h2>Who I Am</h2>
              </div>
              <ul className={styles.checkList} role="list">
                {profilePoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className={styles.cardDivider} />

              <div className={styles.cardHeading}>
                <h2>My Development Philosophy</h2>
              </div>
              <ul className={styles.checkList} role="list">
                {philosophyPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>

            <article className={styles.infoCard}>
              <div className={styles.cardHeading}>
                <h2>About Me</h2>
              </div>
              <div className={styles.aboutCopy}>
                <p>
                  I build software that solves real business problems through
                  thoughtful architecture, clean design, and scalable
                  engineering.
                </p>
                <p>
                  My background in leadership and operations shapes how I
                  approach development: think strategically, communicate
                  clearly, and deliver solutions that make an impact.
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

            <article className={styles.infoCard}>
              <div className={styles.cardHeading}>
                <h2>Core Technologies</h2>
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
          </div>
        </Container>
      </Section>

      <Section id="engineering-process" spacing="compact" className={styles.lightSection}>
        <Container variant="large">
          <div className={styles.bandCard}>
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
        </Container>
      </Section>

      <Section id="featured-projects" spacing="compact" className={styles.lightSection}>
        <Container variant="large">
          <div className={styles.splitRow}>
            <div className={styles.bandCard}>
              <div className={styles.bandHeader}>
                <p>Featured Projects</p>
              </div>
              <div className={styles.projectGrid}>
                {featuredProjects.map((project) => (
                  <article key={project.slug} className={styles.projectCard}>
                    <div className={styles.projectMeta}>
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                    <h2>{project.title}</h2>
                    <p>{project.tagline}</p>
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

            <div className={styles.bandCard}>
              <div className={styles.bandHeader}>
                <p>Leadership Experience</p>
              </div>
              <ul className={styles.checkList} role="list">
                {leadershipPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className={styles.leadershipSummary}>
                My background in leadership strengthens how I approach
                software development. I communicate clearly, solve problems
                systematically, and keep delivery aligned with business
                goals.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="closing" spacing="compact" className={styles.lightSection}>
        <Container variant="large">
          <div className={styles.bottomGrid}>
            <article className={styles.bandCard}>
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

            <article className={styles.bandCard}>
              <div className={styles.bandHeader}>
                <p>Why Hire Me?</p>
              </div>
              <p className={styles.whyHireCopy}>
                I combine leadership experience with modern software
                engineering to build applications that are reliable,
                scalable, and focused on solving real business problems. I
                care about the details, the people, and the impact.
              </p>
              <ButtonGroup>
                <Button asChild size="lg">
                  <Link href="/contact">Let&apos;s Connect</Link>
                </Button>
              </ButtonGroup>
            </article>

            <article className={styles.bandCard}>
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

          <div className={styles.statusBar}>
            <span>{siteConfig.location}</span>
            <span>Available for full-time opportunities</span>
            <span>Open to remote or relocation</span>
          </div>
        </Container>
      </Section>
    </main>
  );
}
