const express = require("express");
const fs = require("fs");
const router = express.Router();

const getCurrentlyReading = (req, res) => {
  fs.readFile("./data/currentlyReading.json", "utf-8", (err, data) => {
    const currentlyReading = JSON.parse(data);
    if (!err) {
      res.status(200).json(currentlyReading);
    } else {
      console.log(err);
    }
  });
};

const addToCurrentlyReading = (req, res) => {
  const allData = JSON.parse(
    fs.readFileSync("./data/currentlyReading.json", "utf-8")
  );

  const bookInfo = {
    id: req.body.id,
    title: req.body.title,
    author: req.body.author,
    image: req.body.image,
    description: req.body.description,
    category: req.body.category,
  };

  allData.push(bookInfo);
  fs.writeFileSync(
    "./data/currentlyReading.json",
    JSON.stringify(allData),
    res.status(201).json({
      status: "added to currentlyReading",
      results: allData.length,
      data: allData,
    })
  );
};

// get currently reading
router.get("/currentlyReading", getCurrentlyReading);

//post currently reading
router.post("/currentlyReading", addToCurrentlyReading);

module.exports = router;
