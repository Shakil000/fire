// ProductCard.jsx
import React from 'react';

const ProductCard = ({ title, imageUrl, linkUrl }) => {
  return (
    <div className="flex flex-col border shadow-md rounded-lg overflow-hidden bg-white group">
      
      {/* Product Image Area */}
      <div className="flex-grow flex items-center justify-center">
        {/* The image is contained within a div for proper centering and scaling */}
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-auto object-contain transition-transform duration-300"
        />
      </div>

      {/* Product Title Link Area (Blue/Teal Background) */}
      <a 
        href={linkUrl} 
        className="block p-4 text-center text-white text-base md:text-lg font-semibold uppercase tracking-wider 
                   bg-teal-700 transition-colors duration-200 group-hover:bg-teal-600 whitespace-nowrap truncate"
      >
        {title}
      </a>
    </div>
  );
};

export default ProductCard;