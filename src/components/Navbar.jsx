import React, { useState } from "react";
import { FaBars, FaTimes, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsGoogle } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { SiResearchgate } from "react-icons/si";
import Logo from "../assets/Logo_Skull_fill.png";
import Resume from "../assets/Juengst_CV_public.pdf";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#274C77] text-[#E7ECEF]">
      <div>
        <img src={Logo} alt="Logo Initials Duo" style={{ width: "100px" }} />
      </div>

      {/* Main Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="research" smooth={true} duration={500}>
            Research
          </Link>
        </li>
        <li>
          <Link to="publications" smooth={true} duration={500}>
            Publications
          </Link>
        </li>
        {/* <li>
          <Link to="students" smooth={true} duration={500}>
            Students
          </Link>
        </li> */}
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#274C77] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="research" smooth={true} duration={500}>
            Research
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="publications" smooth={true} duration={500}>
            Publications
          </Link>
        </li>
        {/* <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="students" smooth={true} duration={500}>
            Students
          </Link>
        </li> */}
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6096BA]">
            <a
              className="flex justify-between items-center w-full text-[#E7ECEF]"
              href="https://twitter.com/JuengstExplores"
              target="_blank"
              rel="noreferrer"
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6096BA]">
            <a
              className="flex justify-between items-center w-full text-[#E7ECEF]"
              href="https://scholar.google.com/citations?user=BgXZnAcAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar <BsGoogle size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6096BA]">
            <a
              className="flex justify-between items-center w-full text-[#E7ECEF]"
              href=" https://www.researchgate.net/profile/Sara-Juengst"
              target="_blank"
              rel="noreferrer"
            >
              Research Gate <SiResearchgate size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6096BA]">
            <a
              className="flex justify-between items-center w-full text-[#E7ECEF]"
              href="https://anthropology.charlotte.edu/node/99/"
              target="_blank"
              rel="noreferrer"
            >
              UNC Charlotte <IoMdSchool size={40} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6096BA]">
            <a
              className="flex justify-between items-center w-full text-[#E7ECEF]"
              href="mailto:sjuengst@charlotte.edu"
              target="_blank"
              rel="noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6096BA]">
            <a
              className="flex justify-between items-center w-full text-[#E7ECEF]"
              href={Resume}
              download
              target="_blank"
              rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
