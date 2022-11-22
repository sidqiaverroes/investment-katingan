import React from "react";
import NavItems from "./NavItems";

function Nav() {
  return (
    <div className="absolute flex justify-center items-center w-full h-auto z-10 mt-20">
      <div className="flex flex-row justify-between w-full max-w-screen-xl">
        <div className="flex items-center pl-12 text-birumud">
          SISTEM INFORMASI POTENSI INVESTASI KATINGAN
        </div>
        <NavItems />
      </div>
    </div>
  );
}

export default Nav;
