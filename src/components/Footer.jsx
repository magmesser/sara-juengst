import React from "react";
import Logo from "../assets/Logo_Skull_Grey.png";

const Footer = () => {
  return (
    <footer className="bg-[#8b8c89] text-[#e7ecef]">
      <div className="w-full max-w-screen-xl mx-auto pb-4 ">
        <div className="flex flex-col justify-center items-center ">
          <a
            href="https://magmesser.github.io/sara-juengst/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img src={Logo} className="h-40 mr-3" alt="SJ Logo" />
          </a>
          <div class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 ">
            <span className="block text-md sm:text-center">
              © 2023{" "}
              <a href="https://magmesser.github.io/sara-juengst/" className="hover:underline">
                Sara L. Juengst, PhD
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
