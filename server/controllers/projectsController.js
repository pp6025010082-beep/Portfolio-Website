import mongoose from "mongoose";
import Project from "../models/Project.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find().sort({ featured: -1, createdAt: -1 });
  res.status(200).json(projects);
});

export const getProjectById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid project ID." });
  }

  const project = await Project.findById(id);
  if (!project) {
    return res.status(404).json({ message: "Project not found." });
  }

  res.status(200).json(project);
});

export const createProject = asyncHandler(async (req, res) => {
  const project = await Project.create(req.body);
  res.status(201).json(project);
});

export const updateProject = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid project ID." });
  }

  const project = await Project.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!project) {
    return res.status(404).json({ message: "Project not found." });
  }

  res.status(200).json(project);
});

export const deleteProject = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid project ID." });
  }

  const project = await Project.findByIdAndDelete(id);
  if (!project) {
    return res.status(404).json({ message: "Project not found." });
  }

  res.status(200).json({ message: "Project deleted successfully." });
});
