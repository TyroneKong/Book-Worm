import axios from "axios";
import { useState, useEffect } from "react";
import "./CurrentlyReading.scss";
import CurrentlyReadingCard from "../components/currentlyReadingCard/currentlyReadingCard";
import RecommendedCard from "../components/recommendedCard/RecommendedCard";

const CurrentlyReading = () => {
  const [data, setData] = useState([]);
  const [displayedBook, setDisplayedBook] = useState("");
  const [description, setDescription] = useState("");
  const [recommended, setRecommended] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5150/currentlyReading").then((response) => {
      setData(response.data);
      setDisplayedBook(response.data[0].image);
    });
  }, []);

  //set the main book
  const displayBook = (item) => {
    setDisplayedBook(item.image);
    setDescription(item.description);
    recommend(item.author);
  };

  //recommend books based on author of main book
  const recommend = (author, title) => {
    axios
      .get(`http://localhost:5150/recommended/${author}`)
      .then((response) => {
        const randomBook = Math.floor(
          Math.random() * response.data.items.length
        );

        setRecommended(
          response.data.items[randomBook]?.volumeInfo.imageLinks?.thumbnail
        );
      });
  };

  const addToFinishedReading = (data) => {
    const bookInfo = {
      id: data.id,
      title: data.title,
      author: data.author,
      image: data.image,
      description: data.description
        ? data.description
        : console.log("No description found"),
      category: data.category
        ? data.category
        : console.log("no categories available"),
    };

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
      }
    });
  };

  return (
    <div>
      <div className="currentbook__main-heading">
        <h1>Here are the books on your currently reading list</h1>
      </div>
      <p>There are {data.length} books in your list</p>
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
      <RecommendedCard
        recommendedState={recommended}
        displayedBookState={displayedBook}
      />
    </div>
  );
};

export default CurrentlyReading;
