import "dotenv/config";
import mongoose from "mongoose";
import Project from "../models/Project.js";

const sampleProjects = [
  {
    title: "Portfolio Website",
    description: "A full-stack personal portfolio built with React, Express, and MongoDB.",
    problem: "Needed a professional, deployed presence to share with employers and recruiters.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    imageUrl: "",
    githubUrl: "https://github.com/your-username/portfolio",
    liveUrl: "",
    contribution: "Designed and built the entire application independently, front end to back end.",
    challenges: "Structuring a clean REST API and keeping the admin dashboard simple but functional.",
    lessonsLearned: "Deepened understanding of full-stack architecture and cloud deployment.",
    featured: true,
  },
  {
    title: "Task Manager App",
    description: "A collaborative task tracking app with authentication and real-time updates.",
    problem: "Small teams needed a lightweight way to track tasks without a heavy project management tool.",
    technologies: ["React", "Express", "MongoDB", "JWT"],
    imageUrl: "",
    githubUrl: "https://github.com/your-username/task-manager",
    liveUrl: "",
    contribution: "Built the REST API, database schema, and the task board UI.",
    challenges: "Handling concurrent updates from multiple users without conflicts.",
    lessonsLearned: "Learned how to design predictable state updates across a team app.",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description: "A responsive dashboard that visualizes weather data from a public API.",
    problem: "Wanted a clean way to compare weather forecasts across multiple saved cities.",
    technologies: ["React", "REST API", "Chart.js"],
    imageUrl: "",
    githubUrl: "https://github.com/your-username/weather-dashboard",
    liveUrl: "",
    contribution: "Built independently as a personal project to practice API integration.",
    challenges: "Handling API rate limits and inconsistent data formats.",
    lessonsLearned: "Improved skills in async data fetching and error handling.",
    featured: false,
  },
];

async function seed() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not set. Add it to your .env file.");
  }

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB. Seeding projects...");

  await Project.deleteMany({});
  await Project.insertMany(sampleProjects);

  console.log(`Seeded ${sampleProjects.length} projects.`);
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error("Seeding failed:", err.message);
  process.exit(1);
});
