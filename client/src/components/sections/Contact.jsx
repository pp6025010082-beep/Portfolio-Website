import { profile } from "../../data/content";
import SectionHeading from "../SectionHeading";
import ContactForm from "../ContactForm";
import FadeInSection from "../FadeInSection";
import styles from "./Contact.module.css";

const LINKS = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "GitHub", href: profile.github },
  { label: "Telegram", href: profile.telegram },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <FadeInSection>
          <SectionHeading
            title="Let's Work Together"
            subtitle="Have an opportunity or question? Send a message and I'll get back to you soon."
          />
        </FadeInSection>

        <FadeInSection className={styles.card}>
          <h3 className={styles.cardTitle}>Send Me a Message</h3>
          <ContactForm />

          <div className={styles.divider} />

          <ul className={styles.linkRow}>
            {LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer" className={styles.linkItem}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </FadeInSection>
      </div>
    </section>
  );
}
