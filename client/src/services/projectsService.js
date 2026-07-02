import { api } from "./api";

export const projectsService = {
  getAll: () => api.get("/projects"),
  getById: (id) => api.get(`/projects/${id}`),
  create: (project, token) => api.post("/projects", project, { token }),
  update: (id, project, token) => api.put(`/projects/${id}`, project, { token }),
  remove: (id, token) => api.delete(`/projects/${id}`, { token }),
};
