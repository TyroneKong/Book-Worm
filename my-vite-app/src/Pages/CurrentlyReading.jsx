import axios from "axios";
import { useState, useEffect } from "react";
import "./CurrentlyReading.scss";
import CurrentlyReadingCard from "../components/currentlyReadingCard/CurrentlyReadingCard";
import Bestseller from "../components/bestseller/Bestseller";
import Button from "@mui/material/Button";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import EditIcon from "@mui/icons-material/Edit";
import { useAuth0 } from "@auth0/auth0-react";
import Avatar from "@mui/material/Avatar";

const CurrentlyReading = () => {
  const { user, isAuthenticated } = useAuth0();

  const [data, setData] = useState([]);
  const [displayedBook, setDisplayedBook] = useState("");
  const [bestseller, setBestseller] = useState([]);
  const [users, setUsers] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    getAllBooks();
    getAllComments();
  }, []);

  //get all books data
  const getAllBooks = () => {
    axios.get("http://localhost:5150/currentlyReading").then((response) => {
      setData(response.data);
      setDisplayedBook(response.data[0]?.image);
    });
  };

  //get newyorktimes data
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
  //get all comments
  const getAllComments = () => {
    axios.get("http://localhost:5150/getUsers").then((response) => {
      setUsers(response.data);
    });
  };

  //create a new comment
  const createComment = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5150/createUser", {
        username: user.name,
        comment: comment,
      })
      .then((response) => {
        getAllComments();
      });
  };

  //remove a comment

  const deleteComment = (id) => {
    axios
      .delete(`http://localhost:5150/deleteComment/${id}`)
      .then((response) => {
        console.log(response.data);
        getAllComments();
      });
  };

  //update a comment

  const updatedComment = (id) => {
    const updatecomment = {
      comment: comment,
    };

    axios
      .patch(
        `http://localhost:5150/updateComment/${id}/${updatecomment.comment}`,
        {}
      )
      .then((response) => {
        alert("comment updated");
        getAllComments();
      })
      .catch((err) => {
        console.log(err);
        alert("Please fill in comment section before clicking edit");
      });
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
      <div className="comment__section">
        <Avatar
          className="comment__profilepic"
          sx={{ width: 56, height: 56 }}
          src={user.picture}
        ></Avatar>
        <form className="comment__form" onSubmit={createComment}>
          <label>
            <h3>Comment</h3>
          </label>
          <textarea
            className="comment__comment"
            type="text"
            placeholder="comment..."
            onChange={(event) => setComment(event.target.value)}
            required
          ></textarea>
          <Button className="comment__button" variant="contained" type="submit">
            Add comment
          </Button>
        </form>
      </div>
      {users.map((user, index) => {
        return (
          <div key={user._id} className="comment__card-container">
            <div className="comment__image"></div>
            <div className="comment__card">
              <div className="comment__info">
                <p className="username">{user.username}</p>
                <p>{user.comment}</p>
              </div>
            </div>
            <div>
              <EditIcon
                className="comment__edit"
                onClick={() => updatedComment(user._id)}
              >
                Edit
              </EditIcon>

              <DeleteSweepOutlinedIcon
                className="comment__delete"
                onClick={() => deleteComment(user._id)}
              >
                Delete comment
              </DeleteSweepOutlinedIcon>
            </div>
          </div>
        );
      })}

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
