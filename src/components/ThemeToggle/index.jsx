"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const activeTheme = mounted ? resolvedTheme : "dark";
  const isDark = activeTheme === "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Activate ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
    >
      {isDark ? (
        <span className={styles.icon} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M20.2 14.4A8.5 8.5 0 1 1 9.6 3.8a7 7 0 0 0 10.6 10.6Z" />
          </svg>
        </span>
      ) : (
        <span className={styles.icon} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2.75v2.5M12 18.75v2.5M21.25 12h-2.5M5.25 12h-2.5M18.54 5.46l-1.77 1.77M7.23 16.77l-1.77 1.77M18.54 18.54l-1.77-1.77M7.23 7.23 5.46 5.46" />
          </svg>
        </span>
      )}
    </button>
  );
}
