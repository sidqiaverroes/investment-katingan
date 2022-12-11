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
        <div className="flex flex-row gap-12 items-center justify-center max-w-screen-lg h-auto mt-12">
          <div className="w-1/2 flex flex-col justify-end h-full gap-12">
            <span className="flex flex-col gap-8">
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
            </span>

            <div className=" flex flex-row gap-20">
              <div className="relative flex flex-col ">
                <div className="absolute top-1 -left-4 bg-orenmud w-10 h-5 rounded-t-full -rotate-45" />
                <h1 className="mx-2 mt-2 font-medium text-center">9</h1>
                <p className="font-light text-center">Potensi</p>
              </div>
              <div className="relative flex flex-col">
                <div className="absolute top-1 -left-4 bg-birumud w-10 h-5 rounded-t-full -rotate-45" />
                <h1 className="mx-2 mt-2 font-medium text-center">6</h1>
                <p className="font-light text-center">Peluang</p>
              </div>
              <div className="relative flex flex-col">
                <div className="absolute top-1 -left-6 bg-ijotua w-10 h-5 rounded-t-full -rotate-45" />
                <h1 className="mx-2 mt-2 font-medium text-center">73+</h1>
                <p className="font-light text-center">Investor</p>
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
