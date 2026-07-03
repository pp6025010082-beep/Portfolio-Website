import { experience } from "../../data/content";
import SectionHeading from "../SectionHeading";
import FadeInSection from "../FadeInSection";
import styles from "./Experience.module.css";

const education = experience.filter((item) => item.type === "Education");
const workExperience = experience.filter((item) => item.type === "Experience");

function ExperienceList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.title} className={styles.item}>
          <h4 className={styles.itemTitle}>
            {item.title}
            {item.place && <span className={styles.place}>, {item.place}</span>}
          </h4>
          {item.degree && <p className={styles.degree}>{item.degree}</p>}
          <p className={styles.meta}>{item.period}</p>
          {item.description && <p className={styles.description}>{item.description}</p>}
        </li>
      ))}
    </ul>
  );
}

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <FadeInSection>
          <SectionHeading eyebrow="Experience" title="Education & Experience" />
        </FadeInSection>

        <div className={styles.columns}>
          <FadeInSection className={styles.column}>
            <h3 className={styles.columnTitle}>Education</h3>
            <ExperienceList items={education} />
          </FadeInSection>

          <FadeInSection className={styles.column}>
            <h3 className={styles.columnTitle}>Experience</h3>
            <ExperienceList items={workExperience} />
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
