import React, { useEffect, useRef } from "react";

const CyberBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle nodes for subtle neural network
    const particleCount = Math.min(Math.floor((width * height) / 25000), 55);
    const particles = [];
    const maxDistance = 140;

    let mouse = { x: null, y: null };

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1,
        color: i % 4 === 0 ? "rgba(0, 206, 168, " : "rgba(145, 94, 255, ",
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + "0.65)";
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color === "rgba(0, 206, 168, " ? "#00cea8" : "#915eff";
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect near particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(145, 94, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse if near
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 160) {
            const malpha = (1 - mdist / 160) * 0.35;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(0, 206, 168, ${malpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Ambient gradient orbs matching portfolio palette */}
      <div className="absolute -top-[15%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[#915eff]/10 blur-[130px]" />
      <div className="absolute top-[40%] -right-[15%] w-[600px] h-[600px] rounded-full bg-[#915eff]/08 blur-[150px]" />
      <div className="absolute -bottom-[10%] left-[20%] w-[550px] h-[550px] rounded-full bg-[#00cea8]/06 blur-[140px]" />

      {/* High-tech matrix dot grid */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(145, 94, 255, 0.4) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Interactive Neural Network Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default CyberBackground;
