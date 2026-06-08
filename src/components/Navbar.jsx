import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    const sections = navLinks.map((link) =>
      document.getElementById(link.id)
    );

    const scrollPosition = window.scrollY + 300;

    let currentSection = "";

    sections.forEach((section, index) => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        // Check if section is currently in view
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = navLinks[index].title;
        }
      }
    });

    if (currentSection) {
      setActive(currentSection);
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 z-20 bg-[#050a208e] fixed`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-0"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
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

        <ul className="list-none hidden text-nowrap sm:flex flex-row gap-5">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title && link.title !== "CONTACT"
  ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]"
  : "text-[#ffffff69]"
              } hover:text-[#ffffffac] text-[15px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
<div className="hidden sm:flex items-center gap-2">
  <a
    href="/Mahfujur_Rahman_CV.pdf"
    target="_blank"
    rel="noreferrer"
    className="px-3 py-2 text-xs border border-[#915eff] text-[#915eff] rounded-lg hover:bg-[#915eff] hover:text-white transition"
  >
    Download CV
  </a>

  <a
    href="#contact"
    className="px-3 py-2 text-xs bg-[#915eff] text-white rounded-lg hover:bg-[#7d48f5] transition"
  >
    Hire Me
  </a>
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
                setActive(link.title);
                setToggle(false);
              }}
              className="text-[22px] mt-2 text-[#ffffffb0] hover:text-white font-medium cursor-pointer transition-all"
            >
              <a href={`#${link.id}`}>{link.title}</a>
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
