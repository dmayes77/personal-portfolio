import { cva } from "class-variance-authority";
import { cx } from "@/lib/utils";
import { getIconDefinition } from "./registry";
import styles from "./Icon.module.css";

const iconStyles = cva(styles.icon, {
  variants: {
    size: {
      sm: styles.sizeSm,
      md: styles.sizeMd,
      lg: styles.sizeLg,
    },
    tone: {
      current: styles.toneCurrent,
      inverse: styles.toneInverse,
    },
  },
  defaultVariants: {
    size: "md",
  },
});

function getTone(kind, tone) {
  if (tone) return tone;
  return kind === "brand" ? "brand" : "current";
}

function renderUiNodes(nodes) {
  return nodes.map(({ tag, props }, index) => {
    const Tag = tag;
    return <Tag key={`${tag}-${index}`} {...props} />;
  });
}

export default function Icon({
  name,
  className,
  color,
  label,
  size,
  stroke,
  tone,
}) {
  const icon = getIconDefinition(name);
  if (!icon) return null;

  const resolvedTone = getTone(icon.kind, tone);
  const titleId = label ? `icon-${name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}` : undefined;
  const style = color ? { color } : undefined;

  if (icon.kind === "brand") {
    const fill =
      resolvedTone === "brand" && !color ? icon.brandColor : color || "currentColor";

    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden={label ? undefined : "true"}
        aria-labelledby={titleId}
        className={cx(iconStyles({ size, tone: resolvedTone === "inverse" ? "inverse" : undefined }), className)}
        role={label ? "img" : undefined}
        style={style}
      >
        {label ? <title id={titleId}>{label}</title> : null}
        <path d={icon.path} fill={fill} stroke={stroke} />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke || "currentColor"}
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={label ? undefined : "true"}
      aria-labelledby={titleId}
      className={cx(iconStyles({ size, tone: resolvedTone === "inverse" ? "inverse" : "current" }), className)}
      role={label ? "img" : undefined}
      style={style}
    >
      {label ? <title id={titleId}>{label}</title> : null}
      {renderUiNodes(icon.nodes)}
    </svg>
  );
}
