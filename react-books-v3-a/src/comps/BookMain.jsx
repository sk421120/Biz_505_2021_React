import React, { useState } from "react";
import { Route } from "react-router";
import BookInput from "./BookInput";
import BookView from "./BookView";
import BookContext from "../context/BookContext";
import BookList from "./BookList";
/*
컴포넌트의 선택적 Rendering
어떤 조건에 따라 컴포넌트를 보이거나 보이지 않도록 하는 방법
NavLink를 클릭했을때 선택적으로 화면 보여주기
*/

const BookMain = () => {
  const [book, setBook] = useState({});
  const [bookList, setBookList] = useState([]);

  // 상위 컴포넌트에서 이벤트를 생성하고 하위 컴포넌트로 전달할때는
  // 반드시 e(event) 매개변수를 같이 포함하는 것이 좋다
  const onClick = (e) => {
    alert("Click!!");
  };

  const providerData = { book, setBook, bookList, setBookList, onClick };
  return (
    <>
      <BookContext.Provider value={providerData}>
        <Route path="/" component={BookMain} exact>
          HOME
        </Route>
        <Route path="/insert" component={BookInput} exact />
        <Route path="/list" exact>
          <BookList />
        </Route>
      </BookContext.Provider>
    </>
  );
};

export default BookMain;
