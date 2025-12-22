import React from "react";
import { FiSearch } from "react-icons/fi";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import aboutBg from "../../assets/About/landing-about.jpg";
import LogoGraphics from "./LogoGraphics";
import Certification from "./Certification";
import Experience from "./Experience";
import Sales from "./Sales";
import Logistic from "./Logistic";
import Training from "./Training";
import Contact from "../Home/Contact/Contact";
import SpecialistSystems from "./SpecialistSystems";
import FeatureList from "./FeatureList";

const About = () => {
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
          style={{ backgroundImage: `url(${aboutBg})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 h-full flex flex-col justify-between">
            {/* Center Content */}
            <div className="text-center mt-36 md:mt-40">
              <h1 className="text-white text-3xl md:text-5xl font-bold">
                About Us
              </h1>

              {/* Tabs */}
              {/* <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-white text-xs md:text-sm font-semibold uppercase mt-6 md:mt-8">
                <button className="border-b-2 border-white pb-1">
                  Overview
                </button>
                <button className="opacity-80 hover:opacity-100">
                  Applications
                </button>
                <button className="opacity-80 hover:opacity-100">
                  Range
                </button>
                <button className="opacity-80 hover:opacity-100">
                  Systems
                </button>
              </div> */}
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
        <section>
          <LogoGraphics></LogoGraphics>
        </section>
        {/* Certification section */}
        <section>
          <Certification></Certification>
          <Experience></Experience>
          <Sales></Sales>
          <Logistic></Logistic>
          <Training></Training>
          <SpecialistSystems></SpecialistSystems>
          <FeatureList></FeatureList>
          <Contact></Contact>
        </section>
      </div>
      {/* Footer import here for footer sections */}
      <Footer />
    </>
  );
};

export default About;
