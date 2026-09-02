/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: null,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Salaheddine Merchich",
  title: "Hi all, I'm Salaheddine",
  subTitle: emoji(
    "A driven 5th-year Software Engineering student at EMSI Casablanca, with hands-on backend and full-stack experience from industrial internships. I designed and built EIA SmartFix, an industrial maintenance platform in Spring Boot/React with a RAG-based AI assistant, and Gestion-de-stock, a real-time inventory platform in React/TypeScript. Comfortable across the full stack — Java/Spring Boot, React, PostgreSQL — with a strong practice of testing and CI/CD. Open to a 6-month end-of-studies internship (PFE) in software development in Europe from November 2026. 🚀"
  ),
  resumeLink: "view", // Points to src/containers/greeting/resume.pdf via Greeting.js logic
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Salaheddine-Merchich",
  linkedin: "https://www.linkedin.com/in/salaheddine-merchich/",
  gmail: "merchichsalaheddine@gmail.com",
  phone: "+212 676-906661",
  facebook: "",
  medium: "",
  stackoverflow: "",
  instagram: "",
  twitter: "",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE ENGINEER | JAVA, SPRING BOOT, REACT & RAG",
  skills: [
    emoji(
      "⚡ Develop robust backend services with Java, Spring Boot, hexagonal architecture, REST APIs, and PostgreSQL/pgvector"
    ),
    emoji(
      "⚡ Build modern, responsive front-end applications with React and TypeScript"
    ),
    emoji(
      "⚡ Build RAG systems with hybrid search, vector embeddings, and on-premise LLM inference via Ollama"
    ),
    emoji(
      "⚡ Implement comprehensive testing (JUnit, Mockito, Selenium E2E) and CI/CD pipelines with GitHub Actions and Docker"
    ),
    emoji(
      "🌐 Languages: Arabic (native), French (fluent), English (B2 — professional)"
    )
  ],

  softwareSkills: [
    {skillName: "Java"},
    {skillName: "Spring"},
    {skillName: "Python"},
    {skillName: "C++"},
    {skillName: "JavaScript"},
    {skillName: "TypeScript"},
    {skillName: "React"},
    {skillName: "React Native"},
    {skillName: "PostgreSQL"},
    {skillName: "MySQL"},
    {skillName: "Neo4j"},
    {skillName: "Supabase"},
    {skillName: "Docker"},
    {skillName: "Postman"},
    {skillName: "GitHub"},
    {skillName: "Git"}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "EMSI Casablanca",
      logo: "/logos/emsi.jpg",
      subHeader: "Digital Development & Information Systems Engineering",
      duration: "2022 - 2027",
      desc: "5th-year Software Engineering student with industrial backend and full-stack experience.",
      descBullets: [
        "Specializing in Backend Development and Software Testing (QA)",
        "Focused on Java/Spring Boot and React ecosystems"
      ]
    },
    {
      schoolName: "Baccalauréat Sciences Physiques et Chimiques",
      logo: require("./assets/images/skills_viz.svg"),
      subHeader: "High School Diploma",
      duration: "2021 - 2022",
      desc: "Completed secondary education with a focus on Physics and Chemistry.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Full Stack Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Software Testing & QA",
      progressPercentage: "80%"
    },
    {
      Stack: "AI / RAG Systems",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Intern",
      company: "OCP Jorf Lasfar",
      companylogo: "/logos/ocp.svg",
      date: "July – September 2026",
      desc: "Phosphoric Acid Production Directorate (EIA) — 4th-year internship in Jorf Lasfar, Morocco.",
      descBullets: [
        "Designed and developed EIA SmartFix, an industrial maintenance web platform with a RAG-based AI diagnostic assistant",
        "Built the backend in Spring Boot with hexagonal architecture (ports & adapters) for the RAG module; developed the frontend in React",
        "Implemented hybrid search (dense + lexical) with Reciprocal Rank Fusion (RRF) on PostgreSQL/pgvector (768D embeddings, HNSW indexing) and on-premise LLM inference via Ollama",
        "Knowledge base of 118 validated intervention sheets, 21 technical schemas, and 19 manufacturer manuals across 5 equipment families",
        "Added AI confidence scoring for generated responses and orchestrated services via Docker Compose"
      ]
    },
    {
      role: "IT Intern",
      company: "Cosumar (SUTA Group)",
      companylogo: "/logos/cosumar.png",
      date: "July – August 2025",
      desc: "IT Department — 3rd-year internship in Casablanca, Morocco.",
      descBullets: [
        "Designed and developed Gestion-de-stock, a real-time IT inventory platform (React, TypeScript, Supabase) with a RAG assistant (Ollama), replacing manual paper/Excel tracking",
        "Managed IT hardware inventory (printers, toners, PC components) and organized server room cabling",
        "Configured and monitored the security camera system; tracked billing and payments via SAP, gaining exposure to ERP workflows in an industrial context"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "INNOVATIVE SOLUTIONS BUILT WITH MODERN TECHNOLOGIES",
  projects: [
    {
      image: require("./assets/images/skills_viz.svg"),
      projectName: "EIA-SmartFix",
      projectDesc:
        "Industrial EIA maintenance web platform (OCP) with an on-premise RAG-based AI assistant for failure diagnosis and intervention management. Built with Spring Boot 3, React 19, PostgreSQL/pgvector, Ollama, Docker Compose, and GitHub Actions CI.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Salaheddine-Merchich/EIA-SmartFix"
        }
      ]
    },
    {
      image: require("./assets/images/testing.svg"),
      projectName: "Leave-Management-System",
      projectDesc:
        "A leave management platform in a monorepo architecture (Spring Boot API / Angular frontend) with a comprehensive test suite (unit, integration, E2E) and an automated CI/CD pipeline on GitHub Actions. Built with Java 17, Spring Boot 3, JUnit 5, Mockito, and Selenium.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Salaheddine-Merchich/Leave-Management-System"
        }
      ]
    },
    {
      image: require("./assets/images/stock.svg"),
      projectName: "Gestion-de-stock",
      projectDesc:
        "A real-time IT inventory management platform (React, TypeScript, Supabase) with a RAG-based AI assistant (Ollama), replacing manual paper/Excel tracking. Implements secure CRUD operations, user authentication, and a responsive interface.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Salaheddine-Merchich/Gestion-de-stock"
        }
      ]
    },
    {
      image: require("./assets/images/anomaly.svg"),
      projectName: "Gestion-Anomalie",
      projectDesc:
        "A robust anomaly tracking and management system designed to log, categorize, and streamline the resolution of technical issues or system failures. Features structured workflows, priority levels, and real-time status updates.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Salaheddine-Merchich/Gestion-Anomalie"
        }
      ]
    },
    {
      image: require("./assets/images/taskmaster.svg"),
      projectName: "TaskMaster-App",
      projectDesc:
        "A dynamic task management and productivity application that allows users to seamlessly create, assign, and track daily tasks. Built with modern state management, intuitive sorting filters, and a responsive interface.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Salaheddine-Merchich/TaskMaster-App"
        }
      ]
    },
    {
      image: require("./assets/images/taskmaster.svg"),
      projectName: "Task_Flow",
      projectDesc:
        "A task workflow management application built with TypeScript, HTML/CSS, and JavaScript for organizing and tracking task flows with a modern web interface.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Salaheddine-Merchich/Task_Flow"
        }
      ]
    },
    {
      image: require("./assets/images/quiz.svg"),
      projectName: "Football Arena Quiz",
      projectDesc:
        "A personal Android quiz application about football, built with Kotlin/Java and Gradle to explore native mobile development beyond web and backend. Focused on mobile UI/UX and trivia logic.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Salaheddine-Merchich/Football_Arena_Quiz"
        }
      ]
    },
    {
      image: require("./assets/images/travel.svg"),
      projectName: "Voyage-Zenith",
      projectDesc:
        "A web platform for booking and organizing trips, with authentication and database services via Supabase. Built with React, TypeScript, and Vite.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Salaheddine-Merchich/Voyage-Zenith"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "PROFESSIONAL CREDENTIALS AND TECHNICAL ACHIEVEMENTS",

  achievementsCards: [
    {
      title: "20+ Certifications",
      subtitle:
        "Completed multiple professional certifications in software development on Coursera.",
      image: require("./assets/images/skills_viz.svg"),
      imageAlt: "Certification Logo",
      footerLink: [
        {
          name: "View Certifications",
          url: "https://www.linkedin.com/in/salaheddine-merchich/details/certifications/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "SHARING KNOWLEDGE AND TECHNICAL INSIGHTS",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Set false to hide this section
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("SHARING KNOWLEDGE THROUGH PUBLIC SPEAKING"),
  talks: [],
  display: false // Set false to hide this section
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "TALKING ABOUT TECHNOLOGY AND CAREER",
  podcast: [],
  display: false // Set false to hide this section
};

// Resume Section
const resumeFiles = {
  fr: {
    label: "CV — Français",
    shortLabel: "FR",
    href: "/cv/resume-fr.pdf",
    previewHref: "/cv/resume-fr-preview.jpg",
    download: "CV_Salaheddine_Merchich_FR.pdf"
  },
  en: {
    label: "CV — English",
    shortLabel: "EN",
    href: "/cv/resume-en.pdf",
    previewHref: "/cv/resume-en-preview.jpg",
    download: "CV_Salaheddine_Merchich_EN.pdf"
  }
};

const resumeSection = {
  title: "Resume / CV",
  subtitle:
    "Preview my CV below in French or English, then download the version you need.",
  display: true,
  files: resumeFiles
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My inbox is open for all. Open to a 6-month end-of-studies internship (PFE) in software development in Europe from November 2026.",
  number: "+212 676-906661",
  email_address: "merchichsalaheddine@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Salaheddine-Merchich",
  display: false // Set true to display this section, defaults to false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  resumeFiles
};
