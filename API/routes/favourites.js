const express = require("express");
const fs = require("fs");
const router = express.Router();

const getFavourites = (req, res) => {
  fs.readFile("./data/favourites.json", "utf-8", (err, data) => {
    const favourites = JSON.parse(data);
    if (!err) {
      res.status(200).json(favourites);
    } else {
      console.log(err);
    }
  });
};

//add to favourites

const addToFavourites = (req, res) => {
  const allData = JSON.parse(
    fs.readFileSync("./data/favourites.json", "utf-8")
  );

  const bookInfo = {
    id: req.body.id,
    title: req.body.title,
    author: req.body.author,
    image: req.body.image,
    previewlink: req.body.previewlink,
    description: req.body.description,
    category: req.body.category,
  };

  allData.push(bookInfo);
  fs.writeFileSync(
    "./data/favourites.json",
    JSON.stringify(allData),
    res.status(201).json({ status: "added to favourites", data: allData })
  );
};

//delete from favourites
const deleteFromFavourites = (req, res) => {
  const allData = JSON.parse(
    fs.readFileSync("./data/favourites.json", "utf-8")
  );

  const foundBook = allData.filter((book) => book.id !== req.params.id);
  console.log(foundBook);

  fs.writeFileSync(
    "./data/favourites.json",
    JSON.stringify(foundBook),
    res.status(204).json({ status: "removed from favourites", data: foundBook })
  );
};

// get favourites
router.get("/favourites", getFavourites);

//post favourites
router.post("/add-to-favourites", addToFavourites);

//delete from favourites

router.delete("/delete-from-favourites/:id", deleteFromFavourites);

module.exports = router;
