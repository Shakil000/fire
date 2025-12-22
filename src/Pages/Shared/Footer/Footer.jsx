import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3f3f3f] text-gray-300 relative">
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-24 mb-6">
          <a className="bg-gray-200 text-gray-700 p-3 rounded hover:bg-white transition">
            <FaFacebookF />
          </a>
          <a className="bg-gray-200 text-gray-700 p-3 rounded hover:bg-white transition">
            <FaTwitter />
          </a>
          <a className="bg-gray-200 text-gray-700 p-3 rounded hover:bg-white transition">
            <FaLinkedinIn />
          </a>
          <a className="bg-gray-200 text-gray-700 p-3 rounded hover:bg-white transition">
            <FaYoutube />
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-6 text-sm uppercase tracking-wide text-center">
          <a className="hover:text-white">Terms & Conditions</a>
          <a className="hover:text-white">Privacy Policy</a>
          <a className="hover:text-white">Site Map</a>
          <a className="hover:text-white">Shipping</a>
          <a className="hover:text-white">Secure Online Ordering</a>
          <span className="text-gray-400 mt-2 sm:mt-0 sm:ml-4">
            Revere Ltd © All Rights Reserved
          </span>
        </div>
      </div>

      {/* TOP Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-6 bottom-6 bg-sky-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-sky-700 transition"
      >
        TOP
        <span className="text-lg">↑</span>
      </button>
    </footer>
  );
};

export default Footer;
