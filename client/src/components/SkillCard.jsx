import styles from "./SkillCard.module.css";

const VARIANTS = [styles.variant0, styles.variant1, styles.variant2, styles.variant3];

export default function SkillCard({ category, skills, index = 0 }) {
  const variant = VARIANTS[index % VARIANTS.length];

  return (
    <div className={`${styles.card} ${variant}`}>
      <h3 className={styles.category}>
        <span className={styles.dot} aria-hidden="true" />
        {category}
      </h3>
      <ul className={styles.list}>
        {skills.map((skill) => (
          <li key={skill.name} className={styles.row}>
            <span className={styles.nameGroup}>
              {skill.icon && <img className={styles.icon} src={skill.icon} alt="" aria-hidden="true" loading="lazy" />}
              <span className={styles.name}>{skill.name}</span>
            </span>
            <span className={`${styles.badge} ${styles[skill.level]}`}>{skill.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
