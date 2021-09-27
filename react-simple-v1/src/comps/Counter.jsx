import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <div>Count Num : {count}</div>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
};

export default Counter;
