import { cva } from "class-variance-authority";
import { cx } from "@/lib/utils";
import styles from "./Stack.module.css";

const stackStyles = cva(styles.stack, {
  variants: {
    gap: {
      md: styles.gapMd,
      lg: styles.gapLg,
    },
  },
  defaultVariants: {
    gap: "md",
  },
});

export default function Stack({
  as: Component = "div",
  children,
  className,
  gap,
}) {
  return <Component className={cx(stackStyles({ gap }), className)}>{children}</Component>;
}
