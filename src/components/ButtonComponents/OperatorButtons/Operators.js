import React, { useState } from "react";
import OperatorButton from "./OperatorButton";
import {operators} from "../../../data";


const Operators = () => {
  const [opBtn] = useState(operators);
  return (
    <div className='opContainer'>
      {opBtn.map(operator => <OperatorButton key={Math.random()} operator={operator}/>)}
    </div>
  );
};

export default Operators;