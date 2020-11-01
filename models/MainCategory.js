const mongoose = require("mongoose");

const MainCategory = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    hasSubCategory: {
      type: String,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("main-category", MainCategory);
