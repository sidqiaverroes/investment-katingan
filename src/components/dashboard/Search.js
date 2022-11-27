import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = ({ value, onChange }) => {
  return (
    <div className="flex flex-row items-center w-full">
      <BiSearch size={18} className="mr-2" />
      <input
        className="w-full"
        type="text"
        placeholder="Search items"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
