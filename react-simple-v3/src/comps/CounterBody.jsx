import React from "react";
import CounterInput from "./CounterInput";
import CounterView from "./CounterView";

function CounterBody({ num, setNum }) {
  return (
    <div>
      <CounterInput setNum={setNum} />
      <CounterView num={num} />
      <button
        onClick={function numReset() {
          setNum(0);
          document.querySelector("input[name='num']").value = "";
        }}
      >
        RESET
      </button>
    </div>
  );
}

export default CounterBody;
