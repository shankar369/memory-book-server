const express = require("express");
const router = express.Router();

const {
  getSnippets,
  postSnippet,
  updateSnippet,
} = require("../controllers/snippet.controller");

router.get("/snippets/:parentId", getSnippets);
router.post("/snippets", postSnippet);
router.put("/snippets/:snippetId", updateSnippet);

module.exports = router;
