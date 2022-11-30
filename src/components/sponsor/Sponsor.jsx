import React from "react";
import sponsor from "../../Data/SponsorData";
import SponsorItems from "./SponsorItems";

function Sponsor() {
  return(
    <div className="flex flex-row justify-center items-center w-full bg-black">
      <div className="flex flex-row justify-center items-center">
      {sponsor.map((items, index)=>{
        return <SponsorItems key={index} item={items}/>
      })}
      </div>
    </div>
  )
}

export default Sponsor;
