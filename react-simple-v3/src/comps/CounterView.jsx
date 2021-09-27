import React from "react";

function CounterView({ num }) {
  return (
    <div className="view">
      <label>
        {num} + 20 = {num + 20}
      </label>
      <label>
        {num} * {num} = {num * num}
      </label>
    </div>
  );
}

export default CounterView;
