const express = require("express");
const app = express();
const PORT = 5150;
const cors = require("cors");
const booksRoute = require("./routes/books");
const favouritesRoute = require("./routes/favourites");
const readRoute = require("./routes/read");
const currentReadingRoute = require("./routes/currentlyReading");
const RecommendedRoute = require("./routes/recommended");

const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log("incoming request");
  next();
});

app.use("/", booksRoute);
app.use("/", favouritesRoute);
app.use("/", readRoute);
app.use("/", currentReadingRoute);
app.use("/", RecommendedRoute);

app.get("/", (req, res) => {
  console.log("welcome to my api");
  res.send("You are using my API");
});

app.post("/", (req, res) => {
  console.log("You have posted to favourites");
  res.send("Thanks for posting to favourites");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Listening on ${PORT}`);
});
