const express = require("express");
const router = express.Router();
const fs = require("fs");
const axios = require("axios");
const { response } = require("express");

//search by book title

router.get("/books/:title", (req, res) => {
  axios
    .get(
      ` https://www.googleapis.com/books/v1/volumes?q=${req.params.title}&maxResults=40&printType=books&key=AIzaSyDcgSHR3Eaii2lUdWALsbnAluJb0miBroo`
    )
    .then((response) => res.json(response.data));
});

//new york times books
router.get("/newYorkTimesBooks", (req, res) => {
  axios
    .get(
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Jkv14CeU5FoGYxyTsqPjGfRoaomG7TEG"
    )
    .then((response) => res.json(response.data));
});

module.exports = router;
