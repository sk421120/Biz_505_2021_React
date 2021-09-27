import { useState } from "react";
import "./App.css";
import CounterBody from "./comps/CounterBody";

function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <CounterBody num={num} setNum={setNum} />
      </header>
    </div>
  );
}

export default App;
