import React from "react";

function CounterButton({ plus, minus }) {
  return (
    <div>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

export default CounterButton;
