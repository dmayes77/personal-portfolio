import Container from "@/components/layout/Container";
import ThemeToggle from "@/components/ThemeToggle";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";
import Link from "next/link";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner} variant="large">
        <Link className={styles.brandMark} href="/">
          {siteConfig.name}
        </Link>

        <nav className={styles.nav} aria-label="Primary navigation">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button asChild className={styles.cta} size="sm">
            <Link href={siteConfig.headerCta.href}>{siteConfig.headerCta.label}</Link>
          </Button>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
