import { useState } from "react";
import "./App.css";
import CounterInput from "./comps/CounterInput";
import CounterView from "./comps/CounterView";

function App() {
  const [num, setNum] = useState(0);

  const onKeyChange = (e) => {
    const inputNum = e.target.value;
    if (inputNum == null || inputNum === "") {
      setNum(0);
    } else {
      setNum(parseInt(inputNum));
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <CounterInput onKeyChange={onKeyChange} />
        <CounterView num={num} />
        <button
          onClick={function numReset() {
            setNum(0);
            document.querySelector("input[name='num']").value = "";
          }}
        >
          RESET
        </button>
      </header>
    </div>
  );
}

export default App;
