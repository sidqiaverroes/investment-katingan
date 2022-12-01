import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import HeroImage from "../Assets/hero.png";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from "swiper";

function Unggulan() {
    return(
        <div className="flex flex-col items-center justify-center h-full w-full bg-white">
            <div className="justify-center items-center max-w-screen-xl h-auto mt-20">
                <h1 className="flex justify-center items-center text-5xl font-semibold px-4">
                    Komoditas Unggulan Kami
                </h1>
                <p className="p-4 text-center text-lg font-normal">
                    Berisi listing Komoditas Unggulan Daerah yang mempunyai produksi tinggi <br>
                    </br>sebagai potensi yang dapat diangkat untuk dijadikan peluang investasi <br>
                    </br>dan usaha
                </p>
            </div>
            <div className="justify-center items-center max-w-screen-lg h-auto mt-12 py-2">
                <div>
                    
                </div>
            <Swiper
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
                                <h3 className="font-bold">
                                    Kelapa Sawit 1
                                </h3>
                                <p className="font-light text-gray-400">
                                    Katingan Hilir
                                </p>
                            </div>
                            <div>
                                Produksi  13.000/Ton/Tahun
                            </div>
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
                                <h3 className="font-light text-gray-400">
                                    Kelapa Sawit 1
                                </h3>
                                <p>
                                    Katingan Hilir
                                </p>
                            </div>
                            <div>
                                Produksi  13.000/Ton/Tahun
                            </div>
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
                                <h3 className="font-light text-gray-400">
                                    Kelapa Sawit 1
                                </h3>
                                <p>
                                    Katingan Hilir
                                </p>
                            </div>
                            <div>
                                Produksi  13.000/Ton/Tahun
                            </div>
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
                                <h3 className="font-light text-gray-400">
                                    Kelapa Sawit 1
                                </h3>
                                <p>
                                    Katingan Hilir
                                </p>
                            </div>
                            <div>
                                Produksi  13.000/Ton/Tahun
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Unggulan;