//blueprint
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReadSchema = new Schema({
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
  rating: {
    type: Number,
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

const Read = mongoose.model("Read", ReadSchema);

module.exports = Read;
