import React from "react";
import "./Header.css";
import CTA from "../publications/CTA";
import Me from "../../assets/photos/sara_selfie.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Dr. Sara Juengst</h1>
        <h5 className="text-light">Bioarchaeology and Andean Archaeology</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="Sara Selfie" />
        </div>

        <a href="#footer" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
