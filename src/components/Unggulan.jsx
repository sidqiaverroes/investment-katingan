import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/productSlice";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

function Unggulan() {
  const dispatch = useDispatch();

  const { products, isError, message } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());

    if (isError) {
      console.log(message);
    }
  }, [isError, message, dispatch]);

  return (
    <div
      id="komoditas-unggulan"
      className="flex flex-col items-center justify-center h-full w-full bg-white py-20"
    >
      <div className="justify-center items-center max-w-screen-lg h-auto mt-20">
        <h1 className="flex justify-center items-center text-gray-800 font-semibold px-4">
          Komoditas Unggulan Kami
        </h1>
        <p className="p-4 text-center text-lg font-normal text-gray-500">
          Berisi listing Komoditas Unggulan Daerah yang mempunyai produksi
          tinggi sebagai potensi yang dapat diangkat untuk dijadikan peluang
          investasi dan usaha
        </p>
        <div className="justify-center items-center w-full h-auto mt-12 py-2">
          <Swiper
            loop={true}
            slidesPerView={4}
            spaceBetween={100}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {products.map((product) => {
              const { _id, name, location, landArea, production, image } =
                product;
              return (
                <SwiperSlide key={_id}>
                  <div className="overflow-visible">
                    <div className="shadow-lg flex flex-col justify-center items-center rounded-md border border-gray-300 bg-gray-100 gap-2 p-8 h-80 w-60 mb-16 ">
                      <img
                        src={image}
                        alt="img"
                        className="relative w-24 h-24 rounded-full overflow-hidden"
                      ></img>
                      <div className="flex flex-col gap-8">
                        <span>
                          <h3 className="font-medium text-lg">{name}</h3>
                          <p className="px-4 font-light text-xs text-gray-500">
                            {location}
                          </p>
                        </span>
                        <span>
                          <p className="font-light text-sm text-gray-500">
                            {landArea}
                          </p>
                          <p className="font-normal text-sm text-birumud">
                            {production}
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}

            {/* <SwiperSlide>
            <div className="py-5">
              <div className="flex flex-col content-center items-center gap-2 shadow-lg shadow-blue-100 h-80 w-60">
                <div className="">
                  <img
                    className="relative w-32 h-32 rounded-full border-gray-100 shadow-sm overflow-hidden"
                    src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                    alt="image slide 1"
                  />
                </div>
                <div className="">
                  <h3 className="font-light text-gray-400">Kelapa Sawit 1</h3>
                  <p>Katingan Hilir</p>
                </div>
                <div>Produksi 13.000/Ton/Tahun</div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="py-5">
              <div className="flex flex-col content-center items-center gap-2 shadow-lg shadow-blue-100 h-80 w-60">
                <div className="">
                  <img
                    className="relative w-32 h-32 rounded-full border-gray-100 shadow-sm overflow-hidden"
                    src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                    alt="image slide 1"
                  />
                </div>
                <div className="">
                  <h3 className="font-light text-gray-400">Kelapa Sawit 1</h3>
                  <p>Katingan Hilir</p>
                </div>
                <div>Produksi 13.000/Ton/Tahun</div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="py-5">
              <div className="flex flex-col content-center items-center gap-2 shadow-lg shadow-blue-100 h-80 w-60">
                <div className="">
                  <img
                    className="relative w-32 h-32 rounded-full border-gray-100 shadow-sm overflow-hidden"
                    src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                    alt="image slide 1"
                  />
                </div>
                <div className="">
                  <h3 className="font-light text-gray-400">Kelapa Sawit 1</h3>
                  <p>Katingan Hilir</p>
                </div>
                <div>Produksi 13.000/Ton/Tahun</div>
              </div>
            </div>
          </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Unggulan;
