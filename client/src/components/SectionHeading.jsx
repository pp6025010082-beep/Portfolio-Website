import styles from "./SectionHeading.module.css";

export default function SectionHeading({ title, subtitle, align = "center" }) {
  return (
    <div className={`${styles.wrap} ${align === "left" ? styles.left : ""}`}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
