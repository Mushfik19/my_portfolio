import React from "react";
import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";

const Certs = () => {
  return (
    <section id="certs" className="py-20">
      <h2 className="text-white text-5xl font-bold text-center mb-12">
        Certifications
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-[#151030] rounded-2xl overflow-hidden w-[350px]"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-[220px] object-cover"
            />

            <div className="p-4">
              <h3 className="text-white text-lg font-semibold">
                {cert.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Certs, "certs");