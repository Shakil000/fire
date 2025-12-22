// ProductGrid.jsx
import React from 'react';
import product1 from "../../../src/assets/Products/ASD-Category-V2.jpg"
import product2 from "../../../src/assets/Products/Wireless-Fire-Detection-Group-V2.jpg"
import product3 from "../../../src/assets/Products/FyreLine-EN54-Fixed-Linear-Heat-Detection-Group-2.jpg"
import product4 from "../../../src/assets/Products/System-Sensor-Addressable-Fire-Detection-Group.jpg"
import product5 from "../../../src/assets/Products/Emergency-Voice-Communication-Group-V3.jpg"
import product6 from "../../../src/assets/Products/Lithium-Ion-Off-Gas-Detection-Category.jpg"
import product7 from "../../../src/assets/Products/Temporary-Wireless-Fire-Detection-Group-V2.jpg"
import product8 from "../../../src/assets/Products/Beam-Detection-Group.webp"
import product9 from "../../../src/assets/Products/AOV-Group.jpg"
import product10 from "../../../src/assets/Products/Flame-Detection-Category.jpg"
import product11 from "../../../src/assets/Products/Temporary-Wireless-Fire-Detection-Group-V2.jpg"
import product12 from "../../../src/assets/Products/Gas-Detection-Category-V2.webp"
import product13 from "../../../src/assets/Products/Environmental-Monitoring-Category.webp"
import product14 from "../../../src/assets/Products/PSU-and-Batteries-Category.jpg"
import product15 from "../../../src/assets/Products/Fire-Alarm-Test-Equipment-Category.jpg"
import product16 from "../../../src/assets/Products/Thermal-Detection-Group.webp"
import SystemCard from './SupportAndServiceCard';

// Adjust the path above if necessary

// Dummy data representing the Systems in the image
// You should replace these placeholder image paths with your actual asset paths
const System = [
  {
    id: 1,
    title: "ASPIRATING SMOKE DETECTION",
    imageUrl: product1, // Replace with actual path
    linkUrl: "/Systems/aspirating-smoke-detection"
  },
  {
    id: 2,
    title: "WIRELESS FIRE DETECTION",
    imageUrl: product2, // Replace with actual path
    linkUrl: "/Systems/wireless-fire-detection"
  },
  {
    id: 3,
    title: "LINEAR HEAT DETECTION",
    imageUrl: product3, // Replace with actual path
    linkUrl: "/Systems/linear-heat-detection"
  },
  {
    id: 4,
    title: "EMERGENCY VOICE COMMUNICATION",
    imageUrl: product4, // Replace with actual path
    linkUrl: "/Systems/emergency-voice-communication"
  },
  {
    id: 5,
    title: "Fire Detection",
    imageUrl: product5, // Replace with actual path
    linkUrl: "/Systems/fire-detection"
  },
  {
    id: 6,
    title: "Emergency Voice Communication ",
    imageUrl: product6, // Replace with actual path
    linkUrl: "/Systems/emergency-voice-communication"
  },
  {
    id: 7,
    title: "Lithium Ion Battery Off-Gas Detection",
    imageUrl: product7, // Replace with actual path
    linkUrl: "/Systems/Lithium-ion-battery-off-gas-detection"
  },
  {
    id: 8,
    title: "Thermography Detection", 
    imageUrl: product8, // Replace with actual path
    linkUrl: "/Systems/thermography-detection"
  },
  {
    id: 9,
    title: "Beam Detection",
    imageUrl: product9, // Replace with actual path
    linkUrl: "/Systems/beam-detection"
  },
  {
    id: 10,
    title: "Automatic Opening Ventilation",
    imageUrl: product10, // Replace with actual path
    linkUrl: "/Systems/automatic-opening-ventilation"
  },
  {
    id: 11,
    title: "Flame Detection",
    imageUrl: product11, // Replace with actual path
    linkUrl: "/Systems/flame-detection"
  },
  {
    id: 12,
    title: "Temporary Wireless Fire Detection",
    imageUrl: product12, // Replace with actual path
    linkUrl: "/Systems/temporary-wireless-fire-detection"
  },
  {
    id: 13,
    title: "Gas Detection",
    imageUrl: product13, // Replace with actual path
    linkUrl: "/Systems/gas-detection"
  },
  {
    id: 14,
    title: "Environmental Monitoring",
    imageUrl: product14, // Replace with actual path
    linkUrl: "/Systems/environmental-monitoring"
  },
  {
    id: 15,
    title: "Power Supplies & Batteries",
    imageUrl: product15, // Replace with actual path
    linkUrl: "/Systems/power-supplies-&-batteries"
  },
  {
    id: 16,
    title: "Fire Alarm Test Equipment",
    imageUrl: product16, // Replace with actual path
    linkUrl: "/Systems/fire-larm-test-equipment"
  },
];

const SupportAndServices = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      
      {/* Centered Content Container */}
      <div className="max-w-20xl mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* Optional: Section Title/Header */}
        <div className="text-center">
        <h2 className="text-4xl text-black font-bold mb-2">
          Support & Services
        </h2>
        <div className="mx-auto border-b-4 border-blue-500 w-1/4 mb-10"></div>
      </div>

        {/* Product Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {System.map((product) => (
            <SystemCard
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

export default SupportAndServices;