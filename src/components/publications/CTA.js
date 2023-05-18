import React from "react";
import Pub1 from "../../assets/publications/publication1.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Pub1} download className="btn">
        Download Publication
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default CTA;
