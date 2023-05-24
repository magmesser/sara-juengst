/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Field from "../assets/field.jpg";
import Sara from "../assets/sara_selfie.jpg";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#274C77] text-[#E7ECEF]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#A3CEF1]">
            Experience
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>
        {/* Icon Container */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Field} alt="Field Work"></img>
            <p className="my-4">Field Work</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Sara} alt="Sara Selfie"></img>
            <p className="my-4">Selfie</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Field} alt="Field Work"></img>
            <p className="my-4">Field Work</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Sara} alt="Sara Selfie"></img>
            <p className="my-4">Selfie</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Field} alt="Field Work"></img>
            <p className="my-4">Field Work</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Sara} alt="Sara Selfie"></img>
            <p className="my-4">Selfie</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Field} alt="Field Work"></img>
            <p className="my-4">Field Work</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Sara} alt="Sara Selfie"></img>
            <p className="my-4">Selfie</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
