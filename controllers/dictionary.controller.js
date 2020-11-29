const { errorHandler } = require("../helpers/dbErrorHandler");
const Dictionary = require("../models/Dictionary");

exports.getMeaning = (req, res) => {
  Dictionary.findOne({ word: req.params.word }).exec((err, meaning) => {
    if (err) {
      return res.status(400).json([]);
    }
    return res.json([meaning]);
  });
};

exports.getMeanings = (req, res) => {
  // const sortBy = req.query.sortBy || "word";
  // const limit = parseInt(req.query.limit) || 5;
  // const sortOrder = parseInt(req.query.sortOrder) || 1;
  // console.log("-----reached");
  Dictionary.find()
    // .sort([[sortBy, sortOrder]])
    // .limit(limit)
    .exec((err, meanings) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.json(meanings);
    });
};

exports.postMeaning = async (req, res) => {
  const found = await Dictionary.findOne({ word: req.body.word });
  if (found !== null) {
    return res.json(found);
  } else {
    let meaning = new Dictionary(req.body);

    meaning.save((err, m) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      return res.json(m);
    });
  }
};

exports.deleteMeaning = (req, res) => {
  Dictionary.findOneAndDelete({ word: req.params.word }).exec(
    (err, meaning) => {
      if (err) {
        return res.status(400).json([]);
      }
      return res.json([meaning]);
    }
  );
};
