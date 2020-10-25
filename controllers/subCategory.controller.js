const { errorHandler } = require("../helpers/dbErrorHandler");
const SubCategory = require("../models/SubCategory");

// exports.getSubCategory = (req,res) => {
//   const Id = req.params.Id;
//   SubCategory.findById(Id).exec((err,subCategory))
// }

exports.getSubCategories = (req, res) => {
  const parentId = req.params.parentId;
  SubCategory.find({ parentId: parentId }).exec((err, subCategories) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    return res.json(subCategories);
  });
};

exports.postSubCategory = (req, res) => {
  console.log(req.body, "*************");
  const { parentId, name } = req.body;
  SubCategory.find({ parentId: parentId, name: name }).exec(
    (err, subCategory) => {
      if (err) {
        return res.status(400).json({ error: errorHandler(err) });
      }
      if (subCategory.length) {
        return res.status(400).json({
          error: `same sub category exists with name ${name}, please use different name.`,
        });
      } else {
        console.log("***********");
        let subCategory = new SubCategory(req.body);
        subCategory.save((err, sc) => {
          if (err) {
            return res.status(400).json({ error: err });
          }
          return res.json(sc);
        });
      }
    }
  );
};
