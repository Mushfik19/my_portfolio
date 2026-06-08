import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { StarsCanvas } from "./components/canvas";
import Certs from "./components/Certs";

const Home = () => {
  return (
    <div className="relative z-0 bg-[#050816]">
      <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <Navbar />
        <Hero />
      </div>
     <About />
<Tech />
<Works />
<Experience />
<Certs />

<div className="relative z-0">
  <Contact />
  <Footer />
  <StarsCanvas />
</div>
    </div>
  );
};

export default Home;
