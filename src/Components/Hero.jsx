import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaFacebookF
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Hero = () => {
  return (
    <>
      <section className="flex md:flex-row flex-col  gap-10 items-center mx-auto w-10/12 md:my20 my-32">
        <div>
          <p className="text-textcolor text-xl px-4">
            Hello, I'm{" "}
            <span className="text-textcolor1 text-2xl font-bold ">
              OBISIKE MAXWELL
            </span>
          </p>
          <h1 className="text-textcolor text-xl p-4">
            A{" "}
            <span className="text-textcolor1 text-4xl font-extrabold">
              FRONTEND DEVELOPER
            </span>
          </h1>
          <p className="md:w-9/12 w-full text-justify text-textcolor text-base px-4">
            A passionate and creative frontend developer with a knack for
            bringing ideas to life on the web. With a solid foundation in{" "}
            <span className="text-textcolor1 font-bold">HTML, CSS&TailwindCSS, JavaScript and ReactJs.</span> I
            specialize in crafting responsive and visually appealing websites
            that offer a seamless user experience.
          </p>
          <button className="text-textcolor bg-button border-0 py-2 px-3 focus:outline-none hover:bg-buttonhover hover:text-textcolor1 rounded text-base mx-4 my-2 ">
            View Works
          </button>
        </div>
        <div className="relative w-full">
          <img src="..\PFP.jpg" alt="PFP" className="rounded-full w-full" />
          <div className="absolute inset-x-0  flex justify-center gap-8 transform translate-y-1/2 text-textcolor1 ">
            <a
              href=""
              className="text-xl transform -translate-y-1/2 hover:text-textcolorh2"
            >
              <FaInstagram />
            </a>
            <a
              href=""
              className="text-xl transform -translate-y-1/4 hover:text-textcolorh2"
            >
              <FaXTwitter />
            </a>
            <a
              href=""
              className="text-xl transform -translate-y-1/4 hover:text-textcolorh2"
            >
              <FaFacebookF />
            </a>
            <a
              href=""
              className="text-xl transform -translate-y-1/2 hover:text-textcolorh2"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
