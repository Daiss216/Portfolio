import React from "react";
import { motion } from "framer-motion";
import { aboutInfo } from "../assets/assets";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          About <span className="text-[#4DC9FA]">Me</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* journey */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-2xl font-semibold text-white mb-5">
              My Journey
            </h3>

            <div className="space-y-6">
              <p className="text-lg text-gray-300 ">
                I’m a Data Science student passionate about transforming data
                into insights that support better decisions. My work focuses on
                Python, SQL, Power BI, and data visualization, and I enjoy using
                these tools to analyze problems and present clear, meaningful
                results.
              </p>

              <p className="text-lg text-gray-300 ">
                I’ve also built hackathon projects using React, Firebase, and
                MongoDB, which has helped me strengthen both my technical and
                collaborative skills. I’m especially interested in applied AI,
                insightful analytics, and using data to solve real-world
                problems in a clear and meaningful way.
              </p>
            </div>
          </motion.div>

          {/* cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {aboutInfo.map((data, index) => (
                <div
                  key={index}
                  className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="flex item-center gap-3 mb-1">
                    <data.icon className="text-[#4DC9FA] text-2xl" />

                    <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {data.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
