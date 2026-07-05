import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/content/projects";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import ButtonGroup from "@/components/ui/ButtonGroup";
import Card, { CardHeader } from "@/components/ui/Card";
import CheckList from "@/components/ui/CheckList";
import InlineLink from "@/components/ui/InlineLink";
import Pill, { PillGroup } from "@/components/ui/Pill";
import Stack from "@/components/ui/Stack";
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
    <>
      <PageHero
        id="project-hero"
        kicker={project.category || `${project.year}`}
        title={project.title}
        lede={project.tagline}
      >
        {project.tags?.length ? (
          <PillGroup>
            {project.tags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </PillGroup>
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
          <Stack gap="lg">
            {proseSections
              .filter(({ key }) => project[key])
              .map(({ key, title }) => (
                <Card key={key}>
                  <CardHeader>
                    <h2>{title}</h2>
                  </CardHeader>
                  <p className={styles.prose}>{project[key]}</p>
                </Card>
              ))}

            {listSections
              .filter(({ key }) => project[key]?.length)
              .map(({ key, title }) => (
                <Card key={key}>
                  <CardHeader>
                    <h2>{title}</h2>
                  </CardHeader>
                  <CheckList>
                    {project[key].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </CheckList>
                </Card>
              ))}
          </Stack>

          <p className={styles.backLink}>
            <InlineLink href="/#featured-projects">← Back to all projects</InlineLink>
          </p>
        </Container>
      </Section>
    </>
  );
}
