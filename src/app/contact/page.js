import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { siteConfig } from "@/lib/constants";
import primitives from "@/styles/primitives.module.css";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      <Section id="contact-intro">
        <Container className={primitives.interiorLayout} variant="medium">
          <div className={primitives.stackMd}>
            <p className={primitives.eyebrow}>Contact page</p>
            <h1>Keep a simple path for inquiries from day one.</h1>
          </div>
          <div className={primitives.proseBlock}>
            <p>
              Public-facing sites usually need an obvious contact route, even if
              you later swap this out for a form provider, CRM embed, or
              booking flow.
            </p>
            <p>
              Starter email:
              {" "}
              <a
                className={primitives.inlineLink}
                href={`mailto:${siteConfig.contactEmail}`}
              >
                {siteConfig.contactEmail}
              </a>
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
