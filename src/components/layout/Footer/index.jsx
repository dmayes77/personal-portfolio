import Container from "@/components/layout/Container";
import { siteConfig } from "@/lib/constants";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container className={styles.inner} variant="large">
        <p className={styles.copy}>
          © {year}{" "}
          <Link href="/" className={styles.nameLink}>
            {siteConfig.name}
          </Link>
        </p>
        <p className={styles.note}>Built with a UX-first, systems-minded approach.</p>
      </Container>
    </footer>
  );
}
