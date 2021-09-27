import React from "react";

function CounterInput({ onKeyChange }) {
  return (
    <div className="input">
      <input type="number" name="num" onChange={onKeyChange} />
    </div>
  );
}

export default CounterInput;
