import { motion } from "framer-motion";

const animateIn = (delay) => ({
  initial: { y: 100, opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay },
  },
  viewport: { once: true },
});

const AboutMe = () => {
  return (
    <section
      id="about"
      className="px-4 py-16 my-12 "
    >
      {/* Heading */}
      <h1 className="mb-2 text-4xl font-bold text-center underline md:text-5xl text-textcolor1 underline-offset-8">
        About Me
      </h1>

      {/* Paragraph Section */}
      <motion.div
        {...animateIn(0.2)}
        className="max-w-4xl mx-auto text-lg leading-8 text-center text-textcolor md:text-xl md:leading-10"
      >
        <p className="px-4">
          I&apos;m <span className="font-bold">Maxwell</span>, a Frontend
          Developer specialized in building modern, fullstack web applications
          using{" "}
          <span className="font-bold text-textcolor1">
            TypeScript, Nextjs, React, and Tailwind CSS
          </span>
          . I focus on creating fast, responsive, and scalable user interfaces
          that integrate seamlessly with backend services using{" "}
          <span className="font-bold text-textcolor1">
            Redux Toolkit, REST APIs, and React Query
          </span>
          . I enjoy solving real-world problems and building products that make
          real impact.
        </p>
      </motion.div>

      {/* Tech Logos */}
      <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
        {/* JavaScript */}
        <motion.div
          {...animateIn(0.4)}
          className="flex flex-col items-center w-24"
        >
          <img
            src="../Jslogo.png"
            alt="JavaScript Logo"
            className="object-contain w-20 h-20"
          />
          <p className="mt-2 text-sm text-center md:text-base text-textcolor">
            JavaScript
          </p>
        </motion.div>

        {/* ReactJS */}
        <motion.div
          {...animateIn(0.5)}
          className="flex flex-col items-center w-24"
        >
          <img
            src="../reactlogo.png"
            alt="React Logo"
            className="object-contain w-20 h-20"
          />
          <p className="mt-2 text-sm text-center md:text-base text-textcolor">
            ReactJS
          </p>
        </motion.div>

        {/* Add more logos if needed */}
      </div>
    </section>
  );
};

export default AboutMe;
