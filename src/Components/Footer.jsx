import { FaGithub, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import BackToTheTop from "./BackToTheTop";
const Footer = () => {
  return (
    <div className="bg-bgcolor py-3 px-4 text-textcolor1 flex flex-row items-center">
      <p className="mt-2 text-sm w-full ">&copy; 2024 Coded by Maxwell.</p>
      <BackToTheTop />
      <div className="flex flex-row items-center md:gap-5 gap-2">
        <a
          href="https://github.com/Maxzi3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-textcolorh2  text-xl" />
        </a>
        <a
          href="https://www.instagram.com/dev_maxzi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-textcolorh2 text-xl" />
        </a>
        <a
          href="https://web.facebook.com/obisike.maxwell.9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="hover:text-textcolorh2 text-xl" />
        </a>
        <a
          href="https://x.com/dev_maxzi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="hover:text-textcolorh2 text-xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/devmaxzi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-textcolorh2 text-xl" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
