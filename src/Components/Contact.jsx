import React, { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";

const aninmatelist = (delay) => ({
  initial: { x: -100, opacity: 0 },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
  viewport: { once: true },
});

const aninmatelist2 = (delay) => ({
  initial: { y: 200, opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
  viewport: { once: true },
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(""); // State to track validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError(""); // Clear error message on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    const response = await fetch("https://getform.io/f/arolroob", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData).toString(),
    });

    if (response.ok) {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsSubmitted(true);
      setError(""); // Clear error on successful submission
    } else {
      console.error("Form submission failed");
    }
  };

  return (
    <div name="Contact" className="md:min-h-screen min-h-screen py-16">
      <h1 className="underline text-4xl text-textcolor1 text-center font-bold py-8">
        Contact
      </h1>
      <p className="text-base text-textcolor1 text-center md:w-full w-72 mx-auto pb-8">
        // Submit the form below or reach me via any contact detail.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-between w-10/12 mx-auto gap-8">
        <motion.div
          variants={aninmatelist(0.2)}
          initial="initial"
          whileInView="whileInView"
          className="flex flex-col justify-around md:h-auto w-full md:w-1/2 bg-bgcolor text-textcolor1 p-6 rounded-lg"
        >
          <h1 className="text-center text-2xl py-4 font-bold">
            CONTACT DETAILS
          </h1>
          <div className="flex gap-4 items-center pb-4">
            <FaEnvelope className="text-3xl" />
            <div>
              <h1>Email</h1>
              <p className="text-sm">obisikemaxwell@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-4 items-center pb-4">
            <FaPhone className="text-3xl" />
            <div>
              <h1>Phone</h1>
              <p>+2349026575211</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <FaLocationDot className="text-3xl" />
            <div>
              <h1>Address</h1>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </motion.div>
        <motion.form
          variants={aninmatelist2(0.5)}
          initial="initial"
          whileInView="whileInView"
          onSubmit={handleSubmit}
          className="flex flex-col md:w-1/2 w-full"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border border-gray-300 outline-none p-3 w-full mb-4 rounded-md text-textcolor1"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border border-gray-300 outline-none p-3 w-full mb-4 rounded-md text-textcolor1"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="border border-gray-300 outline-none p-3 w-full h-48 rounded-md text-textcolor1"
          />
          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="text-textcolor1 border-2 py-2 px-3 focus:outline-none hover:bg-buttonhover hover:text-textcolor rounded text-base"
            >
              Let's Collaborate
            </button>
            {isSubmitted && (
              <p className="ml-4 text-green-500 text-xl">Submitted!</p>
            )}
          </div>
          {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
