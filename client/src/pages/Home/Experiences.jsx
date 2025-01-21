import React, { useState } from "react";
import SectionTitel from "../../components/SectionTitel";
import { useSelector } from "react-redux";
function Experiences() {
  const [SelectedIndex, setSelectedIndex] = useState(0);
  const { loading, portfolioData } = useSelector((state) => state.root);
  const {experience} = portfolioData ; 

  return (
    <div>
      <SectionTitel titel={"Experience"} />
      <div className="flex py-10 gap-10  sm:flex-col sm:w-full">
        <div className="flex flex-col gap-10 sm:gap-8 border-l-4 border-[#18646391] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experience.map((experinece, index) => {
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
                  {experinece.period}
                </h1>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl font-semibold">
            {experience[SelectedIndex].title}
          </h1>
          <h1 className="text-tertiary text-xl font-semibold">
            {experience[SelectedIndex].company}
          </h1>
          <p className="text-white text-xl">
            {experience[SelectedIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
