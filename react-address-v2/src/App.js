import "./App.css";
import AddressInput from "./comps/AddressInput";
import AddressView from "./comps/AddressView";
import { useState } from "react";

function App() {
  const [address, setAddress] = useState({
    u_name: "",
    u_addr: "",
    u_tel: "",
    u_age: 0,
  });

  const [addrList, setAddrList] = useState([]);

  const args = {
    address,
    setAddress,
    addrList,
    setAddrList,
  };
  return (
    <div className="App">
      <header className="App-header">
        <AddressInput args={args} />
        <AddressView addrList={addrList} />
      </header>
    </div>
  );
}

export default App;
