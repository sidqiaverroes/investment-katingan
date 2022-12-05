import React from "react";
import loaderImg from "../Assets/loader.gif";
import ReactDOM from "react-dom";

const Loader = () => {
  return ReactDOM.createPortal(
    <section className=" z-50 bg-white fixed place-items-center h-screen w-screen gap-4">
      <div className="flex flex-col gap-8 h-screen justify-center items-center">
        <i className="fa-solid fa-spinner fa-2xl animate-spin"></i>
        <p className="text-center">
          Sedang memuat... <br />
          Mohon tidak menutup laman ini.
        </p>
      </div>
    </section>,
    document.getElementById("loader")
  );
};

export const SpinnerImg = () => {
  return (
    <section className="relative">
      <div className="absolute top-8 z-30 w-full h-96 bg-gray-200">
        <div className="flex flex-col gap-8 justify-start items-center h-full py-40">
          <i className="fa-solid fa-spinner fa-2xl animate-spin"></i>
          <p className="text-center">
            Sedang memuat... <br />
            Mohon tidak menutup laman ini.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Loader;
