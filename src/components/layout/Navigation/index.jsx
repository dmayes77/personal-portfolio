"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/constants";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="Primary navigation">
      {siteConfig.nav.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

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
      })}
    </nav>
  );
}
