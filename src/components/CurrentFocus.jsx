import { motion } from "framer-motion";
import { currentFocus } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const CurrentFocus = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Active Technical Pursuits</p>
        <h2 className={styles.sectionHeadText}>Current Focus.</h2>
      </motion.div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {currentFocus.map((item, index) => (
          <motion.div
            key={item}
            variants={fadeIn("up", "spring", index * 0.12, 0.75)}
            className="flex items-start gap-4 rounded-xl border border-white/10 bg-[#0e0e14] p-5 hover:border-white/20 transition duration-200"
          >
            <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-emerald-400 shrink-0"></span>
            <p className="text-xs sm:text-sm leading-relaxed text-gray-300">{item}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(CurrentFocus, "focus");
