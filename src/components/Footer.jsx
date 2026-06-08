import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-12 text-center border-t border-[#2a2a4a] mt-20">
      <h2 className="text-[#7ea8ff] text-4xl font-bold">
        Md. Mahfujur Rahman
      </h2>

      <div className="flex justify-center gap-5 mt-6">
        <a
          href="https://github.com/Mushfik19"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 flex items-center justify-center rounded-xl border border-[#2a2a4a]"
        >
          <FaGithub className="text-white text-2xl" />
        </a>

        <a
          href="https://www.linkedin.com/in/md-mahfujur-rahman-cse19/"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 flex items-center justify-center rounded-xl border border-[#2a2a4a]"
        >
          <FaLinkedin className="text-white text-2xl" />
        </a>

        <a
          href="mailto:mushfik.cse@gmail.com"
          className="w-14 h-14 flex items-center justify-center rounded-xl border border-[#2a2a4a]"
        >
          <FaEnvelope className="text-white text-2xl" />
        </a>

        <a
          href="https://www.facebook.com/mushfik.arman.19"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 flex items-center justify-center rounded-xl border border-[#2a2a4a]"
        >
          <FaFacebook className="text-white text-2xl" />
        </a>
      </div>

      <p className="text-gray-400 mt-8 text-lg">
        AI Research Enthusiast • Software Developer • Healthcare Analytics
      </p>

      <p className="text-gray-500 mt-3">
        © 2026 Md. Mahfujur Rahman — All rights reserved
      </p>
    </footer>
  );
};

export default Footer;