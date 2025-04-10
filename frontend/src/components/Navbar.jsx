import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-black py-4 px-8 md:px-12 shadow-md fixed w-full z-50 max-w-7xl">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img
            src="./logo.jpg"
            alt="Your Company Logo"
            className="h-10"
            loading="lazy"
          />
        </Link>
        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-8 text-white">
          <ul className="flex space-x-8">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="relative group text-white hover:text-[#86af34] transition duration-300"
                >
                  {item}
                  <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#88AD35] transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navbar Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none z-[110]"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navbar Links */}
      <div
        className={`md:hidden fixed top-0 right-0 w-3/4 h-full bg-black transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } shadow-lg z-50`}
      >
        <ul className="space-y-4 text-center pt-20">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-white text-2xl group relative hover:text-[#86af34] transition duration-300 block"
                onClick={() => setIsMobileMenuOpen(false)} 
              >
                {item}
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#88AD35] transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
