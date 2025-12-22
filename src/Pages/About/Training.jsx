import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { MdOutlineFolderCopy } from "react-icons/md";
import { LuMessageSquareMore } from "react-icons/lu";
import { FaFire, FaPeopleGroup } from "react-icons/fa6";
import { ImFilesEmpty } from "react-icons/im";

export default function Training() {
  const items = [
    {
      title: "Large product/system offering",
      logo: <MdOutlineFolderCopy />,
      description:
        "Revere is constantly expanding its product and system offering to ensure it is able to provide a complete detection solution for any application.",
    },
    {
      title: "Liaise Between Specifiers, Consultants & Clients",
      logo: <LuMessageSquareMore />,
      description:
        "Revere bridges the gap between specifiers, consultants and clients, providing all the necessary information and tools to help meet strict specifications and regulations across the world.",
    },
    {
      title: "Success based on a customer-focused strategy",
      logo: <FaPeopleGroup />,
      description:
        "Our customer-focused strategy means that our partners are never left in the dark. We are there every step of the way to ensure you have everything you need to deliver to your clients.",
    },
    {
      title: "Variety of applications supported",
      logo: <ImFilesEmpty />,
      description:
        "We have an extensive product catalogue to cater for even the most complicated of applications.",
    },
    {
      title: "Thorough knowledge of the fire industry and regulatory standards",
      logo: <FaFire />,
      description:
        "Revere’s thorough knowledge of the fire industry and regulatory standards around the world means we are able to advise and assist with every application.",
    },
  ];

  return (
    <section className="bg-white text-black px-6 md:px-20 py-6 md:py-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Demonstration and Training</h2>
        <div className="mx-auto border-b-4 border-blue-500 w-1/3 mb-10"></div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        freeMode={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // mouse রাখলে autoplay থেমে যাবে

        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-50 rounded-lg shadow-2xl shadow-blue-300 p-6 flex flex-col items-center text-center hover:shadow-lg transition duration-300 h-[300px]">
              <div className="text-blue-600 text-5xl mb-4">{item.logo}</div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-base leading-relaxed">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}