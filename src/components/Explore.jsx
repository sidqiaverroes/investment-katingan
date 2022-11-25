import React from "react";
import { CustButtonPrimer, CustButtonSec } from "../Assets/Button";
import exploreImg from "../Assets/explore.png"
import rect1 from "../Assets/Rectangle1.png"
import rect2 from "../Assets/Rectangle2.png"
import rect3 from "../Assets/Rectangle3.png"

function Explore() {
  return (
    // <div className="w-full h-full bg-white flex items-center justify-center">
    <div className=" flex flex-col items-center justify-center h-full w-full bg-white">
      <div className="flex items-center justify-center max-w-screen-xl h-auto mt-12">
        <div className="w-1/2 flex flex-col justify-start h-full gap-20 px-28">
          <div className="w-1/2 flex flex-col h-full justify-start gap-10 leading-normal">
            <h1 className="font-normal">TagLine Branding Katingan</h1>
            <div className="flex gap-4">
              <CustButtonPrimer text="Explore" />
            </div>
          </div>
        </div>
          <h1 className="w-1/2 font-medium text-5xl leading-normal">Kenapa memilih 
            <br></br>investasi di 
            <br></br>Katingan?</h1>
      </div>
      <div className="flex flex-row items-center justify-center max-w-screen-xl h-auto mt-12">
          <img src={exploreImg} alt="exploreImg" className="shadow rounded-tr-customImg rounded-tl-xl rounded-r-xl max-w-full h-auto align-middle border-none"/>
          <div className="w-1/2 flex flex-col justify-center px-12 gap-20">
            <div className="flex">
              <div className="relative overflow-visible rounded-lg cursor-pointer">
                <img src={rect2} alt="rect1" />
                <div class="absolute top-0 left-0 px-6 py-4">
                  <div className="flex-none font-semibold text-5xl">
                    01
                  </div>
                </div>
              </div>
              <div className="flex-1 px-5 text-lg">
              Di isi penjelasan singkat terkait dengan posisi geografis yang strategis
              </div>
            </div>
            <div className="flex">
              <div className="relative overflow-visible rounded-lg cursor-pointer">
                <img src={rect3} alt="rect1" />
                <div class="absolute top-0 left-0 px-6 py-4">
                  <div className="flex-none font-semibold text-5xl">
                    02
                  </div>
                </div>
              </div>
              <div className="flex-1 px-5 justify-center items-center text-lg">
              Di isi dengan penjelasan singkat terkait sumber daya 
              </div>
            </div>
            <div className="flex">
              <div className="relative overflow-visible rounded-lg cursor-pointer">
                <img src={rect1} alt="rect1" />
                <div class="absolute top-0 left-0 px-6 py-4">
                  <div className="flex-none font-semibold text-5xl">
                    03
                  </div>
                </div>
              </div>
              <div className="flex-1 px-5 text-lg">
              Diisi terkait dengan komitmen pemerintah daerah
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Explore;
