import React, { useContext } from "react";
import { useBookContext } from "../context/AppContextProvider";
import "../css/Input.css";
import MyButton from "../My/MyButton";
import BookView from "./BookView";
import UUID from "react-uuid";

const BookInput = () => {
  const { book, setBook, bookList, setBookList } = useBookContext();
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };
  const bookInsert = async () => {
    await setBookList([...bookList, { ...book, b_id: UUID() }]);
    await setBook({ ...book, b_name: "", b_genre: "" });
  };
  return (
    <div className="book_input">
      <div>
        <label>TITLE</label>
        <input value={book.b_name} name="b_name" onChange={onChangeHandler} />
      </div>
      <div>
        <label>GENRE</label>
        <input value={book.b_genre} name="b_genre" onChange={onChangeHandler} />
      </div>
      {/* <button onClick={bookInsert}>SAVE</button> */}
      <MyButton onClick={bookInsert}>SAVE</MyButton>
      <BookView />
    </div>
  );
};

export default BookInput;
