import React from "react";
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

export const LoadProfile = () => {
  return (
    <section className="h-full py-24">
      <div className="flex flex-col gap-8 justify-center items-center h-3/4 py-40">
        <i className="fa-solid fa-spinner fa-2xl animate-spin"></i>
        <p className="text-center">
          Sedang memuat... <br />
          Mohon tidak menutup laman ini.
        </p>
      </div>
    </section>
  );
};

export default Loader;
