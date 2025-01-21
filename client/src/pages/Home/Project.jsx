import React, { useState } from "react";
import SectionTitel from "../../components/SectionTitel";
import { useSelector } from "react-redux";

function Project() {
  const [SelectedIndex, setSelectedIndex] = useState(0);
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { project } = portfolioData;
        
  return (
    <div>
      <SectionTitel titel={"Projects"} />

      <div className="flex py-10 gap-10  sm:flex-col sm:w-full">
        <div className="flex flex-col gap-10 sm:gap-8 border-l-4 border-[#18646391] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {project.map((project, index) => {
            return (
              <div
                onClick={() => setSelectedIndex(index)}
                className="cursor-pointer"
                key={index}
              >
                <h1
                  className={`text-xl ${
                    SelectedIndex === index
                      ? "text-tertiary border-tertiary border-l-4 -ml-1 bg-[#069e9118] py-3"
                      : "text-white"
                  } px-5`}
                >
                  {project.titel}
                </h1>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-10 sm:flex-col sm:px-10">
          <img src={project[SelectedIndex].image} alt="" className="h-60" />
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl font-semibold">
              {project[SelectedIndex].titel}
            </h1>
            <h1 className="text-tertiary text-xl font-semibold">
              {project[SelectedIndex].company}
            </h1>
            <p className="text-white text-xl">
              {project[SelectedIndex].description}
            </p>
            <p className="text-tertiary text-xl">
             <span className="text-gray-600 mr-5 font-semibold">Technologies-used :-</span>  {project[SelectedIndex].technologes.join(" ")}
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
