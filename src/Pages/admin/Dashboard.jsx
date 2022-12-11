import React from "react";
import { useSelector } from "react-redux";
import { selectName } from "../../redux/authSlice";

const Dashboard = () => {
  //Adjust Name Capitalization
  const name = useSelector(selectName);

  let finalName;

  if (name) {
    const words = name.split(" ");
    finalName = words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
  }

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col items-start justify-center max-w-screen-xl w-full py-60">
        <h1 className="text-gray-800">
          Selamat datang,<span className="text-birumud"> {finalName}</span>!
        </h1>
        <p className="w-2/3 pt-2 text-gray-600">
          Ini adalah dashboard admin dari website Sistem Informasi Potensi
          Investasi Katingan (SIPIKAT). Di sini Anda dapat mengelola informasi
          yang terdapat di dalam database. Silakan beralih ke tab Komoditas,
          Investasi, atau News untuk mulai pengelolaan.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
