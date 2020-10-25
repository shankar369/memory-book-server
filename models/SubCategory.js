const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const SubCategory = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    hasSubCategory: {
      type: Boolean,
      required: true,
    },
    parentId: {
      type: ObjectId,
      ref: "main-category",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("sub-category", SubCategory);
