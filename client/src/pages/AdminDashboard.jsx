import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projectsService } from "../services/projectsService";
import { ApiError } from "../services/api";
import { useAdminAuth } from "../context/AdminAuthContext";
import Button from "../components/Button";
import Modal from "../components/Modal";
import ProjectForm from "../components/ProjectForm";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorMessage from "../components/ErrorMessage";
import styles from "./AdminDashboard.module.css";

export default function AdminDashboard() {
  const { token, logout } = useAdminAuth();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");
  const [editingProject, setEditingProject] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [actionError, setActionError] = useState("");
  const errorRef = useRef(null);

  useEffect(() => {
    if (actionError) {
      errorRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [actionError]);

  const loadProjects = async () => {
    setStatus("loading");
    try {
      const data = await projectsService.getAll();
      setProjects(data);
      setStatus("success");
    } catch (err) {
      setErrorMessage(err instanceof ApiError ? err.message : "Failed to load projects.");
      setStatus("error");
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const openCreateForm = () => {
    setEditingProject(null);
    setActionError("");
    setIsFormOpen(true);
  };

  const openEditForm = (project) => {
    setEditingProject(project);
    setActionError("");
    setIsFormOpen(true);
  };

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    setActionError("");
    try {
      if (editingProject) {
        await projectsService.update(editingProject._id, values, token);
      } else {
        await projectsService.create(values, token);
      }
      setIsFormOpen(false);
      await loadProjects();
    } catch (err) {
      setActionError(err instanceof ApiError ? err.message : "Failed to save project.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleDelete = async (project) => {
    const confirmed = window.confirm(`Delete "${project.title}"? This cannot be undone.`);
    if (!confirmed) return;

    try {
      await projectsService.remove(project._id, token);
      await loadProjects();
    } catch (err) {
      setActionError(err instanceof ApiError ? err.message : "Failed to delete project.");
    }
  };

  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerRow}>
            <h1 className={styles.title}>Project Management</h1>
            <div className={styles.headerActions}>
              <Button variant="secondary" onClick={openCreateForm}>
                Add Project
              </Button>
              <Button variant="ghost" onClick={handleLogout}>
                Log Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        {status === "loading" && <LoadingIndicator label="Loading projects..." />}
        {status === "error" && <ErrorMessage message={errorMessage} onRetry={loadProjects} />}

        {status === "success" && (
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Technologies</th>
                  <th>Featured</th>
                  <th className={styles.actionsCol}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project._id}>
                    <td>{project.title}</td>
                    <td>{(project.technologies || []).join(", ")}</td>
                    <td>{project.featured ? "Yes" : "No"}</td>
                    <td className={styles.actionsCol}>
                      <div className={styles.actionsGroup}>
                        <button type="button" className={styles.linkBtn} onClick={() => openEditForm(project)}>
                          Edit
                        </button>
                        <button
                          type="button"
                          className={`${styles.linkBtn} ${styles.deleteBtn}`}
                          onClick={() => handleDelete(project)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {projects.length === 0 && (
                  <tr>
                    <td colSpan={4} className={styles.emptyRow}>
                      No projects yet. Click "Add Project" to create one.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {isFormOpen && (
        <Modal title={editingProject ? "Edit Project" : "Add Project"} onClose={() => setIsFormOpen(false)}>
          {actionError && (
            <div ref={errorRef}>
              <ErrorMessage message={actionError} />
            </div>
          )}
          <ProjectForm
            initialProject={editingProject}
            onSubmit={handleSubmit}
            onCancel={() => setIsFormOpen(false)}
            isSubmitting={isSubmitting}
          />
        </Modal>
      )}
    </div>
  );
}
