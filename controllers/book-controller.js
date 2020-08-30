const Book = require("../models/Book.js");

module.exports = {
  getSavedBooks: (req, res) => {
    Book.find({})
      .then((books) => res.json(books))
      .catch((err) => res.send(err));
  },

  saveNewBook: (req, res) => {
    Book.create({
      title: req.body.title,
      authors: req.body.authors,
      description: req.body.description,
      image: req.body.image,
      link: req.body.link,
    })
      .then(() => res.send("Success"))
      .catch((err) => res.send(err));
  },

  deleteBook: (req, res) => {
    Book.findById(req.params.id)
      .then((foundBook) => {
        foundBook.remove();
        res.send("Success");
      })
      .catch((err) => res.send(err));
  },
};
