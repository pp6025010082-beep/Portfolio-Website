import { useEffect, useState } from "react";
import { projectsService } from "../../services/projectsService";
import { ApiError } from "../../services/api";
import SectionHeading from "../SectionHeading";
import ProjectCard from "../ProjectCard";
import ProjectDetails from "../ProjectDetails";
import Modal from "../Modal";
import LoadingIndicator from "../LoadingIndicator";
import ErrorMessage from "../ErrorMessage";
import FadeInSection from "../FadeInSection";
import styles from "./Projects.module.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

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

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <FadeInSection>
          <SectionHeading
            eyebrow="Projects"
            title="Things I've Built"
            subtitle="A selection of academic and personal projects that show how I approach problems end to end."
          />
        </FadeInSection>

        {status === "loading" && <LoadingIndicator label="Loading projects..." />}
        {status === "error" && <ErrorMessage message={errorMessage} onRetry={loadProjects} />}

        {status === "success" && projects.length === 0 && (
          <p className={styles.empty}>No projects have been added yet. Check back soon.</p>
        )}

        {status === "success" && projects.length > 0 && (
          <div className={styles.grid}>
            {projects.map((project) => (
              <FadeInSection key={project._id}>
                <ProjectCard project={project} onViewDetails={setSelectedProject} />
              </FadeInSection>
            ))}
          </div>
        )}
      </div>

      {selectedProject && (
        <Modal title={selectedProject.title} onClose={() => setSelectedProject(null)}>
          <ProjectDetails project={selectedProject} />
        </Modal>
      )}
    </section>
  );
}
