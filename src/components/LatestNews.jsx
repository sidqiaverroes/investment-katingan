import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import News1 from "../Assets/News1.png";

const LatestNews = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full pb-12">
      <div className="flex items-center justify-center h-full max-w-screen-lg pt-8">
        <h1 className="text-5xl text-gray-800">Latest News</h1>
      </div>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        grabCursor={true}
        className="flex h-full w-full max-w-screen-lg"
      >
        <SwiperSlide>
          <div className="max-w-screen-md my-16">
            <img src={News1} alt="product images" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LatestNews;
