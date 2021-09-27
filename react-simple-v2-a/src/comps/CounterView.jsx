import React from "react";

function CounterView({ number }) {
  const intNum = parseInt(number);
  return (
    <div>
      <div>
        {intNum} + 20 = {intNum + 20}
      </div>
      <div>
        {intNum} x {intNum} = {intNum * intNum}
      </div>
    </div>
  );
}

export default CounterView;
