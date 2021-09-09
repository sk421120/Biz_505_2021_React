import "./App.css";
import Header from "./comps/Header";
import MainNav from "./comps/MainNav";
import BBsMain from "./comps/BBsMain";
import BBsWrite from "./comps/BBsWrite";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <MainNav />
        <Route path="/" com />
        <BBsMain />
        <BBsWrite />
      </div>
    </Router>
  );
}

export default App;
