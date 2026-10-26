import React from "react";
import { styles } from "../styles";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const TECH_DOMAINS = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: "Primary Research & Backend Language" },
      { name: "TypeScript", level: "Type-Safe Full-Stack Development" },
      { name: "JavaScript (ES6+)", level: "Interactive Web Applications" },
      { name: "Java", level: "OOP, Swing Desktop & JDBC" },
      { name: "SQL", level: "Relational Queries & Optimization" },
      { name: "C", level: "Systems Fundamentals & Compilers" },
    ],
  },
  {
    category: "Web & Full-Stack Engineering",
    items: [
      { name: "FastAPI", level: "High-Performance ASGI REST Endpoints" },
      { name: "Next.js (App Router)", level: "Server Components & POS Architecture" },
      { name: "React 18 / 19", level: "Component Trees & Interactive SPAs" },
      { name: "Vite", level: "Modern Frontend Toolchain" },
      { name: "Tailwind CSS", level: "Responsive Layout Systems" },
      { name: "Three.js / React Three Fiber", level: "Interactive 3D WebGL Canvases" },
    ],
  },
  {
    category: "AI, Machine Learning & NLP",
    items: [
      { name: "TensorFlow / Keras", level: "DenseNet121, CNN Architectures" },
      { name: "Grad-CAM (XAI)", level: "Gradient-Weighted Visual Interpretability" },
      { name: "spaCy", level: "Taxonomy Matching & Phrase Extraction" },
      { name: "Sentence-Transformers", level: "Dense Semantic Vector Embeddings" },
      { name: "Scikit-Learn & XGBoost", level: "Agroclimatic Predictive Modeling" },
      { name: "SHAP", level: "Shapley Feature Importance Attribution" },
      { name: "OpenCV", level: "Radiograph Processing & Colormap Blending" },
    ],
  },
  {
    category: "Databases & Infrastructure",
    items: [
      { name: "PostgreSQL & PostGIS", level: "Geospatial Indexing & Relational Data" },
      { name: "MySQL 8", level: "Relational Normalisation & Constraints" },
      { name: "Prisma ORM", level: "Database Schema Migrations & Types" },
      { name: "Redis & Celery", level: "Asynchronous Job Queues" },
      { name: "Docker", level: "Containerized Microservices" },
      { name: "Git & GitHub", level: "Version Control & CI/CD Deployment" },
      { name: "pfSense & Snort", level: "Virtual Network Firewalls & IDS/IPS" },
    ],
  },
];

const AllTechnologies = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#07070a] px-4 sm:px-10 py-16 max-w-6xl mx-auto">
      <div className="mb-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-white px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 transition"
        >
          <FaArrowLeft className="text-xs" />
          <span>Back</span>
        </button>
      </div>

      <div className="w-full text-center mb-16">
        <p className={styles.sectionSubText}>Verified Skill Matrix</p>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-1">
          Technologies & Competencies
        </h1>
        <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Technical proficiencies backed by concrete repository implementations,
          academic laboratory experiments, and ongoing AI research.
        </p>
      </div>

      <div className="space-y-12">
        {TECH_DOMAINS.map((domain) => (
          <div
            key={domain.category}
            className="rounded-2xl border border-white/10 bg-[#0e0e14] p-6 sm:p-8"
          >
            <h2 className="text-sm font-mono uppercase tracking-widest text-purple-400 mb-6 pb-3 border-b border-white/5">
              {domain.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {domain.items.map((tech) => (
                <div
                  key={tech.name}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition duration-200"
                >
                  <h3 className="text-white text-base font-bold tracking-tight">
                    {tech.name}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    {tech.level}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button
          onClick={() => navigate("/projects")}
          className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-gray-200 transition shadow-lg"
        >
          Explore Projects Built With These Technologies
        </button>
      </div>
    </div>
  );
};

export default AllTechnologies;
