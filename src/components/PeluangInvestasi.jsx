import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper";

function PeluangInvestasi() {
    return(
        <div className="flex flex-col items-center justify-center h-full w-full bg-white">
            <div className="justify-center items-center max-w-screen-xl h-auto">
                <h2 className="text-5xl font-bold text-center">
                    Peluang Investasi
                </h2>
                <p className="p-4 text-center text-lg font-normal">
                    Berisi potensi investasi yang siap ditawarkan kepada investor
                </p>
            </div>
            <div className="justify-center items-center w-fit h-72 mt-12 py-2">
                <div className="">
                    <div>

                    </div>
                    <Swiper
                        direction={"vertical"}
                        height={200}
                        spaceBetween={100}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                    <div className="py-5">
                        <div className="flex flex-col content-center items-center gap-2 shadow-lg shadow-blue-100 h-100 w-40">
                            <div className="">
                                <img
                                    className="relative w-32 h-32 rounded-full border-gray-100 shadow-sm overflow-hidden"
                                    src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                                    alt="image slide 1"
                                />
                            </div>
                            <div className="">
                                <h2 className="font-bold">
                                    Kelapa Sawit 1
                                </h2>
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
                        <div className="flex flex-col content-center items-center gap-2 shadow-lg shadow-blue-100 h-100 w-40">
                            <div className="">
                                <img
                                    className="relative w-32 h-32 rounded-full border-gray-100 shadow-sm overflow-hidden"
                                    src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                                    alt="image slide 1"
                                />
                            </div>
                            <div className="">
                                <h2 className="font-bold">
                                    Kelapa Sawit 2
                                </h2>
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
                        <div className="flex flex-col content-center items-center gap-2 shadow-lg shadow-blue-100 h-100 w-40">
                            <div className="">
                                <img
                                    className="relative w-32 h-32 rounded-full border-gray-100 shadow-sm overflow-hidden"
                                    src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                                    alt="image slide 1"
                                />
                            </div>
                            <div className="">
                                <h2 className="font-bold">
                                    Kelapa Sawit 3
                                </h2>
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
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default PeluangInvestasi;