const router = require("express").Router();
const {
  getSavedBooks,
  saveNewBook,
  deleteBook,
} = require("../controllers/book-controller");

router.get("/books", getSavedBooks);
router.post("/books", saveNewBook);
router.delete("/books/:id", deleteBook);

module.exports = router;
