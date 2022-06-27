const express = require("express");
const app = express();
const PORT = 5150;
const cors = require("cors");
const booksRoute = require("./routes/books");
const favouritesRoute = require("./routes/favourites");
const readRoute = require("./routes/read");
const currentReadingRoute = require("./routes/currentlyReading");
const RecommendedRoute = require("./routes/recommended");
const UserRoute = require("./routes/users");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();
const http = require("http");

/*ATLAS_URI = mongodb+srv://tyrone:ydRdjzmP65JsnLua@cluster0.nputt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
DBPASSWORD = ydRdjzmP65JsnLua */

const uri =
  "mongodb+srv://tyrone:ydRdjzmP65JsnLua@cluster0.nputt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri).then(() => {
  console.log("Mongo db connection successful");
});

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/", (req, res, next) => {
  console.log("incoming request");
  next();
});

app.use("/", booksRoute);
app.use("/", favouritesRoute);
app.use("/", readRoute);
app.use("/", currentReadingRoute);
app.use("/", RecommendedRoute);
app.use("/", UserRoute);

app.get("/", (req, res) => {
  console.log("welcome to my api");
  res.send("You are using my API");
});

app.post("/", (req, res) => {
  console.log("You have posted");
  res.send("Thanks for posting");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Listening on ${PORT}`);
});
