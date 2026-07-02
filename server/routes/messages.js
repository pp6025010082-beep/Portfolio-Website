import { Router } from "express";
import { createMessage, getMessages } from "../controllers/messagesController.js";
import { requireAdmin } from "../middleware/auth.js";

const router = Router();

router.post("/", createMessage);
router.get("/", requireAdmin, getMessages);

export default router;
