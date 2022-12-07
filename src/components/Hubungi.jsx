import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { BACKEND_URL } from "../services/authService";

import { validateEmail } from "../services/authService";

import { CustButtonPrimer } from "../Assets/Button";
import InputBar from "./dashboard/InputBar";
import Map from "../Assets/MapPlaceHolder.png";

const initialState = {
  nama: "",
  email: "",
  subjek: "",
  pesan: "",
};

function Hubungi() {
  const [mail, setMail] = useState(initialState);
  const { nama, email, subjek, pesan } = mail;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMail({ ...mail, [name]: value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!nama || !email || !subjek || !pesan) {
      return toast.error("All fields are required");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const mailData = {
      nama,
      email,
      subjek,
      pesan,
    };

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/contactus`,
        mailData
      );
      e.target.reset();
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full py-32">
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
            <form onSubmit={sendEmail} className="flex flex-col gap-4">
              <InputBar
                type="text"
                name="nama"
                placeholder="Nama"
                onChange={handleInputChange}
              />
              <InputBar
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
              />
              <InputBar
                type="text"
                name="subjek"
                placeholder="Subjek"
                onChange={handleInputChange}
              />
              <textarea
                type="text"
                name="pesan"
                placeholder="Pesan"
                rows="5"
                onChange={handleInputChange}
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
