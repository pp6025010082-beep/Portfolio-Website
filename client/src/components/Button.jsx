import styles from "./Button.module.css";

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
