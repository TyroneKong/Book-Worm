const express = require("express");
const User = require("../models/users.model");
const router = express.Router();

const getComments = (req, res) => {
  User.find({})
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createComment = (req, res) => {
  const comment = req.body;
  const newUser = new User(comment);
  newUser.save();
  res.json(comment);
};

const deleteComment = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((response) => {
      res.json("comment has been deleted");
    })
    .catch((err) => {
      res.json(err);
    });
};

const updateComment = (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.params.id },
    { comment: req.params.comment },

    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
        console.log(req);
      }
    }
  );
};

router.get("/getComments", getComments);
router.post("/createComment", createComment);
router.delete("/deleteComment/:id", deleteComment);
router.patch("/updateComment/:id/:comment", updateComment);

module.exports = router;
