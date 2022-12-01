import React from "react";
import { CustButtonPrimer } from "../Assets/Button";
import InputBar from "./dashboard/InputBar";
import Map from "../Assets/MapPlaceHolder.png";

function Hubungi() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="flex flex-col justify-center items-center max-w-screen-lg">
        <h2 className="text-5xl font-bold text-center text-gray-800 py-6">
          Hubungi Kami
        </h2>
        <p className="max-w-2xl pb-4 text-center text-gray-500">
          Layanan perpesanan bagi calon investor untuk konsultansi dan agenda
          online meeting terkait potensi dan peluang di Katingan
        </p>
        <div className="grid grid-cols-5 gap-12 mt-8">
          <div className=" col-span-2">
            <form className="flex flex-col gap-4">
              <InputBar type="text" name="nama" placeholder="Nama" />
              <InputBar type="email" name="email" placeholder="Email" />
              <InputBar type="text" name="subjek" placeholder="Subjek" />
              <textarea
                type="text"
                name="pesan"
                placeholder="Pesan"
                className="col-span-3 px-4 py-2 max-h-36 text-black bg-white border-2 drop-shadow rounded-md focus:border-birumud focus:ring-birumud2 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <span className="grid w-56">
                <CustButtonPrimer text="Kirim Pesan" />
              </span>
            </form>
          </div>
          <div className="col-span-3">
            <img src={Map} alt="Map" className="max-h-96" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hubungi;
