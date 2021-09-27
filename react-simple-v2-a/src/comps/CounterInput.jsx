import React from "react";

function CounterInput({ setNumber }) {
  const onChangeHandler = (e) => {
    const number = e.target.value;
    console.log(number);
    setNumber(number);
  };
  return (
    <div>
      <input placeholder="Input Number" onChange={onChangeHandler} />
    </div>
  );
}

export default CounterInput;
