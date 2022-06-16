const CurrentlyReading = require("../models/currentlyReading.model");

//get all data
exports.getCurrentlyReading = (req, res) => {
  CurrentlyReading.find()
    .then((book) => {
      res.json(book);
    })
    .catch((err) => res.status(400).json(err));
};

//add to currently reading  list
exports.addToCurrentlyReading = async (req, res) => {
  try {
    const newCurrentlyReading = await CurrentlyReading.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        newCurrentlyReading,
      },
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
//delete from currently reading list

exports.deleteFromCurrentlyReading = (req, res) => {
  CurrentlyReading.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json("Book has been removed from currently reading list");
    })
    .catch((err) => res.status(400).json(err));
};
