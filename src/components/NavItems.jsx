import React from "react";

function NavItems() {
  const Items = [
    {
      title: "Profil Daerah",
      path: "#profil-daerah",
    },
    { title: "Potensi Investasi", path: "#komoditas-unggulan" },
    { title: "Peta Potensi", path: "#peta-potensi" },
    { title: "Peluang Investasi", path: "#peluang-investasi" },
    { title: "Tata Ruang Infrastruktur", path: "" },
  ];
  return (
    <div className="flex flex-row w-2/5 gap-6 mr-8 text-white">
      {Items.map((item, index) => {
        return (
          <a
            key={index}
            href={item.path}
            className="flex items-center w-fit text-sm hover:text-gray-300"
          >
            {item.title}
          </a>
        );
      })}
    </div>
  );
}

export default NavItems;
