import React from "react";
import logo from "../../assets/About/main_full.png"; // adjust path
import Marquee from "react-fast-marquee";

export default function LogoGraphics() {
  return (
    <>
      {/* Intro Section */}
      <section className="bg-white text-black font-semibold px-6 md:px-20 py-12 md:py-24">
        <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
          Based in the south of the UK, Revere Ltd is a privately owned
          company established in 2007. Revere is a global provider of
          specialist fire detection and associated safety products for
          commercial and industrial applications.
        </p>

        <div className="flex justify-center items-center mt-6">
          <img
            src={logo}
            alt="Revere Logo"
            className="w-48 md:w-80 h-auto rounded-lg"
          />
        </div>

        <Marquee
          pauseOnHover={true}
          gradient={false}
          speed={50}
          className="overflow-hidden mt-5"
        >
          <p className="text-xl md:text-6xl text-[#08baeb] text-center">
            <strong className="text-[#F66704]">Revere</strong> Technologies Solution    </p>
        </Marquee>
      </section>

      {/* Mission and Vision Section */}
      <section className="bg-white text-black px-6 md:px-20 py-6 md:py-6">
        <div className="space-y-12">
          {/* Purpose */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold border-b-4 border-blue-500 inline-block mb-4">
              Our Purpose
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              Revere’s key objective is to manufacture, supply and promote fire detection
              solutions that are designed to give users time to respond to possible threats
              before the loss of critical infrastructure, high-value assets, business and,
              most crucially, life.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold border-b-4 border-blue-500 inline-block mb-4">
              Our Vision
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              Revere works closely with representatives all over the world to enhance the
              service they provide to their customers. We do this by providing concise online
              literature, specific training programs and exceptional pre and post-sale technical
              support.
            </p>
            <p className="text-base md:text-lg leading-relaxed mt-4">
              We are constantly looking to work with new global partners to help them to become
              the industry leading supplier in their local market.
            </p>
          </div>

          {/* Accreditation */}
          <div>
            <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Accreditation</h2>
        <div className="mx-auto border-b-4 border-blue-500 w-1/6 mb-10"></div>
      </div>
          </div>
        </div>
      </section>
    </>
  );
}