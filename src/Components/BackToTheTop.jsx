import React from "react";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTheTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <FaArrowUp
          className="fixed bottom-20 right-10 text-textcolor1 bg-bgcolor text-4xl p-2 rounded-full cursor-pointer animate-bounce"
          onClick={scrollToTop}
        />
      )}
    </div>
  );
};

export default BackToTheTop;
