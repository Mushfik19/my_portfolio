import { motion } from "framer-motion";
import { achievements } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Proof Of Progress</p>
        <h2 className={styles.sectionHeadText}>Achievements</h2>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {achievements.map((item, index) => (
          <motion.div
            key={item.title}
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className="rounded-[24px] border border-white/10 bg-[#120d27] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-[#915eff]">
              {item.meta}
            </p>
            <h3 className="mt-3 text-[24px] font-bold text-white">
              {item.title}
            </h3>
            <p className="mt-4 text-[15px] leading-7 text-secondary">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");
