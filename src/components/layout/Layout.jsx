import React from "react";
import Header from "../dashboard/Header";

const Layout = ({ children }) => {
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
