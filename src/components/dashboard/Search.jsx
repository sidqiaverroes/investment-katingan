import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Search = ({ value, onChange }) => {
  return (
    <div className="grid grid-cols-4 w-full h-full space-x-4">
      <input
        type="text"
        className="col-span-3 px-4 py-2 text-black bg-white border-2 drop-shadow rounded-md focus:border-birumud focus:ring-birumud2 focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder="Cari Komoditas..."
        value={value}
        onChange={onChange}
      />
      <button className="flex justify-center items-center w-auto gap-2 px-4 py-2 rounded-md text-white bg-birumud hover:bg-birumud2 shadow-md hover:shadow-lg">
        <AiOutlinePlus />
        Tambah Komoditas
      </button>
    </div>
  );
};

export default Search;
