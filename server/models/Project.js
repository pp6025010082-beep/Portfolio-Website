import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
      trim: true,
      minlength: [3, "Title must be at least 3 characters."],
      maxlength: [120, "Title must be under 120 characters."],
    },
    description: {
      type: String,
      required: [true, "Description is required."],
      trim: true,
      minlength: [10, "Description must be at least 10 characters."],
      maxlength: [500, "Description must be under 500 characters."],
    },
    problem: { type: String, trim: true, maxlength: 1000 },
    mainFeatures: { type: [String], default: [] },
    technologies: { type: [String], default: [] },
    imageUrl: { type: String, trim: true },
    githubUrl: { type: String, trim: true },
    liveUrl: { type: String, trim: true },
    contribution: { type: String, trim: true, maxlength: 1000 },
    challenges: { type: String, trim: true, maxlength: 1000 },
    lessonsLearned: { type: String, trim: true, maxlength: 1000 },
    featured: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

export default mongoose.model("Project", projectSchema);
