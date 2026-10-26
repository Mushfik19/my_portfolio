import React, { useState, useMemo } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projectsData, PROJECT_CATEGORIES } from "../data/projectsData";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaSearch,
  FaInfoCircle,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTools,
  FaLayerGroup,
} from "react-icons/fa";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ project, index, onSelectProject }) => {
  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-500/15 text-emerald-300 border-emerald-500/40";
      case "Live Demo":
        return "bg-cyan-500/20 text-cyan-300 border-cyan-500/50";
      case "Prototype":
        return "bg-amber-500/15 text-amber-300 border-amber-500/40";
      case "Research / Experiment":
        return "bg-purple-500/15 text-purple-300 border-purple-500/40";
      case "Academic Lab":
        return "bg-blue-500/15 text-blue-300 border-blue-500/40";
      default:
        return "bg-gray-500/15 text-gray-300 border-gray-500/40";
    }
  };

  const handleCardClick = (e) => {
    // If user clicked directly on an external anchor, don't interfere
    if (e.target.closest("a")) return;
    onSelectProject(project);
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", (index % 3) * 0.15, 0.75)}
      className="w-full flex"
    >
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        scale={1.02}
        transitionSpeed={350}
        glareEnable={true}
        glareMaxOpacity={0.08}
        glareColor="#915eff"
        className="w-full flex"
      >
        <div
          role="button"
          tabIndex={0}
          onClick={handleCardClick}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onSelectProject(project);
            }
          }}
          className="w-full bg-[#151030]/95 border border-[#915eff]/30 hover:border-[#915eff] rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_15px_40px_rgba(145,94,255,0.25)] backdrop-blur-sm group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#915eff]"
        >
          <div>
            {/* Top Badges (Category & Status) */}
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#1d1836] border border-[#915eff]/40 text-[#dfd9ff] truncate max-w-[60%]">
                {project.category}
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                {project.liveDemoUrl && (
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Live</span>
                  </span>
                )}
                <span
                  className={`text-[10px] sm:text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border ${getStatusBadge(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>
            </div>

            {/* Project Title */}
            <h3 className="text-white font-bold text-lg sm:text-xl group-hover:text-[#915eff] transition-colors duration-200 mt-1 line-clamp-1">
              {project.title}
            </h3>

            {/* Medical AI subtle tag if applicable */}
            {project.isMedicalAI && (
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-[10px] text-amber-300 mt-1.5">
                <FaExclamationTriangle className="text-[9px]" />
                <span>Medical AI Research</span>
              </div>
            )}

            {/* Concise Summary (2 lines max - Tap to see full details) */}
            <p className="text-secondary text-xs sm:text-[13px] leading-relaxed mt-2.5 line-clamp-2">
              {project.shortDescription}
            </p>
          </div>

          {/* Compact Tech Stack & Footer Action */}
          <div className="mt-4 pt-3 border-t border-white/10">
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1d1836] text-[#d8c7ff] border border-[#915eff]/20"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-gray-400">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* Footer Action Row */}
            <div className="flex items-center justify-between gap-2 pt-1">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectProject(project);
                }}
                className="text-[11px] sm:text-xs font-semibold text-[#915eff] group-hover:text-white px-2.5 py-1.5 rounded-lg bg-[#915eff]/15 group-hover:bg-[#915eff] transition-all flex items-center gap-1.5 border border-[#915eff]/30"
              >
                <FaInfoCircle className="text-xs" />
                <span>Tap for Full Specs</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </button>

              <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View live application demo"
                    className="px-2.5 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 text-cyan-300 text-xs font-semibold flex items-center gap-1 transition"
                  >
                    <FaExternalLinkAlt className="text-[10px]" />
                    <span>Live</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View source repository on GitHub"
                    className="p-1.5 rounded-lg bg-[#1d1836] hover:bg-[#915eff]/30 border border-white/10 text-gray-300 hover:text-white transition duration-200"
                  >
                    <FaGithub className="text-xs sm:text-sm" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = { All: projectsData.length };
    PROJECT_CATEGORIES.forEach((cat) => {
      if (cat !== "All") {
        counts[cat] = projectsData.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.shortDescription.toLowerCase().includes(q) ||
        project.technologies.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Verified Technical Work & Research</p>
        <h2 className={styles.sectionHeadText}>Projects & Engineering.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl sm:leading-[30px]"
        >
          An auditable catalog of software systems, machine learning architectures,
          civic platforms, and NLP pipelines. Outlining exactly what was built, the verified
          features implemented, and the specific technology stack utilized.
        </motion.p>
      </div>

      {/* Filter and Search Controls */}
      <div className="mt-8 space-y-4">
        {/* Search bar */}
        <div className="relative max-w-md">
          <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title or tech (e.g. FastAPI, Next.js, spaCy)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#151030] border border-[#915eff]/30 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#915eff] transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {PROJECT_CATEGORIES.map((category) => {
            const count = categoryCounts[category] || 0;
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition duration-200 flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[#915eff] text-white font-semibold shadow-[0_0_15px_rgba(145,94,255,0.5)]"
                    : "bg-[#151030] hover:bg-[#1d1836] text-gray-300 hover:text-white border border-[#915eff]/20"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? "bg-black/30 text-white" : "bg-white/10 text-gray-300"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid with 3D Tilt Cards (NO IMAGES) */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              project={project}
              onSelectProject={setSelectedProject}
            />
          ))
        ) : (
          <div className="col-span-full py-16 text-center rounded-2xl border border-white/10 bg-[#151030]/50">
            <p className="text-gray-400 text-sm">
              No projects match the selected filter or search term.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-3 px-4 py-1.5 rounded-lg text-xs bg-[#915eff] text-white transition"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default SectionWrapper(Works, "projects");
