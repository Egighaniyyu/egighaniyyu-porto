import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "white" | "accent";

type ButtonProps = {
  label: string;
  href?: string;
  variant?: Variant;
  size?: "sm" | "md";
  icon?: string;
  as?: "a" | "button";
  type?: "button" | "submit" | "reset";
  className?: string;
  target?: string;
  rel?: string;
};

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  white: "btn-white-style",
  accent: "btn-accent",
};

export default function Button({
  label,
  href,
  variant = "primary",
  size = "md",
  icon = "→",
  as,
  type = "button",
  className = "",
  target,
  rel,
}: ButtonProps) {
  const computedRel = rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);
  const classes = `btn ${variantClass[variant]} ${size === "sm" ? "btn-sm" : ""} ${className}`.trim();
  const inner: ReactNode = (
    <>
      <div className="btn-text">
        <span className="btn-label">{label}</span>
        <span className="btn-label-clone">{label}</span>
      </div>
      <div className="btn-arrow">
        <span className="btn-icon">{icon}</span>
        <span className="btn-icon-clone">{icon}</span>
      </div>
    </>
  );

  const Tag = as ?? (href ? "a" : "button");
  if (Tag === "a") {
    return (
      <a href={href ?? "#"} className={classes} target={target} rel={computedRel}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} className={classes}>
      {inner}
    </button>
  );
}
