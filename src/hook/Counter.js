import React, { useState } from "react";

const Counter = ({ text }) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => setCounter(counter + 1);

  return (
    <button onClick={handleClick}>
      {text} {counter}
    </button>
  );
};

export default Counter;
