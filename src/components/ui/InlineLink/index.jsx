import Link from "next/link";
import { cx } from "@/lib/utils";
import styles from "./InlineLink.module.css";

export default function InlineLink({ children, className, ...props }) {
  return (
    <Link className={cx(styles.link, className)} {...props}>
      {children}
    </Link>
  );
}
