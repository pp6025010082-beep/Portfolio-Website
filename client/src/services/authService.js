import { api } from "./api";

export const authService = {
  login: (password) => api.post("/auth/login", { password }),
};
