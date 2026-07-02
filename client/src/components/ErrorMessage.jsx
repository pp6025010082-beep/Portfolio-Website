import styles from "./ErrorMessage.module.css";

export default function ErrorMessage({ message = "Something went wrong.", onRetry }) {
  return (
    <div className={styles.wrap} role="alert">
      <p>{message}</p>
      {onRetry && (
        <button type="button" className={styles.retry} onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
}
