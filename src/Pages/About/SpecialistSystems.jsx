import React from "react";
import specialSystem from '../../assets/About/Specialist Systems/System-Page-Featured-Image-V3.jpg'


export default function SpecialistSystems() {
  return (
    <section className="bg-white text-black">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">
          Specialist Systems
        </h2>
        <div className="mx-auto border-b-4 border-blue-500 w-1/6 mb-10"></div>
      </div>
      <div>
        <img src={specialSystem} alt="" />
        <p className="bg-white text-black font-semibold px-6 md:px-20 py-12 md:py-12">Revere supplies and supports detection solutions to suit every application. From more traditional detection systems that use point type detectors, to more specialist detection solutions such as linear heat detection, aspirating smoke detection or beam detection. Whatever solution you require, Revere will deliver the same expert service, both pre and post–sale, to ensure you get all the support you need.</p>
      </div>
    </section>
  );
}
