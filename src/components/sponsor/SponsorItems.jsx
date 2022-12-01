import React from "react";

function SponsorItems({ item }) {
  return (
    <div className="flex justify-center items-center">
      <img src={item.img} alt="sponsor" />
    </div>
  );
}

export default SponsorItems;
