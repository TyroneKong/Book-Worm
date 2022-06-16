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
exports.addToFavourites = async (req, res) => {
  try {
    const newFavourite = await Favourite.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        newFavourite,
      },
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteFromFavourites = (req, res) => {
  Favourite.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json("Favourite deleted");
    })
    .catch((err) => res.status(400).json(err));
};
