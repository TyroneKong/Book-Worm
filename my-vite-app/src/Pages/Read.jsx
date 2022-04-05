import { useState, useEffect } from "react";
import axios from "axios";
import "./Read.scss";
import ReadCard from "../components/readcard/ReadCard";

// import FavouriteCard from "../components/favouritesCard/FavouritesCard";

const Reads = () => {
  const [allData, setData] = useState([]);
  const [numberofReads, setNumberofReads] = useState("");
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
    console.log("test");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:5150/read").then((response) => {
      setData(response.data);
      setNumberofReads(response.data.length);
    });
  };

  // add to currently reading list
  const addToReads = (data) => {
    console.log(data);
    const bookInfo = {
      id: data.id,
      title: data.title,
      author: data.author,
      image: data.image,
      previewlink: data.previewLink,
      description: data.description
        ? data.description
        : console.log("No description found"),
      category: data.category
        ? data.category
        : console.log("no categories available"),
    };

    axios.get("http://localhost:5150/read").then((response) => {
      const allIDs = response.data.map((book) => book.id);

      //checks to see if book already exists in currently reading
      if (allIDs.includes(data.id)) {
        alert("You have already added this book in your list");
      } else {
        axios
          .post(`http://localhost:5150/read`, bookInfo)
          .then((response) => {})
          .catch((err) => {
            console.log(err);
          });
        alert("You have now added this book to reads list");
      }
    });
  };

  // delete from favourites
  const removeFromReads = (data) => {
    const ok = confirm("Are you sure you want to delete from reads?");
    if (!ok) {
      return null;
    } else {
      axios
        .delete(`http://localhost:5150/delete-from-read/${data._id}`)
        .then((response) => {
          fetchData();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <div className="readbook__title">
        <h1>Here is a list of all books you have read</h1>
        <h2>You have {allData.length} books in your list</h2>
      </div>

      {allData.map((item, index) => {
        return (
          <div className="readBooks" key={index}>
            <ReadCard
              removeFromReads={() => removeFromReads(item)}
              item={item}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Reads;
