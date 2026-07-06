// Central place to edit your personal portfolio content.
// Replace these placeholder values with your own details.

export const profile = {
  name: "Phok Phallaoudom",
  title: "Software Engineering Student",
  intro:
    "I'm a software engineering student who enjoys turning ideas into working products — from responsive front ends to REST APIs and databases. I'm currently looking for internship and junior developer opportunities.",
  email: "phallaoudomphok@gmail.com",
  github: "https://github.com/pp6025010082-beep",
  telegram: "https://t.me/oxdom1",
  resumeUrl: "/resume.pdf",
  location: "Phnom Penh, Cambodia",
};

export const about = {
  headline: "Software Engineering Student | Full-Stack Developer",
  paragraphs: [
    "I'm currently completing my degree in Software Engineering at Camtech University ,I focused on data structures, and software design principles.",
    "I work as I work from the moment I wake up to the moment I go to bed and when I'm not working I'm thinking about working.",
  ],
  strengths: [
    "Problem solving",
    "Quick Thinker",
  ],
  values: ["Loyalty"],
};

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const skillGroups = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript (ES6+)", level: "learning", icon: `${DEVICON}/javascript/javascript-plain.svg` },
      { name: "Python", level: "learning", icon: `${DEVICON}/python/python-plain.svg` },
      { name: "Java", level: "learning", icon: `${DEVICON}/java/java-plain.svg` },
      { name: "C++", level: "learning", icon: `${DEVICON}/cplusplus/cplusplus-plain.svg` },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "React", level: "learning", icon: `${DEVICON}/react/react-original.svg` },
      { name: "HTML5", level: "learning", icon: `${DEVICON}/html5/html5-plain.svg` },
      { name: "CSS3", level: "learning", icon: `${DEVICON}/css3/css3-plain.svg` },
      { name: "React Router", level: "learning", icon: "https://cdn.simpleicons.org/reactrouter" },
    ],
  },
  {
    category: "Database & Backend",
    skills: [
      { name: "Node.js", level: "learning", icon: `${DEVICON}/nodejs/nodejs-plain.svg` },
      { name: "Express", level: "learning", icon: `${DEVICON}/express/express-original.svg` },
      { name: "RESTful APIs", level: "learning" },
      { name: "MongoDB", level: "learning", icon: `${DEVICON}/mongodb/mongodb-plain.svg` },
      { name: "MySQL", level: "learning", icon: `${DEVICON}/mysql/mysql-original.svg` },
    ],
  },
  {
    category: "Tools & Technology",
    skills: [
      { name: "Git & GitHub", level: "learning", icon: `${DEVICON}/github/github-original.svg` },
      { name: "Figma", level: "learning", icon: `${DEVICON}/figma/figma-plain.svg` },
    ],
  },
];

export const experience = [
  {
    type: "Education",
    title: "Camtech University",
    degree: "B.Sc. in Software Engineering",
    place: "Phnom Penh, Cambodia",
    period: "2025 — 2027 (in progress)",
  },
  {
    type: "Education",
    title: "Paragon University",
    degree: "Computer Science",
    place: "Phnom Penh, Cambodia",
    period: "2023 — 2024",
  },
  {
    type: "Experience",
    title: "Software Engineering Intern",
    place: "Camtech University",
    period: "2025 — 2027",
  },
  {
    type: "Experience",
    title: "Manager",
    place: "Punareay Restaurant",
    period: "2016 — 2022",
  },
  {
    type: "Experience",
    title: "Dishwasher",
    place: "Punareay Restaurant",
    period: "2015 — 2016",
  },
];
