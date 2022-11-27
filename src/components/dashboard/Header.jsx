import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectName, SET_LOGIN } from "../../redux/authSlice";
import { logoutUser } from "../../services/authService";

import { CustButtonSec } from "../../Assets/Button";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(selectName);

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
        <div onClick={logout}>
          <CustButtonSec text="Log out" />
        </div>
      </div>
    </div>
  );
}

export default Header;
