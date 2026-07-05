import { cx } from "@/lib/utils";
import styles from "./CheckList.module.css";

export default function CheckList({
  as: Component = "ul",
  children,
  className,
}) {
  return (
    <Component className={cx(styles.list, className)} role="list">
      {children}
    </Component>
  );
}
