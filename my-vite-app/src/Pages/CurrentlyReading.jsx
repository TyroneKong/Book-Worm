import axios from "axios";
import { useState, useEffect } from "react";
import "./CurrentlyReading.scss";
import CurrentlyReadingCard from "../components/currentlyReadingCard/CurrentlyReadingCard";
import Bestseller from "../components/bestseller/Bestseller";

const CurrentlyReading = () => {
  const [data, setData] = useState([]);
  const [displayedBook, setDisplayedBook] = useState("");

  const [bestseller, setBestseller] = useState([]);

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = () => {
    axios.get("http://localhost:5150/currentlyReading").then((response) => {
      setData(response.data);
      setDisplayedBook(response.data[0]?.image);
    });
  };

  const getNewYorkTimes = () => {
    axios.get("http://localhost:5150/newYorkTimesBooks").then((response) => {
      const book = response.data.results.books;

      const bookImages = book.map((book) => book.book_image);
      const randomImage =
        bookImages[Math.floor(Math.random() * bookImages.length)];
      setBestseller(randomImage);
    });
  };

  // add to finished reading list
  const addToFinishedReading = (data) => {
    console.log(data);
    const bookInfo = {
      id: data.id,
      title: data.title,
      author: data.author,
      rating: data.rating,
      image: data.image,
      previewLink: data.previewLink,
      description: data.description
        ? data.description
        : console.log("No description found"),
      category: data.category
        ? data.category
        : console.log("no categories available"),
    };
    console.log(bookInfo);
    axios.get("http://localhost:5150/read").then((response) => {
      const allIDs = response.data.map((book) => book.id);
      if (allIDs.includes(data.id)) {
        alert("Book has already been added to the list");
      } else {
        axios
          .post("http://localhost:5150/add-to-read", bookInfo)
          .then((response) => {
            console.log(response.data);
          });
        deletefromCurrentlyReading(data);
      }
    });
  };

  // delete from currently reading list
  const deletefromCurrentlyReading = (data) => {
    const ok = confirm(
      "I hope you enjoyed the book, this has now been added to you books read list"
    );
    if (!ok) {
      return null;
    } else {
      axios
        .delete(`http://localhost:5150/deleteFromCurrentlyReading/${data._id}`)
        .then((response) => {
          getAllBooks();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <div className="currentbook__main-heading">
        <h1>Here are the books on your currently reading list</h1>
        <h2>
          You have {data.length} {data.length > 1 ? "books" : "book"} in your
          list
        </h2>
      </div>

      <div className="Main__container">
        {data.map((item, index) => {
          return (
            <div className="currentbook" key={index}>
              <CurrentlyReadingCard
                data={item}
                displayBook={() => displayBook(item)}
                addtoReading={() => addToFinishedReading(item)}
              />
            </div>
          );
        })}
      </div>
      <div className="bestseller">
        <Bestseller
          getNewYorkTimes={() => getNewYorkTimes()}
          bestseller={bestseller}
        />
      </div>
    </div>
  );
};

export default CurrentlyReading;
