import React, { useState, useEffect } from "react";
import banner1 from "../../../assets/FyreLine-EN54-Fixed-Alarm-Condition.jpg";
import banner2 from "../../../assets/Li-ion-Tamer-Gen-3-Monitoring-Sensor-Close-up-Media-Image.jpg";
import banner3 from "../../../assets/Wireless-Fire-Detection-Page-Featured-Image-V3.jpg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Search from "../../Shared/Search/Search";

const bannerData = [
  {
    id: 1,
    image: banner1,
    title: "Wi-Fyre Xenos",
    description:
      "Extremely easy to install and provides a cost-effective solution.",
  },
  {
    id: 2,
    image: banner2,
    title: "Advanced Fire Detection",
    description:
      "Cutting-edge technology for unparalleled safety and reliability.",
  },
  {
    id: 3,
    image: banner3,
    title: "Integrated Security Systems",
    description: "Seamlessly connect fire and security for total protection.",
  },
];

const SLIDE_DURATION = 5000;

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerData.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      <Search></Search>

      {/* 🔄 SLIDING BANNERS ONLY */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {bannerData.map((banner) => (
          <div
            key={banner.id}
            className="relative min-h-screen w-full flex-shrink-0"
            style={{
              backgroundImage: `url(${banner.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 flex items-center min-h-screen">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-xl mt-40">
                  <h2 className="text-4xl md:text-6xl lg:text-8xl font-black mb-4">
                    {banner.title}
                  </h2>
                  <p className="text-base md:text-lg mb-6">
                    {banner.description}
                  </p>
                  <a
                    href="#"
                    className="inline-block px-8 py-3 bg-red-600 border-2 border-red-600 text-white uppercase text-sm font-semibold hover:bg-transparent hover:text-red-600 transition"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔘 DOTS */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-30">
        {bannerData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full ${
              index === currentIndex
                ? "bg-red-600 w-4 h-4"
                : "bg-gray-400 w-3 h-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
