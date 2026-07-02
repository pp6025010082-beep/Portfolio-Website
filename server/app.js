import express from "express";
import cors from "cors";
import projectsRouter from "./routes/projects.js";
import messagesRouter from "./routes/messages.js";
import authRouter from "./routes/auth.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim());

app.use(
  cors({
    origin: allowedOrigins,
  })
);
app.use(express.json({ limit: "100kb" }));

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/projects", projectsRouter);
app.use("/api/messages", messagesRouter);
app.use("/api/auth", authRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
