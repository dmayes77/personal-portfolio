import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/content/projects";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import ButtonGroup from "@/components/ui/ButtonGroup";
import primitives from "@/styles/primitives.module.css";
import Link from "next/link";
import styles from "./caseStudy.module.css";

const proseSections = [
  { key: "summary", title: "Summary" },
  { key: "problem", title: "Problem" },
  { key: "solution", title: "Solution" },
  { key: "architecture", title: "Architecture" },
];

const listSections = [
  { key: "goals", title: "Goals" },
  { key: "constraints", title: "Constraints" },
  { key: "decisions", title: "Engineering Decisions" },
  { key: "challenges", title: "Challenges" },
  { key: "results", title: "Results" },
  { key: "lessonsLearned", title: "Lessons Learned" },
  { key: "futureImprovements", title: "Future Improvements" },
];

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.tagline || project.title,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const hasLinks = project.links?.live || project.links?.github;

  return (
    <main id="main-content">
      <PageHero
        id="project-hero"
        kicker={project.category || `${project.year}`}
        title={project.title}
        lede={project.tagline}
      >
        {project.tags?.length ? (
          <div className={primitives.pillRow}>
            {project.tags.map((tag) => (
              <span key={tag} className={primitives.pill}>
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        {hasLinks ? (
          <ButtonGroup>
            {project.links.live ? (
              <Button asChild size="lg">
                <a href={project.links.live} target="_blank" rel="noreferrer">
                  View live
                </a>
              </Button>
            ) : null}
            {project.links.github ? (
              <Button asChild variant="secondary" size="lg">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View code
                </a>
              </Button>
            ) : null}
          </ButtonGroup>
        ) : null}
      </PageHero>

      <Section id="project-body" spacing="roomy">
        <Container variant="medium">
          <div className={primitives.stackLg}>
            {proseSections
              .filter(({ key }) => project[key])
              .map(({ key, title }) => (
                <article key={key} className={primitives.card}>
                  <div className={primitives.cardHeading}>
                    <h2>{title}</h2>
                  </div>
                  <p className={styles.prose}>{project[key]}</p>
                </article>
              ))}

            {listSections
              .filter(({ key }) => project[key]?.length)
              .map(({ key, title }) => (
                <article key={key} className={primitives.card}>
                  <div className={primitives.cardHeading}>
                    <h2>{title}</h2>
                  </div>
                  <ul className={primitives.checkList} role="list">
                    {project[key].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
          </div>

          <p className={styles.backLink}>
            <Link href="/projects" className={primitives.inlineLink}>
              ← Back to all projects
            </Link>
          </p>
        </Container>
      </Section>
    </main>
  );
}
