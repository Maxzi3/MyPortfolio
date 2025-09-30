import { FaGithub, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
// const aninmatelist = (delay) => ({
//   initial: { x: -100, opacity: 0 },
//   whileInView: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 0.5, delay: delay },
//   },
//   viewport: { once: true },
// });

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section
        id="home"
        className="flex flex-col items-center w-11/12 gap-10 py-24 mx-auto md:flex-row lg:py-32 lg:min-h-screen"
      >
        <div>
          <p className="px-4 text-xl text-textcolor">
            Hello, I&apos;m{" "}
            <span className="text-xl font-bold text-textcolor1 lg:text-2xl ">
              OBISIKE MAXWELL
            </span>
          </p>
          <h1 className="p-4 text-xl text-textcolor">
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
              className="text-4xl font-extrabold text-textcolor1"
              repeat={Infinity}
            />
          </h1>
          <p className="w-full px-4 pb-8 text-base text-left md:w-9/12 text-textcolor">
            A passionate Developer who loves turning ideas into real-world web
            applications. With strong skills in{" "}
            <span className="font-bold text-textcolor1">
              HTML, CSS, Tailwind CSS, JavaScript, TypeScript, Nextjs, and React
              .
            </span>{" "}
            I focus on building responsive, scalable, and user-friendly
            interfaces that deliver smooth user experiences across devices.
          </p>

          <a
            onClick={() => scrollToSection("project")}
            className="px-3 py-2 mx-4 my-2 text-base border-0 rounded text-textcolor bg-button focus:outline-none hover:bg-buttonhover hover:text-textcolor1 "
          >
            View Works
          </a>
        </div>
        <div className="relative w-full">
          <img src="../PFP.jpg" alt="PFP" className="w-full rounded-full" />
          <div className="absolute inset-x-0 flex justify-center gap-8 transform translate-y-1/2 text-textcolor1 ">
            <a
              href="https://www.linkedin.com/in/devmaxzi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl transform -translate-y-1/2 hover:text-textcolorh2"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/dev_maxzi"
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
