const express = require("express");
const router = express.Router();

const {
  getSubCategories,
  postSubCategory,
} = require("../controllers/subCategory.controller");

router.get("/sub-categories/:parentId", getSubCategories);
// router.get("/sub-category/:Id", getSubCategories);

router.post("/sub-categories", postSubCategory);

module.exports = router;
