import React from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import Fab from "@mui/material/Fab";
import Rating from "@mui/material/Rating";
import { useAuth0 } from "@auth0/auth0-react";

const BookCard = ({ books, addToFavourites }) => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      <a href={books.volumeInfo.previewLink}>
        <img
          className="book__Image"
          src={books.volumeInfo.imageLinks.thumbnail}
        />
      </a>
      <div className="book__button-container">
        {isAuthenticated && (
          <Fab
            fontSize="small"
            className="book__button-favourite"
            onClick={() => addToFavourites(books)}
            variant="contained"
          >
            <FavoriteIcon />
          </Fab>
        )}
      </div>
      <p>
        {books.volumeInfo.hasOwnProperty("publishedDate")
          ? parseInt(books.volumeInfo.publishedDate)
          : "No date avaiable"}
      </p>
      <Rating
        value={
          books.volumeInfo.hasOwnProperty("averageRating")
            ? books.volumeInfo.averageRating
            : "No rating available"
        }
      ></Rating>
    </div>
  );
};

export default BookCard;
