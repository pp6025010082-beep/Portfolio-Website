import { api } from "./api";

export const messagesService = {
  send: (message) => api.post("/messages", message),
};
