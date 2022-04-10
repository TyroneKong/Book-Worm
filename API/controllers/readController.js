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
exports.addToRead = (req, res) => {
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

exports.deleteFromRead = (req, res) => {
  Read.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json("Read deleted");
    })
    .catch((err) => res.status(400).json(err));
};
