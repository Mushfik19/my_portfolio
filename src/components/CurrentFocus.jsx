import { motion } from "framer-motion";
import { currentFocus } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const CurrentFocus = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Right Now</p>
        <h2 className={styles.sectionHeadText}>Current Focus</h2>
      </motion.div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {currentFocus.map((item, index) => (
          <motion.div
            key={item}
            variants={fadeIn("up", "spring", index * 0.15, 0.75)}
            className="flex items-start gap-4 rounded-[22px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
          >
            <span className="mt-1 inline-block h-3 w-3 rounded-full bg-[#915eff] shadow-[0_0_15px_rgba(145,94,255,0.8)]"></span>
            <p className="text-[15px] leading-7 text-[#e4defd]">{item}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(CurrentFocus, "focus");
