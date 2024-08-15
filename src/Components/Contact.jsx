import React from "react";
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
  initial: { x: 100, opacity: 0 },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
  viewport: { once: true },
});

const Contact = () => {
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
          action="https://getform.io/f/arolroob"
          method="POST"
          className="flex flex-col md:w-1/2 w-full"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border border-gray-300 outline-none p-3 w-full mb-4 rounded-md text-textcolor1"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border border-gray-300 outline-none p-3 w-full mb-4 rounded-md text-textcolor1"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="border border-gray-300 outline-none p-3 w-full h-48 rounded-md text-textcolor1"
          />
          <button
            type="submit"
            className="mx-auto text-textcolor1 border-2 py-2 px-3 focus:outline-none hover:bg-buttonhover hover:text-textcolor rounded text-base mt-4"
          >
            Let's Collaborate
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
