import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";
import primitives from "@/styles/primitives.module.css";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main>
      <Section id="not-found">
        <Container
          className={[primitives.interiorLayout, primitives.stackMd].join(" ")}
          variant="small"
        >
          <p className={primitives.eyebrow}>404</p>
          <h1>That page does not exist.</h1>
          <p>
            Check the URL, or head back to the homepage and continue building
            your site from there.
          </p>
          <div>
            <Button asChild>
              <Link href="/">Back to home</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
