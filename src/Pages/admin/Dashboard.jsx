import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useRedirectLoggedOutUser from "../../customHooks/useRedirect";
import { selectIsLoggedIn, selectName } from "../../redux/authSlice";

const Dashboard = () => {
  useRedirectLoggedOutUser("/KatinganAdmin");
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  //Adjust Name Capitalization
  const name = useSelector(selectName);
  const words = name.split(" ");
  let finalName = words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");

  useEffect(() => {
    if (isLoggedIn === true) {
      console.log(isLoggedIn);
    }
  }, [isLoggedIn, dispatch]);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col items-start justify-center max-w-screen-xl w-full py-60">
        <h1 className="text-gray-800">
          Selamat datang,<span className="text-birumud"> {finalName}</span>!
        </h1>
        <p className="w-2/3 pt-2 text-gray-600">
          Ini adalah dashboard admin dari website Katingan. Di sini Anda dapat
          mengelola informasi yang terdapat di dalam database. Silakan beralih
          ke tab Komoditas atau Investasi untuk mulai pengelolaan.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
