import React, { useState } from "react";
import SpecialButton from "./SpecialButton";
import { specials } from "../../../data";

const Specials = () => {
  const [specBtn] = useState(specials);

  return (
    <div className='spContainer'>
      {specBtn.map(spBTN => <SpecialButton key={spBTN} text={spBTN} />)}
    </div>
  );
};

export default Specials;