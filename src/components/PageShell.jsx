import Footer from "./Footer";
import Navbar from "./Navbar";
import { StarsCanvas } from "./canvas";

const PageShell = ({ children }) => {
  return (
    <div className="relative z-0 min-h-screen bg-[#050816]">
      <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <Navbar />
      </div>

      <div className="pt-24">{children}</div>

      <div className="relative z-0">
        <Footer />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default PageShell;
