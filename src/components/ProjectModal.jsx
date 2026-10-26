import React, { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "Live Demo":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/30";
      case "Prototype":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";
      case "Research / Experiment":
        return "bg-purple-500/10 text-purple-400 border-purple-500/30";
      case "Academic Lab":
        return "bg-blue-500/10 text-blue-400 border-blue-500/30";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d0d12] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 text-white transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-5 right-5 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition duration-200"
        >
          <FaTimes className="text-lg" />
        </button>

        {/* Header */}
        <div className="pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs uppercase font-mono tracking-wider px-2.5 py-1 rounded border border-white/10 bg-white/5 text-gray-300">
              {project.category}
            </span>
            <span
              className={`text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded border ${getStatusBadge(
                project.status
              )}`}
            >
              {project.status}
            </span>
            {project.lastVerified && (
              <span className="text-xs text-gray-500 font-mono">
                Verified: {project.lastVerified}
              </span>
            )}
          </div>
          <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            {project.title}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Medical AI Disclaimer Banner if applicable */}
        {project.isMedicalAI && project.disclaimer && (
          <div className="mt-5 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
            <FaExclamationTriangle className="text-amber-400 text-lg shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
              <strong className="text-amber-300 block mb-1">Medical AI Research Notice:</strong>
              {project.disclaimer}
            </div>
          </div>
        )}

        {/* Links bar */}
        <div className="flex flex-wrap items-center gap-3 mt-6 pt-5 border-t border-white/10">
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-semibold shadow-[0_0_20px_rgba(6,182,212,0.5)] transition duration-200"
            >
              <FaExternalLinkAlt className="text-xs" />
              <span>Launch Live Application</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/10 transition"
            >
              <FaGithub className="text-base" />
              <span>GitHub Repository</span>
            </a>
          )}
          {project.documentationUrl && (
            <a
              href={project.documentationUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 hover:border-white/30 text-gray-300 hover:text-white text-sm font-medium transition"
            >
              <span>Documentation / API Docs</span>
            </a>
          )}
        </div>

        {/* Deep Dive Sections */}
        <div className="mt-8 space-y-7">
          {/* Overview */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-mono text-purple-400 mb-2">
              System Overview
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Problem Statement */}
          {project.problemStatement && (
            <div>
              <h3 className="text-sm uppercase tracking-wider font-mono text-purple-400 mb-2">
                Problem Statement & Motivation
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.problemStatement}
              </p>
            </div>
          )}

          {/* Verified Features */}
          {project.verifiedFeatures && project.verifiedFeatures.length > 0 && (
            <div>
              <h3 className="text-sm uppercase tracking-wider font-mono text-purple-400 mb-3">
                Verified Implementation Features
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {project.verifiedFeatures.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 bg-white/[0.02] border border-white/5 p-3 rounded-lg"
                  >
                    <FaCheckCircle className="text-emerald-400 shrink-0 mt-0.5 text-xs" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture */}
          {project.architecture && (
            <div>
              <h3 className="text-sm uppercase tracking-wider font-mono text-purple-400 mb-2">
                System Architecture & Data Flow
              </h3>
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs sm:text-sm text-purple-300 leading-relaxed overflow-x-auto">
                {project.architecture}
              </div>
            </div>
          )}

          {/* Methods & Approach */}
          {project.methodsOrApproach && (
            <div>
              <h3 className="text-sm uppercase tracking-wider font-mono text-purple-400 mb-2">
                Methods & Technical Approach
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.methodsOrApproach}
              </p>
            </div>
          )}

          {/* My Contribution */}
          {project.myContribution && (
            <div>
              <h3 className="text-sm uppercase tracking-wider font-mono text-purple-400 mb-2">
                My Direct Contribution
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.myContribution}
              </p>
            </div>
          )}

          {/* Results & Limitations Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {project.results && (
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                <h4 className="text-xs uppercase tracking-wider font-mono text-emerald-400 mb-2">
                  Observed Results & Evidence
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {project.results}
                </p>
              </div>
            )}
            {project.limitations && (
              <div className="p-4 rounded-xl bg-gray-900/40 border border-white/10">
                <h4 className="text-xs uppercase tracking-wider font-mono text-gray-400 mb-2">
                  Transparent Limitations & Scope
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {project.limitations}
                </p>
              </div>
            )}
          </div>

          {/* Technologies Badges */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-mono text-purple-400 mb-3">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-8 pt-5 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
