const mongoose = require("mongoose");

const Snippet = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
    },
    example: {
      type: String,
    },
    parentId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("snippet", Snippet);
