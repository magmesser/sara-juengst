/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Field from "../assets/field.jpg";

const Research = () => {
  return (
    <div
      name="research"
      className="w-full h-screen bg-[#274C77] text-[#E7ECEF]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-[#A3CEF1]">
            Research
          </p>
          <p className="py-4">
            // These are current research projects I'm working on
          </p>
        </div>
        {/* Icon Container */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center p-8">
          <div className="shadow-md shadow-[#040c16] hover:bg-[#6096BA]  duration-500">
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <img className="w-50 mx-auto" src={Field} alt="Field Work"></img>
              <p className="my-4">Ecuador Square</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:bg-[#6096BA]  duration-500">
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <img className="w-50 mx-auto" src={Field} alt="Sara Selfie"></img>
              <p className="my-4">Bolivia Square</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:bg-[#6096BA] duration-500">
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <img className="w-50 mx-auto" src={Field} alt="Field Work"></img>
              <p className="my-4">Cemetary Project</p>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Research;
