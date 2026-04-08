/**
 * ==========================================
 *  PORTFOLIO DATA — data.js
 *  Edit this file to update portfolio content
 * ==========================================
 */

// ── Typewriter Phrases ──────────────────────
const typewriterPhrases = [
  "Scalable Systems",
  "Full-Stack Apps",
  "Backend APIs",
  "Clean Code",
  "Problem Solving",
];
const skillsData = {
  core: [
    { name: "Data Structures & Algorithm", icon: "bx-code-alt", level: "Intermediate", color: "#6366F1" },
    { name: "OOP", icon: "bx-cube", level: "Intermediate", color: "#F59E0B" },
    { name: "System Design", icon: "bx-sitemap", level: "Beginner", color: "#EF4444" }
],
    frontend: [
        { name: "HTML5", icon: "bxl-html5", level: "Advanced", color: "#E34F26" },
        { name: "CSS3", icon: "bxl-css3", level: "Advanced", color: "#1572B6" },
        { name: "JavaScript", icon: "bxl-javascript", level: "Advanced", color: "#F7DF1E" },
        { name: "React.js", icon: "bxl-react", level: "Advanced", color: "#61DAFB" }
    ],

    backend: [
        { name: "Node.js", icon: "bxl-nodejs", level: "Intermediate", color: "#339933" },
        { name: "Express.js", icon: "bx-server", level: "Intermediate", color: "#888888" },
        { name: "REST APIs", icon: "bx-transfer-alt", level: "Intermediate", color: "#6366F1" },
        { name: "JWT Auth", icon: "bx-lock-alt", level: "Intermediate", color: "#F59E0B" }
    ],

    tools: [
        { name: "MongoDB", icon: "bxl-mongodb", level: "Intermediate", color: "#47A248" },
        { name: "MySQL", icon: "bx-data", level: "Intermediate", color: "#00758F" },
        { name: "Git", icon: "bxl-git", level: "Advanced", color: "#F05032" },
        { name: "GitHub", icon: "bxl-github", level: "Advanced", color: "#ffffff" },
        { name: "Postman", icon: "bx-send", level: "Intermediate", color: "#FF6C37" },
        { name: "Java", icon: "bxl-java", level: "Intermediate", color: "#F59E0B" }
    ]
};

// Skill level → bar width mapping
const levelWidths = {
  "Expert": "95%",
  "Advanced": "80%",
  "Intermediate": "65%",
  "Beginner": "40%",
};

// ── Projects Data ────────────────────────────
const projectsData = [
  {
    title: "Personal Portfolio Website",
    category: "frontend",
    desc: "Designed and developed a responsive personal portfolio website. Implemented smooth scrolling and animations. Showcased skills, education, and projects. Focused on clean UI and performance optimization.",
    image: "assets/projects/project-1.png",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    liveUrl: "https://github.com/Asmitasingh23/Asmitasingh23/",
    codeUrl: "https://github.com/Asmitasingh23/Asmitasingh23",
  },
  {
    title: "NexaAI",
    category: "Full Stack",
    desc: "NexaAI is a full-stack AI-powered conversational platform built using React, Node.js, Express, MongoDB, and Google Gemini API.Each conversation is stored as a thread in MongoDB, allowing users to revisit and manage previous chats.",
    image: "assets/projects/project-2.png",
    tags: ["React", "Rehype Highlight", "UUID", "Express.js", "MongoDB", "CORS", "dotenv", "Google Gemini API"],
    liveUrl: "https://nexaai-upn3.onrender.com/",
    codeUrl: "https://github.com/Asmitasingh23/NexaAI",
  },
  {
    title: "VacationHub - A Stay Discovery Platform",
    category: "Backend",
    desc: "VacationHub is a full-stack web application designed to help users discover, explore, and share unique stays across different destinations. Developed using Node.js, Express, MongoDB, and EJS, VacationHub demonstrates a complete end-to-end implementation of a scalable web platform, combining clean UI design with robust backend architecture.",
    image: "assets/projects/project-3.png",
    tags: ["EJS", "Bootstrap 5",  "CSS", "Express.js", "MongoDB", "Passport.js", "Multer", "Cloudinary"],
    liveUrl: " https://vacationhub-kd0x.onrender.com",
    codeUrl: "https://github.com/Asmitasingh23/VacationHub",
  },
];



// ── Contact Data ─────────────────────────────
const contactData = {
  email: "singhasmita934@gmail.com",
  phone: "+91 6394016447",
  location: "Prayagraj, India",
  socials: {
    github: "https://github.com/Asmitasingh23",
    linkedin: "https://www.linkedin.com/in/asmita-singh-2932a6284/",
  },
};
