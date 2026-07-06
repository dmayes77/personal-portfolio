"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { siteConfig } from "@/lib/constants";
import styles from "./ResumePrompt.module.css";

export default function ResumePrompt() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        aria-label="Resume"
        aria-haspopup="dialog"
        aria-expanded={open}
        data-tooltip="Resume"
        onClick={() => setOpen(true)}
      >
        <Icon name="fileText" />
      </button>

      {open ? (
        <div
          className={styles.backdrop}
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <div
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-prompt-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.close}
              aria-label="Close resume options"
              onClick={() => setOpen(false)}
            >
              <Icon name="close" />
            </button>

            <div className={styles.copy}>
              <p className={styles.eyebrow}>Resume</p>
              <h2 id="resume-prompt-title">Choose how you want to review it.</h2>
              <p>
                View the web version for a quick skim, or download the ATS-friendly PDF.
              </p>
            </div>

            <div className={styles.actions}>
              <Button asChild>
                <Link href={siteConfig.resume.pageHref} onClick={() => setOpen(false)}>
                  View Resume
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <a href={siteConfig.resume.pdfHref} download onClick={() => setOpen(false)}>
                  Download PDF
                </a>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
