import { skillGroups } from "../../data/content";
import SectionHeading from "../SectionHeading";
import SkillCard from "../SkillCard";
import FadeInSection from "../FadeInSection";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <FadeInSection>
          <SectionHeading eyebrow="Skills" title="Technical Skills" />
        </FadeInSection>

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <FadeInSection key={group.category}>
              <SkillCard category={group.category} skills={group.skills} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
