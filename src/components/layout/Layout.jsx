import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useRedirectLoggedOutUser from "../../customHooks/useRedirect";

import { selectIsLoggedIn } from "../../redux/authSlice";

import Header from "../dashboard/Header";

const Layout = ({ children }) => {
  useRedirectLoggedOutUser("/KatinganAdmin");

  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn === true) {
      console.log(isLoggedIn);
    }

    if (isLoggedIn === false) {
      console.log(isLoggedIn);
    }
  }, [isLoggedIn]);

  return (
    <>
      <div className=" min-h-screen bg-gray-200">
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
