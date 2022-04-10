const express = require("express");
const router = express.Router();
const favourite_controller = require("../controllers/favouritesController");

// get favourites
router.get("/favourites", favourite_controller.getFavourites);

//post favourites
router.post("/add-to-favourites", favourite_controller.addToFavourites);

//delete from favourites

router.delete(
  "/delete-from-favourites/:id",
  favourite_controller.deleteFromFavourites
);

module.exports = router;
