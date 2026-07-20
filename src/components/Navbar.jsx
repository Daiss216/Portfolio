import { nav } from "framer-motion/client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="#" className="text-4xl font-bold text-white">
            Port
            <span className="text-[#47C2F3]">Folio</span>
          </a>
        </div>

        {/* nav hover */}
        <div className="hidden md:flex space-x-10">
          <a
            href="#home"
            className="relative text-white/100 transition duration-300 hover:text-[#47C2F3] group"
          >
            <span>Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#47C2F3] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#about"
            className="relative text-white/100 transition duration-300 hover:text-[#47C2F3] group"
          >
            <span>About</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#47C2F3] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#skills"
            className="relative text-white/100 transition duration-300 hover:text-[#47C2F3] group"
          >
            <span>Skills</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#47C2F3] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#projects"
            className="relative text-white/100 transition duration-300 hover:text-[#47C2F3] group"
          >
            <span>Projects</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#47C2F3] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#highlights"
            className="relative text-white/100 transition duration-300 hover:text-[#47C2F3] group"
          >
            <span>Highlights</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#47C2F3] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#contact"
            className="relative text-white/100 transition duration-300 hover:text-[#47C2F3] group"
          >
            <span>Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#47C2F3] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Mobile button */}
        <div className="md:hidden">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {showMenu && (
        <div className="md:hidden bg-dark-300 rounded-lg p-4 flex flex-col items-center space-y-4 mt-4">
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#home"
            className="relative text-white/100 transition duration-300 hover:text-[#47C2F3] group"
          >
            <span>Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#47C2F3] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#about"
            className="relative text-white/100 transition duration-300 hover:text-[#47C2F3] group"
          >
            <span>About</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#47C2F3] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#skills"
            className="relative text-white/100 transition duration-300 hover:text-[#47C2F3] group"
          >
            <span>Skills</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#47C2F3] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#projects"
            className="relative text-white/100 transition duration-300 hover:text-[#47C2F3] group"
          >
            <span>Projects</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#47C2F3] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#highlights"
            className="relative text-white/100 transition duration-300 hover:text-[#47C2F3] group"
          >
            <span>Highlights</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#47C2F3] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#contact"
            className="relative text-white/100 transition duration-300 hover:text-[#47C2F3] group"
          >
            <span>Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#47C2F3] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
