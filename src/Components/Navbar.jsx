import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 text-textcolor1 bg-bgcolor backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <h1 className="md:ml-12 ml-3 text-2xl font-bold hover:text-textcolorh2 cursor-pointer">
              DevMaxzi
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className=" hover:text-cyan-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className=" hover:text-cyan-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("project")}
              className=" hover:text-cyan-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className=" hover:text-cyan-400 transition-colors"
            >
              Contact
            </button>

            <a
              href="https://wa.me/2349026575211"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden backdrop-blur-sm border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 hover:text-cyan-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2  hover:text-cyan-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("project")}
                className="block w-full text-left px-3 py-2  hover:text-cyan-400 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2  hover:text-cyan-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2  hover:text-cyan-400 transition-colors"
              >
                Contact
              </button>

              <div className="px-3 py-2 flex flex-row gap-3">
                <a
                  href="https://wa.me/2349026575211"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
