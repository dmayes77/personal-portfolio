import Container from "@/components/layout/Container";
import Navigation from "@/components/layout/Navigation";
import Icon from "@/components/ui/Icon";
import ThemeToggle from "@/components/ui/ThemeToggle";
import ResumePrompt from "@/components/layout/Header/ResumePrompt";
import { siteConfig } from "@/lib/constants";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const headerActionIcons = {
    GitHub: "github",
    LinkedIn: "linkedin",
    Resume: "fileText",
    Contact: "mail",
  };

  return (
    <header className={styles.header}>
      <Container className={styles.inner} variant="full">
        <Link
          className={styles.brandMark}
          href="/#hero"
          aria-label={`${siteConfig.name} — home`}
        >
          <span className={styles.brandFull}>{siteConfig.name}</span>
          <span className={styles.brandShort}>DM</span>
        </Link>

        <Navigation />

        <div className={styles.actions}>
          <nav className={styles.actionRail} aria-label="Profile links">
            {siteConfig.headerActions.map((item) =>
              item.label === "Resume" ? (
                <ResumePrompt key={item.label} />
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={styles.actionIcon}
                  aria-label={item.label}
                  data-tooltip={item.label}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <Icon name={headerActionIcons[item.label]} />
                </Link>
              )
            )}
          </nav>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
