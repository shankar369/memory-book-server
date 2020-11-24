const mongoose = require("mongoose");

const Dictionary = new mongoose.Schema({}, { timestamps: true, strict: false });

module.exports = mongoose.model("dictionary", Dictionary);
