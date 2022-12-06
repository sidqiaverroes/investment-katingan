import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from "react-redux";
import { getInvests } from "../redux/investSlice";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import Modal from "./Modal";

function PeluangInvestasi() {
  const initialState = {
    id: "",
    name: "",
    location: "",
    cost: "",
    mapLink: "",
    desc: "",
    image: "",
  };

  const dispatch = useDispatch();
  const { invests, isError, message } = useSelector((state) => state.invest);
  const [showModal, setShowModal] = useState(false);
  const [detail, setDetail] = useState(initialState);

  useEffect(() => {
    dispatch(getInvests());

    if (isError) {
      console.log(message);
    }
  }, [dispatch, isError, message]);

  const showDetail = (index) => {
    setDetail(invests[index]);
    setShowModal(true);
  };

  return (
    <div
      id="peluang"
      className="flex flex-col items-center justify-center h-auto w-full bg-white"
    >
      {showModal && <Modal setShowModal={setShowModal} detail={detail} />}
      <div className="justify-center items-center max-w-screen-xl h-1/4">
        <h2 className="text-5xl font-bold text-center">Peluang Investasi</h2>
        <p className="p-4 text-center text-lg font-normal">
          Berisi potensi investasi yang siap ditawarkan kepada investor
        </p>
      </div>
      <div className="justify-center items-center max-w-screen-lg h-96 mt-5 swiper overflow-hidden">
        <div className=" pl-10">
          <Swiper
            direction={"horizontal"}
            height={500}
            spaceBetween={40}
            slidesPerView={3}
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
            {invests.map((invest, index) => {
              const { _id, name, location, image } = invest;
              return (
                <SwiperSlide key={_id}>
                  <div className=" group block w-72 h-72 relative overflow-visible rounded-lg cursor-pointer">
                    <img
                      className="border-gray-100 shadow-sm w-72 h-72"
                      src={image}
                      alt="img"
                    />
                    <div className="absolute bottom-0 px-6 py-4">
                      <h1 className="text-white text-lg font-bold">{name}</h1>
                      <p className="text-white font-light">{location}</p>
                      <div className="items-center justify-center py-2 hidden group-hover:block ">
                        <button
                          onClick={() => showDetail(index)}
                          className="bg-birumud"
                        >
                          Detail
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default PeluangInvestasi;
