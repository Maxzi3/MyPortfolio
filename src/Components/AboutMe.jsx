import React from "react";
import { motion } from "framer-motion";
const aninmatelist = (delay) => ({
  initial: { y: 100, opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
  viewport: { once: true }, // This ensures the animation only plays once when the element is in view
});
const aninmatelist2 = (delay) => ({
  initial: { y: 100, opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
  viewport: { once: true },
});
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
        <motion.p
          variants={aninmatelist(0.2)}
          initial="initial"
          whileInView="whileInView"
          className="py-4 text-lg "
        >
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
        </motion.p>
      </div>
      <div className="flex md:flex-row items-center justify-center gap-2 py-5">
        <motion.img
          variants={aninmatelist(0.5)}
          initial="initial"
          whileInView="whileInView"
          src="../HTML5_logo.png"
          alt=""
          className="w-32 md:absolute md:top-44 md:left-20 "
        />
        <motion.img
          variants={aninmatelist(0.5)}
          initial="initial"
          whileInView="whileInView"
          src="../csslogo.png"
          alt=""
          className="w-24 md:absolute md:top-44 md:right-28 "
        />
      </div>
      <div className="flex md:flex-row items-center justify-center gap-2 pt-5 mb-20 text-textcolor">
        <motion.div
          variants={aninmatelist(0.5)}
          initial="initial"
          whileInView="whileInView"
        >
          <img src="../Jslogo.png" alt="" className="w-32 " />
          <p className="text-center text-base">Javascript</p>
        </motion.div>
        <motion.div
          variants={aninmatelist(0.5)}
          initial="initial"
          whileInView="whileInView"
        >
          <img src="../reactlogo.png" alt="" className="w-32  " />
          <p className="text-center text-lg pt-4">ReactJS</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
