import { Link } from "react-router-dom";
import Button from "../components/Button";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.text}>The page you're looking for doesn't exist.</p>
        <Button as={Link} to="/">
          Back to Home
        </Button>
      </div>
    </section>
  );
}
