import Container from "@/components/layout/Container";
import Navigation from "@/components/layout/Navigation";
import ThemeToggle from "@/components/ThemeToggle";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#main-content" className={styles.skipLink}>
        Skip to content
      </a>
      <Container className={styles.inner} variant="large">
        <Link
          className={styles.brandMark}
          href="/"
          aria-label={`${siteConfig.name} — home`}
        >
          {siteConfig.name}
        </Link>

        <Navigation />

        <div className={styles.actions}>
          <Button asChild className={styles.cta} size="sm">
            <Link href={siteConfig.headerCta.href}>
              {siteConfig.headerCta.label}
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
