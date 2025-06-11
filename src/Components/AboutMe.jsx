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

const AboutMe = () => {
  return (
    <div className="relative md:h-screen min-h-screen ">
      <h1
        name="About"
        className="pt-24 text-4xl text-center underline text-textcolor1 font-bold"
      >
        About Me
      </h1>
      <div className="md:w-7/12 w-full mx-auto text-center text-textcolor">
        <motion.p
          variants={aninmatelist(0.2)}
          initial="initial"
          whileInView="whileInView"
          className="p-4 text-lg md:text-xl leading-8 md:leading-10"
        >
          I&apos;m Maxwell, a Frontend Developer specialized in building modern,
          fullstack web applications using{" "}
          <span className="text-textcolor1 font-bold">
            TypeScript, React, and Tailwind CSS
          </span>
          . I focus on developing fast, responsive, and scalable user interfaces
          that integrate seamlessly with backend services using{" "}
          <span className="text-textcolor1 font-bold">
            Redux Toolkit, REST APIs, and React Query
          </span>
          . My goal is to deliver exceptional user experiences while writing
          clean, maintainable, and high-quality code. I enjoy solving real-world
          problems and continuously improving my skills to build products that
          create real impact.
        </motion.p>
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
