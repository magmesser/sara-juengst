import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#274C77]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#A3CEF1]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#E7ECEF]">
          Dr. Sara Juengst
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#6096BA]">
          I'm an Anthropological Bioarchaeologist.
        </h2>
        <p className="text-[#A3CEF1] py-4 max-w-[700px]">
          I specialize in bioarchaeology and South American archaeology. I am
          particularly interested in using human skeletal remains to
          investigates people’s identities and social structures in the past.
        </p>
        <div>
          <button className="text-[#E7ECEF] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6096BA] hover:border-[#6096BA]"><Link to="publications" smooth={true} duration={500}>
                     
            View Work</Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span> 
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
