import { skillGroups } from "../../data/content";
import SectionHeading from "../SectionHeading";
import SkillCard from "../SkillCard";
import FadeInSection from "../FadeInSection";
import styles from "./Skills.module.css";

const LEVELS = [
  { key: "advanced", label: "Advanced" },
  { key: "intermediate", label: "Intermediate" },
  { key: "learning", label: "Learning" },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <FadeInSection>
          <SectionHeading title="Technical Skills" />
        </FadeInSection>

        <div className={styles.grid}>
          {skillGroups.map((group, index) => (
            <FadeInSection key={group.category}>
              <SkillCard category={group.category} skills={group.skills} index={index} />
            </FadeInSection>
          ))}
        </div>

        <div className={styles.legend}>
          {LEVELS.map((level) => (
            <span key={level.key} className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles[level.key]}`} />
              {level.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
