import { useState } from "react";
import { authService } from "../services/authService";
import { ApiError } from "../services/api";
import { useAdminAuth } from "../context/AdminAuthContext";
import Button from "../components/Button";
import styles from "./AdminLogin.module.css";

export default function AdminLogin() {
  const { login } = useAdminAuth();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const { token } = await authService.login(password);
      login(token);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Login failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.wrap}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Admin Login</h1>
        <p className={styles.subtitle}>Enter the admin password to manage portfolio projects.</p>

        <div className={styles.field}>
          <label htmlFor="admin-password">Password</label>
          <input
            id="admin-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoFocus
            required
          />
        </div>

        {error && (
          <p className={styles.error} role="alert">
            {error}
          </p>
        )}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Checking..." : "Log In"}
        </Button>
      </form>
    </section>
  );
}
