import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const BookCard = ({ books, addToFavourites }) => {
  return (
    <div>
      <a href={books.volumeInfo.previewLink}>
        <img
          className="book__Image"
          src={books.volumeInfo.imageLinks.thumbnail}
        />
      </a>
      <div className="book__button-container">
        <FavoriteBorderOutlinedIcon
          fontSize="small"
          className="book__button-favourite"
          onClick={() => addToFavourites(books)}
          variant="contained"
        />
      </div>
      <p>
        {books.volumeInfo.hasOwnProperty("publishedDate")
          ? parseInt(books.volumeInfo.publishedDate)
          : "No date avaiable"}
      </p>
      <p>
        rating:
        {books.volumeInfo.hasOwnProperty("averageRating")
          ? books.volumeInfo.averageRating
          : "No rating available"}
      </p>
    </div>
  );
};

export default BookCard;
