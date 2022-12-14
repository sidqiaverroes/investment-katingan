import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import { getNews } from "../redux/newsSlice";
import { NewsModal } from "./Modal";

const initialState = {
  id: "",
  title: "",
  desc: "",
  createdAt: "",
  editedAt: "",
  image: "",
};

const LatestNews = () => {
  const dispatch = useDispatch();
  const { newses, isError, message } = useSelector((state) => state.news);
  const [showModal, setShowModal] = useState(false);
  const [detail, setDetail] = useState(initialState);

  useEffect(() => {
    dispatch(getNews());

    if (isError) {
      console.log(message);
    }
  }, [isError, message, dispatch]);

  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };

  const formatDate = (date, type) => {
    const month = [
      "Undefined",
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    const string = date.split("T");

    const rawDate = string[0].split("-");
    const finalDate = rawDate[2] + " " + month[rawDate[1]] + " " + rawDate[0];

    const rawTime = string[1].split(".");
    const finalTime = rawTime[0];

    if (type === "date") {
      return finalDate;
    }
    if (type === "time") {
      return finalTime;
    }
  };

  const showDetail = (index) => {
    setDetail(newses[index]);
    setShowModal(true);
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full h-full py-16">
      {showModal && <NewsModal setShowModal={setShowModal} detail={detail} />}
      <div className="flex items-center justify-center h-full max-w-screen-lg">
        <h1 className="text-5xl text-gray-800">Katingan News</h1>
      </div>

      <Swiper
        loop={false}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        grabCursor={true}
        className="flex h-full w-full max-w-screen-lg"
      >
        {newses.map((news, index) => {
          const { _id, title, desc, editedAt, image } = news;
          return (
            <SwiperSlide key={_id}>
              <div className="group flex flex-row w-newsCard h-96 relative overflow-hidden rounded-lg cursor-pointer my-16 border border-gray-300 shadow-lg">
                <img
                  src={image}
                  alt="product images"
                  className="w-3/5 h-auto object-cover"
                />
                <div className="flex flex-col gap-2 items-start w-2/5 p-8">
                  <h3 className="font-normal text-sm text-left text-birumud mb-3">
                    {formatDate(editedAt, "date")}
                  </h3>
                  <h3 className="h-fit  font-bold text-left text-lg text-gray-800">
                    {shortenText(title, 68)}
                  </h3>
                  <p className=" w-full h-full text-sm text-left text-gray-500 pb-6">
                    {shortenText(desc, 140)}
                  </p>
                  <button
                    onClick={() => showDetail(index)}
                    className="inline-flex justify-center items-center px-12 py-3 text-birumud border border-birumud bg-white rounded-tl-custom rounded-br-custom hover:bg-birumud hover:text-white shadow-md hover:shadow-lg"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default LatestNews;
