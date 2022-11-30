import React from "react";

function SponsorItems({ item }) {
  return (
    <div className="flex justify-center items-center">
      <img src={item.img} alt="sponsor" className="w-30" />
    </div>
  );
}

export default SponsorItems;
