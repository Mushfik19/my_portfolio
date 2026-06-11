import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AllTechnologies from "./components/AllTechnologies"; // for /techstack
import About from "./components/About";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Experience from "./components/Experience";
import Certs from "./components/Certs";
import Contact from "./components/Contact";
import PageShell from "./components/PageShell";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/all-technologies"
          element={
            <PageShell>
              <AllTechnologies />
            </PageShell>
          }
        />
        <Route
          path="/about"
          element={
            <PageShell>
              <About />
            </PageShell>
          }
        />
        <Route
          path="/skills"
          element={
            <PageShell>
              <Tech />
            </PageShell>
          }
        />
        <Route
          path="/projects"
          element={
            <PageShell>
              <Works />
            </PageShell>
          }
        />
        <Route
          path="/experience"
          element={
            <PageShell>
              <Experience />
            </PageShell>
          }
        />
        <Route
          path="/certs"
          element={
            <PageShell>
              <Certs />
            </PageShell>
          }
        />
        <Route
          path="/contact"
          element={
            <PageShell>
              <Contact />
            </PageShell>
          }
        />
      </Routes>
    </>
  );
};

export default App;
