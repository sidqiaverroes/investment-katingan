import React from "react";
import Nav from "./Nav";
import HeroImage from "../Assets/hero.png";
import { CustButtonPrimer, CustButtonSec } from "../Assets/Button";

function Hero() {
  return (
    <>
      <Nav />

      <div className="w-full h-full bg-white flex items-center justify-center">
        <div className="flex flex-row items-center justify-center max-w-screen-xl	h-auto mt-12">
          <div className="w-1/2 flex flex-col justify-center h-full gap-4 px-12">
            <h2 className="text-5xl font-bold text-birumud">
              Profil
              <span className="text-gray-800">&nbsp; Investasi Daerah</span>
              &nbsp; <br /> Kabupaten Katingan
            </h2>
            <p>
              Sistem Informasi Potensi Investasi Katingan (SIPIKAT) merupakan
              petunjuk bagi investor yang akan berinvestasi di Kabupaten
              Katingan
            </p>
            <div className="flex gap-4">
              <CustButtonPrimer text="Explore" />
              <CustButtonSec text="Hubungi Kami" />
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-row gap-4">
                <div className="flex flex-col">
                  <h1 className="mx-2 mt-2 font-medium">356</h1>
                  <p className="font-light">Potensi</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="mx-2 mt-2 font-medium">220</h1>
                  <p className="font-light">Peluang</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="mx-2 mt-2 font-medium">150+</h1>
                  <p className="font-light">Investor</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img
              src={HeroImage}
              alt="hero image"
              className="shadow rounded-bl-customImg rounded-tl-xl rounded-r-xl max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
