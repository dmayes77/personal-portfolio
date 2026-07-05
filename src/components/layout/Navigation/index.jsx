"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/constants";
import Icon from "@/components/ui/Icon";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();
  const detailsRef = useRef(null);

  useEffect(() => {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  }, [pathname]);

  const links = siteConfig.nav.map((item) => {
    const isSectionLink = item.href.includes("#");
    const isActive = !isSectionLink && (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href));

    return (
      <Link
        key={item.href}
        href={item.href}
        className={styles.link}
        aria-current={isActive ? "page" : undefined}
      >
        {item.label}
      </Link>
    );
  });

  return (
    <>
      <nav className={styles.nav} aria-label="Primary navigation">
        {links}
      </nav>

      <details className={styles.mobileNav} ref={detailsRef}>
        <summary className={styles.mobileToggle} aria-label="Menu">
          <Icon name="menu" />
        </summary>
        <nav className={styles.mobileList} aria-label="Primary navigation">
          {links}
        </nav>
      </details>
    </>
  );
}
