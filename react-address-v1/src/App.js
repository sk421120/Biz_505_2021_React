import "./App.css";
import AddressInput from "./comps/AddressInput";
import AddressView from "./comps/AddressView";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([
    {
      u_name: "",
      u_addr: "",
      u_tel: "",
      u_age: "",
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <AddressInput user={user} setUser={setUser} />
        <AddressView user={user} />
        <button
          onClick={() => {
            setUser({
              u_name: "",
              u_addr: "",
              u_tel: "",
              u_age: "",
            });
          }}
        >
          RESET
        </button>
      </header>
    </div>
  );
}

export default App;
