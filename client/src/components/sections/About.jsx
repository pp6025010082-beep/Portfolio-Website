import { about } from "../../data/content";
import SectionHeading from "../SectionHeading";
import FadeInSection from "../FadeInSection";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <FadeInSection>
          <SectionHeading eyebrow="About" title="Who I Am" />
        </FadeInSection>

        <div className={styles.grid}>
          <FadeInSection className={styles.paragraphs}>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </FadeInSection>

          <FadeInSection className={styles.sidebar}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Strengths</h3>
              <ul className={styles.tagList}>
                {about.strengths.map((item) => (
                  <li key={item} className={styles.tag}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Values</h3>
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
      </div>
    </section>
  );
}
