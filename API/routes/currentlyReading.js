const express = require("express");
const router = express.Router();
const currentlyReading_controller = require("../controllers/currentlyReadingController");

// get currently reading
router.get(
  "/currentlyReading",
  currentlyReading_controller.getCurrentlyReading
);

//post currently reading
router.post(
  "/currentlyReading",
  currentlyReading_controller.addToCurrentlyReading
);

//delete from currently reading
router.delete(
  "/deleteFromCurrentlyReading/:id",
  currentlyReading_controller.deleteFromCurrentlyReading
);

module.exports = router;
