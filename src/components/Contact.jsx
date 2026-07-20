import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k8ipw0w",
        "template_3trgkvm",
        form.current,
        "54JTnsX_4W3il2LXZ",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message, please try again.", error.text);
        },
      );
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-7">
          Get In
          <span className="text-[#4DC9FA]"> Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/*Contact form*/}
          <div>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-3 py-3 text-gray-300 placeholder:text-gray-500 outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-3 py-3 text-gray-300 placeholder:text-gray-500 outline-none"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-3 py-3 text-gray-300 placeholder:text-gray-500 outline-none"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#0AA9E8] hover:bg-[#0479A8] text-white font-bold py-2 px-4 rounded-full transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/*Contact Info*/}
          <div className="space-y-8">
            <div className="flex item-start">
              <div className="text-[#6FCDF2] text-2xl mt-1 mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Indore, MP</p>
              </div>
            </div>

            <div className="flex item-start">
              <div className="text-[#6FCDF2] text-2xl mt-1 mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">shimulsuplekar848@gmail.com</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Let's Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Daiss216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center hover:bg-gray-500 hover:text-[#1a1a1a] transitionduration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/shimul-suplekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center hover:bg-gray-500 hover:text-[#1a1a1a] transitionduration-300"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
