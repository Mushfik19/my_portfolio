import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  mongodb,
  git,
  docker,
  typescript,
  freelance,
  sheryians,
} from "../assets";
import { projectsData } from "../data/projectsData";

const BASE = import.meta.env.BASE_URL;

export const navLinks = [
  {
    id: "about",
    title: "ABOUT",
    path: "/about",
  },
  {
    id: "skills",
    title: "SKILLS",
    path: "/skills",
  },
  {
    id: "projects",
    title: "PROJECTS",
    path: "/projects",
  },
  {
    id: "work",
    title: "EXPERIENCE",
    path: "/experience",
  },
  {
    id: "certs",
    title: "CERTS",
    path: "/certs",
  },
  {
    id: "contact",
    title: "CONTACT",
    path: "/contact",
  },
];

const services = [
  {
    title: "Civic Tech & Full-Stack",
    icon: web,
    description: "FastAPI, Next.js, React, PostgreSQL/PostGIS, Redis, scalable REST APIs.",
  },
  {
    title: "Applied AI & ML",
    icon: mobile,
    description: "Explainable machine learning, SHAP, feature ablation, agroclimatic modeling.",
  },
  {
    title: "Computer Vision & Medical AI",
    icon: backend,
    description: "DenseNet121, Grad-CAM interpretability, radiograph classification pipelines.",
  },
  {
    title: "NLP & Semantic Search",
    icon: creator,
    description: "spaCy taxonomy extractors, Sentence-Transformers embeddings, dialectal NER.",
  },
];

export const achievements = [
  {
    title: "Organizing Joint Secretary",
    meta: "ICADHI 2025 - 2026",
    description:
      "Served as Organizing Joint Secretary for the International Congress on AI & Digital Health Innovation, managing conference operations, logistics, and technical sessions.",
  },
  {
    title: "Best Ambassador",
    meta: "ICAI 2025",
    description:
      "Recognized as Best Ambassador for outstanding outreach, communication, and contribution during the International Congress on Artificial Intelligence.",
  },
  {
    title: "Publication Coordinator",
    meta: "IEEE DIU Computer Society",
    description:
      "Coordinated academic publication workflows, documentation, author correspondence, and review tracking in academic activities.",
  },
  {
    title: "Healthcare Research Contributor",
    meta: "Active Contributor",
    description:
      "Contributed to maternal and child healthcare datasets, medical imaging interpretability pipelines, and scientific reporting.",
  },
];

export const researchFocus = [
  {
    title: "Explainable Medical AI (XAI) & Clinical Decision Support",
    description:
      "Developing interpretable deep learning workflows using DenseNet121 and Grad-CAM (Gradient-weighted Class Activation Mapping) for visual opacity localization in chest radiographs.",
  },
  {
    title: "Minimal-Feature Agroclimatic Recommendation",
    description:
      "Conducting comparative machine learning research on AgrClimateBD and SPAS-Dataset-BD with feature ablation and SHAP explainability for resource-constrained Bangladeshi farmers.",
  },
  {
    title: "Bangla Regional Dialect Named Entity Recognition",
    description:
      "Exploring transformer tokenization dynamics (BanglaBERT, XLM-RoBERTa) across colloquial regional dialect corpora (Barishal, Chittagong, Sylhet, etc.).",
  },
  {
    title: "Tamper-Evident Civic Coordination Systems",
    description:
      "Architecting municipal coordination platforms combining hardware GPS integrity, Haversine spatial verification, and chained SHA-256 audit trails.",
  },
];

export const currentFocus = [
  "Building tamper-evident civic coordination prototypes with spatial verification",
  "Refining explainable AI architectures (Grad-CAM, SHAP) for health and agriculture",
  "Advancing full-stack engineering with FastAPI, Next.js, and PostgreSQL/PostGIS",
  "Actively pursuing collaborative research and software engineering opportunities",
];

const technologies = [
  {
    name: "Python",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
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
    name: "MySQL / Postgres",
    icon: mongodb,
  },
];

export const certifications = [
  {
    title: "SPA Development with React.Js - National Cyber Security Agency (NCSA)",
    image: `${BASE}certs/react-spa-ncsa.png`,
  },
  {
    title: "Voluntary Service & Contribution - DIU YKSG 2",
    image: `${BASE}certs/sports-appreciation.png`,
  },
  {
    title: "Best Ambassador - ICAI 2025",
    image: `${BASE}certs/best-ambassador.png`,
  },
  {
    title: "Publication Coordinator - IEEE DIU CS",
    image: `${BASE}certs/publication.png`,
  },
  {
    title: "Logistic Support Coordinator - ICADHI",
    image: `${BASE}certs/logistics.png`,
  },
  {
    title: "Research Paper Writing Masterclass",
    image: `${BASE}certs/carsit.jpg`,
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
    title: "UNICEF Children's Rights",
    image: `${BASE}certs/unicef.png`,
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
    title: "Organizing Joint Secretary",
    company_name: "International Congress on AI & Digital Health Innovation (ICADHI)",
    icon: freelance,
    iconBg: "#915eff",
    date: "2025",
    points: [
      "Served as Organizing Joint Secretary managing academic conference operations, session schedules, and digital health innovation tracks.",
      "Facilitated communications between keynote researchers, international delegates, and university representatives.",
      "Managed conference logistics, participant engagement, and paper presentation sessions.",
    ],
  },
  {
    title: "Best Ambassador",
    company_name: "International Congress on Artificial Intelligence (ICAI)",
    icon: freelance,
    iconBg: "#915eff",
    date: "2025",
    points: [
      "Represented the international conference among students, academics, and researchers.",
      "Promoted participation and technical engagement across universities.",
      "Awarded Best Ambassador for outstanding conference outreach and delegate coordination.",
    ],
  },
  {
    title: "Publication Coordinator",
    company_name: "IEEE DIU Student Branch Computer Society",
    icon: sheryians,
    iconBg: "#1f1d36",
    date: "2024 - 2025",
    points: [
      "Managed academic publication and technical documentation workflows.",
      "Coordinated with research paper authors, reviewers, and student members.",
      "Maintained tracking logs and publication compliance for academic activities.",
    ],
  },
  {
    title: "AI & Software Engineering Contributor",
    company_name: "Academic & Research Projects",
    icon: freelance,
    iconBg: "#1f1d36",
    date: "2024 - Present",
    points: [
      "Engineered full-stack civic platforms (Nagorik Sathi AI / CivicSync) with spatial verification.",
      "Built medical AI explainability workflows using DenseNet121 and Grad-CAM.",
      "Developed desktop software (FitHub, Smart Parking) with Python Tkinter and Java MySQL.",
      "Conducted agroclimatic ML research and dialectal NLP preprocessing experiments.",
    ],
  },
];

// Re-export projectsData as projects for backwards compatibility
const projects = projectsData;

export { services, technologies, experiences, projects };
