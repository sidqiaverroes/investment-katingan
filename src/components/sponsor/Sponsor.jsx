import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sponsor from "../../Data/SponsorData";
import SponsorItems from "./SponsorItems";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

function Sponsor() {
  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <div className="justify-center items-center max-w-screen-lg h-auto">
        <Swiper
          loop={true}
          slidesPerView={5}
          spaceBetween={5}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {sponsor.map((items, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="overflow-visible">
                  <div className="flex flex-col justify-center items-center rounded-md border p-6 h-40 w-40 mb-16 ">
                    <SponsorItems key={index} item={items} />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Sponsor;
