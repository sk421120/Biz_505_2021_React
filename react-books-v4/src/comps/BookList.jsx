import React from "react";
import "../css/Input.css";
import BookItem from "./BookItem";

const list_title_names = [
  { id: 0, t_name: "ID" },
  { id: 1, t_name: "TITLE" },
  { id: 2, t_name: "GENRE" },
];
const list_title_view = list_title_names.map((title) => {
  return <th key={title.id}>{title.t_name}</th>;
});

const BookList = () => {
  //   const { bookList } = useContext(BookContext);

  return (
    <table className="book_list">
      <thead>
        <tr>
          {/* {bookList.length < 1 ? (
            <th colSpan="3">등록된 도서가 없습니다</th>
          ) : (
            list_title_view
          )} */}
          {list_title_view}
        </tr>
      </thead>
      <tbody>
        <BookItem />
      </tbody>
    </table>
  );
};

export default BookList;
