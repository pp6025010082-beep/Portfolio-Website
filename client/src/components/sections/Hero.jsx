import { profile } from "../../data/content";
import Button from "../Button";
import profileImage from "../../assets/profile.jpg";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <span className={styles.greeting}>Hello, I'm</span>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.title}>{profile.title}</p>
          <p className={styles.tagline}>{profile.tagline}</p>

          <div className={styles.actions}>
            <Button as="a" href="#projects" variant="primary">
              View My Projects
            </Button>
            <Button as="a" href={profile.resumeUrl} variant="secondary" download>
              Download My CV
            </Button>
          </div>
        </div>

        <div className={styles.avatarWrap} aria-hidden="true">
          <img
            className={styles.avatar}
            src={profileImage}
            alt=""
            width="260"
            height="320"
          />
        </div>
      </div>
    </section>
  );
}
