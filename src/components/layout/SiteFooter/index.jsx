import Container from "@/components/layout/Container";
import primitives from "@/styles/primitives.module.css";
import { siteConfig } from "@/lib/constants";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner} variant="large">
        <p className={styles.description}>{siteConfig.description}</p>
        <a className={primitives.inlineLink} href="https://nextjs.org/docs">
          Read the Next.js docs
        </a>
      </Container>
    </footer>
  );
}
