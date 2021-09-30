import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainNav from "./comps/MainNav";
import BookMain from "./comps/BookMain";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <MainNav />
        <BookMain />
      </BrowserRouter>
    </div>
  );
}

export default App;
