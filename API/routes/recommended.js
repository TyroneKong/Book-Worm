const express = require("express");
const fs = require("fs");
const router = express.Router();
const axios = require("axios");

const getRecommended = (req, res) => {
  axios
    .get(
      ` https://www.googleapis.com/books/v1/volumes?q=${req.params.category}+inauthor:${req.params.author}&maxResults=5&printType=books&key=AIzaSyDcgSHR3Eaii2lUdWALsbnAluJb0miBroo`
    )
    .then((response) => {
      const data = response.data;
      res.json(data);
    });
};

// get recommended
router.get("/recommended/:category/:author", getRecommended);
module.exports = router;
