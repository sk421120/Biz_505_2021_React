import React, { useState } from "react";

function Main() {
  const [num, setNum] = useState(0);

  const onBtnClick = (e) => {
    const btnName = e.target.className;

    if (btnName.includes("plus")) {
      setNum(num + 1);
    } else if (btnName === "minus") {
      setNum(num - 1);
    }
  };

  return (
    <div className="main">
      <label>Count Num : {num}</label>
      <div>
        <button className="plus" onClick={onBtnClick}>
          PLUS
        </button>
        <button className="minus" onClick={onBtnClick}>
          MINUS
        </button>
      </div>
    </div>
  );
}

export default Main;
