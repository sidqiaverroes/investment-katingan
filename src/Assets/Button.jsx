import React from "react";

function CustButtonPrimer(props) {
  return (
    <button className="inline-flex items-center px-6 py-2 text-white shadow-lg shadow-blue-200 bg-birumud rounded-tl-3xl rounded-br-3xl ">
      {props.text}
    </button>
  );
}

function CustButtonSec(props) {
  return (
    <button className="inline-flex items-center px-6 py-2 text-birumud border border-birumud bg-white rounded-tl-custom rounded-br-custom ">
      {props.text}
    </button>
  );
}

export { CustButtonPrimer, CustButtonSec };
export default CustButtonPrimer;
// export default CustButtonSec;

{
  /* <button className="text-white bg-birumud rounded-tl-lg rounded-br-lg"> */
}
