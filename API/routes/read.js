const express = require("express");
const router = express.Router();
const read_controller = require("../controllers/readController");

// get favourites
router.get("/read", read_controller.getRead);

//post favourites
router.post("/add-to-read", read_controller.addToRead);

//delete from favourites

router.delete("/delete-from-read/:id", read_controller.deleteFromRead);

module.exports = router;
