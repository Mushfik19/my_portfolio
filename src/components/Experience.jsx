import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#0e0e14",
      color: "#fff",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "1rem",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    }}
    contentArrowStyle={{ borderRight: "7px solid #0e0e14" }}
    date={experience.date}
    iconStyle={{ background: "#161622", border: "2px solid rgba(255, 255, 255, 0.2)" }}
    icon={
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={`${experience.icon}${
            experience.icon.includes("?") ? "&" : "?"
          }tr=f-auto`}
          alt={experience.company_name}
          loading="lazy"
          width="60%"
          height="60%"
          className="w-[60%] h-[60%] object-contain opacity-90"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-lg sm:text-xl font-bold tracking-tight">
        {experience.title}
      </h3>
      <p
        className="text-gray-400 text-xs sm:text-sm font-medium font-mono"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-4 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={index}
          className="text-gray-300 text-xs sm:text-sm pl-1 leading-relaxed"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Academic, Research & Leadership Roles</p>
        <h2 className={styles.sectionHeadText}>Experience & Roles.</h2>
      </motion.div>
      <div className="mt-12 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
