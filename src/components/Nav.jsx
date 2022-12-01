import React from "react";
import NavItems from "./NavItems";

function Nav() {
  return (
    <div className="absolute top-16 flex justify-center items-center w-full h-auto z-10">
      <div className="flex flex-row justify-between w-full max-w-screen-lg">
        <div className="flex items-center text-birumud">
          SISTEM INFORMASI POTENSI INVESTASI KATINGAN
        </div>
        <NavItems />
      </div>
    </div>
  );
}

export default Nav;
