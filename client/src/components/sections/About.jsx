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

        <FadeInSection className={styles.paragraphs}>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </FadeInSection>
      </div>
    </section>
  );
}
