/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Salaheddine Merchich",
  title: "Hi all, I'm Salaheddine",
  subTitle: emoji(
    "A driven 4th-year Software Engineering student at EMSI Casablanca, specializing in building robust full-stack applications and backend systems. With a strong foundation in software testing (QA) and a passion for modern technologies like React, Spring Boot, and Supabase, I strive to deliver high-quality, scalable solutions. 🚀"
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
  subTitle: "FULL STACK SOFTWARE ENGINEER SPECIALIZING IN BACKEND & TESTING",
  skills: [
    emoji(
      "⚡ Develop robust backend services using Java, Spring Boot, and PostgreSQL"
    ),
    emoji(
      "⚡ Build modern, responsive front-end applications with React and TypeScript"
    ),
    emoji(
      "⚡ Implement comprehensive software testing strategies (Unit, Integration, E2E) to ensure high-quality delivery"
    ),
    emoji(
      "⚡ Manage data persistence and optimization using SQL Server, MySQL, and Supabase"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Neo4j",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Postman",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "EMSI Casablanca",
      logo: require("./assets/images/skill.svg"),
      subHeader: "Ingénierie Informatique",
      duration: "2022 - 2027",
      desc: "4th-year Software Engineering student focused on building modern software solutions.",
      descBullets: [
        "Specializing in Backend Development and Software Testing (QA)",
        "Focusing on Java/Spring Boot and React ecosystems"
      ]
    },
    {
      schoolName: "Baccalauréat Sciences Physiques et Chimiques",
      logo: require("./assets/images/skill.svg"),
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
      progressPercentage: "85%"
    },
    {
      Stack: "Full Stack Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Software Testing & QA",
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
      role: "IT Department Intern",
      company: "COSUMAR - SUTA",
      companylogo: require("./assets/images/skill.svg"),
      date: "July – August 2025",
      desc: "Gained hands-on experience in a large-scale industrial IT environment.",
      descBullets: [
        "Observation and participation in stock management processes",
        "Monitoring payment systems (Orange, Maroc Telecom, Inwi)",
        "Using the SAP system for billing",
        "Technical support for multiple internal users in an industrial environment"
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
      image: require("./assets/images/stock.svg"),
      projectName: "Gestion de Stock",
      projectDesc:
        "A web application for inventory tracking (products, entries, exits) developed with React, TypeScript, and Supabase. Implements secure CRUD operations and user authentication with a responsive interface.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Salaheddine-Merchich/GESTION-DE-STOCK"
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
          url: "https://github.com/Salaheddine-Merchich/GESTION-ANOMALIE"
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
      image: require("./assets/images/quiz.svg"),
      projectName: "Football Arena Quiz",
      projectDesc:
        "An interactive Android application for football trivia, built with Java and Gradle. Focused on mobile UI/UX and complex trivia logic, featuring detailed technical documentation and robust asset management.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Salaheddine-Merchich/FOOTBALL_ARENA_QUIZ"
        }
      ]
    },
    {
      image: require("./assets/images/travel.svg"),
      projectName: "Voyage-Zenith",
      projectDesc:
        "A travel management platform built with React, TypeScript, and Supabase. Leverages serverless BaaS for scalable authentication and database services, providing a responsive interface for complex travel planning.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Salaheddine-Merchich/VOYAGE-ZENITH"
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
      image: require("./assets/images/skill.svg"),
      imageAlt: "Certification Logo",
      footerLink: [
        {
          name: "View Certifications",
          url: "https://www.coursera.org/"
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
const resumeSection = {
  title: "Resume",
  subtitle: "Interested in working together? Download my resume here.",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
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
  resumeSection
};
