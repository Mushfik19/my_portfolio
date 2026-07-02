import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient shadow-card rounded-[20px] p-[1px]"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={`${icon}${icon.includes("?") ? "&" : "?"}tr=f-auto`}
            alt={title}
            loading="lazy"
            width={64}
            height={64}
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const profileImage = `${import.meta.env.BASE_URL}about-profile.png`;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get To Know Me</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <div className="mt-4 flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[14px] sm:text-[17px] max-w-3xl sm:leading-[30px] leading-7"
        >
          I am Mahfujur Rahman, a Computer Science student and AI Research
          Enthusiast with a strong interest in Artificial Intelligence, Machine
          Learning, Healthcare Analytics, and Software Development.

          <br />
          <br />

          My work focuses on developing intelligent solutions that solve
          real-world problems through data-driven approaches. I have contributed
          to healthcare research projects, developed predictive AI models, and
          built software applications ranging from Smart Parking Management
          Systems to modern web applications.

          <br />
          <br />

          I am passionate about combining research, innovation, and technology
          to create impactful solutions that improve healthcare, sustainability,
          and everyday life.
        </motion.p>

        <motion.div
          variants={fadeIn("left", "spring", 0.2, 1)}
          className="w-full max-w-[360px] shrink-0 overflow-hidden rounded-2xl border border-[#915eff]/40 bg-[#151030] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:max-w-[420px] lg:-mt-16"
        >
          <img
            src={profileImage}
            alt="Mahfujur Rahman"
            loading="lazy"
            className="h-[420px] w-full rounded-xl object-cover object-top sm:h-[520px]"
            width={420}
            height={520}
          />
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
