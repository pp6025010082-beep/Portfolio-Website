import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, onViewDetails }) {
  const { title, description, imageUrl, technologies = [], githubUrl, liveUrl } = project;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        {imageUrl ? (
          <img src={imageUrl} alt={`Screenshot of ${title}`} className={styles.image} loading="lazy" />
        ) : (
          <div className={styles.imageFallback} aria-hidden="true">
            {title.slice(0, 1)}
          </div>
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        {technologies.length > 0 && (
          <ul className={styles.techList}>
            {technologies.map((tech) => (
              <li key={tech} className={styles.techChip}>
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className={styles.actions}>
          <button type="button" className={styles.detailsBtn} onClick={() => onViewDetails(project)}>
            View details
          </button>
          <span className={styles.externalLinks}>
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer" aria-label={`${title} GitHub repository`}>
                GitHub
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noreferrer" aria-label={`${title} live demo`}>
                Live demo
              </a>
            )}
          </span>
        </div>
      </div>
    </article>
  );
}
