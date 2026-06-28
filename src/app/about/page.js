import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import primitives from "@/styles/primitives.module.css";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main>
      <Section id="about-intro">
        <Container className={primitives.interiorLayout} variant="medium">
          <div className={primitives.stackMd}>
            <p className={primitives.eyebrow}>About page</p>
            <h1>Use this route as your first real interior page.</h1>
          </div>
          <div className={primitives.proseBlock}>
            <p>
              A good starter should demonstrate more than a homepage. This page
              gives you a clean pattern for brand story, background, services,
              team, editorial context, or any other secondary content.
            </p>
            <p>
              Replace this copy, keep the layout simple, and expand from here
              with sections that match your actual project.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
