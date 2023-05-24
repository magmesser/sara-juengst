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
            <p>I am an associate professor at UNC Charlotte. I specializes in bioarchaeology and Andean archaeology. I have conducted research in Bolivia and Peru and plan to begin a project in Ecuador in Summer 2017. I have also worked locally, assisting with field projects in the Southeastern United States when possible. I am particularly interested in using human skeletal remains to investigates people’s identities and social structures in the past. I have also worked with human remains to evaluate past medical practices (trepanation or skull surgery) and violence levels within past Andean populations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
