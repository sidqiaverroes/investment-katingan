import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function PeluangInvestasi() {
    return(
        <div className="flex flex-col h-full w-full justify-center bg-white gap-4 py-20">
            <div className="h-1/4 max-w-screen-l">
                <h2 className="text-5xl font-bold text-birumud text-center">
                    Peluang Investasi
                </h2>
                <p>
                    Berisi potensi investasi yang siap ditawarkan kepada investor
                </p>
            </div>
        </div>
    );
}

export default PeluangInvestasi;