import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Stack from "@/components/ui/Stack";
import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <Section id="not-found">
        <Container className={styles.layout} variant="small">
          <Stack gap="md">
            <Eyebrow>404</Eyebrow>
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
          </Stack>
        </Container>
      </Section>
    </>
  );
}
