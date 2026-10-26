import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-8 text-center border-t border-white/10 mt-12 bg-[#09090d]">
      <h2 className="text-white text-xl sm:text-2xl font-bold tracking-tight">
        Md. Mahfujur Rahman (Mushfik)
      </h2>

      <p className="text-gray-400 mt-2 text-xs sm:text-sm max-w-md mx-auto">
        Computer Science Student · AI Research Enthusiast · Full-Stack Software Developer
      </p>

      <div className="flex justify-center gap-4 mt-5">
        <a
          href="https://github.com/Mushfik19"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Profile"
          className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 hover:border-white/30 text-gray-400 hover:text-white transition duration-200"
        >
          <FaGithub className="text-lg" />
        </a>

        <a
          href="https://www.linkedin.com/in/md-mahfujur-rahman-cse19/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Profile"
          className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 hover:border-white/30 text-gray-400 hover:text-white transition duration-200"
        >
          <FaLinkedin className="text-lg" />
        </a>

        <a
          href="mailto:mushfik.cse@gmail.com"
          aria-label="Email Mushfik"
          className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 hover:border-white/30 text-gray-400 hover:text-white transition duration-200"
        >
          <FaEnvelope className="text-lg" />
        </a>

        <a
          href="https://www.facebook.com/mushfik.arman.19"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook Profile"
          className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 hover:border-white/30 text-gray-400 hover:text-white transition duration-200"
        >
          <FaFacebook className="text-lg" />
        </a>
      </div>

      <div className="mt-6 pt-4 border-t border-white/5 text-gray-500 text-xs">
        © 2026 Md. Mahfujur Rahman. Built with React & Three.js.
      </div>
    </footer>
  );
};

export default Footer;
