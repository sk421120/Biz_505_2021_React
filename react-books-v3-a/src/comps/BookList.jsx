import React, { useContext } from "react";
import BookContext from "../context/BookContext";

const BookList = () => {
  const { bookList } = useContext(BookContext);
  const bookBody = bookList.map((book, index) => {
    return (
      <tr key={book.b_id}>
        <td>{index + 1}</td>
        <td>{book.b_name}</td>
        <td>{book.b_genre}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>GENRE</th>
        </tr>
      </thead>
      <tbody>{bookBody}</tbody>
    </table>
  );
};

export default BookList;
