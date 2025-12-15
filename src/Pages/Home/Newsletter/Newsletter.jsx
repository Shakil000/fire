import React from 'react';
import { FaUser, FaEnvelope } from 'react-icons/fa'; // Icons for the form

// NOTE: Replace this with the actual path to your article background image
import articleBg from "../../../assets/Newsletter/ASD-for-Data-Centres-Media-Image-960x400.webp"; 

const Newsletter = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-100">
      
      {/* Centered Content Container for the two-column grid */}
      <div className="max-w-20xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Layout: Stacks on mobile, splits into 2 equal columns on desktop (lg) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

          {/* === 1. News/Article Card (Left Side) === */}
          <div 
            className="flex items-end justify-start h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg"
            style={{ 
              // Set the background image and cover it
              backgroundImage: `url(${articleBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Dark overlay for contrast and text visibility */}
            <div className="p-8 md:p-12 w-full bg-black bg-opacity-40 text-white">
              
              <h3 className="text-xl font-semibold uppercase tracking-wider mb-2 border-b-2 border-blue-500 inline-block">
                News
              </h3>
              
              <p className="text-3xl md:text-4xl font-light leading-snug mb-6">
                Fyreline EN54 Fixed Linear Heat Detection for Electrical Transformers
              </p>
              
              <a 
                href="/news/article-slug" // Replace with actual article link
                className="inline-block px-8 py-3 bg-teal-600 text-white font-semibold uppercase tracking-wider 
                           rounded-md transition-colors duration-200 hover:bg-teal-700"
              >
                Read More
              </a>
            </div>
          </div>


          {/* === 2. Newsletter Subscription (Right Side) === */}
          {/* Note: I'm using a simple dark gray color here. To replicate the exact complex pattern 
             in the image, you would need to use a background image for the pattern. */}
          <div className="flex flex-col items-center justify-center h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white">
            
            <h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-wider border-b-5 border-blue-500 inline-block">
              Newsletter Subscription
            </h3>

            {/* Form */}
            <form className="mt-8 w-full max-w-sm px-4">
              
              {/* Name Input */}
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="*Name"
                  className="w-full py-3 pl-12 pr-4 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
                <FaUser className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
              </div>

              {/* Email Input */}
              <div className="relative mb-6">
                <input
                  type="email"
                  placeholder="*Email Address"
                  className="w-full py-3 pl-12 pr-4 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
                <FaEnvelope className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-3 bg-teal-600 text-white font-semibold uppercase tracking-wider 
                           rounded-md transition-colors duration-200 hover:bg-teal-700"
              >
                Send
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;