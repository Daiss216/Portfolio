import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/*LEFT COLUMN*/}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-[#4DC9FA]">Shimul Suplekar</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-5 typewriter">
            Data Analyst
          </h2>

          <p className="text-lg text-gray-300 mb-8">
            I love turning data into actionable insights...
          </p>

          {/*BUTTONS*/}
          <div className="flex space-x-4">
            <a
              href="https://drive.google.com/file/d/12QS6PHu7bUZgGZYqdrB6GnNObfGzc7WD/view?usp=sharing"
              className="px-6 py-3 bg-[#0AA9E8] rounded-lg font-medium hover:bg-[#0479A8] transition duration-300"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-[#0AA9E8] rounded-lg font-medium hover:bg-[#0AA9E8]/20 transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        {/*RIGHT COLUMN*/}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full opacity-70">
              <img
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10"
                src={assets.profileImg}
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
