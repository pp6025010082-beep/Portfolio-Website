import Message from "../models/Message.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createMessage = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body;
  const saved = await Message.create({ name, email, subject, message });
  res.status(201).json({ message: "Message sent successfully.", id: saved._id });
});

// Admin-only: contact messages must never be exposed on a public endpoint.
export const getMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });
  res.status(200).json(messages);
});
