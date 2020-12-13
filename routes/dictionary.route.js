const express = require("express");
const router = express.Router();

const {
  getMeaning,
  getMeanings,
  postMeaning,
  deleteMeaning,
} = require("../controllers/dictionary.controller");

router.get("/dictionary/:word", getMeaning);
router.get("/dictionary", getMeanings);
router.post("/dictionary", postMeaning);
router.delete("/dictionary/:word", deleteMeaning);

module.exports = router;
