import React from "react";

function NavItems() {
  const A = "Profil Daerah";
  const B = "Potensi Investasi";
  const C = "Peluang Investasi";
  const D = "Tata Ruang Infrastruktur";
  return (
    <div className="flex flex-row gap-6 mr-12 text-white">
      <div className="flex items-center w-20 text-sm">{A}</div>
      <div className="flex items-center w-20 text-sm">{C}</div>
      <div className="flex items-center w-20 text-sm">{B}</div>
      <div className="flex items-center w-20 text-sm">{D}</div>
    </div>
  );
}

export default NavItems;
