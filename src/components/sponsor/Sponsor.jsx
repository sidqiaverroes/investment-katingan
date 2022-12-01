import React from "react";
import sponsor from "../../Data/SponsorData";
import SponsorItems from "./SponsorItems";

function Sponsor() {
  return (
    <div className="flex flex-row justify-center items-center w-full py-40">
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-8 justify-center items-center max-w-screen-lg w-screen">
        {sponsor.map((items, index) => {
          return <SponsorItems key={index} item={items} />;
        })}
      </div>
    </div>
  );
}

export default Sponsor;
