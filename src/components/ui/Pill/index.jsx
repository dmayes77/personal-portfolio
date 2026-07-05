import { cx } from "@/lib/utils";
import styles from "./Pill.module.css";

export function PillGroup({ as: Component = "div", children, className }) {
  return <Component className={cx(styles.group, className)}>{children}</Component>;
}

export default function Pill({
  as: Component = "span",
  children,
  className,
}) {
  return <Component className={cx(styles.pill, className)}>{children}</Component>;
}
