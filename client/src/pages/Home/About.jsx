import React from "react";
import SectionTitel from "../../components/SectionTitel";
import { useSelector } from "react-redux";

function About() {
          
          const {loading , portfolioData} = useSelector(state=>state.root)
          const {about} = portfolioData ; 
          const {lottieUrl , discription1 , discription2 ,skills} = about

        

  
  return (
    <div>
      <SectionTitel titel={"About"} />
      <div className="flex w-full items-center sm:flex-col">
        <div className="w-1/2">
          <img src={lottieUrl ||"/public/durga.jpg"} className="h-[70vh] rounded-full sm:h-[35%]" />
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            {discription1}
          </p>
          <p className="text-white">
          {discription2}
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are some technologies i working with recently :{" "}
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
        {
            skills.map((skill,index)=>( <div className="border-tertiary border-2 py-3 px-10" key={index}>
                    <h1 className="text-tertiary">{skill}</h1>
                </div>
 )           )
        }
        </div>
        
      </div>
    </div>
  );
}

export default About;
