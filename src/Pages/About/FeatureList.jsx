import React from "react";
import { CheckCircleIcon } from "lucide-react";


const leftColumn = [
  'Aspirating Smoke Detection',
  'Linear Heat Detection',
  'Wireless Fire Detection',
  'Fire Detection',
  'Emergency Voice Communication',
  'Lithium Ion Battery Rack Monitoring',
];

const rightColumn = [
  'Beam Detection',
  'Flame Detection',
  'Temporary Wireless Fire Detection',
  'Power Supplies & Batteries',
  'Fire Alarm Test Equipment',
  'Thermography Detection',
];

export default function FeatureList() {
  return (
    <div className="bg-white font-semibold px-6 md:px-20 py-12 md:py-12">
  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Left Column */}
    <div className="space-y-10">
      {leftColumn.map((item, idx) => (
        <div key={idx}>
          <div className="flex items-center justify-between">
            <span className="text-teal-500 text-lg font-semibold">{item}</span>
            <CheckCircleIcon className="h-16 w-16 text-teal-600" />
          </div>
          <div className="border-b-4 border-teal-500 w-full mt-4"></div>
        </div>
      ))}
    </div>

    {/* Right Column */}
    <div className="space-y-10">
      {rightColumn.map((item, idx) => (
        <div key={idx}>
          <div className="flex items-center justify-between">
            <span className="text-teal-500 text-lg font-semibold">{item}</span>
            <CheckCircleIcon className="h-16 w-16 text-teal-600" />
          </div>
          <div className="border-b-4 border-teal-500 w-full mt-4"></div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
}