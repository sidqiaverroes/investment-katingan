import React from "react";

function SponsorItems({ item }) {
  return (
    <div className="flex justify-center items-center w-full h-auto aspect-square object-contain">
      <img src={item.img} alt="sponsor" />
    </div>
  );
}

export default SponsorItems;
