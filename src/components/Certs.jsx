import React, { useState, useEffect } from "react";
import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { FaTimes, FaSearchPlus, FaExternalLinkAlt } from "react-icons/fa";

const Certs = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    if (selectedCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Verified Credentials & Accreditations</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[14px] sm:text-[16px] max-w-3xl sm:leading-[30px]"
      >
        Verified credentials across software engineering, cybersecurity, single page applications (SPA),
        academic leadership, and technical workshops. Click any certificate to inspect full resolution.
      </motion.p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            onClick={() => setSelectedCert(cert)}
            className="bg-[#0e0e14] border border-white/10 hover:border-[#915eff] rounded-2xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-[0_10px_30px_rgba(145,94,255,0.25)] group flex flex-col justify-between cursor-pointer"
          >
            <div className="relative w-full h-52 bg-black/60 overflow-hidden flex items-center justify-center">
              <img
                src={cert.image}
                alt={cert.title}
                loading="lazy"
                className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-[#050816]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-[#915eff] text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                  <FaSearchPlus className="text-xs" />
                  <span>View Full Certificate</span>
                </span>
              </div>
            </div>

            <div className="p-4 border-t border-white/5 flex-1 flex items-center justify-between gap-2 bg-[#151030]/80">
              <h3 className="text-white text-xs sm:text-sm font-medium tracking-tight line-clamp-2">
                {cert.title}
              </h3>
              <FaExternalLinkAlt className="text-gray-500 group-hover:text-[#915eff] text-xs shrink-0 transition-colors" />
            </div>
          </div>
        ))}
      </div>

      {/* Full Certificate Lightbox Modal */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] bg-[#0d0d12] border border-white/15 rounded-2xl shadow-2xl p-4 sm:p-6 text-white flex flex-col items-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedCert(null)}
              aria-label="Close certificate preview"
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition duration-200 z-10"
            >
              <FaTimes className="text-base" />
            </button>

            <h3 className="text-base sm:text-lg font-bold text-white mb-3 pr-10 text-center">
              {selectedCert.title}
            </h3>

            <div className="w-full flex-1 max-h-[75vh] overflow-auto flex items-center justify-center bg-black/50 rounded-xl p-2 border border-white/5">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-w-full max-h-[72vh] object-contain rounded-lg shadow-lg"
              />
            </div>

            <div className="mt-3 flex items-center gap-3">
              <a
                href={selectedCert.image}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-[#915eff] hover:bg-[#7e47eb] text-white transition duration-200"
              >
                <FaExternalLinkAlt className="text-xs" />
                <span>Open Original Image</span>
              </a>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-xs font-semibold px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-gray-300 hover:text-white transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Certs, "certs");