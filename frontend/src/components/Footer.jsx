import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#32363b] text-white pt-12 pb-3">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <p>
              Nextgen (Pvt) Ltd. provides visa consultancy, travel, and business
              expansion solutions worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="relative hover:text-[#88AD35] group">
                  About Us
                  <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#88AD35] transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
                  </a>
              </li>
              <li>
                <a href="/services" className="relative group hover:text-[#88AD35]">
                  Services
                  <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#88AD35] transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="/contact" className="relative group hover:text-[#88AD35]">
                  Contact Us
                  <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#88AD35] transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="/privacy" className="relative group hover:text-[#88AD35]">
                  Privacy Policy
                  <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#88AD35] transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>Nextgen (Pvt) Ltd.</p>
            <p>Islamabad, Pakistan</p>
            <p>Email: info@nextgen.com</p>
            <p>Phone: 051-XXXXXXX</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#88AD35] w-10 h-10 flex items-center justify-center relative overflow-hidden rounded-full bg-white shadow-md hover:bg-[#88AD35] hover:text-white shadow-gray-200 group transition-all duration-300"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#88AD35] w-10 h-10 flex items-center justify-center relative overflow-hidden rounded-full bg-white shadow-md hover:bg-[#88AD35] hover:text-white shadow-gray-200 group transition-all duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#88AD35] hover:bg-[#88AD35] hover:text-white w-10 h-10 flex items-center justify-center relative overflow-hidden rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#88AD35] w-10 h-10 flex items-center justify-center relative overflow-hidden rounded-full bg-white shadow-md hover:bg-[#88AD35] hover:text-white shadow-gray-200 group transition-all duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    <hr className="text-gray-500 mt-6"/>
      {/* Footer Copyright */}
      <p className="mt-6 text-gray-400 text-sm text-center">
        &copy; {new Date().getFullYear()} Nextgen (Pvt) Ltd. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
