import React from "react";
import { useSelector } from "react-redux";

function Intro() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;

  const { welcomeText, discipation, fistName, middelName, lastName, caption } =
    intro;
  
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 sm:gap-3 py-10">
      <h1 className="text-white">{welcomeText || ""} </h1>
      <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
        {`${fistName || ""} ${middelName || ""} ${lastName || ""}`}
      </h1>
      <h1 className="text-6xl sm:text-3xl text-white font-semibold">
        {caption || ""}
      </h1>
      <p className="text-white w-2/3">{discipation || ""}</p>
      <button className="border-2 border-tertiary px-10 py-3 rounded text-tertiary">
        Get Started
      </button>
    </div>
  );
}

export default Intro;
