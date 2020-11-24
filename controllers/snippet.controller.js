const { errorHandler } = require("../helpers/dbErrorHandler");
const Snippet = require("../models/Snippet");

exports.getSnippets = (req, res) => {
  const parentId = req.params.parentId;
  Snippet.find({ parentId: parentId }).exec((err, snippets) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    return res.json(snippets);
  });
};

exports.postSnippet = (req, res) => {
  const { name, parentId } = req.body;

  Snippet.find({ parentId: parentId, name: name }).exec((err, snippet) => {
    if (err) {
      return res.status(400).json({ error: errorHandler(err) });
    }
    if (snippet.length) {
      return res.status(400).json({
        error: `same snippet exists with name ${name}, please use different name.`,
      });
    } else {
      let snippet = new Snippet(req.body);
      snippet.save((err, sni) => {
        if (err) {
          return res.status(400).json({ error: err });
        }
        return res.json(sni);
      });
    }
  });
};

exports.updateSnippet = (req, res) => {
  const snippetId = req.params.snippetId;
  console.log(req.body, "mongoo");
  Snippet.findByIdAndUpdate(
    snippetId,
    req.body,
    { new: true },
    (err, updatedSnippet) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.json(updatedSnippet);
    }
  );
};

exports.deleteSnippet = (req, res) => {
  const snippetId = req.params.snippetId;
  console.log(req.body, "mongoo");
  Snippet.findByIdAndDelete(snippetId, (err, updatedSnippet) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    return res.json(updatedSnippet);
  });
};
