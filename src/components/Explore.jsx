import React from "react";
import { CustButtonPrimer, CustButtonSec } from "../Assets/Button";

function Explore() {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center">
      <div className="flex flex-row items-center justify-center max-w-screen-xl h-auto mt-12">
        <div className="flex flex-col gap-4">
          <h1>TagLine Branding Katingan</h1>
          <div className="flex gap-4">
            <CustButtonPrimer text="Explore" />
          </div>
        </div>
        <h1>Kenapa memilih investasi di Katingan?</h1>
      </div>
    </div>
  );
}

export default Explore;
