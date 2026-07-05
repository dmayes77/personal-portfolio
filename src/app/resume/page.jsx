import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import ButtonGroup from "@/components/ui/ButtonGroup";
import Eyebrow from "@/components/ui/Eyebrow";
import Pill, { PillGroup } from "@/components/ui/Pill";
import {
  resumeContact,
  resumeEducation,
  resumeExperience,
  resumeProjects,
  resumeSkills,
  resumeSummary,
} from "@/content/resume";
import { siteConfig } from "@/lib/constants";
import Link from "next/link";
import styles from "./resume.module.css";

export const metadata = {
  title: "Resume",
  description:
    "Web resume for David Mayes, covering summary, technical skills, experience, projects, and education.",
};

export default function ResumePage() {
  return (
    <>
      <PageHero
        id="resume-hero"
        kicker="Web Resume"
        title="David Mayes"
        lede="Full-Stack Software Engineer with 10+ years building production-ready web applications and SaaS platforms, plus leadership experience managing approximately 105 associates."
      >
        <ButtonGroup>
          <Button asChild size="lg">
            <a href={siteConfig.resume.pdfHref} download>
              Download PDF Resume
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </ButtonGroup>
      </PageHero>

      <Section id="resume-overview" spacing="roomy">
        <Container variant="large">
          <div className={styles.topMeta}>
            {resumeContact.map((item) => (
              <div key={item.label} className={styles.metaItem}>
                <span>{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {item.value}
                  </a>
                ) : (
                  <strong>{item.value}</strong>
                )}
              </div>
            ))}
          </div>

          <div className={styles.resumeGrid}>
            <div className={styles.mainColumn}>
              <section className={styles.editorialBlock}>
                <Eyebrow>Professional Summary</Eyebrow>
                <div className={styles.summaryCopy}>
                  {resumeSummary.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>

              <section className={styles.editorialBlock}>
                <Eyebrow>Professional Experience</Eyebrow>
                <div className={styles.experienceList}>
                  {resumeExperience.map((item) => (
                    <article key={`${item.role}-${item.dates}`} className={styles.experienceItem}>
                      <div className={styles.roleHeader}>
                        <div>
                          <h2>{item.role}</h2>
                          {item.company ? <p>{item.company}</p> : null}
                        </div>
                        <span className={styles.roleDates}>{item.dates}</span>
                      </div>
                      <ul className={styles.bulletList}>
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>

              <section className={styles.editorialBlock}>
                <Eyebrow>Engineering Projects</Eyebrow>
                <div className={styles.projectGrid}>
                  {resumeProjects.map((project) => (
                    <article key={project.name} className={styles.projectCard}>
                      <div className={styles.projectHeader}>
                        <h2>{project.name}</h2>
                        <span>Selected Work</span>
                      </div>
                      <div className={styles.projectCopy}>
                        <p>{project.summary}</p>
                        <p>{project.note}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <aside className={styles.sideColumn}>
              <section className={styles.sidePanel}>
                <Eyebrow>Technical Skills</Eyebrow>
                <div className={styles.skillGroups}>
                  {resumeSkills.map((group) => (
                    <div key={group.category} className={styles.skillGroup}>
                      <h3>{group.category}</h3>
                      <PillGroup>
                        {group.items.map((item) => (
                          <Pill key={item}>{item}</Pill>
                        ))}
                      </PillGroup>
                    </div>
                  ))}
                </div>
              </section>

              <section className={styles.sidePanel}>
                <Eyebrow>Education & Development</Eyebrow>
                <ul className={styles.educationList}>
                  {resumeEducation.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </aside>
          </div>
        </Container>
      </Section>

      <Section id="resume-cta" spacing="compact">
        <Container variant="medium">
          <div className={styles.cta}>
            <p>Need the PDF version or want to talk through fit, projects, or full work history?</p>
            <ButtonGroup>
              <Button asChild size="lg">
                <a href={siteConfig.resume.pdfHref} download>
                  Download PDF
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">Get in touch</Link>
              </Button>
            </ButtonGroup>
          </div>
        </Container>
      </Section>
    </>
  );
}
