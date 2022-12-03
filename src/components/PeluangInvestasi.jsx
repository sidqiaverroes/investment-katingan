import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper";

import img1 from "../Assets/Img-2.png";
import img2 from "../Assets/Img-3.png";
import img3 from "../Assets/Img-4.png";
import img4 from "../Assets/Img-5.png";

import { CustButtonPrimer, CustButtonSec } from "../Assets/Button";

function PeluangInvestasi() {
  return (
    <div
      id="peluang"
      className="flex flex-col items-center justify-center h-auto w-full bg-white"
    >
      <div className="justify-center items-center max-w-screen-xl h-1/4">
        <h2 className="text-5xl font-bold text-center">Peluang Investasi</h2>
        <p className="p-4 text-center text-lg font-normal">
          Berisi potensi investasi yang siap ditawarkan kepada investor
        </p>
      </div>
      <div className="justify-center items-center max-w-screen-md h-96 mt-5 swiper overflow-hidden">
        <div className=" pl-10">
          <Swiper
            direction={"horizontal"}
            height={500}
            spaceBetween={1}
            slidesPerView={2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className=" group block w-72 h-72 relative overflow-visible rounded-lg cursor-pointer">
                <img
                  className="border-gray-100 shadow-sm w-72 h-72"
                  src={img1}
                  alt="image slide 1"
                />
                <div className="absolute bottom-0 px-6 py-4">
                  <h1 className="text-white text-lg font-bold">
                    Proyek Infrastruktur Daerah
                  </h1>
                  <p className="text-white font-light">
                    Prospektur Proyek Investasi
                  </p>
                  <div className="items-center justify-center py-2 hidden group-hover:block">
                    <CustButtonPrimer text="Detail"></CustButtonPrimer>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" group block w-72 h-72 relative overflow-visible rounded-lg cursor-pointer">
                <img
                  className="border-gray-100 shadow-sm w-72 h-72"
                  src={img2}
                  alt="image slide 1"
                />
                <div className="absolute bottom-0 px-6 py-4">
                  <h1 className="text-white text-lg font-bold">
                    Proyek Infrastruktur Daerah
                  </h1>
                  <p className="text-white font-light">
                    Prospektur Proyek Investasi
                  </p>
                  <div className="items-center justify-center py-2 hidden group-hover:block">
                    <CustButtonPrimer text="Detail"></CustButtonPrimer>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" group block w-72 h-72 relative overflow-visible rounded-lg cursor-pointer">
                <img
                  className="border-gray-100 shadow-sm w-72 h-72"
                  src={img3}
                  alt="image slide 1"
                />
                <div className="absolute bottom-0 px-6 py-4">
                  <h1 className="text-white text-lg font-bold">
                    Proyek Infrastruktur Daerah
                  </h1>
                  <p className="text-white font-light">
                    Prospektur Proyek Investasi
                  </p>
                  <div className="items-center justify-center py-2 hidden group-hover:block">
                    <CustButtonPrimer text="Detail"></CustButtonPrimer>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" group block w-72 h-72 relative overflow-visible rounded-lg cursor-pointer">
                <img
                  className="border-gray-100 shadow-sm w-72 h-72"
                  src={img4}
                  alt="image slide 1"
                />
                <div className="absolute bottom-0 px-6 py-4">
                  <h1 className="text-white text-lg font-bold">
                    Proyek Infrastruktur Daerah
                  </h1>
                  <p className="text-white font-light">
                    Prospektur Proyek Investasi
                  </p>
                  <div className="items-center justify-center py-2 hidden group-hover:block">
                    <CustButtonPrimer text="Detail"></CustButtonPrimer>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default PeluangInvestasi;
