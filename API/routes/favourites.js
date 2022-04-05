const express = require("express");
const fs = require("fs");
const router = express.Router();
let Favourite = require("../models/favourites.model");

//mongo
const getFavourites = (req, res) => {
  Favourite.find()
    .then((favourite) => {
      res.json(favourite);
    })
    .catch((err) => res.status(400).json(err));
};

//add to favourites

//mongo
const addToFavourites = (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const author = req.body.author;
  const image = req.body.image;
  const previewLink = req.body.previewlink;
  const description = req.body.description;
  const category = req.body.category;

  const newFavourite = new Favourite({
    id,
    title,
    author,
    image,
    previewLink,
    description,
    category,
  });

  newFavourite
    .save()
    .then(() => res.json("favourite added successfully"))
    .catch((err) => res.status(400).json(err));
};

const deleteFromFavourites = (req, res) => {
  Favourite.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json("Favourite deleted");
    })
    .catch((err) => res.status(400).json(err));
};

// get favourites
router.get("/favourites", getFavourites);

//post favourites
router.post("/add-to-favourites", addToFavourites);

//delete from favourites

router.delete("/delete-from-favourites/:id", deleteFromFavourites);

module.exports = router;
