import logo from "./logo.svg";
import "./App.css";
import BookMain from "./comps/BookMain";
import { useState } from "react";
import BookContext from "./context/BookContext";

function App() {
  // 한개의 데이터를 저장할 state
  const [book, setBook] = useState({
    b_id: 0,
    b_name: "corgi",
    b_genre: "cute",
  });

  const [bookList, setBookList] = useState([]);

  const providerData = { book, setBook, bookList, setBookList };
  return (
    <div className="App">
      <header className="App-header">
        <BookContext.Provider value={providerData}>
          <BookMain />
        </BookContext.Provider>
      </header>
    </div>
  );
}

export default App;
