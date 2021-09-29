import React, { useContext } from "react";
import BookContext from "../context/BookContext";
import BookList from "./BookList";

const BookView = () => {
  const { book } = useContext(BookContext);
  return (
    <div>
      <span>
        Book Title is{" "}
        {book.b_name == null || book.b_name === "" ? null : (
          <p>"{book.b_name}"</p>
        )}
      </span>
      <span>
        Book Genre is{" "}
        {book.b_genre == null || book.b_name === "" ? null : (
          <p>"{book.b_genre}"</p>
        )}
      </span>
      <BookList />
    </div>
  );
};

export default BookView;
