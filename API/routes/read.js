const express = require("express");
const fs = require("fs");
const router = express.Router();
let Read = require("../models/Read.model");

//mongo
const getRead = (req, res) => {
  Read.find()
    .then((read) => {
      res.json(read);
    })
    .catch((err) => res.status(400).json(err));
};

//add to favourites

//mongo
const addToRead = (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const author = req.body.author;
  const rating = req.body.rating;
  const image = req.body.image;
  const previewLink = req.body.previewLink;
  const description = req.body.description;
  const category = req.body.category;

  const newRead = new Read({
    id,
    title,
    author,
    rating,
    image,
    previewLink,
    description,
    category,
  });

  newRead
    .save()
    .then(() => res.json("Read added successfully"))
    .catch((err) => res.status(400).json(err));
};

const deleteFromRead = (req, res) => {
  Read.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json("Read deleted");
    })
    .catch((err) => res.status(400).json(err));
};

// get favourites
router.get("/read", getRead);

//post favourites
router.post("/add-to-read", addToRead);

//delete from favourites

router.delete("/delete-from-read/:id", deleteFromRead);

module.exports = router;

module.exports = router;
