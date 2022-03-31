const { response } = require("express");
const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/read", (req, res) => {
  fs.readFile("./data/read.json", "utf-8", (err, data) => {
    const readData = JSON.parse(data);
    res.json(readData);
  });
});

router.post("/add-to-read", (req, res) => {
  const readData = JSON.parse(fs.readFileSync("./data/read.json", "utf-8"));

  const bookInfo = {
    id: req.body.id,
    title: req.body.title,
    author: req.body.author,
    image: req.body.image,
    description: req.body.description,
    category: req.body.category,
  };
  readData.push(bookInfo);
  fs.writeFileSync(
    "./data/read.json",
    JSON.stringify(readData),
    res.json({ status: "Book added to read list", data: readData })
  );
});

module.exports = router;
