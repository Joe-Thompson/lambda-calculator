import React from "react";

// const [num, updateNum] = useState(numbers);

const Display = (props) => {
  return <div className="display">{props.number}</div>;
};

export default Display;