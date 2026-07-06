import common from "@/components/home/common.module.css";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import ButtonGroup from "@/components/ui/ButtonGroup";
import Reveal from "@/components/ui/Reveal";
import { leadershipPoints, targetRoles } from "@/content/home";
import { featuredProjects } from "@/content/projects";
import { cx } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import styles from "./FeaturedProjects.module.css";

export default function FeaturedProjects() {
  return (
    <Section id="featured-projects" spacing="compact" className={common.lightSection}>
      <Container variant="large">
        <div className={common.sectionStack}>
          <Reveal delay={80}>
            <div className={cx(common.bandCard, styles.featuredProjectsPanel)}>
              <div className={common.bandHeader}>
                <p>Featured Case Studies</p>
              </div>
              <p className={common.sectionLead}>
                A few examples of the workflow-heavy products, internal systems, and customer
                experiences I build best.
              </p>
              <div className={styles.projectGrid}>
                {featuredProjects.map((project) => (
                  <article key={project.slug} className={styles.projectCard}>
                    {project.thumbnail ? (
                      <div className={styles.projectImageWrap}>
                        <Image
                          src={project.thumbnail}
                          alt={`${project.title} screenshot`}
                          width={3360}
                          height={1500}
                          className={styles.projectImage}
                        />
                      </div>
                    ) : null}
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
                    {project.caseStudyReady ? (
                      <Link
                        href={`/projects/${project.slug}`}
                        className={styles.projectLink}
                      >
                        View Project
                      </Link>
                    ) : (
                      <span className={styles.projectStatus}>Still in dev</span>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className={cx(common.bandCard, styles.hirePanel)}>
              <div className={common.bandHeader}>
                <p>Where I Add Leverage</p>
              </div>
              <div className={styles.rolePillRow} aria-label="Best fit roles">
                {targetRoles.map((role) => (
                  <span key={role} className={styles.rolePill}>
                    {role}
                  </span>
                ))}
              </div>
              <div className={styles.statementBlock}>
                <p className={common.whyHireCopy}>
                  I do my best work on product teams that need someone who can move between product
                  thinking, architecture, and implementation without losing the thread.
                </p>
                <p className={common.leadershipSummary}>
                  My background in leadership and operations helps me make practical decisions,
                  communicate clearly, and build software that fits how teams actually work in
                  production, not just in planning docs.
                </p>
              </div>
              <ul className={cx(common.checkList, common.checkColumns)} role="list">
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
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
