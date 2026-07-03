import Button from "./Button";
import styles from "./ProjectDetails.module.css";

const FIELDS = [
  { key: "problem", label: "Problem Addressed" },
  { key: "contribution", label: "My Contribution" },
  { key: "challenges", label: "Challenges" },
  { key: "lessonsLearned", label: "Lessons Learned" },
];

export default function ProjectDetails({ project }) {
  const { description, mainFeatures = [], technologies = [], githubUrl, liveUrl } = project;

  return (
    <div className={styles.wrap}>
      <p className={styles.description}>{description}</p>

      {mainFeatures.length > 0 && (
        <div className={styles.block}>
          <h4 className={styles.blockTitle}>Main Features</h4>
          <ul className={styles.featureList}>
            {mainFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {technologies.length > 0 && (
        <div className={styles.block}>
          <h4 className={styles.blockTitle}>Technologies Used</h4>
          <ul className={styles.techList}>
            {technologies.map((tech) => (
              <li key={tech} className={styles.techChip}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )}

      {FIELDS.map(
        ({ key, label }) =>
          project[key] && (
            <div key={key} className={styles.block}>
              <h4 className={styles.blockTitle}>{label}</h4>
              <p className={styles.blockText}>{project[key]}</p>
            </div>
          )
      )}

      <div className={styles.linkRow}>
        {githubUrl && (
          <Button as="a" href={githubUrl} target="_blank" rel="noreferrer" variant="secondary">
            View Code
          </Button>
        )}
        {liveUrl && (
          <Button as="a" href={liveUrl} target="_blank" rel="noreferrer" variant="primary">
            Live Demo
          </Button>
        )}
      </div>
    </div>
  );
}
