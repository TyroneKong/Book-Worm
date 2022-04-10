const Favourite = require("../models/favourites.model");

//mongo
exports.getFavourites = (req, res) => {
  Favourite.find()
    .then((favourite) => {
      res.json(favourite);
    })
    .catch((err) => res.status(400).json(err));
};

//add to favourites

//mongo
exports.addToFavourites = (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const author = req.body.author;
  const rating = req.body.rating;
  const image = req.body.image;
  const previewLink = req.body.previewlink;
  const description = req.body.description;
  const category = req.body.category;

  const newFavourite = new Favourite({
    id,
    title,
    author,
    rating,
    image,
    previewLink,
    description,
    category,
  });

  newFavourite
    .save()
    .then(() => res.json("favourite added successfully"))
    .catch((err) => console.log(err));
};

exports.deleteFromFavourites = (req, res) => {
  Favourite.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json("Favourite deleted");
    })
    .catch((err) => res.status(400).json(err));
};
