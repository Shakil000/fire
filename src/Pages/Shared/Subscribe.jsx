import React, { useState } from "react";
import { MailIcon } from "lucide-react";
import { FaUser } from "react-icons/fa6";
import { toast } from "react-toastify";

export default function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Email validation regex
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubscribe = () => {
    if (!name || !email) {
      toast.error("Please fill in all required fields!");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    // Success case
    toast.success("Successfully subscribed to our newsletter!");
    setName("");
    setEmail("");
  };


  return (
    <div className="bg-[#3D3D3E] py-12 px-6 flex flex-col items-center">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Name Input */}
        <div className="flex items-center bg-[#343434] rounded-md px-4 py-3 w-full md:w-1/3 h-[56px]">
          <FaUser className="h-6 w-6 text-white mr-3" />
          <input
            type="text"
            placeholder="*Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full outline-none text-white placeholder-white font-bold bg-transparent"
          />
        </div>

        {/* Email Input */}
        <div className="flex items-center bg-[#343434] rounded-md px-4 py-3 w-full md:w-1/3 h-[56px]">
          <MailIcon className="h-6 w-6 text-white mr-3" />
          <input
            type="email"
            placeholder="*Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full outline-none text-white placeholder-white font-bold bg-transparent"
          />
        </div>

        {/* Subscribe Button */}
        <button
          onClick={handleSubscribe}
          className="bg-[#009689] hover:bg-[#086f66] text-white font-bold w-full md:w-1/3 h-[56px] rounded-md"
        >
          SUBSCRIBE TO OUR NEWSLETTER
        </button>
      </div>
    </div>
  );
}