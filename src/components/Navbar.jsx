import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 z-30 bg-[#09090dd9] backdrop-blur-md fixed top-0 left-0 border-b border-white/5`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setToggle(false);
          }}
        >
          <img
            src={`${logo}${logo.includes("?") ? "&" : "?"}tr=f-auto`}
            alt="logo"
            loading="lazy"
            className="w-8 h-8 object-contain"
            width={32}
            height={32}
          />
          <div className="flex flex-col">
            <span className="text-white text-sm sm:text-base font-bold tracking-tight">
              Md. Mahfujur Rahman
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex flex-row items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 backdrop-blur-md">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                className={`block rounded-full px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition duration-200 ${
                  activePath === link.path
                    ? "bg-white text-black font-semibold shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`${import.meta.env.BASE_URL}Mahfujur_Rahman_CV.pdf`}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-gray-300 hover:text-white border border-white/10 hover:border-white/30 transition duration-200"
          >
            CV / Resume
          </a>
          <Link
            to="/contact"
            className="px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-white text-black font-semibold hover:bg-gray-200 transition duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle navigation menu"
            className="p-2 text-gray-300 hover:text-white focus:outline-none"
          >
            <img
              src={`${(toggle ? close : menu)}${(toggle ? close : menu).includes("?") ? "&" : "?"}tr=f-auto`}
              alt="menu"
              className="w-5 h-5 object-contain"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-[#0c0c12] border-l border-white/10 shadow-2xl transition-transform duration-300 z-40 p-6 flex flex-col justify-between ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="w-full flex items-center justify-between pb-6 border-b border-white/10">
            <span className="text-white text-sm font-bold font-mono">MENU</span>
            <button
              onClick={() => setToggle(false)}
              aria-label="Close menu"
              className="p-1 text-gray-400 hover:text-white"
            >
              <img
                src={`${close}${close.includes("?") ? "&" : "?"}tr=f-auto`}
                alt="close"
                className="w-4 h-4 object-contain"
                width={16}
                height={16}
              />
            </button>
          </div>

          <div className="flex flex-col gap-2 mt-6">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                onClick={() => setToggle(false)}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition ${
                  activePath === link.path
                    ? "bg-white text-black font-semibold"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col gap-2">
          <a
            href={`${import.meta.env.BASE_URL}Mahfujur_Rahman_CV.pdf`}
            target="_blank"
            rel="noreferrer"
            className="w-full text-center py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider border border-white/10 text-gray-300"
          >
            Download CV
          </a>
          <Link
            to="/contact"
            onClick={() => setToggle(false)}
            className="w-full text-center py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider bg-white text-black font-semibold"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
          aria-hidden="true"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
