import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#274C77] text-[#E7ECEF]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* Container */}
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#A3CEF1]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi. I'm Sara, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p> I am an associate professor at the University of North Carolina at Charlotte, NC, USA. As an anthropological bioarchaeologist, my research integrates social theory and skeletal evidence to address lived experiences of diet, disease, migration, and violence in the past and present. My research primarily focuses on South America (Bolivia, Ecuador, and Peru), but I also consult on projects in North Carolina, Kenya, and Nigeria. In all projects, I explore how people navigated changing social and environmental climates, and highlight how skeletons embody power and community. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
