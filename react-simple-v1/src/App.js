import "./App.css";
import CounterView from "./comps/CounterView";
import { useState } from "react";
import CounterButton from "./comps/CounterButton";

function App() {
  const [count, setCount] = useState(0);

  const onBtnClick = (e) => {
    let btnName = e.target.className;
    if (btnName === "plus") {
      setCount(count + 1);
    } else if (btnName === "minus") {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <CounterView count={count} />
        <CounterButton onBtnClick={onBtnClick} />
      </header>
    </div>
  );
}

export default App;
