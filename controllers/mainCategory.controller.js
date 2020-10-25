const { errorHandler } = require("../helpers/dbErrorHandler");
const MainCategory = require("../models/MainCategory");

exports.getMainCategories = (req, res) => {
  MainCategory.find().exec((err, mainCategories) => {
    if (err) {
      return res.status(400).json({ error: errorHandler(err) });
    }
    return res.json(mainCategories);
  });
};

exports.postMainCategory = (req, res) => {
  let mainCategory = new MainCategory(req.body);
  mainCategory.save((err, mc) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    return res.json(mc);
  });
};
