import { about } from "../../data/content";
import SectionHeading from "../SectionHeading";
import FadeInSection from "../FadeInSection";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <FadeInSection>
          <SectionHeading title="Who I Am" />
        </FadeInSection>

        <FadeInSection className={styles.content}>
          <h3 className={styles.headline}>{about.headline}</h3>
          <div className={styles.paragraphs}>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.tagGroup}>
            <span className={styles.tagLabel}>Strengths</span>
            <ul className={styles.tagList}>
              {about.strengths.map((item) => (
                <li key={item} className={styles.tag}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.tagGroup}>
            <span className={styles.tagLabel}>Values</span>
            <ul className={styles.tagList}>
              {about.values.map((item) => (
                <li key={item} className={styles.tag}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
