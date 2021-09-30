import React, { useContext, useRef } from "react";
import { useBookContext } from "../context/AppContextProvider";
import "../css/Input.css";
import MyButton from "../My/MyButton";
import BookView from "./BookView";
import UUID from "react-uuid";

const BookInput = () => {
  const { book, setBook, bookList, setBookList } = useBookContext();

  const nextId = useRef();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value, b_id: nextId.current });
  };
  const bookInsert = async () => {
    await setBookList([...bookList, book]);
    // { ...book, b_id: UUID }]);
    // book state를 초기화 하여 입력창에 입력된 내용을 삭제하기
    await setBook({ ...book, b_name: "", b_genre: "" });

    // Ref로 선언된 변수의 current요소을 1증가하여 다음번 list id로 사용한다
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
