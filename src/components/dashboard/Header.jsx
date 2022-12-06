import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_LOGIN } from "../../redux/authSlice";
import { logoutUser } from "../../services/authService";

import Loader from "../Loader";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const logout = async () => {
    setIsLoading(true);
    await logoutUser();
    localStorage.removeItem("name");
    dispatch(SET_LOGIN(false));
    setIsLoading(false);
    navigate("/KatinganAdmin");
  };

  return (
    <div className="flex justify-center items-center w-full h-auto py-4 bg-white drop-shadow">
      {isLoading && <Loader />}
      <div className="flex flex-row justify-between w-full max-w-screen-xl">
        <div className="flex items-center font-semibold text-birumud">
          KATINGAN ADMIN DASHBOARD
        </div>
        <div className="flex items-center gap-8">
          <Link to="/dashboard">
            <span
              className={splitLocation[1] === "dashboard" ? "activeNav" : ""}
            >
              Home
            </span>
          </Link>
          <Link to="/komoditas">
            <span
              className={splitLocation[1] === "komoditas" ? "activeNav" : ""}
            >
              Komoditas
            </span>
          </Link>
          <Link to="/invest">
            <span className={splitLocation[1] === "invest" ? "activeNav" : ""}>
              Investasi
            </span>
          </Link>
        </div>
        <button
          onClick={logout}
          className="inline-flex justify-center items-center px-12 py-3 text-birumud border border-birumud bg-white rounded-tl-custom rounded-br-custom hover:bg-birumud hover:text-white shadow-md hover:shadow-lg"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Header;
