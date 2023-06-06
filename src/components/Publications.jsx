/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./Publications.css";

// Publications
import doc1 from "../assets/publications/A3_Juengst2020_VITAL_TOPICS_FORUM_Cooperative_Bodies_Bi.pdf";

// itle: "Cooperation and Hierarchy in Ancient Bolivia",
// link: "https://www.routledge.com/Cooperation-and-Hierarchy-in-Ancient-Bolivia-Building-Community-with-the/Juengst/p/book/9781032004709"

// Book & CV buttons?

const pubData = [
  {
    id: 1,
    title: "Cooperative Bodies: Bioarchaeologists Address Nonranked Societies",
    link: "https://www.google.com/",
    download: doc1,
  },
  {
    id: 2,
    title: "this is a test",
    link: "https://www.google.com/",
    download: doc1,
  },
];

const Publications = () => {
  return (
    <div
      name="publications"
      className="w-full md:h-screen bg-[#274C77] text-[#E7ECEF] p-4"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#A3CEF1]">
            Publications
          </p>
          <p className="py-6">// Check out some of my recent publications</p>
        </div>

        {/* Card Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 flip-card">
          {/* Card Item */}
          {pubData.map(({ id, title, link, download }) => {
            return (
              <div
                key={id}
                className="shadow-md shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto flip-card-inner"
              >
                <div className="flip-card-front">
                  <h3 className="">{title}</h3>
                </div>

                {/* Hover Effects */}
                <div className=" flip-card-back">
                  <span className="text-l text-[#E7ECEF] font-bold tracking-wider">
                    {title}
                  </span>
                  <div className="pt-8 text-center">
                    <a href={link} target="_blank" rel="noreferrer">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Read Now
                      </button>
                    </a>
                    <a
                      href={download}
                      download
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Download
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* End Card Item */}

      {/* In The News */}
      <div className="div"></div>
    </div>
  );
};

export default Publications;
