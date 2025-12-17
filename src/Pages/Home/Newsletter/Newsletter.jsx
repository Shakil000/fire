import React, { useEffect, useState } from "react";
import { FaUser, FaEnvelope } from "react-icons/fa"; // Icons for the form
import newsLetterBg from "../../../assets/Newsletter/newsletter-background.jpg";
import articleBg from "../../../assets/Newsletter/ASD-for-Data-Centres-Media-Image-960x400.webp";
import articleBg2 from "../../../assets/Newsletter/Eurofyre-Christmas-Media-Image-960x400.webp";
import articleBg3 from "../../../assets/Newsletter/FyreLine-EN54-Fixed-For-Transformers-Hero-Shot-960x400.webp";

const slides = [
  {
    bg: articleBg,
    tag: "News",
    title:
      "Fyreline EN54 Fixed Linear Heat Detection for Electrical Transformers",
    link: "/news/article-1",
  },
  {
    bg: articleBg2,
    tag: "Update",
    title: "Advanced Fire Detection Solutions for Industrial Safety",
    link: "/news/article-2",
  },
  {
    bg: articleBg3,
    tag: "Article",
    title: "Why Linear Heat Detection is Critical for Power Systems",
    link: "/news/article-3",
  },
];

const Newsletter = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="py-12 md:py-20 bg-gray-100">
      {/* Centered Content Container for the two-column grid */}
      <div className="max-w-20xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Layout: Stacks on mobile, splits into 2 equal columns on desktop (lg) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* === 1. News/Article Card (Left Side) === */}
          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
            {/* Slides */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out
        ${
          index === current
            ? "translate-x-0"
            : index < current
            ? "-translate-x-full"
            : "translate-x-full"
        }`}
                style={{ backgroundImage: `url(${slide.bg})` }}
              />
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* Fixed Content */}
            <div className="absolute bottom-0 left-0 w-full z-20 text-white p-8 md:p-12 text-center lg:pb-20">
              <h3
                className="text-2xl md:text-3xl font-semibold uppercase tracking-wider 
                   border-b-4 border-blue-500 inline-block pb-2"
              >
                {slides[current].tag}
              </h3>

              <p className="text-3xl md:text-4xl font-light leading-snug mb-10">
                {slides[current].title}
              </p>

              <a
                href={slides[current].link}
                className="inline-block px-8 py-3 bg-teal-600 text-white 
                 font-semibold uppercase tracking-wider 
                 rounded-md hover:bg-teal-700 transition"
              >
                Read More
              </a>
            </div>
          </div>

          {/* === 2. Newsletter Subscription (Right Side) === */}
          {/* Note: I'm using a simple dark gray color here. To replicate the exact complex pattern 
             in the image, you would need to use a background image for the pattern. */}
          <div
            className="flex flex-col items-center justify-center h-[400px] md:h-[500px] 
             rounded-lg overflow-hidden shadow-lg text-white 
             bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${newsLetterBg})` }}
          >
            {/* Optional dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <h3
                className="text-2xl md:text-3xl font-semibold uppercase tracking-wider 
                   border-b-4 border-blue-500 inline-block pb-2"
              >
                Newsletter Subscription
              </h3>

              <form className="mt-8 w-full max-w-sm px-4">
                {/* Name */}
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="*Name"
                    className="w-full py-3 pl-12 pr-4 bg-white text-gray-800 rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                  <FaUser className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
                </div>

                {/* Email */}
                <div className="relative mb-6">
                  <input
                    type="email"
                    placeholder="*Email Address"
                    className="w-full py-3 pl-12 pr-4 bg-white text-gray-800 rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                  <FaEnvelope className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-teal-600 text-white font-semibold 
                   uppercase tracking-wider rounded-md 
                   hover:bg-teal-700 transition"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
