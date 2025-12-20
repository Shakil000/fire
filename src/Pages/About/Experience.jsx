import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

export default function Experience() {
  const items = [
    {
      title: "Diverse Project Portfolio",
      logo:,
      description:
        "Eurofyre has been involved in a variety of different projects — from small, single-unit installations to very large detection systems using multiple detection types and specialist fire detection equipment.",
    },
    {
      title: "Liaise Between Specifiers, Consultants & Clients",
      logo:,
      description:
        "Eurofyre bridges the gap between specifiers, consultants and clients, providing all the necessary information and tools to help meet strict specifications and regulations across the world.",
    },
    {
      title: "Customer-Focused Strategy",
      logo:,
      description:
        "Our customer-focused strategy means that our partners are never left in the dark. We are there every step of the way to ensure you have everything you need to deliver to your clients.",
    },
    {
        title: "UKAS Accredited",
        logo: ukasLogo,
        description:
    },
  ];

  return (
    <section className="bg-white text-black px-6 md:px-20 py-6 md:py-20">
        <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">
          How Can We Become Your Partner of Choice?
        </h2>
        <div className="mx-auto border-b-4 border-blue-500 w-1/4 mb-10"></div>
      </div>
        <p className='mb-10'>Eurofyre provides a wide variety of benefits to its partners in the UK and export regions. These include:</p>

      <h2 className="text-3xl font-bold mb-2">
        Experience
      </h2>
        <div className="border-b-4 border-blue-500 w-1/8 mb-6 "></div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        freeMode={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}