import React from "react";
import sponsor from "../../Data/SponsorData";
import SponsorItems from "./SponsorItems";

function Sponsor() {
  return (
    <div className="flex flex-row justify-center items-center w-full py-32">
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-8 px-12 justify-center items-center max-w-screen-xl w-screen">
        {sponsor.map((items, index) => {
          return <SponsorItems key={index} item={items} />;
        })}
      </div>
    </div>
  );
}

export default Sponsor;
