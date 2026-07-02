import { experience } from "../../data/content";
import SectionHeading from "../SectionHeading";
import FadeInSection from "../FadeInSection";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <FadeInSection>
          <SectionHeading eyebrow="Experience" title="Education & Experience" />
        </FadeInSection>

        <ol className={styles.timeline}>
          {experience.map((item) => (
            <FadeInSection key={item.title} as="li" className={styles.item}>
              <div className={styles.dot} aria-hidden="true" />
              <div className={styles.content}>
                <span className={styles.type}>{item.type}</span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.meta}>
                  {item.place} &middot; {item.period}
                </p>
                <p className={styles.description}>{item.description}</p>
              </div>
            </FadeInSection>
          ))}
        </ol>
      </div>
    </section>
  );
}
