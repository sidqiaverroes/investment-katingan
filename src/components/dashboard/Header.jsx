import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_LOGIN, selectUser } from "../../redux/authSlice";
import { logoutUser } from "../../services/authService";

import Loader from "../Loader";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const user = useSelector(selectUser);
  const { email } = user;

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
          <Link to="/home">
            <span className={splitLocation[1] === "home" ? "activeNav" : ""}>
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
          <Link to="/news">
            <span className={splitLocation[1] === "news" ? "activeNav" : ""}>
              News
            </span>
          </Link>
        </div>

        <div className="dropdown inline-block relative">
          <button className=" text-gray-800 font-medium py-2 px-4 rounded flex flex-row gap-2 items-center">
            <span>{email}</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>

          <ul className="dropdown-menu absolute hidden text-gray-800 pt-1 shadow-md w-full">
            <li class="">
              <Link to="/home/profile">
                <button
                  class="flex flex-row gap-2 justify-start items-center rounded-t w-full bg-white hover:bg-birumud border hover:text-white border-gray-300 py-2 px-4 whitespace-no-wrap"
                  href="#"
                >
                  <i class="fa-regular fa-user"></i>
                  Profile
                </button>
              </Link>
            </li>
            <li className="">
              <button
                className="flex flex-row gap-2 justify-start items-center rounded-b w-full bg-white hover:bg-birumud border hover:text-white border-gray-300  py-2 px-4 whitespace-no-wrap"
                onClick={logout}
              >
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
