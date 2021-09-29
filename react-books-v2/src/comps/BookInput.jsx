import React, { useContext } from "react";
import BookContext from "../context/BookContext";
import BookView from "./BookView";

const BookInput = () => {
  const { book, setBook, bookList, setBookList } = useContext(BookContext);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const bookInsert = () => {
    setBookList([...bookList, { ...book, b_id: bookList.length }]);
    setBook({ ...book, b_name: "", b_genre: "" });
  };
  return (
    <div>
      <input
        placeholder="BOOK TITLE"
        onChange={onChangeHandler}
        name="b_name"
        value={book.b_name}
      />
      <input
        placeholder="BOOK GENRE"
        onChange={onChangeHandler}
        name="b_genre"
        value={book.b_genre}
      />
      <button onClick={bookInsert}>SAVE</button>
      <BookView />
    </div>
  );
};

export default BookInput;
