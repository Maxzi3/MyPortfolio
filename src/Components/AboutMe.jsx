import React from "react";

const AboutMe = () => {
  return (
    <div className="relative md:h-screen min-h-screen ">
      <h1
        name="About"
        className="pt-24 text-4xl text-center underline text-textcolor1 font-bold"
      >
        About Me
      </h1>
      <div className="md:w-7/12 w-11/12 mx-auto text-center text-textcolor">
        <p className="py-4 text-lg ">
          Hi there! I'm Maxwell, a passionate and creative frontend developer
          with a knack for bringing ideas to life on the web. With a solid
          foundation in{" "}
          <span className="text-textcolor1 font-bold">
            HTML, CSS, and JavaScript,
          </span>
          I specialize in crafting responsive and visually appealing websites
          that offer a seamless user experience. My journey in frontend
          development has equipped me with skills in modern frameworks and
          libraries such as{" "}
          <span className="text-textcolor1 font-bold"> React and Vue.js.</span>{" "}
          I have a keen eye for design and love translating complex designs into
          functional, user-friendly interfaces. From landing pages to complex
          web applications, I ensure every project is pixel-perfect and
          optimized for performance.
        </p>
      </div>
      <div className="flex md:flex-row items-center justify-center gap-2 py-5">
        <img
          src="../HTML5_logo.png"
          alt=""
          className="w-32 md:absolute md:top-44 md:left-20"
        />
        <img
          src="../csslogo.png"
          alt=""
          className="w-24 md:absolute md:top-44 md:right-28"
        />
      </div>
      <div className="flex md:flex-row items-center justify-center gap-2 pt-5 mb-20 text-textcolor">
        <div>
          <img src="../Jslogo.png" alt="" className="w-32 " />
          <p className="text-center text-base">Javascript</p>
        </div>
        <div>
          <img src="../reactlogo.png" alt="" className="w-32 " />
          <p className="text-center text-lg pt-4">ReactJS</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
