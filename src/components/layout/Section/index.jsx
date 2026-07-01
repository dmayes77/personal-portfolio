import { cva } from "class-variance-authority";
import styles from "./Section.module.css";

const sectionVariants = cva(null, {
  variants: {
    variant: {
      default: null,
      hero: styles.hero,
      subtle: styles.subtle,
    },
    spacing: {
      compact: styles.compact,
      default: styles.default,
      roomy: styles.roomy,
    },
  },
  defaultVariants: {
    variant: "default",
    spacing: "default",
  },
});

export default function Section({
  as: Component = "section",
  children,
  className,
  id,
  spacing,
  variant,
}) {
  if (!id) {
    throw new Error("Section requires an id.");
  }

  const classes = [sectionVariants({ spacing, variant }), className]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} id={id}>
      {children}
    </Component>
  );
}
