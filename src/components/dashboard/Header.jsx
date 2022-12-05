import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_LOGIN } from "../../redux/authSlice";
import { logoutUser } from "../../services/authService";

import { CustButtonSec } from "../../Assets/Button";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const logout = async () => {
    await logoutUser();
    await dispatch(SET_LOGIN(false));
    navigate("/KatinganAdmin");
  };
  return (
    <div className="flex justify-center items-center w-full h-auto py-4 bg-white drop-shadow">
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
        <div onClick={logout}>
          <CustButtonSec text="Log out" />
        </div>
      </div>
    </div>
  );
}

export default Header;
