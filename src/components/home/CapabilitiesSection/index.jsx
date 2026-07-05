import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Reveal from "@/components/ui/Reveal";
import { principles, processSteps } from "@/content/home";
import { skills } from "@/content/skills";
import { cx } from "@/lib/utils";
import common from "@/components/home/common.module.css";
import styles from "./CapabilitiesSection.module.css";

export default function CapabilitiesSection() {
  return (
    <Section id="capabilities" spacing="compact" className={common.lightSection}>
      <Container variant="large">
        <div className={common.sectionStack}>
          <Reveal delay={80}>
            <div className={cx(common.bandCard, styles.processPanel)}>
              <div className={common.bandHeader}>
                <p>How I Build</p>
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
          </Reveal>

          <div className={common.supportRow}>
            <Reveal
              as="article"
              className={cx(common.bandCard, common.supportPanel, styles.techPanel)}
              delay={160}
            >
              <div className={common.bandHeader}>
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
            </Reveal>

            <Reveal
              as="article"
              className={cx(common.bandCard, common.supportPanel, styles.principlesPanel)}
              delay={240}
            >
              <div className={common.bandHeader}>
                <p>Principles I Build By</p>
              </div>
              <div className={styles.principleGrid}>
                {principles.map((principle) => (
                  <span key={principle} className={styles.principlePill}>
                    {principle}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
