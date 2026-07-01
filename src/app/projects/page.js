import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/layout/Section";
import { projects } from "@/content/projects";
import primitives from "@/styles/primitives.module.css";
import Link from "next/link";
import styles from "./projects.module.css";

export const metadata = {
  title: "Projects",
  description:
    "Engineering case studies from David Mayes — problems, decisions, and outcomes.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <PageHero
        id="projects-hero"
        kicker="Work"
        title="Projects"
        lede="Case studies from SaaS platforms and business tools built end-to-end — architecture, decisions, and outcomes."
      />

      <Section id="projects-list" spacing="roomy">
        <Container variant="large">
          <div className={styles.grid}>
            {projects.map((project) => (
              <article key={project.slug} className={styles.card}>
                <div className={styles.meta}>
                  {project.category ? <span>{project.category}</span> : null}
                  <span>{project.year}</span>
                </div>
                <h2>{project.title}</h2>
                {project.tagline ? <p>{project.tagline}</p> : null}
                {project.tags?.length ? (
                  <div className={primitives.pillRow}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={primitives.pill}>
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
                <Link
                  href={`/projects/${project.slug}`}
                  className={styles.link}
                >
                  View case study
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
