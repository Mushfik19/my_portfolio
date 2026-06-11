import { motion } from "framer-motion";
import { researchFocus } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ResearchFocus = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What Drives My Work</p>
        <h2 className={styles.sectionHeadText}>Research Focus</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-[16px] leading-7 text-secondary"
      >
        My academic interest centers on practical AI systems that connect
        research, data, and meaningful real-world use cases.
      </motion.p>

      <div className="mt-12 space-y-5">
        {researchFocus.map((item, index) => (
          <motion.div
            key={item.title}
            variants={fadeIn("right", "spring", index * 0.2, 0.75)}
            className="rounded-[24px] border border-[#915eff]/20 bg-gradient-to-r from-[#151030] to-[#0f172a] p-6"
          >
            <h3 className="text-[24px] font-bold text-white">{item.title}</h3>
            <p className="mt-3 max-w-4xl text-[15px] leading-7 text-secondary">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(ResearchFocus, "research");
