import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { siteConfig } from "@/lib/constants";
import primitives from "@/styles/primitives.module.css";
import { submitContactForm } from "./actions";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with David Mayes about full-time roles, contract work, or collaboration.",
};

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.contactEmail,
    href: `mailto:${siteConfig.contactEmail}`,
    icon: "mail",
  },
  {
    label: "GitHub",
    value: "github.com/dmayes77",
    href: "https://github.com/dmayes77",
    icon: "github",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/davidmayes",
    href: "https://www.linkedin.com/in/davidmayes",
    icon: "linkedin",
  },
];

export default async function ContactPage({ searchParams }) {
  const { status } = await searchParams;

  return (
    <main id="main-content">
      <PageHero
        id="contact-hero"
        kicker="Contact"
        title="Get in touch"
        lede="Open to full-time roles, contract engagements, and conversations about SaaS architecture and product engineering."
      />

      <Section id="contact-body" spacing="roomy">
        <Container variant="large">
          <div className={styles.grid}>
            <article className={primitives.card}>
              <div className={primitives.cardHeading}>
                <h2>Send a message</h2>
              </div>

              {status === "error" ? (
                <p role="alert" className={styles.formError}>
                  Please fill in your name, email, and message before
                  sending.
                </p>
              ) : null}

              <form action={submitContactForm} className={styles.form}>
                <div className={styles.field}>
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required />
                </div>

                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required />
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={6} required />
                </div>

                <Button type="submit" size="lg" className={styles.submit}>
                  Send message
                </Button>
              </form>
            </article>

            <article className={primitives.card}>
              <div className={primitives.cardHeading}>
                <h2>Let&apos;s connect</h2>
              </div>
              <div className={styles.contactList}>
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={styles.contactItem}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <span className={styles.contactIcon}>
                      <Icon name={item.icon} />
                    </span>
                    <span>
                      <strong>{item.label}</strong>
                      <em>{item.value}</em>
                    </span>
                  </a>
                ))}
              </div>
              <p className={styles.location}>
                Chattanooga, TN — available for remote or relocation.
              </p>
            </article>
          </div>
        </Container>
      </Section>
    </main>
  );
}
