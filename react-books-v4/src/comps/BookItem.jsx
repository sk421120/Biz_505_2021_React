import { useBookContext } from "../context/AppContextProvider";

const BookItem = () => {
  const { bookList } = useBookContext();
  return bookList.map((book, index) => {
    return (
      <tr key={book.b_id}>
        <td>{index + 1}</td>
        <td>{book.b_name}</td>
        <td>{book.b_genre}</td>
      </tr>
    );
  });
};

export default BookItem;
