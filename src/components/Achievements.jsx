import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { achievements } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Verified Academic & Leadership Milestones</p>
        <h2 className={styles.sectionHeadText}>Milestones.</h2>
      </motion.div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item, index) => (
          <motion.div
            key={item.title}
            variants={fadeIn("up", "spring", index * 0.15, 0.75)}
            className="w-full flex"
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.02}
              transitionSpeed={350}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="#915eff"
              className="w-full rounded-2xl border border-[#915eff]/30 bg-[#151030]/90 p-6 hover:border-[#915eff] transition duration-300 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-sm"
            >
              <div>
                <div className="inline-block text-[11px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-[#1d1836] border border-[#915eff]/40 text-[#dfd9ff]">
                  {item.meta}
                </div>
                <h3 className="mt-4 text-lg sm:text-xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-secondary">
                  {item.description}
                </p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");
