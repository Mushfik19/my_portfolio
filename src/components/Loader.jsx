// src/Loader.jsx

import React from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="bg-[#151030] text-green-400 font-mono p-4 rounded-md shadow-lg border border-[#915eff] w-[280px] text-sm animate-pulse">
        <p> Welcome to My Portfolio...</p>
        <p> AI Research | Software Development | Machine Learning...</p>
        <p> Loading Portfolio...{progress.toFixed(0)}%</p>
        <p className="text-[#915eff] mt-2">[Md. Mahfujur Rahman]</p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
