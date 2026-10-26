import Footer from "./Footer";
import Navbar from "./Navbar";
import { StarsCanvas } from "./canvas";
import CyberBackground from "./CyberBackground";

const PageShell = ({ children }) => {
  return (
    <div className="relative z-0 min-h-screen bg-[#050816] text-white">
      {/* Unique full website AI neural constellation & cyber grid background */}
      <CyberBackground />

      <div className="relative z-10">
        <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <Navbar />
        </div>

        <main className="pt-20">{children}</main>

        {/* 3D Stars background ONLY in footer as requested */}
        <div className="relative z-0">
          <Footer />
          <StarsCanvas />
        </div>
      </div>
    </div>
  );
};

export default PageShell;
