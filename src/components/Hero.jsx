import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

const ROLES = [
  "AI & Machine Learning Researcher",
  "Full-Stack Software Engineer",
  "Explainable AI (Grad-CAM) Practitioner",
  "Civic Technology & Systems Architect",
  "Organizing Joint Secretary @ ICADHI",
  "NLP & Semantic Search Specialist",
];

const TypewriterText = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFull = ROLES[roleIndex];
    let timer;

    if (!isDeleting && text === currentFull) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      // Switch to next word
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      timer = setTimeout(() => {}, 300);
    } else {
      const speed = isDeleting ? 30 : 65;
      timer = setTimeout(() => {
        setText((prev) =>
          isDeleting
            ? currentFull.substring(0, prev.length - 1)
            : currentFull.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <div className="flex items-center gap-2 mt-1 sm:mt-2 min-h-[32px] font-mono">
      <span className="text-[#00cea8] font-bold text-base sm:text-xl select-none">&gt;</span>
      <span className="text-white font-medium text-sm sm:text-base lg:text-lg tracking-tight drop-shadow-[0_2px_10px_rgba(145,94,255,0.4)]">
        {text}
      </span>
      <span className="inline-block w-1.5 sm:w-2 h-4 sm:h-5 bg-[#00cea8] animate-pulse select-none ml-0.5" />
    </div>
  );
};

const Hero = () => {
  const cvUrl = `${import.meta.env.BASE_URL}Mahfujur_Rahman_CV.pdf`;

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* 3D Computer Canvas (Background / Interactive) */}
      <div className="absolute inset-0 z-0">
        <ComputersCanvas />
      </div>

      {/* Hero Content Overlay (pointer-events-none so drags pass directly to 3D canvas) */}
      <div
        className={`${styles.paddingX} inset-0 sm:top-[65px] top-[75px] absolute max-w-7xl mx-auto flex flex-row items-start gap-4 z-10 pointer-events-none`}
      >
        <div className="flex flex-col justify-center items-center mt-3">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-44 violet-gradient"></div>
        </div>

        <div className="max-w-3xl">
          {/* Name in exactly ONE line without breaking */}
          <h1 className="text-white font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-[50px] tracking-tight whitespace-nowrap">
            Hi, I'm <span className="text-[#915eff]">Md. Mahfujur Rahman</span>
          </h1>

          {/* Dynamic Typewriter Animation */}
          <TypewriterText />

          {/* Professional Bio Tagline */}
          <p className="mt-2 text-secondary text-xs sm:text-sm max-w-2xl leading-relaxed">
            Building explainable AI systems (Grad-CAM), verifiable civic coordination platforms,
            and robust full-stack software solutions.
          </p>

          {/* Quick Impact Metrics / Credential Badges */}
          <div className="flex flex-wrap gap-2.5 mt-3.5 pointer-events-auto">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#151030]/85 border border-[#915eff]/35 backdrop-blur-md shadow-md">
              <span className="text-xs sm:text-sm font-bold font-mono text-[#00cea8]">19+</span>
              <span className="text-[11px] text-gray-300 font-medium">Verified Projects</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#151030]/85 border border-[#915eff]/35 backdrop-blur-md shadow-md">
              <span className="text-xs sm:text-sm font-bold font-mono text-[#915eff]">ICADHI</span>
              <span className="text-[11px] text-gray-300 font-medium">Joint Secretary</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#151030]/85 border border-[#915eff]/35 backdrop-blur-md shadow-md">
              <span className="text-xs sm:text-sm font-bold font-mono text-cyan-400">IEEE CS</span>
              <span className="text-[11px] text-gray-300 font-medium">Publication Coordinator</span>
            </div>
          </div>

          {/* Compact CTA Buttons (pointer-events-auto for clickability) */}
          <div className="flex flex-wrap items-center gap-2.5 mt-4 pointer-events-auto">
            <a
              href="#projects"
              className="px-4 py-2 rounded-xl bg-[#915eff] hover:bg-[#7d48f5] text-white font-semibold text-xs sm:text-sm transition duration-200 shadow-[0_5px_20px_rgba(145,94,255,0.4)]"
            >
              Explore Projects
            </a>
            <a
              href={cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium border border-white/10 transition duration-200"
            >
              <FaFileAlt className="text-xs" />
              <span>Resume / CV</span>
            </a>
            <a
              href="https://github.com/Mushfik19"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white border border-white/10 transition duration-200"
            >
              <FaGithub className="text-sm" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-mahfujur-rahman-cse19/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white border border-white/10 transition duration-200"
            >
              <FaLinkedin className="text-sm" />
            </a>
          </div>
        </div>
      </div>

      {/* Profile portrait on top right in natural full color */}
      <div className="absolute right-8 top-20 sm:top-24 z-10 hidden md:block pointer-events-none">
        <img
          src={`${import.meta.env.BASE_URL}mahfuj.png`}
          alt="Md. Mahfujur Rahman"
          className="w-36 h-36 lg:w-44 lg:h-44 rounded-full border-4 border-[#915eff] object-cover shadow-[0_15px_40px_rgba(145,94,255,0.45)] pointer-events-auto"
        />
      </div>

      {/* 3D Interaction Hint & Scroll Indicator */}
      <div className="absolute sm:bottom-8 bottom-12 w-full flex flex-col justify-center items-center pointer-events-none z-10 gap-2">
        <span className="text-[11px] font-mono text-gray-400/80 bg-[#151030]/60 px-2.5 py-0.5 rounded-full border border-white/10 backdrop-blur-sm">
          ⟲ Drag anywhere to rotate 3D desktop
        </span>
        <a href="#about" aria-label="Scroll to About section" className="pointer-events-auto">
          <div className="w-[28px] h-[48px] rounded-3xl border-2 border-secondary flex justify-center items-start p-1.5">
            <motion.div
              animate={{
                y: [0, 18, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
