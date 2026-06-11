import { useEffect, useState } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, label, [role="button"], .cursor-hover-target';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");

    if (!mediaQuery.matches) {
      document.body.classList.remove("custom-cursor-enabled");
      return undefined;
    }

    document.body.classList.add("custom-cursor-enabled");

    const handleMouseMove = (event) => {
      const target = event.target;
      setPosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);
      setIsInteractive(Boolean(target.closest(INTERACTIVE_SELECTOR)));
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsInteractive(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        className={`custom-cursor-glow ${isVisible ? "is-visible" : ""} ${
          isInteractive ? "is-interactive" : ""
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <div
        className={`custom-cursor-ring ${isVisible ? "is-visible" : ""} ${
          isInteractive ? "is-interactive" : ""
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <div
        className={`custom-cursor-dot ${isVisible ? "is-visible" : ""} ${
          isInteractive ? "is-interactive" : ""
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
