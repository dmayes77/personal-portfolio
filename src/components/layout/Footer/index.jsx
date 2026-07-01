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
        <nav className={styles.nav} aria-label="Footer navigation">
          {siteConfig.footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={styles.link}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
