import { useState, useEffect } from "react";
import axios from "axios";
import "./Favourites.scss";

import FavouriteCard from "../components/favouritesCard/FavouritesCard";

const Favourites = () => {
  const [allData, setData] = useState([]);
  const [numberofFavourites, setNumberofFavourites] = useState("");
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
    axios.get("http://localhost:5150/favourites").then((response) => {
      setData(response.data);
      setNumberofFavourites(response.data.length);
    });
  };

  const addToCurrentlyReading = (data) => {
    console.log(data);
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

    axios.get("http://localhost:5150/currentlyReading").then((response) => {
      const allIDs = response.data.map((book) => book.id);

      //checks to see if book already exists in currently reading
      if (allIDs.includes(data.id)) {
        alert("You have already added this book in your list");
      } else {
        alert("You have now added this book to currently reading");
        axios
          .post(`http://localhost:5150/currentlyReading`, bookInfo)
          .then((response) => {})
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const removeFromFavourites = (data) => {
    const ok = confirm("Are you sure you want to delete from favourites?");
    if (!ok) {
      return null;
    } else {
      axios
        .delete(`http://localhost:5150/delete-from-favourites/${data.id}`)
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
      <div className="favouritebook__title">
        <h1>Here is a list of your favourite books</h1>
      </div>
      <p>You have {allData.length} books in your list</p>
      <p>Title</p>

      {allData.map((item, index) => {
        return (
          <div className="favouritebook" key={index}>
            <FavouriteCard
              addToCurrentlyReading={() => addToCurrentlyReading(item)}
              removeFromFavourites={() => removeFromFavourites(item)}
              showModal={() => showModal()}
              item={item}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Favourites;
