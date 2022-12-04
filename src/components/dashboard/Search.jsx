import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import InputBar from "./InputBar";

const Search = ({ value, onChange, linkTo, buttonPlaceholder }) => {
  return (
    <div className="grid grid-cols-4 w-full h-full space-x-4">
      <InputBar
        type="text"
        placeholder="Search here"
        value={value}
        onChange={onChange}
      />
      <NavLink
        to={linkTo}
        className="flex justify-center items-center w-auto gap-2 px-4 py-2 rounded-md text-white bg-birumud hover:bg-birumud2 shadow-md hover:shadow-lg"
      >
        <AiOutlinePlus />
        {buttonPlaceholder}
      </NavLink>
    </div>
  );
};

export default Search;
