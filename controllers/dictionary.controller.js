const { errorHandler } = require("../helpers/dbErrorHandler");
const Dictionary = require("../models/Dictionary");

exports.getMeanings = (req, res) => {
  Dictionary.find().exec((err, meanings) => {
    if (err) {
      return res.status(400).json({ error: errorHandler(err) });
    }
    return res.json(meanings);
  });
};

exports.postMeaning = (req, res) => {
  let meaning = new Dictionary(req.body);
  meaning.save((err, m) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    return res.json(m);
  });
};
