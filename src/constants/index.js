import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  freelance,
  shopify,
  sheryians,
  macbookpro,
  falverra,
  tripguide,
  threejs,
} from "../assets";

const BASE = import.meta.env.BASE_URL;

export const navLinks = [
  {
    id: "about",
    title: "ABOUT",
  },
  {
    id: "skills",
    title: "SKILLS",
  },
  {
    id: "projects",
    title: "PROJECTS",
  },

  {
    id: "work",
    title: "EXPERIENCE",
  },
  {
    id: "certs",
    title: "CERTS",
  },
  {
    id: "contact",
    title: "CONTACT",
  },
];

const services = [
  {
    title: "AI Research",
    icon: web,
  },
  {
    title: "Machine Learning",
    icon: mobile,
  },
  {
    title: "Java Development",
    icon: backend,
  },
  {
    title: "Data Analytics",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: javascript,
  },
  {
    name: "Python",
    icon: reactjs,
  },
  {
    name: "MySQL",
    icon: mongodb,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Git",
    icon: git,
  },
];
export const certifications = [
  {
    title: "Best Ambassador - ICAI 2025",
    image: `${BASE}certs/best-ambassador.png`,
  },
  {
    title: "Research Paper Writing Masterclass",
    image: `${BASE}certs/carsit.jpg`,
  },
  {
    title: "UNICEF Children's Rights",
    image: `${BASE}certs/unicef.png`,
  },
  {
    title: "Database Programming",
    image: `${BASE}certs/database.jpg`,
  },
  {
    title: "MERN Stack Development Workshop",
    image: `${BASE}certs/mern.png`,
  },
  {
    title: "Publication Coordinator",
    image: `${BASE}certs/publication.png`,
  },
  {
    title: "Logistic Support Coordinator",
    image: `${BASE}certs/logistics.png`,
  },
  {
    title: "IEEE UpSkill Bangladesh",
    image: `${BASE}certs/upskill.jpg`,
  },
  {
    title: "AI & Reinforcement Learning",
    image: `${BASE}certs/ai-talk.png`,
  },
  {
    title: "Consumer Rights Conference",
    image: `${BASE}certs/ccs.png`,
  },
  {
    title: "Take Off Programming Contest",
    image: `${BASE}certs/takeoff.jpg`,
  },
];

const experiences = [
  {
    title: "Research Contributor",
    company_name: "Healthcare Research Projects",
    icon: freelance,
    iconBg: "#915EFF",
    date: "2025 - Present",
    points: [
      "Worked on maternal and child health research.",
      "Collected and analyzed healthcare datasets.",
      "Contributed to scientific report writing.",
      "Supported research publication activities.",
    ],
  },

  {
    title: "Software Developer",
    company_name: "Academic Projects",
    icon: sheryians,
    iconBg: "#ffffff",
    date: "2024 - Present",
    points: [
      "Developed Smart Parking Management System using Java Swing.",
      "Built database-driven applications with MySQL.",
      "Worked on AI and machine learning projects.",
      "Designed responsive web applications using React.",
    ],
  },
  {
    title: "Organizing Joint Secretary",
    company_name: "International Congress on AI and Digital Health Innovation",
    icon: freelance,
    iconBg: "#915EFF",
    date: "2025",
    points: [
      "Coordinated conference activities and event management.",
      "Supported communication and participant engagement.",
      "Managed logistics and organizational operations.",
    ],
  },

  {
    title: "Best Ambassador",
    company_name: "International Congress on Artificial Intelligence (ICAI)",
    icon: freelance,
    iconBg: "#915EFF",
    date: "2025",
    points: [
      "Represented the conference among students and researchers.",
      "Promoted participation and engagement activities.",
      "Recognized as Best Ambassador for outstanding contribution.",
    ],
  },

  {
    title: "Publication Coordinator",
    company_name: "IEEE DIU Student Branch Computer Society",
    icon: sheryians,
    iconBg: "#ffffff",
    date: "2024 - 2025",
    points: [
      "Managed publication and documentation activities.",
      "Supported research paper coordination and communication.",
      "Worked with authors and reviewers.",
    ],
  },
];


const projects = [
  {
    name: "NeuroGuard AI",
    description:
      "Machine learning-based mortality prediction system for critically ill patients using healthcare datasets and predictive analytics.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Healthcare AI",
        color: "pink-text-gradient",
      },
    ],
      image: `${BASE}neuro.png`,
    source_code_link: "#",
    live_website_link: "#",
  },

  {
    name: "Smart Parking Management System",
    description:
      "Desktop application developed using Java Swing and MySQL for vehicle management, parking allocation, and billing automation.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Swing",
        color: "pink-text-gradient",
      },
    ],
    image: `${BASE}parking.png`,
    source_code_link: "#",
    live_website_link: "#",
  },

  

  {
  name: "Student Management System",
  description:
    "Database-driven student management application for managing student records, results, attendance, and academic information.",
  tags: [
    {
      name: "Database",
      color: "blue-text-gradient",
    },
    {
      name: "MySQL",
      color: "green-text-gradient",
    },
    {
      name: "Java",
      color: "pink-text-gradient",
    },
  ],
  image: `${BASE}student.png`,
  source_code_link: "#",
  live_website_link: "#",
},

  {
    name: "Personal AI Portfolio",
    description:
      "Interactive 3D portfolio website developed using React, Three.js, Tailwind CSS, and modern frontend technologies.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: `${BASE}portfolio.png`,
    source_code_link: "#",
    live_website_link: "#",
  },
  {
  name: "Basic C Compiler",
  description:
    "Academic compiler project implementing lexical analysis, syntax checking, and basic compilation concepts.",
  tags: [
    {
      name: "Compiler",
      color: "blue-text-gradient",
    },
    {
      name: "C Language",
      color: "green-text-gradient",
    },
    {
      name: "Programming",
      color: "pink-text-gradient",
    },
  ],
  image: `${BASE}c.png`,
  source_code_link: "#",
  live_website_link: "#",
},
  {
  name: "Network Topology Design",
  description:
    "Designed and configured enterprise network topology with routers, multilayer switches, subnetting, and IP addressing schemes.",
  tags: [
    {
      name: "Networking",
      color: "blue-text-gradient",
    },
    {
      name: "Cisco",
      color: "green-text-gradient",
    },
    {
      name: "Subnetting",
      color: "pink-text-gradient",
    },
  ],
  image: `${BASE}topology.png`,
  source_code_link: "#",
  live_website_link: "#",
},
];

export { services, technologies, experiences, projects };
