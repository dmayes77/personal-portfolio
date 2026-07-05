import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cx } from "@/lib/utils";
import styles from "./Button.module.css";

const buttonStyles = cva(styles.button, {
  variants: {
    variant: {
      default: styles.default,
      secondary: styles.secondary,
      ghost: styles.ghost,
    },
    size: {
      default: styles.sizeDefault,
      sm: styles.sizeSm,
      lg: styles.sizeLg,
      icon: styles.sizeIcon,
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export default function Button({
  asChild = false,
  className,
  size,
  variant,
  ...props
}) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={cx(buttonStyles({ variant, size }), className)}
      {...props}
    />
  );
}
