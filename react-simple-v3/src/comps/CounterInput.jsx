import React from "react";

function CounterInput({ setNum }) {
  const onKeyChange = (e) => {
    const inputNum = e.target.value;
    // if (inputNum == null || inputNum === "") {
    //   setNum(0);
    // } else {
    //   setNum(parseInt(inputNum));
    // }
    inputNum == null || inputNum === ""
      ? setNum(0)
      : setNum(parseInt(inputNum));
  };
  return (
    <div className="input">
      <input type="number" name="num" onChange={onKeyChange} />
    </div>
  );
}

export default CounterInput;
