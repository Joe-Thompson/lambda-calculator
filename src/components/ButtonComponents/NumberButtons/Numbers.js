import React, { useState } from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";


const Numbers = () => {
  const [btnNum] = useState(numbers);
  return (
    <div className='numContainer'>
      {btnNum.map(num => <NumberButton key={num} text={num} />)}
    </div>
  );
};

export default Numbers;