import React from "react";
import ukasLogo from "../../assets/About/certificate/UKAS.jpg";
import isoLogo from "../../assets/About/certificate/ISO-9001.jpg";
import fiaLogo from "../../assets/About/certificate/FIA.jpg";
import bccLogo from "../../assets/About/certificate/British-Chamber-of-Commerce.jpg";
import xtralisLogo from "../../assets/About/certificate/Xtralis-Gold-Channel-Partner.jpg";

export default function Certifications() {
  const items = [
    {
      title: "UKAS Accredited",
      logo: ukasLogo,
      description:
        "UKAS is the National Accreditation Body for the United Kingdom. They assess and accredit organisations that provide services including certification, testing, inspection and calibration.",
    },
    {
      title: "ISO 9001 Certification",
      logo: isoLogo,
      description:
        "ISO 9001 is the international standard for quality management. It delivers continual improvement driven by customer needs, leading to cost savings, improved efficiency, and consistency of service.",
    },
    {
      title: "Fire Industry Association Member",
      logo: fiaLogo,
      description:
        "The FIA is the largest fire protection trade association in the UK. It promotes and perfects fire protection methods, training, and services.",
    },
    {
      title: "British Chambers of Commerce Member",
      logo: bccLogo,
      description:
        "The British Chambers of Commerce support members across the UK and globally to help companies, places, and people achieve their potential.",
    },
    {
      title: "Xtralis Authorised Distributor – Gold Channel Partner",
      logo: xtralisLogo,
      description:
        "This recognition reflects our commitment to excellent customer service and competitive pricing as part of our partnership with Xtralis.",
    },
  ];

  return (
   <section className="bg-white text-black py-2 px-6 md:px-20">
  {/* <h2 className="text-3xl font-bold mb-12 border-b-4 border-blue-500 inline-block">
    Certifications & Memberships
  </h2> */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {items.map((item, index) => (
      <div
        key={index}
        className="bg-gray-50 rounded-lg shadow-2xl shadow-blue-300 p-6 flex flex-col items-center text-center hover:shadow-lg transition duration-300"
      >
        <img
          src={item.logo}
          alt={item.title}
          className="w-auto h-48 mb-4 object-contain"
        />
        <h3 className="font-semibold mb-2 text-2xl">{item.title}</h3>
        <p className="text-base leading-relaxed">{item.description}</p>
      </div>
    ))}
  </div>
</section>

  );
}
