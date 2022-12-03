import React from "react";

function NavItems() {
  const A = "Profil Daerah";
  const B = "Potensi Investasi";
  const C = "Peluang Investasi";
  const D = "Tata Ruang Infrastruktur";
  return (
    <div className="flex flex-row gap-4 mr-8 text-white">
      <a
        href="#profil-daerah"
        className="flex items-center w-20 text-sm hover:text-gray-300"
      >
        {A}
      </a>
      <a
        href="#peta"
        className="flex items-center w-20 text-sm hover:text-gray-300"
      >
        {B}
      </a>
      <a
        href="#peluang"
        className="flex items-center w-20 text-sm hover:text-gray-300"
      >
        {C}
      </a>
      <div className="flex items-center w-20 text-sm hover:text-gray-300">
        {D}
      </div>
    </div>
  );
}

export default NavItems;
