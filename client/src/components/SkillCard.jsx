import styles from "./SkillCard.module.css";

export default function SkillCard({ category, skills }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.category}>{category}</h3>
      <ul className={styles.list}>
        {skills.map((skill) => (
          <li key={skill} className={styles.chip}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
