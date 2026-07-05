import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Reveal from "@/components/ui/Reveal";
import { philosophyPoints, strengths } from "@/content/home";
import { siteConfig } from "@/lib/constants";
import { cx } from "@/lib/utils";
import common from "@/components/home/common.module.css";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <Section id="about" spacing="compact" className={common.lightSection}>
      <Container variant="large">
        <div className={common.sectionStack}>
          <Reveal as="article" className={cx(common.bandCard, styles.editorialPanel)} delay={80}>
            <div className={common.bandHeader}>
              <p>Product-Minded Engineering</p>
            </div>
            <div className={styles.aboutCopy}>
              <p>
                I build software that solves real business problems through thoughtful product
                direction, clean architecture, and scalable engineering.
              </p>
              <p>
                My workflow starts at the UX and works backward. For me, low friction, ease of
                use, and a clear experience are what make people trust a product and stay loyal
                to it.
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
          </Reveal>

          <Reveal
            as="article"
            className={cx(common.bandCard, common.supportPanel, styles.valuesPanel)}
            delay={160}
          >
            <div className={common.bandHeader}>
              <p>What Working Together Feels Like</p>
            </div>
            <ul className={cx(common.checkList, common.checkColumns)} role="list">
              {philosophyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className={common.leadershipSummary}>
              Based in {siteConfig.location}, I bring a product mindset, operational discipline,
              and a UX-first approach to every build.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
