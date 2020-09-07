import axios from "axios";

export default {
  // flexible search
  search: (type, str) => axios.get(`/search/${type}/${str}`),

  // save a book to the db
  saveBook: (obj) => axios.post("/books", obj),

  // get all books from the db
  getBooks: function () {},

  // remove a book from the db
  removeBook: function () {},
};
