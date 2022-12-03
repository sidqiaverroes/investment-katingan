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
    <section class="bg-blue-900 relative place-items-center grid h-screen w-screen gap-4">
      <div class="bg-blue-500 w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl"></div>
      <div class="bg-blue-400 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>
      <div class="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="text-blue-900 filter mix-blend-overlay h-16 w-16"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
        />
      </svg>
    </section>
  );
};

export default Loader;
