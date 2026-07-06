import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/content/projects";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import ButtonGroup from "@/components/ui/ButtonGroup";
import CheckList from "@/components/ui/CheckList";
import InlineLink from "@/components/ui/InlineLink";
import Pill, { PillGroup } from "@/components/ui/Pill";
import Image from "next/image";
import styles from "./caseStudy.module.css";

const proseSections = [
  { key: "summary", title: "Summary" },
  { key: "problem", title: "Problem" },
  { key: "solution", title: "Solution" },
  { key: "architecture", title: "Architecture" },
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
  const storySections = proseSections.filter(({ key }) => project[key]);
  const spotlightItems = [
    {
      label: "Outcome",
      value: project.impact,
    },
    {
      label: "Focus",
      value: project.subtitle || project.category,
    },
    {
      label: "Stack",
      value: project.tags?.join(" • "),
    },
  ].filter(({ value }) => value);
  const buildSections = [
    { key: "decisions", title: "Engineering Decisions" },
    { key: "challenges", title: "Challenges" },
    { key: "results", title: "Results" },
  ].filter(({ key }) => project[key]?.length);
  const closingSections = [
    { key: "lessonsLearned", title: "Lessons Learned" },
    { key: "futureImprovements", title: "Future Improvements" },
  ].filter(({ key }) => project[key]?.length);

  return (
    <>
      <Section id="project-hero" variant="hero" className={styles.heroSection}>
        <Container variant="full">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.heroKicker}>
                {project.category || `${project.year}`}
              </p>
              <h1 className={styles.heroTitle}>{project.title}</h1>
              <p className={styles.heroLede}>{project.tagline}</p>
              {project.tags?.length ? (
                <PillGroup>
                  {project.tags.map((tag) => (
                    <Pill key={tag}>{tag}</Pill>
                  ))}
                </PillGroup>
              ) : null}
              {project.links.github ? (
                <ButtonGroup>
                  <Button asChild variant="secondary">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View code
                    </a>
                  </Button>
                </ButtonGroup>
              ) : null}
            </div>

            {project.thumbnail ? (
              <div className={styles.heroMedia}>
                <div className={styles.heroVisual}>
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} screenshot`}
                    width={3360}
                    height={1500}
                    className={styles.heroImage}
                    priority
                  />
                </div>

                {project.links.live ? (
                  <div className={styles.heroActions}>
                    <Button asChild>
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View live
                      </a>
                    </Button>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </Container>
      </Section>

      <Section id="project-body" spacing="roomy">
        <Container variant="full">
          {spotlightItems.length ? (
            <div className={styles.spotlightStrip}>
              {spotlightItems.map(({ label, value }) => (
                <div key={label} className={styles.spotlightItem}>
                  <p className={styles.spotlightLabel}>{label}</p>
                  <p className={styles.spotlightValue}>{value}</p>
                </div>
              ))}
            </div>
          ) : null}

          <div className={styles.bodyGrid}>
            <div className={styles.storyColumn}>
              {storySections.map(({ key, title }) => (
                <section key={key} className={styles.storySection}>
                  <div className={styles.storyLabel}>{title}</div>
                  <div className={styles.storyContent}>
                    <p className={styles.prose}>{project[key]}</p>
                  </div>
                </section>
              ))}
            </div>

            <aside className={styles.sidebar}>
              {project.impact ? (
                <section className={styles.sidePanel}>
                  <p className={styles.sideEyebrow}>Impact</p>
                  <p className={styles.sideHighlight}>{project.impact}</p>
                </section>
              ) : null}

              {project.complexity ? (
                <section className={styles.sidePanel}>
                  <p className={styles.sideEyebrow}>Project Context</p>
                  <p className={styles.sideCopy}>{project.complexity}</p>
                </section>
              ) : null}

              {project.goals?.length ? (
                <section className={styles.sidePanel}>
                  <p className={styles.sideEyebrow}>Goals</p>
                  <CheckList className={styles.compactList}>
                    {project.goals.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </CheckList>
                </section>
              ) : null}

              {project.constraints?.length ? (
                <section className={styles.sidePanel}>
                  <p className={styles.sideEyebrow}>Constraints</p>
                  <CheckList className={styles.compactList}>
                    {project.constraints.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </CheckList>
                </section>
              ) : null}
            </aside>
          </div>

          {buildSections.length ? (
            <div className={styles.panelSection}>
              <div className={styles.sectionHeading}>
                <p>Build Details</p>
                <h2>How the work was shaped in practice.</h2>
              </div>
              <div className={styles.detailRows}>
                {buildSections.map(({ key, title }, index) => (
                  <section key={key} className={styles.detailRow}>
                    <div className={styles.detailMeta}>
                      <p className={styles.detailIndex}>
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3>{title}</h3>
                    </div>
                    <CheckList>
                      {project[key].map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </CheckList>
                  </section>
                ))}
              </div>
            </div>
          ) : null}

          {closingSections.length ? (
            <div className={styles.panelSection}>
              <div className={styles.sectionHeading}>
                <p>What Followed</p>
                <h2>Lessons, momentum, and where the product could go next.</h2>
              </div>
              <div className={styles.detailRows}>
                {closingSections.map(({ key, title }, index) => (
                  <section key={key} className={styles.detailRow}>
                    <div className={styles.detailMeta}>
                      <p className={styles.detailIndex}>
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3>{title}</h3>
                    </div>
                    <CheckList>
                      {project[key].map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </CheckList>
                  </section>
                ))}
              </div>
            </div>
          ) : null}

          <p className={styles.backLink}>
            <InlineLink href="/#featured-projects">← Back to all projects</InlineLink>
          </p>
        </Container>
      </Section>
    </>
  );
}
