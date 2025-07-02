import Project from "../Projects.json";

const Projects = () => {
  return (
    <section id="project" className="h-auto my-10 px-4 sm:px-6 lg:px-12">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-textcolor1 underline underline-offset-8 uppercase mb-8">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Project.map((project) => (
          <div
            key={project.id}
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
              {/* Description */}
              <p className="text-sm sm:text-base font-semibold text-gray-800 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex justify-between items-center mt-auto">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textcolor1 font-medium hover:text-bgcolor transition-colors duration-300"
                >
                  CODE
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-bgcolor text-white font-semibold py-1.5 px-4 rounded hover:bg-button transition-colors duration-300"
                >
                  DEMO
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
