import React, { useContext } from "react";
import BookContext from "../context/BookContext";
// import "../css/View.css";

// inline 방식으로 style 만들고 직접 각 컴포넌트에 저장하기
const BookView = () => {
  const { book } = useContext(BookContext);
  const viewStyle = {
    width: "100%",
    margin: "0px auto",
    display: "flex",
    flexDirection: "coloumn",
  };

  const labelStyle = {
    fontWeight: "550",
    border: "3px solid cornflowerblue",
    borderRadius: "10px",
  };
  return (
    <div className="book_view" style={viewStyle}>
      <label style={labelStyle}>Book name is "{book.b_name}"</label>
      <label style={labelStyle}>Book genre is "{book.b_genre}"</label>
    </div>
  );
};

export default BookView;
