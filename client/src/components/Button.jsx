import styles from "./Button.module.css";

/**
 * Shared button used for CTAs, form submits, and admin actions.
 * variant: "primary" | "secondary" | "ghost" | "danger"
 */
export default function Button({
  children,
  variant = "primary",
  as = "button",
  className = "",
  ...rest
}) {
  const Tag = as;
  return (
    <Tag className={`${styles.btn} ${styles[variant]} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
