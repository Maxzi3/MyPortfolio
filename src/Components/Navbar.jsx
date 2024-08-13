import React, { useState } from "react";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="text-textcolor1 body-font bg-bgcolor fixed top-0 w-full z-50">
        <div className="container mx-auto flex p-5 flex-row items-center justify-between">
          <a className="flex title-font font-medium items-center">
            <span className="ml-3 text-2xl font-bold hover:text-textcolorh2 cursor-pointer">
              Portfolio
            </span>
          </a>

          {/* Mobile View button  */}
          <div className="md:hidden z-50">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <FaTimes className="text-textcolor1 text-3xl hover:text-textcolorh2 cursor-pointer" />
              ) : (
                <FaBars className="text-textcolor1 text-3xl hover:text-textcolorh2 cursor-pointer" />
              )}
            </button>
          </div>

          {/* Mobile View menu links  */}
          <nav
            className={`absolute md:hidden top-0 left-0 h-screen w-full bg-bgcolor flex flex-col items-center justify-center text-base cursor-pointer list-none gap-10 transition-transform duration-300 ease-in-out ${
              isOpen ? "transform translate-x-0" : "transform -translate-x-full"
            }`}
          >
            <Link
              onClick={toggleMenu}
              to="home"
              smooth={true}
              duration={500}
              className="mr-5 text-3xl hover:text-textcolorh2"
            >
              Home
            </Link>

            <Link
              onClick={toggleMenu}
              to="About"
              smooth={true}
              duration={500}
              className="mr-5 text-3xl hover:text-textcolorh2"
            >
              About
            </Link>

            <Link
              onClick={toggleMenu}
              to="projects"
              smooth={true}
              duration={500}
              className="mr-5 text-3xl hover:text-textcolorh2"
            >
              Projects
            </Link>

            <Link
              onClick={toggleMenu}
              to="Contact"
              smooth={true}
              duration={500}
              className="mr-5 text-3xl hover:text-textcolorh2"
            >
              Contact
            </Link>

            <button className="inline-flex items-center text-textcolor bg-button border-0 py-1 px-3 focus:outline-none hover:bg-buttonhover hover:text-textcolor1 rounded text-base mt-4 md:mt-0">
              Hire Me
              <FaArrowRight className=" text-sm ml-1" />
            </button>
          </nav>

          {/* Desktop view menu */}
          <nav className="hidden md:flex md:ml-auto items-center text-base justify-center cursor-pointer">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="mr-5 hover:text-textcolorh2"
            >
              Home
            </Link>
            <Link
              to="About"
              smooth={true}
              duration={500}
              className="mr-5 hover:text-textcolorh2"
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="mr-5 hover:text-textcolorh2"
            >
              Projects
            </Link>
            <Link
              to="Contact"
              smooth={true}
              duration={500}
              className="mr-5 hover:text-textcolorh2"
            >
              Contact
            </Link>
            <button className="inline-flex items-center text-textcolor bg-button border-0 py-1 px-3 focus:outline-none hover:bg-buttonhover hover:text-textcolor1 rounded text-base mt-4 md:mt-0">
              Hire Me
              <FaArrowRight className=" text-sm ml-1" />
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
