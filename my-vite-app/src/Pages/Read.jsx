import axios from "axios";
import { React, useState, useEffect } from "react";

const Read = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/mylibrary/bookshelves?key=AIzaSyBEbgf_gu4T-DfWB3xhlPdYvivR6dAc7YQ"
      )
      .then((response) => {
        console.log(response);
      }, []);
  });

  return <h1>Read</h1>;
};

export default Read;
