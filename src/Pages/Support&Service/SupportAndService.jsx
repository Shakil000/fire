import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import supportBg from "../../assets/Support&Service/landing-support.jpg";
import { FiSearch } from "react-icons/fi";
import Subscribe from "../Shared/Subscribe";
import Contact from "../Home/Contact/Contact";
import SupportAndServices from "./SupportAndServices";

const SupportAndService = () => {
  return (
    <>
      {/* Fixed Navbar */}
      <div className="bg-teal-500 fixed top-0 w-full h-20 md:h-20 z-30">
        <Navbar />
      </div>
      {/* Hero Section Wrapper */}
      <div className="mt-16 md:mt-20">
        <section
          className="relative h-105 md:h-130 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${supportBg})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 h-full flex flex-col justify-between">
            {/* Center Content */}
            <div className="text-center mt-36 md:mt-40">
              <h1 className="text-white text-3xl md:text-5xl font-bold">
                Support & Services
              </h1>
            </div>
            {/* Border */}
            <div className="border border-teal-500"></div>
            {/* Search Box */}
            <div className="mb-16 md:mb-32 flex justify-center px-2">
              <div className="relative w-full max-w-xl md:max-w-3xl">
                <input
                  type="text"
                  placeholder="Search Revere... Or Call +44 (0)1329 835024"
                  className="w-full h-12 md:h-14 rounded-md pl-4 md:pl-5 pr-12 md:pr-14 text-sm md:text-base text-gray-700 focus:outline-none bg-white"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 md:p-3 rounded-md text-[#0077a2] hover:bg-gray-100">
                  <FiSearch size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white text-black px-6 md:px-20 py-6 md:py-6">
            <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">
          Overview
        </h2>
        <div className="mx-auto border-b-4 border-blue-500 w-1/10 mb-10"></div>
      </div>
      <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
          Revere manufacture and supply a range of fire, smoke, heat and gas detection systems to suit a wide variety of commercial and industrial applications. We strive to provide the highest quality products and offer an exceptional level of support. We regularly supply leading fire detection equipment to countries all over the world, including those in the middle east, Asia, and America.
        </p>
        </section>
        <SupportAndServices></SupportAndServices>
        <Subscribe></Subscribe>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
};

export default SupportAndService;
