import React from "react";
import { CustButtonPrimer, CustButtonSec } from "../components/Button";
import exploreImg from "../Assets/explore.png";
import rect1 from "../Assets/Rectangle1.png";
import rect2 from "../Assets/Rectangle2.png";
import rect3 from "../Assets/Rectangle3.png";

function Explore() {
  return (
    <div
      id="profil-daerah"
      className=" flex flex-col gap-20 items-center justify-center h-full w-full bg-white"
    >
      <div className="flex flex-row gap-24 items-center justify-center max-w-screen-lg w-full h-auto mt-12">
        <div className="w-1/2 flex flex-col justify-start h-full">
          <div className="flex flex-col h-full justify-start gap-4 leading-normal">
            <h1 className="font-normal text-lg text-gray-500">
              Di isi dengan tagline branding daya tarik Katingan{" "}
            </h1>
            <div className="flex gap-4">
              <CustButtonPrimer text="Explore" />
            </div>
          </div>
        </div>
        <h1 className="w-1/2 font-medium text-gray-800 text-5xl leading-normal">
          Kenapa memilih investasi di Katingan?
        </h1>
      </div>

      <div className="flex flex-row gap-12 items-center justify-center max-w-screen-lg h-auto mt-12">
        <img
          src={exploreImg}
          alt="exploreImg"
          className="shadow rounded-tr-customImg w-1/2 max-w-full h-auto align-middle border-none"
        />
        <div className="w-1/2 flex flex-col justify-center gap-36">
          <div className="flex flex-row justify-center items-center">
            <div className="flex w-1/4">
              <div className="relative left-8 bottom-3 z-10 w-fit font-semibold text-6xl text-gray-800">
                01
              </div>
              <img
                src={rect1}
                alt="rect1"
                className="relative right-16 top-4"
              />
            </div>
            <div className="w-3/4 px-4 text-base text-gray-500">
              Di isi penjelasan singkat terkait dengan posisi geografis yang
              strategis
            </div>
          </div>

          <div className="flex flex-row justify-center items-center">
            <div className="flex w-1/4">
              <div className="relative left-8 bottom-3 z-10 w-fit font-semibold text-6xl text-gray-800">
                02
              </div>
              <img
                src={rect2}
                alt="rect2"
                className="relative right-20 top-3"
              />
            </div>
            <div className="w-3/4 px-4 text-base text-gray-500">
              Di isi penjelasan singkat terkait dengan posisi geografis yang
              strategis
            </div>
          </div>

          <div className="flex flex-row justify-center items-center">
            <div className="flex w-1/4">
              <div className="relative left-8 bottom-3 z-10 w-fit font-semibold text-6xl text-gray-800">
                03
              </div>
              <img
                src={rect3}
                alt="rect3"
                className="relative right-20 top-3"
              />
            </div>
            <div className="w-3/4 px-4 text-base text-gray-500">
              Di isi penjelasan singkat terkait dengan posisi geografis yang
              strategis
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
