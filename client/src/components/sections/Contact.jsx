import { profile } from "../../data/content";
import SectionHeading from "../SectionHeading";
import ContactForm from "../ContactForm";
import FadeInSection from "../FadeInSection";
import styles from "./Contact.module.css";

const LINKS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: "View profile", href: profile.github },
  { label: "Telegram", value: "@oxdom1", href: profile.telegram },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <FadeInSection>
          <SectionHeading
            eyebrow="Contact"
            title="Let's Work Together"
            subtitle="Have an opportunity or question? Send a message and I'll get back to you soon."
          />
        </FadeInSection>

        <div className={styles.grid}>
          <FadeInSection>
            <ContactForm />
          </FadeInSection>

          <FadeInSection className={styles.info}>
            <h3 className={styles.infoTitle}>Other Ways to Reach Me</h3>
            <ul className={styles.linkList}>
              {LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noreferrer" className={styles.linkItem}>
                    <span className={styles.linkLabel}>{link.label}</span>
                    <span className={styles.linkValue}>{link.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
