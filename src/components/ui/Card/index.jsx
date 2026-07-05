import { cx } from "@/lib/utils";
import styles from "./Card.module.css";

export default function Card({
  as: Component = "article",
  children,
  className,
}) {
  return <Component className={cx(styles.card, className)}>{children}</Component>;
}

export function CardHeader({ as: Component = "div", children, className }) {
  return (
    <Component className={cx(styles.header, className)}>{children}</Component>
  );
}
