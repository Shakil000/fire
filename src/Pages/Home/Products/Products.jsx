// ProductGrid.jsx
import React from 'react';
import product1 from "../../../assets/Products/ASD-Category-V2.jpg"
import product2 from "../../../assets/Products/Wireless-Fire-Detection-Group-V2.jpg"
import product3 from "../../../assets/Products/FyreLine-EN54-Fixed-Linear-Heat-Detection-Group-2.jpg"
import product4 from "../../../assets/Products/Emergency-Voice-Communication-Group-V3.jpg"
import ProductCard from './ProductCard';

// Adjust the path above if necessary

// Dummy data representing the products in the image
// You should replace these placeholder image paths with your actual asset paths
const products = [
  {
    id: 1,
    title: "ASPIRATING SMOKE DETECTION",
    imageUrl: product1, // Replace with actual path
    linkUrl: "/products/aspirating-smoke-detection"
  },
  {
    id: 2,
    title: "WIRELESS FIRE DETECTION",
    imageUrl: product2, // Replace with actual path
    linkUrl: "/products/wireless-fire-detection"
  },
  {
    id: 3,
    title: "LINEAR HEAT DETECTION",
    imageUrl: product3, // Replace with actual path
    linkUrl: "/products/linear-heat-detection"
  },
  {
    id: 4,
    title: "EMERGENCY VOICE COMMUNICATION",
    imageUrl: product4, // Replace with actual path
    linkUrl: "/products/emergency-voice-communication"
  },
];

const Products = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      
      {/* Centered Content Container */}
      <div className="max-w-20xl mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* Optional: Section Title/Header */}
        {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12">
          Fire & Security Products
        </h2> */}

        {/* Product Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              imageUrl={product.imageUrl}
              linkUrl={product.linkUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;