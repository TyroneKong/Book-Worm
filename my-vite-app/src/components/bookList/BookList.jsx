import BookCard from "../bookcard/BookCard";
import { v4 as uuidv4 } from "uuid";

const BookList = ({ allBooks, addToFavourites }) => {
  return allBooks.map((item, index) => {
    return (
      <div key={uuidv4()} className="book__Image-container">
        <BookCard addToFavourites={addToFavourites} books={item} />
      </div>
    );
  });
};

export default BookList;
