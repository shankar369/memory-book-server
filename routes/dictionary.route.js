const express = require("express");
const router = express.Router();

const {
  getMeanings,
  postMeaning,
} = require("../controllers/dictionary.controller");

router.get("/dictionary", getMeanings);
router.post("/dictionary", postMeaning);

module.exports = router;
