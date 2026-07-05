import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import Card, { CardHeader } from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { siteConfig, socialLinks } from "@/lib/constants";
import { submitContactForm } from "./actions";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with David Mayes about full-time remote product engineering roles.",
};

export default async function ContactPage({ searchParams }) {
  const { status } = await searchParams;

  return (
    <>
      <PageHero
        id="contact-hero"
        kicker="Contact"
        title="Get in touch"
        lede="Open to full-time remote roles and conversations about SaaS, product engineering, and building software that solves real business problems."
      />

      <Section id="contact-body" spacing="roomy">
        <Container variant="large">
          <div className={styles.grid}>
            <Card>
              <CardHeader>
                <h2>Send a message</h2>
              </CardHeader>

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
            </Card>

            <Card>
              <CardHeader>
                <h2>Let&apos;s connect</h2>
              </CardHeader>
              <div className={styles.contactList}>
                {socialLinks.map((item) => (
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
                {siteConfig.location} — available for full-time remote opportunities.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
