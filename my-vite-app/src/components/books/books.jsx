import axios from "axios";
import React, { useState } from "react";
import BookList from "../bookList/BookList";
import "./books.scss";
import Search from "../search/Search";
import bookWorm from "../../assets/images/bookworm3.jpeg";

const Book = () => {
  //setting state
  const [allData, setAllData] = useState([]);
  const [id, setID] = useState("");
  const [sort, setSort] = useState("");

  // function to search using user input
  const handleSubmit = (e) => {
    e.preventDefault();
    const userInput = e.target.input.value;
    fetchData(userInput);
    document.getElementById("form").reset();
  };

  // fetch book data
  const fetchData = (input) => {
    axios
      .get(`http://localhost:5150/books/${input}`)
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          const foundBook = response.data.items.filter(
            (book) =>
              book.volumeInfo.averageRating &&
              book.volumeInfo.imageLinks &&
              book.volumeInfo.description &&
              book.volumeInfo.publishedDate
          );
          const foundID = response.data.items.map((book) => book.id);

          setAllData(foundBook);
          setID(foundID);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // add to favourite list
  const addToFavourites = (data) => {
    const bookInfo = {
      id: data.id,
      title: data.volumeInfo.title,
      author: data.volumeInfo.authors[0],
      image: data.volumeInfo.imageLinks.thumbnail,
      previewlink: data.volumeInfo.previewLink
        ? data.volumeInfo.previewLink
        : console.log("no previewlink found"),
      description: data.volumeInfo.description
        ? data.volumeInfo.description
        : console.log("No description found"),
      category: data.volumeInfo.categories
        ? data.volumeInfo.categories
        : console.log("no categories available"),
    };
    console.log(data);
    axios.get("http://localhost:5150/favourites").then((response) => {
      const allFavourites = response.data;
      const allIDs = allFavourites.map((book) => book.id);
      // check if book is already added to favourites
      if (allIDs.includes(data.id)) {
        alert("Book already added to favourites");
      } else {
        alert("Book has now been added to favourites");
        axios
          .post(`http://localhost:5150/add-to-favourites`, bookInfo)
          .then((response) => {
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  //add to read list
  const addToRead = (data) => {
    const bookInfo = {
      id: data.id,
      title: data.volumeInfo.title,
      author: data.volumInfo.authors.join(", "),
      image: data.volumeInfo.imageLinks.thumbnail,
      previewlink: data.volumeInfo.previewLink
        ? data.volumeInfo.previewLink
        : console.log("no previewlink found"),
      description: data.volumeInfo.description
        ? data.volumeInfo.description
        : console.log("No description found"),
      category: data.volumeInfo.categories
        ? data.volumeInfo.categories
        : console.log("no categories available"),
    };
    axios
      .post(`http://localhost:5150/add-to-read`, bookInfo)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //sort books
  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const sorted = allData.sort((a, b) => {
    if (sort === "Newest") {
      return (
        parseInt(b.volumeInfo.publishedDate) -
        parseInt(a.volumeInfo.publishedDate)
      );
    } else if (sort === "Oldest") {
      return (
        parseInt(a.volumeInfo.publishedDate) -
        parseInt(b.volumeInfo.publishedDate)
      );
    } else if (sort === "Highest Rating") {
      return (
        parseInt(b.volumeInfo.averageRating) -
        parseInt(a.volumeInfo.averageRating)
      );
    } else if (sort === "Lowest Rating") {
      return (
        parseInt(a.volumeInfo.averageRating) -
        parseInt(b.volumeInfo.averageRating)
      );
    }
  });

  return (
    <div className="book">
      <div className="book__title-container">
        <h1 className="Main__title">Book Worm</h1>
      </div>
      <Search handleSort={() => handleSort} handleSubmit={() => handleSubmit} />
      <div className="book__container">
        <BookList
          allBooks={sorted}
          addToFavourites={addToFavourites}
          addToRead={addToRead}
        />
      </div>
    </div>
  );
};

export default Book;
