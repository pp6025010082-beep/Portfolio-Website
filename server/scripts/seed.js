import "dotenv/config";
import mongoose from "mongoose";
import Project from "../models/Project.js";

const sampleProjects = [
  {
    title: "Portfolio Website",
    description: "A full-stack personal portfolio built with React, Express, and MongoDB.",
    problem: "Needed a professional, deployed presence to share with employers and recruiters.",
    mainFeatures: [
      "Sections for About, Skills, Projects, Education/Experience, and Contact",
      "Project data loaded from MongoDB through a REST API, with a details modal per project",
      "Contact form with client- and server-side validation, stored in MongoDB",
      "Protected admin dashboard for full CRUD management of projects",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    imageUrl: "/projects/portfolio-website.png",
    githubUrl: "https://github.com/pp6025010082-beep/Portfolio-Website",
    liveUrl: "",
    contribution: "Designed and built the entire application independently, front end to back end.",
    challenges: "Structuring a clean REST API and keeping the admin dashboard simple but functional.",
    lessonsLearned: "Deepened understanding of full-stack architecture and cloud deployment.",
    featured: true,
  },
  {
    title: "SaveEat",
    description: "Connecting surplus food with communities in need, one meal at a time.",
    problem: "Restaurants, bakeries, and supermarkets throw away edible surplus food daily while nearby communities go without affordable meals.",
    mainFeatures: [
      "Browse surplus food listings from nearby restaurants, bakeries, and supermarkets",
      "Business partner sign-up flow for restaurants and stores to list surplus food",
      "JWT-based authentication with rotating refresh tokens and CSRF-protected auth routes",
      "Searchable FAQ page built from reusable, data-driven section components",
    ],
    technologies: ["React", "Node.js", "Express", "JWT"],
    imageUrl: "/projects/saveeat.png",
    githubUrl: "https://github.com/developtp/SaveEat",
    liveUrl: "",
    contribution: "Building the full-stack app end to end, including the authentication system and backend routes.",
    challenges: "Migrating the auth flow to JWT and keeping the database schema clean as features grew.",
    lessonsLearned: "Learned how to design a JWT-based auth system and structure a full-stack app around a real-world problem.",
    featured: false,
  },
  {
    title: "Train Ticket System",
    description: "A Java console application for booking, paying for, and issuing train tickets.",
    problem: "Modeled a train operator's booking workflow — searching trains, holding a seat, taking payment, and issuing a valid ticket — as a group exercise in object-oriented design.",
    mainFeatures: [
      "Search trains by destination and book a seat by class (Economy, Business, First)",
      "Payment processing with printed receipts and full refund/cancellation support",
      "Automatic seat assignment and ticket issuing with a printable ticket format",
      "Custom exception types for validation, booking, and payment errors",
    ],
    technologies: ["Java", "OOP", "Inheritance", "Interfaces"],
    imageUrl: "/projects/trainticketsystem.png",
    githubUrl: "https://github.com/developtp/TrainTicketSystem",
    liveUrl: "",
    contribution: "Designed the Person/User/Staff inheritance hierarchy and the Displayable/Payable/Printable interfaces as part of a 4-person group.",
    challenges: "Deciding which fields belonged on the Person superclass versus the User/Staff subclasses, and keeping Main.java's test flow readable as more entities (Booking, Payment, Ticket) were wired together.",
    lessonsLearned: "Practiced translating a real-world workflow into a class hierarchy, and saw firsthand why shared behavior (interfaces) and shared structure (inheritance) call for different tools.",
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
