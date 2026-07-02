import { profile } from "../data/content";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          &copy; {year} {profile.name}. Built with React, Node.js, and MongoDB.
        </p>
        <ul className={styles.links}>
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`}>Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
