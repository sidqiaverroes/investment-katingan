import React from "react";

function InputBar(props) {
  return (
    <input
      type={props.type}
      name={props.name}
      className={`${props.className} col-span-3 px-4 py-2 text-black bg-white border-2 drop-shadow rounded-md focus:border-birumud focus:ring-birumud2 focus:outline-none focus:ring focus:ring-opacity-40`}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default InputBar;
