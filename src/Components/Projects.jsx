"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Project from "../Projects.json";

const Projects = () => {
  const INITIAL_COUNT = 3;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_COUNT);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="project" className="h-auto my-10 px-4 sm:px-6 lg:px-12">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-textcolor1 underline underline-offset-8 uppercase mb-8">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {Project.slice(0, visibleCount).map((project) => (
            <motion.div
              key={project.id}
              layout
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={cardVariants}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white shadow-md rounded-xl overflow-hidden transition-transform transform hover:scale-[1.02] flex flex-col"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="h-48 w-full object-cover object-center"
              />

              {/* Content */}
              <div className="flex flex-col justify-between flex-1 p-4">
                <p className="text-sm sm:text-base font-semibold text-gray-800 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex justify-between items-center mt-auto">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    className="text-textcolor1 font-medium hover:text-bgcolor transition-colors duration-300"
                  >
                    CODE
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    className="bg-bgcolor text-white font-semibold py-1.5 px-4 rounded hover:bg-button transition-colors duration-300"
                  >
                    DEMO
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        {visibleCount < Project.length && (
          <button
            onClick={handleLoadMore}
            className="bg-bgcolor text-white py-2 px-6 rounded font-semibold hover:bg-button transition-all duration-300"
          >
            Load More
          </button>
        )}

        {visibleCount > INITIAL_COUNT && (
          <button
            onClick={handleShowLess}
            className="bg-gray-300 text-black py-2 px-6 rounded font-semibold hover:bg-gray-400 transition-all duration-300"
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
