//blueprint
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favouriteSchema = new Schema({
  id: {
    type: String,
    sparse: true,
  },
  title: {
    type: String,
  },
  author: {
    type: String,
    unique: false,
  },
  image: {
    type: String,
    unique: false,
  },
  previewLink: {
    type: String,
    unique: false,
  },
  description: {
    type: String,
    unique: false,
  },
  category: {
    type: Array,
    of: String,
    unique: false,
  },
});

const Favourite = mongoose.model("Favourite", favouriteSchema);

module.exports = Favourite;
