import { Router } from "express";
import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projectsController.js";
import { requireAdmin } from "../middleware/auth.js";

const router = Router();

router.get("/", getProjects);
router.get("/:id", getProjectById);
router.post("/", requireAdmin, createProject);
router.put("/:id", requireAdmin, updateProject);
router.delete("/:id", requireAdmin, deleteProject);

export default router;
