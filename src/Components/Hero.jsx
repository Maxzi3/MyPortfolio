import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaFacebookF
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
const aninmatelist = (delay) => ({
  initial: { x: -100, opacity: 0 },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
  viewport: { once: true }, 
});

const Hero = () => {
  return (
    <>
      <section
        name="home"
        className="flex md:flex-row flex-col gap-10 items-center mx-auto w-11/12 md:py-32  py-24 min-h-screen"
      >
        <div animate={{ x: 100 }}>
          <motion.p
            variants={aninmatelist(0.2)}
            initial="initial"
            whileInView="whileInView"
            className="text-textcolor text-xl px-4"
          >
            Hello, I'm{" "}
            <span className="text-textcolor1 md:text-2xl text-xl font-bold ">
              OBISIKE MAXWELL
            </span>
          </motion.p>
          <h1 className="text-textcolor text-xl p-4">
            A{" "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "FRONTEND DEVELOPER.",
                1000,
                "TECHNICAL WRITER.",
                1000,
                "CRYPTO ENTHUSIAST.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-textcolor1 text-4xl font-extrabold"
              repeat={Infinity}
            />
          </h1>
          <motion.p
            variants={aninmatelist(0.5)}
            initial="initial"
            whileInView="whileInView"
            className="md:w-9/12 w-full text-left text-textcolor text-base px-4 pb-8"
          >
            A passionate and creative frontend developer with a knack for
            bringing ideas to life on the web. With a solid foundation in{" "}
            <span className="text-textcolor1 font-bold">
              HTML, CSS&TailwindCSS, JavaScript and ReactJs.
            </span>{" "}
            I specialize in crafting responsive and visually appealing websites
            that offer a seamless user experience.
          </motion.p>
          <Link
            to="projects"
            className="text-textcolor bg-button border-0 py-2 px-3 focus:outline-none hover:bg-buttonhover hover:text-textcolor1 rounded text-base mx-4 my-2 "
          >
            View Works
          </Link>
        </div>
        <div className="relative w-full">
          <img
            src="../PFP.jpg"
            alt="PFP"
            className="rounded-full w-full"
          />
          <div className="absolute inset-x-0  flex justify-center gap-8 transform translate-y-1/2 text-textcolor1 ">
            <a
              href="https://www.instagram.com/officially_maxzi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl transform -translate-y-1/2 hover:text-textcolorh2"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/crypto_Maxzi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl transform -translate-y-1/4 hover:text-textcolorh2"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://web.facebook.com/obisike.maxwell.9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl transform -translate-y-1/4 hover:text-textcolorh2"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com/Maxzi3"
              target="_blank"
              rel="noopener noreferrer"
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
