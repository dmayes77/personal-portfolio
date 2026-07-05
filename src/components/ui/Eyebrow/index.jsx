import { cx } from "@/lib/utils";
import styles from "./Eyebrow.module.css";

export default function Eyebrow({
  as: Component = "p",
  children,
  className,
}) {
  return <Component className={cx(styles.eyebrow, className)}>{children}</Component>;
}
