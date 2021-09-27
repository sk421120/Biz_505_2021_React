import React from "react";

function CounterInput(props) {
  const { setCount } = props;

  const onChangeHandler = (e) => {
    const number = e.target.value;
    setCount(number);
  };
  return (
    <div>
      <input placeholder="Input Number" onChange={onChangeHandler} />
    </div>
  );
}

export default CounterInput;
