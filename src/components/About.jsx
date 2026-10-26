import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon, description }) => {
  return (
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      scale={1.03}
      transitionSpeed={450}
      className="xs:w-[260px] w-full flex-1"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.25 * index, 0.75)}
        className="w-full bg-[#151030] border border-[#915eff]/40 hover:border-[#915eff] rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between min-h-[260px] shadow-[0_15px_40px_rgba(0,0,0,0.35)]"
      >
        <div>
          <div className="w-14 h-14 rounded-2xl bg-[#1d1836] border border-[#915eff]/50 flex items-center justify-center mb-4 shadow-inner">
            <img
              src={`${icon}${icon.includes("?") ? "&" : "?"}tr=f-auto`}
              alt={title}
              loading="lazy"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>
          <h3 className="text-white text-lg font-bold tracking-tight mb-2">
            {title}
          </h3>
          <p className="text-secondary text-xs sm:text-sm leading-relaxed">
            {description}
          </p>
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
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <div className="mt-6 flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[14px] sm:text-[16px] max-w-3xl sm:leading-[30px] leading-7 space-y-4"
        >
          <p>
            I am a Computer Science student at Daffodil International University, an
            active member of the IEEE DIU Student Branch Computer Society, and an AI/software
            engineering practitioner. My focus lies at the intersection of applied machine learning,
            civic technology, and explainable AI.
          </p>
          <p>
            Rather than treating AI models as isolated black-box artifacts, I build end-to-end software
            ecosystems where predictions are grounded, interpretable, and verifiable. My work spans
            tamper-evident civic coordination platforms (featuring spatial Haversine distance verification
            and SHA-256 audit chaining), medical imaging workflows with Grad-CAM explainability,
            and agroclimatic machine learning for resource-constrained agriculture.
          </p>
          <p>
            I adhere to strict software engineering discipline: writing parameterised queries,
            building resilient asynchronous APIs with FastAPI and Next.js, maintaining reproducible
            data pipelines, and practicing transparent documentation of both technical achievements and
            real-world limitations.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.2, 1)}
          className="w-full max-w-[360px] shrink-0 overflow-hidden rounded-2xl border-2 border-[#915eff]/50 bg-[#151030] p-2.5 shadow-[0_20px_60px_rgba(145,94,255,0.3)] sm:max-w-[420px] lg:-mt-10"
        >
          <img
            src={profileImage}
            alt="Md. Mahfujur Rahman"
            loading="lazy"
            className="h-[440px] w-full rounded-xl object-cover object-top sm:h-[500px]"
            width={420}
            height={500}
          />
        </motion.div>
      </div>

      {/* Core Technical Pillars */}
      <div className="mt-16">
        <h3 className="text-xs uppercase font-mono tracking-widest text-[#915eff] mb-6 font-semibold">
          Core Technical Domains
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
