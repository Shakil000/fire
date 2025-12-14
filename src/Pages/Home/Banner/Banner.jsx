import React, { useState, useEffect, useCallback } from 'react';
import banner1 from "../../../assets/FyreLine-EN54-Fixed-Alarm-Condition.jpg"
import banner2 from "../../../assets/Li-ion-Tamer-Gen-3-Monitoring-Sensor-Close-up-Media-Image.jpg"
import banner3 from "../../../assets/Wireless-Fire-Detection-Page-Featured-Image-V3.jpg"



// Define your banner data
const bannerData = [
  {
    id: 1,
    // Replace with your actual high-res banner images
    backgroundImage: banner1,
    title: 'Wi-Fyre Xenos',
    description: 'Extremely easy to install and provides a a cost-effective solution.',
  },
  {
    id: 2,
    backgroundImage: banner2,
    title: 'Advanced Fire Detection',
    description: 'Cutting-edge technology for unparalleled safety and reliability.',
  },
  {
    id: 3,
    backgroundImage: banner3,
    title: 'Integrated Security Systems',
    description: 'Seamlessly connect fire and security for total protection.',
  },
];

const SLIDE_DURATION_MS = 5000; // Each slide shows for 8 seconds

const Banner = () => {
//   const [open, setOpen] = useState(false); // State for mobile navigation menu
  const [currentBanner, setCurrentBanner] = useState(0); // State for current active banner
  const totalBanners = bannerData.length;

  // Function to move to the next banner
  const nextBanner = useCallback(() => {
    setCurrentBanner((prevBanner) => (prevBanner + 1) % totalBanners);
  }, [totalBanners]);

  // Effect for automatic banner sliding
  useEffect(() => {
    const slideInterval = setInterval(nextBanner, SLIDE_DURATION_MS);

    // Clear the interval when the component unmounts
    return () => clearInterval(slideInterval);
  }, [nextBanner]);

  // Get the current banner's data
  const activeBanner = bannerData[currentBanner];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      
      {/* Background & Content Area - This now contains the sliding image */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        style={{ 
          // Dynamic background image
          backgroundImage: `url(${activeBanner.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // A dark overlay to ensure text readability, similar to the image's dim effect
          backgroundColor: 'rgba(0,0,0,0.7)', 
          backgroundBlendMode: 'multiply' // Blend the dark overlay with the image
        }}
      >
        {/* You can add another semi-transparent layer if you need more darkening
        <div className="w-full h-full bg-black opacity-30"></div> 
        */}
      </div>
      {/* Main Content Area (Below Header) */}
      <main className="relative z-10 pt-16 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

            {/* Prominent Search Bar (Matches the one in the center of the image) */}
            <div className="flex justify-center mb-24 mt-8">
                <div className="relative w-full max-w-xl">
                    <input 
                        type="text" 
                        placeholder="Search Eurofyre... Or Call +44 (0)1329 835024"
                        className="w-full h-14 pl-6 pr-12 rounded-lg text-lg text-gray-800 focus:ring-red-500 focus:border-red-500 placeholder-gray-500"
                    />
                    <button 
                        className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-gray-500 hover:text-red-500"
                        aria-label="Search"
                    >
                        {/* Magnifying Glass Icon */}
                        <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            
            {/* Hero Text Block (Dynamic based on current banner) */}
            <div className="max-w-lg lg:max-w-xl mb-48 transition-opacity duration-1000 ease-in-out">
                <h2 className="text-6xl lg:text-8xl font-black mb-4">
                    {activeBanner.title}
                </h2>
                <p className="text-lg lg:text-xl font-light text-white mb-6">
                    {activeBanner.description}
                </p>
                <a 
                    href="#" 
                    className="inline-block px-8 py-3 bg-red-600 border-2 border-red-600 text-white font-semibold uppercase text-sm transition-all duration-300 hover:bg-transparent hover:border-red-600 hover:text-red-600"
                >
                    Read More
                </a>
            </div>
            
            {/* Navigation Dots for the Banners */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2">
                {bannerData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentBanner(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentBanner ? 'bg-red-600 w-5' : 'bg-gray-400 opacity-75 hover:opacity-100'
                        }`}
                        aria-label={`Go to banner ${index + 1}`}
                    />
                ))}
            </div>

        </div>
      </main>
      
    </div>
  );
};

export default Banner;