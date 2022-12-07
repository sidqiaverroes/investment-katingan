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
      className="flex flex-col items-center justify-center h-full w-full bg-white py-16"
    >
      {showModal && <Modal setShowModal={setShowModal} detail={detail} />}
      <div className="justify-center items-center max-w-screen-lg h-1/4">
        <h2 className=" font-bold text-center text-gray-800">
          Peluang Investasi
        </h2>
        <p className="p-4 text-center text-lg font-normal text-gray-500">
          Berisi potensi investasi yang siap ditawarkan kepada investor
        </p>
      </div>

      <Swiper
        loop={true}
        direction={"horizontal"}
        height={500}
        spaceBetween={0}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="max-w-screen-lg "
      >
        {invests.map((invest, index) => {
          const { _id, name, location, image } = invest;
          return (
            <SwiperSlide key={_id}>
              <div className="group block w-72 h-80 relative overflow-hidden rounded-lg cursor-pointer my-16 border border-gray-300 shadow-lg">
                <img className="w-72 h-72 object-cover" src={image} alt="img" />
                <div className="absolute flex flex-col items-center justify-center w-full bottom-0 px-6 py-6 bg-white">
                  <h1 className="text-lg text-birumud font-bold">{name}</h1>
                  <p className="text-gray-500 font-light">{location}</p>
                  <div className="items-center justify-center py-2 hidden group-hover:block ">
                    <button
                      onClick={() => showDetail(index)}
                      className="inline-flex justify-center items-center px-12 py-3 text-white bg-birumud rounded-tl-3xl rounded-br-custom hover:bg-birumud2 shadow-md hover:shadow-lg"
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
  );
}

export default PeluangInvestasi;
