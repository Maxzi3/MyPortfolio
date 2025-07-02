import { useState } from "react";
import { FaPhone, FaEnvelope, FaGithub } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import { BsTwitterX } from "react-icons/bs";

// Animation setup
const animateFromLeft = (delay) => ({
  initial: { x: -50, opacity: 0 },
  whileInView: { x: 0, opacity: 1, transition: { delay, duration: 0.6 } },
  viewport: { once: true },
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    const response = await fetch("https://getform.io/f/arolroob", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });

    if (response.ok) {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(true);
      setError("");
    } else {
      console.error("Form submission failed");
    }
  };

  return (
    <section
      id="contact"
      className="h-auto md:py-16 py-6 px-4 sm:px-6 lg:px-10"
    >
      {/* Title */}
      <h1 className="text-center text-4xl md:text-5xl font-bold text-textcolor1 underline underline-offset-8 mb-4">
        Contact
      </h1>
      <p className="text-center text-base text-gray-600 dark:text-gray-300 max-w-m mx-auto mb-10">
        Submit the form below or reach out via any of the contact methods.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Info */}

        <motion.div
          {...animateFromLeft(0.2)}
          className="bg-bgcolor text-textcolor1 rounded-xl p-6 shadow-md flex flex-col gap-6"
        >
          <h2 className="text-xl font-semibold text-center">CONTACT DETAILS</h2>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-2xl mt-1" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-gray-200">obisikemaxwell@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhone className="text-2xl mt-1" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-sm text-gray-200">+2349026575211</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaLocationDot className="text-2xl mt-1" />
            <div>
              <p className="font-medium">Address</p>
              <p className="text-sm text-gray-200">Lagos, Nigeria</p>
            </div>
          </div>
          <div>
            <h1>Follow Us</h1>
            <div className="flex flex-row gap-4 py-4">
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
                <FaFacebook className="hover:text-textcolorh2 text-xl" />
              </a>
              <a
                href="https://x.com/dev_maxzi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitterX className="hover:text-textcolorh2 text-xl" />
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
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className=" rounded-xl p-6 shadow-md flex flex-col gap-4"
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 rounded-md border bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 rounded-md border bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={6}
            className="p-3 rounded-md border bg-transparent  placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-bgcolor text-white font-medium py-2 px-4 rounded-md hover:bg-buttonhover transition"
          >
            Let’s Collaborate
          </button>

          {/* Submission Feedback */}
          {isSubmitted && (
            <p className="text-green-600 text-sm mt-2">
              Thank you! Message submitted.
            </p>
          )}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
