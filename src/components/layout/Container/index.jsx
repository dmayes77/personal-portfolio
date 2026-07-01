import { cva } from "class-variance-authority";
import styles from "./Container.module.css";

const containerVariants = cva(styles.container, {
  variants: {
    variant: {
      full: styles.full,
      hero: styles.hero,
      large: styles.large,
      medium: styles.medium,
      small: styles.small,
    },
  },
  defaultVariants: {
    variant: "large",
  },
});

export default function Container({
  as: Component = "div",
  children,
  className,
  variant,
}) {
  const classes = [containerVariants({ variant }), className]
    .filter(Boolean)
    .join(" ");

  return <Component className={classes}>{children}</Component>;
}
