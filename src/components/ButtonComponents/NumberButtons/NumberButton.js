import React from "react";

const NumberButton = (props) => {
  return (
    <div className='numBtn'>
      {<div >{props.text}</div>}
    </div>
  );
};

export default NumberButton;
