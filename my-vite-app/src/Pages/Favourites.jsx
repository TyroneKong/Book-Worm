import { useState, useEffect } from "react";
import axios from "axios";
import "./Favourites.scss";

import FavouriteCard from "../components/favouritesCard/FavouritesCard";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Favourites = () => {
  const [allData, setData] = useState([]);
  const [numberofFavourites, setNumberofFavourites] = useState("");
  const [alertAlreadyadded, setAlertAlreadyAdded] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:5150/favourites").then((response) => {
      setData(response.data);

      setNumberofFavourites(response.data.length);
    });
  };

  // add to currently reading list
  const addToCurrentlyReading = (data) => {
    const bookInfo = {
      id: data.id,
      title: data.title,
      author: data.author,
      rating: data.rating,
      image: data.image,
      previewlink: data.previewLink,
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
        setAlertAlreadyAdded(true);
      } else {
        axios
          .post(`http://localhost:5150/currentlyReading`, bookInfo)
          .then((response) => {})
          .catch((err) => {
            console.log(err);
          });
        setAlertSuccess(true);
      }
    });
  };

  // delete from favourites
  const removeFromFavourites = (data) => {
    const ok = confirm("Are you sure you want to delete from favourites?");
    if (!ok) {
      return null;
    } else {
      axios
        .delete(`http://localhost:5150/delete-from-favourites/${data._id}`)
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
      {window.scrollTo(0, 0)}
      {alertAlreadyadded ? (
        <Alert onClose={() => setAlertAlreadyAdded(false)} severity="error">
          <AlertTitle>Error</AlertTitle>
          Already added to currently reads
        </Alert>
      ) : null}
      {window.scrollTo(0, 0)}
      {alertSuccess ? (
        <Alert onClose={() => setAlertSuccess(false)} severity="success">
          <AlertTitle>Success</AlertTitle>
          Successfully added to currently reads
        </Alert>
      ) : null}
      <div className="favouritebook__title">
        <h1>Here is a list of your favourite books</h1>
        <h2>
          You have {allData.length} {allData.length > 1 ? "books" : "book"} in
          your list
        </h2>
      </div>

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
