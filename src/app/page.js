import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import ButtonGroup from "@/components/ui/ButtonGroup";
import Icon from "@/components/ui/Icon";
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

const techItems = [
  ...skills.flatMap((group) => group.items),
  "PostgreSQL",
].filter((item, index, all) => all.indexOf(item) === index);

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
                  <Link href="/projects">View Projects</Link>
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
                  src="/david-mayes.png"
                  alt="Portrait of David Mayes"
                  width={760}
                  height={980}
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

      <Section id="tech" spacing="roomy" className={styles.lightSection}>
        <Container variant="large">
          <div className={styles.bandCard}>
            <div className={styles.bandHeader}>
              <p>Core Technologies</p>
            </div>
            <div className={styles.techGrid}>
              {techItems.map((item) => (
                <div key={item} className={styles.techItem}>
                  <span className={styles.techDot} aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
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
        </Container>
      </Section>

      <Section id="closing" spacing="compact" className={styles.lightSection}>
        <Container variant="medium">
          <div className={styles.closingCard}>
            <div className={styles.bandHeader}>
              <p>Why Hire Me?</p>
            </div>
            <p className={styles.whyHireCopy}>
              I combine leadership experience with modern software engineering
              to build applications that are reliable, scalable, and focused
              on solving real business problems. I care about the details, the
              people, and the impact.
            </p>
            <ButtonGroup>
              <Button asChild size="lg">
                <Link href="/contact">Let&apos;s Connect</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/about">More About Me</Link>
              </Button>
            </ButtonGroup>
          </div>

          <div className={styles.statusBar}>
            <span>Chattanooga, TN</span>
            <span>Available for full-time opportunities</span>
            <span>Open to remote or relocation</span>
          </div>
        </Container>
      </Section>
    </main>
  );
}
