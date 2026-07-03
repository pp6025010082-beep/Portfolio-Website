import styles from "./ProjectCard.module.css";

const VARIANTS = [styles.variant0, styles.variant1, styles.variant2];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ProjectCard({ project, index = 0, onViewDetails }) {
  const { title, description, imageUrl, technologies = [], githubUrl, liveUrl, featured } = project;
  const variant = VARIANTS[index % VARIANTS.length];

  return (
    <article className={`${styles.card} ${variant}`}>
      <div className={styles.pathBar} aria-hidden="true">
        ~/projects/{slugify(title)}
        {featured && <span className={styles.featuredBadge}>Featured</span>}
      </div>
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
              <a
                className={styles.iconLink}
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} GitHub repository`}
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.77.12 3.06.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
                Code
              </a>
            )}
            {liveUrl && (
              <a
                className={styles.iconLink}
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} live demo`}
              >
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
                  <path d="M5 3v18l16-9L5 3Z" />
                </svg>
                Demo
              </a>
            )}
          </span>
        </div>
      </div>
    </article>
  );
}
