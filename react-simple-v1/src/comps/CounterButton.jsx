import React from "react";

const CounterButton = (props) => {
  const { onBtnClick } = props;
  return (
    <div>
      <button className="plus" onClick={onBtnClick}>
        +
      </button>
      <button className="minus" onClick={onBtnClick}>
        -
      </button>
    </div>
  );
};

export default CounterButton;
