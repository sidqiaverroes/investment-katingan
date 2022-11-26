import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = ({ value, onChange }) => {
  return (
    <div>
      <BiSearch size={18} />
      <input
        type="text"
        placeholder="Search items"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
