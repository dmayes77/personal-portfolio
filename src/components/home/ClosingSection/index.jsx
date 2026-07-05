import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { siteConfig, socialLinks } from "@/lib/constants";
import { cx } from "@/lib/utils";
import common from "@/components/home/common.module.css";
import styles from "./ClosingSection.module.css";

export default function ClosingSection() {
  return (
    <Section id="closing" spacing="compact" className={common.lightSection}>
      <Container variant="large">
        <div className={common.sectionStack}>
          <div className={common.supportRow}>
            <Reveal
              as="article"
              className={cx(common.bandCard, common.supportPanel, styles.availabilityPanel)}
              delay={80}
            >
              <div className={common.bandHeader}>
                <p>Best Fit</p>
              </div>
              <p className={common.whyHireCopy}>
                Best aligned with full-time remote teams building workflow-heavy products where
                clear systems, thoughtful execution, and strong product instincts matter.
              </p>
              <ul className={common.checkList} role="list">
                <li>{siteConfig.location}</li>
                <li>Available for remote full-time opportunities</li>
                <li>
                  Best aligned with remote SaaS and product teams building workflow-heavy
                  applications
                </li>
              </ul>
            </Reveal>

            <Reveal
              as="article"
              className={cx(common.bandCard, styles.connectPanel)}
              delay={160}
            >
              <div className={common.bandHeader}>
                <p>Let&apos;s Connect</p>
              </div>
              <div className={common.contactList}>
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={common.contactItem}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <span className={common.contactIcon}>
                      <Icon name={item.icon} />
                    </span>
                    <span>
                      <strong>{item.label}</strong>
                      <em>{item.value}</em>
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
