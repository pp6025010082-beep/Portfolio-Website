import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

export default function Modal({ title, onClose, children }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.header}>
          <h3 id="modal-title" className={styles.title}>
            {title}
          </h3>
          <button
            type="button"
            ref={closeButtonRef}
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close dialog"
          >
            &times;
          </button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
