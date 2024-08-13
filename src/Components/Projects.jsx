import React from "react";
import Project from "../Projects.json";

const Projects = () => {
  return (
    <div name="projects" className="pt-32 pb-20 md:px-10">
      <h1 className="text-center pb-20 text-5xl font-bold text-textcolor1 underline underline-offset-8 uppercase">
        Projects
      </h1>
      <div className="flex md:flex-row flex-col gap-10 p-6 w-full">
        {Project.map((Projectt) => (
          <div
            key={Projectt.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 w-full md:w-1/2 lg:w-1/3"
          >
            <img
              className="h-48 w-full object-cover object-center"
              src={Projectt.image}
              alt={Projectt.description}
            />
            <div className="p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-3">
                {Projectt.description}
              </h2>
              <div className="flex justify-between items-center">
                <a
                  href={Projectt.codeLink}
                  target="blank"
                  className="text-textcolor1 font-semibold hover:text-bgcolor transition-colors duration-300"
                >
                  CODE
                </a>
                <a
                  href={Projectt.demoLink}
                  target="blank"
                  className="bg-bgcolor text-white font-semibold py-2 px-4 rounded hover:bg-button transition-colors duration-300"
                >
                  DEMO
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
