import React, { useContext } from "react";
import BookContext from "../context/BookContext";

function BookView() {
  const { book, setBook } = useContext(BookContext);
  return <div>Book Title : {book}</div>;
}

export default BookView;
