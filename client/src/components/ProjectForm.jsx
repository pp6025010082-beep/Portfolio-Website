import { useState } from "react";
import Button from "./Button";
import styles from "./ProjectForm.module.css";

const EMPTY_PROJECT = {
  title: "",
  description: "",
  problem: "",
  mainFeatures: "",
  technologies: "",
  imageUrl: "",
  githubUrl: "",
  liveUrl: "",
  contribution: "",
  challenges: "",
  lessonsLearned: "",
  featured: false,
};

function toFormValues(project) {
  if (!project) return EMPTY_PROJECT;
  return {
    ...EMPTY_PROJECT,
    ...project,
    mainFeatures: Array.isArray(project.mainFeatures) ? project.mainFeatures.join("\n") : "",
    technologies: Array.isArray(project.technologies) ? project.technologies.join(", ") : "",
  };
}

function validate(values) {
  const errors = {};
  if (!values.title.trim() || values.title.trim().length < 3) {
    errors.title = "Title must be at least 3 characters.";
  }
  if (!values.description.trim() || values.description.trim().length < 10) {
    errors.description = "Description must be at least 10 characters.";
  }
  return errors;
}

export default function ProjectForm({ initialProject, onSubmit, onCancel, isSubmitting }) {
  const [values, setValues] = useState(() => toFormValues(initialProject));
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    onSubmit({
      ...values,
      mainFeatures: values.mainFeatures
        .split("\n")
        .map((feature) => feature.trim())
        .filter(Boolean),
      technologies: values.technologies
        .split(",")
        .map((tech) => tech.trim())
        .filter(Boolean),
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="title">Project Title</label>
        <input id="title" name="title" value={values.title} onChange={handleChange} />
        {errors.title && <span className={styles.fieldError}>{errors.title}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="description">Short Description</label>
        <textarea id="description" name="description" rows={3} value={values.description} onChange={handleChange} />
        {errors.description && <span className={styles.fieldError}>{errors.description}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="problem">Problem Addressed</label>
        <textarea id="problem" name="problem" rows={2} value={values.problem} onChange={handleChange} />
      </div>

      <div className={styles.field}>
        <label htmlFor="mainFeatures">Main Features (one per line)</label>
        <textarea id="mainFeatures" name="mainFeatures" rows={3} value={values.mainFeatures} onChange={handleChange} />
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="technologies">Technologies (comma-separated)</label>
          <input id="technologies" name="technologies" value={values.technologies} onChange={handleChange} />
        </div>
        <div className={styles.field}>
          <label htmlFor="imageUrl">Image URL</label>
          <input id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={handleChange} />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="githubUrl">GitHub URL</label>
          <input id="githubUrl" name="githubUrl" value={values.githubUrl} onChange={handleChange} />
        </div>
        <div className={styles.field}>
          <label htmlFor="liveUrl">Live Demo URL</label>
          <input id="liveUrl" name="liveUrl" value={values.liveUrl} onChange={handleChange} />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="contribution">Your Contribution</label>
        <textarea id="contribution" name="contribution" rows={2} value={values.contribution} onChange={handleChange} />
      </div>

      <div className={styles.field}>
        <label htmlFor="challenges">Challenges Encountered</label>
        <textarea id="challenges" name="challenges" rows={2} value={values.challenges} onChange={handleChange} />
      </div>

      <div className={styles.field}>
        <label htmlFor="lessonsLearned">Lessons Learned</label>
        <textarea id="lessonsLearned" name="lessonsLearned" rows={2} value={values.lessonsLearned} onChange={handleChange} />
      </div>

      <label className={styles.checkboxField}>
        <input type="checkbox" name="featured" checked={values.featured} onChange={handleChange} />
        Feature this project
      </label>

      <div className={styles.actions}>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Project"}
        </Button>
        <Button type="button" variant="ghost" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
