import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import HeroImage from "../Assets/hero.png";
import { CustButtonPrimer, CustButtonSec } from "./Button";

function Hero() {
  const navigate = useNavigate();

  const bringTo = (link) => {
    navigate(link);
  };

  return (
    <>
      <Nav />

      <div className="w-full h-full bg-white flex items-center justify-center">
        <div className="flex flex-row gap-12 items-center justify-center max-w-screen-lg	h-auto mt-12">
          <div className="w-1/2 flex flex-col justify-center h-full gap-8">
            <h2 className=" font-bold text-birumud">
              Profil
              <span className="text-gray-800">&nbsp; Investasi Daerah</span>
              &nbsp; <br /> Kabupaten Katingan
            </h2>
            <p className="text-gray-500">
              Sistem Informasi Potensi Investasi Katingan (SIPIKAT) merupakan
              petunjuk bagi investor yang akan berinvestasi di Kabupaten
              Katingan
            </p>
            <div className="flex gap-4">
              <a href="#profil-daerah">
                <CustButtonPrimer text="Explore" />
              </a>
              <a href="#hubungi">
                <CustButtonSec text="Hubungi Kami" />
              </a>
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
