import React from "react";
import { FiSearch } from "react-icons/fi";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import aboutBg from "../../assets/ContactBg/landing-contact.jpg";
import Subscribe from "../Shared/Subscribe";
import Contact from "../Home/Contact/Contact";
import ContactsCard from "./ContactsCard";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      {/* <Helmet>
        <title>Contacts || Revere</title>
      </Helmet> */}
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
          <ContactsCard></ContactsCard>
        </section>
      </div>
      <Subscribe></Subscribe>
      <Contact></Contact>
      {/* Footer import here for footer sections */}
      <Footer />
    </>
  );
};

export default About;
