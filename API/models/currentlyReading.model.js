//blueprint
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const currentlyReadingSchema = new Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
    unique: false,
  },
  author: {
    type: String,
    unique: false,
  },
  rating: {
    type: Number,
  },
  image: {
    type: String,
  },
  previewLink: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: Array,
    of: String,
    unique: false,
  },
});

const currentlyReading = mongoose.model(
  "CurrentlyReading",
  currentlyReadingSchema
);

module.exports = currentlyReading;
