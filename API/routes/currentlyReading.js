const express = require("express");
const fs = require("fs");
const router = express.Router();
let CurrentlyReading = require("../models/currentlyReading.model");

//get all data
const getCurrentlyReading = (req, res) => {
  CurrentlyReading.find()
    .then((book) => {
      res.json(book);
    })
    .catch((err) => res.status(400).json(err));
};

//add to currently reading  list
const addToCurrentlyReading = (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const author = req.body.author;
  const rating = req.body.rating;
  const image = req.body.image;
  const previewLink = req.body.previewLink;
  const description = req.body.description;
  const category = req.body.category;

  const newCurrentlyReading = new CurrentlyReading({
    id,
    title,
    author,
    rating,
    image,
    previewLink,
    description,
    category,
  });

  newCurrentlyReading
    .save()
    .then(() => res.json("sucessfully added to want to read"))
    .catch((err) => {
      res.status(400).json(err);
      console.log(err);
    });
};

//delete from currently reading list

const deleteFromCurrentlyReading = (req, res) => {
  CurrentlyReading.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json("Book has been removed from currently reading list");
    })
    .catch((err) => res.status(400).json(err));
};

// get currently reading
router.get("/currentlyReading", getCurrentlyReading);

//post currently reading
router.post("/currentlyReading", addToCurrentlyReading);

//delete from currently reading
router.delete("/deleteFromCurrentlyReading/:id", deleteFromCurrentlyReading);

module.exports = router;
