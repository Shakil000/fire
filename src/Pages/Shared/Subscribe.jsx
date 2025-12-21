import React from 'react';
import { MailIcon } from "lucide-react";
import { FaUser } from "react-icons/fa6";

export default function Subscribe() {
  return (
    <div className="bg-[#3D3D3E] py-12 px-6 flex flex-col items-center">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Common Styles */}
        {/* const fieldStyle = "flex items-center bg-[#343434] rounded-md px-4 py-3 w-full md:w-1/3 h-[56px]"; */}

        {/* Name Input */}
        <div className="flex items-center bg-[#343434] rounded-md px-4 py-3 w-full md:w-1/3 h-[56px]">
          <FaUser className="h-6 w-6 text-white mr-3" />
          <input
            type="text"
            placeholder="*Name"
            className="w-full outline-none text-white placeholder-white font-bold bg-transparent"
          />
        </div>

        {/* Email Input */}
        <div className="flex items-center bg-[#343434] rounded-md px-4 py-3 w-full md:w-1/3 h-[56px]">
          <MailIcon className="h-6 w-6 text-white mr-3" />
          <input
            type="email"
            placeholder="*Email Address"
            className="w-full outline-none text-white placeholder-white font-bold bg-transparent"
          />
        </div>

        {/* Subscribe Button */}
        <button className="bg-[#009689] hover:bg-[#086f66] text-white font-bold w-full md:w-1/3 h-[56px] rounded-md">
          SUBSCRIBE TO OUR NEWSLETTER
        </button>
      </div>
    </div>
  );
}