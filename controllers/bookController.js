const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.Book.find(req.query)
      .sort({ date: -1 })
      .then((data) => res.status(200).json(data))
      .catch((error) => res.status(400).json(error));
  },
  create: (req, res) => {
    db.Book.create(req.body)
      .then((data) => res.status(200).json(data))
      .catch((error) => res.status(400).json(error));
  },
  remove: (req, res) => {
    db.Book.findById({ _id: req.params.id })
      .then((data) => data.remove())
      .then(() => res.status(200).json("Success"))
      .catch((error) => res.status(400).json(error));
  },
};
