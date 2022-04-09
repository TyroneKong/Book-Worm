const express = require("express");
const User = require("../models/users.model");
const router = express.Router();

const getUsers = (req, res) => {
  User.find({})
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createUser = (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  newUser.save();
  res.json(user);
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

router.get("/getUsers", getUsers);
router.post("/createUser", createUser);
router.delete("/deleteComment/:id", deleteComment);
router.patch("/updateComment/:id/:comment", updateComment);

module.exports = router;
