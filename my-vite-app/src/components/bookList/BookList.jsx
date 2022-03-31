import BookCard from "../bookcard/BookCard";

const BookList = ({ allBooks, addToFavourites }) => {
  return allBooks.map((item) => {
    return (
      <div key={item.id} className="book__Image-container">
        <BookCard addToFavourites={addToFavourites} books={item} />
      </div>
    );
  });
};

export default BookList;
