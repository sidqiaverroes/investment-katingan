import React from "react";

function CustButtonPrimer(props) {
  return (
    <button className="inline-flex justify-center items-center px-12 py-3 text-white bg-birumud rounded-tl-3xl rounded-br-custom hover:bg-birumud2 shadow-md hover:shadow-lg">
      {props.text}
    </button>
  );
}

function CustButtonSec(props) {
  return (
    <button className="inline-flex justify-center items-center px-12 py-3 text-birumud border border-birumud bg-white rounded-tl-custom rounded-br-custom hover:bg-birumud hover:text-white shadow-md hover:shadow-lg">
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
