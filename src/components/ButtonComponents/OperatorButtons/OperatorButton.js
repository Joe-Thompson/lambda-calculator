import React from "react";

const OperatorButton = (props) => {
  return (
    <div className='opBtn'>
      {<div>{props.operator.char}</div>}
    </div>
  );
};

export default OperatorButton;