import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Achievements from "./components/Achievements";
import CurrentFocus from "./components/CurrentFocus";
import Experience from "./components/Experience";
import ResearchFocus from "./components/ResearchFocus";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Certs from "./components/Certs";
import PageShell from "./components/PageShell";

const Home = () => {
  return (
    <PageShell>
      <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <Hero />
      </div>
      <About />
      <Achievements />
      <ResearchFocus />
      <Tech />
      <Works />
      <CurrentFocus />
      <Experience />
      <Certs />
      <div className="relative z-0">
        <Contact />
      </div>
    </PageShell>
  );
};

export default Home;
