import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectName, SET_LOGIN } from "../../redux/authSlice";
import { logoutUser } from "../../services/authService";

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
    <div className="flex justify-center items-center w-full h-auto py-4">
      <div className="flex flex-row justify-between w-full max-w-screen-xl">
        <div className="flex items-center font-semibold text-birumud">
          KATINGAN ADMIN DASHBOARD
        </div>
        <div>
          <button
            onClick={logout}
            className="w-full px-8 py-2 text-sm font-normal text-white transition-colors duration-300 bg-orenmud rounded-md shadow hover:bg-orenmud2 focus:outline-none focus:ring-blue-200 focus:ring-4"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
