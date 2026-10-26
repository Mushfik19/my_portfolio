import { motion } from "framer-motion";
import { researchFocus } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { FaFlask, FaMicroscope } from "react-icons/fa";

const ResearchFocus = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Scientific Inquiry & Methodologies</p>
        <h2 className={styles.sectionHeadText}>Research Focus.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-[14px] sm:text-[16px] leading-7 text-secondary"
      >
        My academic research centers on practical, explainable computational systems that bridge
        theoretical modeling with real-world constraints in healthcare, agriculture, and civic infrastructure.
      </motion.p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        {researchFocus.map((item, index) => (
          <motion.div
            key={item.title}
            variants={fadeIn("up", "spring", index * 0.15, 0.75)}
            className="rounded-2xl border border-white/10 bg-[#0e0e14] hover:border-white/20 p-6 flex flex-col justify-between transition duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="p-2 rounded-lg bg-white/5 border border-white/10 text-purple-400 text-sm">
                  {index % 2 === 0 ? <FaMicroscope /> : <FaFlask />}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(ResearchFocus, "research");
