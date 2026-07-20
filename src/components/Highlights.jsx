import React from "react";
import { motion } from "framer-motion";
import { Info } from "../assets/assets";

const Highlights = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="highlights"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          High
          <span className="text-[#4DC9FA]">Lights</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {Info.map((data, index) => (
              <div
                key={index}
                className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-[#4DC9FA] cursor-ponter hover:-translate-y-2 transition-all duration-300"
              >
                {/*box*/}
                <div className="bg-dark-300 rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-2 ">
                    <h3 className="text-xl font-bold">{data.head}</h3>
                    <span className="px-3 py-1 bg-[#6FCDF2]/20 text-[#4DC9FA] rounded-full text-sm md:text-sm">
                      {data.duration}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-2">{data.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Highlights;
