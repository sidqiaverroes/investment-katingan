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
  const [showModal, setShowModal] = React.useState(false);
  console.log(showModal);
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
                    <button onClick={() => setShowModal(true)}>
                      <CustButtonPrimer text="Detail"></CustButtonPrimer>
                    </button>
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
                    <button onClick={() => setShowModal(true)}>
                      <CustButtonPrimer text="Detail"></CustButtonPrimer>
                    </button>
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
                    <button onClick={() => setShowModal(true)}>
                      <CustButtonPrimer text="Detail"></CustButtonPrimer>
                    </button>
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
                    <button onClick={() => setShowModal(true)}>
                      <CustButtonPrimer text="Detail"></CustButtonPrimer>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Modal Title</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default PeluangInvestasi;
