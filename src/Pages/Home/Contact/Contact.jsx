import React, { useState } from "react";
import contactBg from "../../../assets/ContactBg/services-background.jpg"

const Contact = () => {
  const [enquiry, setEnquiry] = useState("sales");
  const [newsletter, setNewsletter] = useState("no");

  return (
    <section className="relative py-20 bg-[#8fbfd0]">
      {/* Background overlay blur feel */}
      <div className="absolute inset-0 bg-[#8fbfd0] opacity-90 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${contactBg})` }}>
        
      </div>
        
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-4">Contact Us</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-12"></div>

        {/* Enquiry Buttons */}
        <div className="flex justify-center gap-6 mb-10">
          <button
            onClick={() => setEnquiry("sales")}
            className={`w-full px-10 py-3 rounded-md font-semibold uppercase tracking-wide
              ${
                enquiry === "sales"
                  ? "bg-teal-600 text-white"
                  : "bg-[#cfe6ef] text-white/80"
              }`}
          >
            Sales Enquiry
          </button>

          <button
            onClick={() => setEnquiry("technical")}
            className={`w-full px-10 py-3 rounded-md font-semibold uppercase tracking-wide
              ${
                enquiry === "technical"
                  ? "bg-teal-600 text-white"
                  : "bg-[#cfe6ef] text-white/80"
              }`}
          >
            Technical Enquiry
          </button>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Grid Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="*Name"
              className="w-full px-6 py-4 rounded-md text-gray-700 outline-none bg-white"
            />
            <input
              type="email"
              placeholder="*Email Address"
              className="w-full px-6 py-4 rounded-md text-gray-700 outline-none bg-white"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-6 py-4 rounded-md text-gray-700 outline-none bg-white"
            />
            <input
              type="text"
              placeholder="*Company"
              className="w-full px-6 py-4 rounded-md text-gray-700 outline-none bg-white"
            />
          </div>

          {/* Message */}
          <textarea
            rows="5"
            placeholder="Message"
            className="w-full px-6 py-4 rounded-md text-gray-700 outline-none resize-none bg-white"
          ></textarea>

          {/* Newsletter */}
          <p className="mt-10 mb-4 uppercase tracking-wide text-sm font-semibold">
            Do you wish to be added to our newsletter?
          </p>

          <div className="flex justify-center gap-6 mb-10">
            <button
              type="button"
              onClick={() => setNewsletter("yes")}
              className={`px-16 py-3 rounded-md font-semibold uppercase
                ${
                  newsletter === "yes"
                    ? "bg-teal-600 text-white"
                    : "bg-[#cfe6ef] text-white/80"
                }`}
            >
              Yes
            </button>

            <button
              type="button"
              onClick={() => setNewsletter("no")}
              className={`px-16 py-3 rounded-md font-semibold uppercase
                ${
                  newsletter === "no"
                    ? "bg-teal-600 text-white"
                    : "bg-[#cfe6ef] text-white/80"
                }`}
            >
              No
            </button>
          </div>

          {/* Send Button */}
          <button
            type="submit"
            className="px-16 py-4 bg-teal-600 text-white font-semibold uppercase 
                       rounded-md hover:bg-teal-500 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
