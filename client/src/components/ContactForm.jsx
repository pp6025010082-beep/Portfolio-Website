import { useState } from "react";
import { messagesService } from "../services/messagesService";
import { ApiError } from "../services/api";
import Button from "./Button";
import styles from "./ContactForm.module.css";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = "Name is required.";

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.subject.trim()) errors.subject = "Subject is required.";

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  } else if (values.message.trim().length > 2000) {
    errors.message = "Message should be under 2000 characters.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [serverError, setServerError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    setServerError("");

    try {
      await messagesService.send(values);
      setStatus("success");
      setValues(EMPTY_FORM);
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof ApiError ? err.message : "Failed to send message.");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span id="name-error" className={styles.fieldError}>
              {errors.name}
            </span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span id="email-error" className={styles.fieldError}>
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={handleChange}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <span id="subject-error" className={styles.fieldError}>
            {errors.subject}
          </span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <span id="message-error" className={styles.fieldError}>
            {errors.message}
          </span>
        )}
      </div>

      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>

      {status === "success" && (
        <p className={styles.success} role="status">
          Thanks for reaching out! Your message has been sent.
        </p>
      )}
      {status === "error" && (
        <p className={styles.error} role="alert">
          {serverError}
        </p>
      )}
    </form>
  );
}
