import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import MainBody from "./comps/MainBody";
import MainNav from "./comps/MainNav";
import Insert from "./comps/Insert";
import View from "./comps/View";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <MainNav />
        <Route path="/" component={MainBody} exact />
        <Route path="/insert" component={Insert} exact />
        <Route path="/view" component={View} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
