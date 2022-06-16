const Read = require("../models/Read.model");

//mongo
exports.getRead = (req, res) => {
  Read.find()
    .then((read) => {
      res.json(read);
    })
    .catch((err) => res.status(400).json(err));
};

//add to favourites

//mongo
exports.addToRead = async (req, res) => {
  try {
    const newRead = await Read.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        newRead,
      },
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteFromRead = (req, res) => {
  Read.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json("Read deleted");
    })
    .catch((err) => res.status(400).json(err));
};
