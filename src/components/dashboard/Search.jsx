import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = ({ value, onChange }) => {
  return (
    <div className="flex items-center w-full ">
      <div className="flex w-full space-x-2 my-4">
        <input
          type="text"
          className="block w-full px-4 py-2 text-black bg-white border-2 rounded-md focus:border-birumud focus:ring-birumud2 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search..."
          value={value}
          onChange={onChange}
        />
        <button className="px-4 text-white bg-birumud rounded-md ">
          <BiSearch size={18}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </BiSearch>
        </button>
      </div>
    </div>
  );
};

export default Search;
