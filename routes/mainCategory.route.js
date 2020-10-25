const express = require("express");
const router = express.Router();

const {
  getMainCategories,
  postMainCategory,
} = require("../controllers/mainCategory.controller");

router.get("/main-category", getMainCategories);
router.post("/main-category", postMainCategory);

module.exports = router;
