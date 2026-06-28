import { cn } from "@/lib/utils";
import styles from "./ButtonGroup.module.css";

export default function ButtonGroup({
  align = "start",
  children,
  className,
}) {
  return (
    <div
      className={cn(styles.group, align === "center" && styles.center, className)}
      role="group"
    >
      {children}
    </div>
  );
}
