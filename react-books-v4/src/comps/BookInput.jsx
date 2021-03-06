import React, { useContext, useRef } from "react";
import { useBookContext } from "../context/AppContextProvider";
import "../css/Input.css";
import MyButton from "../My/MyButton";
import BookView from "./BookView";
import UUID from "react-uuid";

const BookInput = () => {
  const { book, setBook, bookList, setBookList } = useBookContext();

  /*
react에서 일반적으로 선언된 변수는 실제 화면전체가 변경(refresh)되지 않더라도
	ㄴ react는 화면이 refresh 하지 않고 rendering 한다 데이터(state)가 변경되었을때만 reRendering
변수는 무조건 초기화 되어 버린다 그래서 reference 변수로 선언을 해주어야 한다

초기화 되는 것을 방지하면서 현재 화면에서
어떤 변수(public 변수)의 값을 유지하고 싶을때가 있다
let nextId => const nextId = useRef
*/
  const nextId = useRef();
  /*
nextId 라는 변수를 만들고 입력창에 값이 입력되면 nextId id에 저장하기
*/
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
