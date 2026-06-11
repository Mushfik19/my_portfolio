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
      className={`${styles.paddingX} w-full flex items-center py-2 z-20 bg-[#050a208e] fixed`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-0"
          onClick={() => {
            window.scrollTo(0, 0);
            setToggle(false);
          }}
        >
          <img
            src={`${logo}${logo.includes("?") ? "&" : "?"}tr=f-auto`}
            alt="logo"
            loading="lazy"
            className="w-16 object-contain "
            width={64}
            height={64}
          />
          <p className="text-white text-[17px] font-semibold cursor-pointer">
            <span className="sm:block  font-bold">Mahfujur</span> | Rahman
          </p>
        </Link>

        <ul className="hidden sm:flex flex-row items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                activePath === link.path
                  ? "text-white"
                  : "text-[#ffffff8c]"
              } text-[13px] font-semibold tracking-[0.18em] cursor-pointer transition`}
            >
              <Link
                to={link.path}
                className={`block rounded-full px-4 py-2 transition duration-300 ${
                  activePath === link.path
                    ? "bg-gradient-to-r from-[#8d5bff] to-[#1ec8ff] shadow-[0_0_25px_rgba(145,94,255,0.35)]"
                    : "hover:bg-white/10"
                }`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden sm:flex items-center gap-2">
          <div className="rounded-full border border-[#915eff]/40 bg-[#915eff]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d8c7ff]">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]"></span>
            Open To Work
          </div>
          <Link
            to="/contact"
            className="group relative overflow-hidden rounded-full border border-[#915eff] bg-[#915eff] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_10px_30px_rgba(145,94,255,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#7d48f5]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-500 group-hover:translate-x-full"></span>
            <span className="relative">Hire Me</span>
          </Link>
        </div>
        {/* Mobile menu icon */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={`${(toggle ? close : menu)}${(toggle ? close : menu).includes("?") ? "&" : "?"}tr=f-auto`}
            alt="menu"
            loading="lazy"
            className="w-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            width={28}
            height={28}
          />
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-[#050816] shadow-lg transition-transform duration-300 z-40 ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 p-6">
          <div className="w-full flex items-center justify-end">
            <img
              src={`${close}${close.includes("?") ? "&" : "?"}tr=f-auto`}
              alt="close"
              loading="lazy"
              className="w-[24px] h-[24px] object-contain cursor-pointer"
              onClick={() => setToggle(false)}
              width={24}
              height={24}
            />
          </div>

          {navLinks.map((link) => (
            <p
              key={link.id}
              onClick={() => {
                setToggle(false);
              }}
              className="mt-2"
            >
              <Link
                to={link.path}
                className={`block rounded-2xl px-4 py-3 text-[20px] font-semibold tracking-[0.12em] transition-all ${
                  activePath === link.path
                    ? "bg-white/10 text-white"
                    : "text-[#ffffffb0] hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.title}
              </Link>
            </p>
          ))}
        </div>
      </div>

      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
