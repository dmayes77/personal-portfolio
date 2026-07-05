import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cx } from "@/lib/utils";
import { cva } from "class-variance-authority";
import styles from "./PageHero.module.css";

const sectionVariants = cva(styles.section, {
  variants: {
    variant: {
      page: styles.page,
      showcase: styles.showcase,
      banner: styles.banner,
    },
  },
  defaultVariants: {
    variant: "page",
  },
});

const innerVariants = cva(styles.inner, {
  variants: {
    variant: {
      page: styles.innerPage,
      showcase: styles.innerShowcase,
      banner: styles.innerBanner,
    },
    height: {
      auto: null,
      screen: styles.screenHeight,
    },
  },
  defaultVariants: {
    variant: "page",
    height: "auto",
  },
});

export default function PageHero({
  id,
  kicker,
  title,
  lede,
  children,
  className,
  containerVariant = "large",
  height,
  innerClassName,
  variant,
}) {
  const hasIntro = kicker || title || lede;

  return (
    <Section
      id={id}
      variant="hero"
      className={cx(sectionVariants({ variant }), className)}
    >
      <Container variant={containerVariant}>
        <div className={cx(innerVariants({ variant, height }), innerClassName)}>
          {hasIntro ? (
            <div className={styles.intro}>
              {kicker ? <p className={styles.kicker}>{kicker}</p> : null}
              {title ? <h1 className={styles.title}>{title}</h1> : null}
              {lede ? <p className={styles.lede}>{lede}</p> : null}
            </div>
          ) : null}
          {children}
        </div>
      </Container>
    </Section>
  );
}
