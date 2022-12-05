import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../index.css";

import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper";

import News1 from "../Assets/News1.png";
import News2 from "../Assets/News2.png";
import News3 from "../Assets/News3.png";

function LatestNews() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white mt-10">
      <div className="flex justify-center items-center w-screen h-auto">
        <h2 className="text-5xl font-bold text-left px-20 justify-center items-center">
          Latest News
        </h2>
      </div>
      <div className="justify-center items-center w-screen h-auto mt-10">
        <Swiper
          direction={"horizontal"}
          spaceBetween={40}
          slidesPerView={3}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="group block relative cursor-pointer h-full w-full">
              <img
                className="border-gray-100 shadow-sm h-96 rounded-lg object-cover"
                src={News1}
                alt="image slide 1"
              />
              <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-birumud "></div>
              <div className="absolute bottom-0 px-6 py-6">
                <h1 className="text-white text-lg font-bold">
                  Pembangunan Proyek Infrastruktur Daerah
                </h1>
                <p className="text-white font-light">
                  Prospektur Proyek Investasi
                </p>
                <div className="items-center justify-center py-2 hidden group-hover:block"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group block relative cursor-pointer h-full w-full">
              <img
                className="border-gray-100 shadow-sm h-96 rounded-lg object-cover"
                src={News2}
                alt="image slide 1"
              />
              <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-birumud "></div>
              <div className="absolute bottom-0 px-6 py-6">
                <h1 className="text-white text-lg font-bold">
                  Pembangunan Proyek Infrastruktur Daerah
                </h1>
                <p className="text-white font-light">
                  Prospektur Proyek Investasi
                </p>
                <div className="items-center justify-center py-2 hidden group-hover:block"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group block relative cursor-pointer h-full w-full">
              <img
                className="border-gray-100 shadow-sm h-96 rounded-lg object-cover"
                src={News3}
                alt="image slide 1"
              />
              <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-birumud "></div>
              <div className="absolute bottom-0 px-6 py-6">
                <h1 className="text-white text-lg font-bold">
                  Pembangunan Proyek Infrastruktur Daerah
                </h1>
                <p className="text-white font-light">
                  Prospektur Proyek Investasi
                </p>
                <div className="items-center justify-center py-2 hidden group-hover:block"></div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default LatestNews;
