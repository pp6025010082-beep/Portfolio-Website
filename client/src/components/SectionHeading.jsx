import styles from "./SectionHeading.module.css";

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  return (
    <div className={`${styles.wrap} ${align === "left" ? styles.left : ""}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
