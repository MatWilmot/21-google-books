import axios from "axios";

export default {
  // Search by title
  search: function (type, str) {
    return axios.get(`/search/${type}/${str}`);
  },

  // search by author
  searchAuthor: function (str) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:${str}&key=${process.env.GOOGLE_API}`
    );
  },
};
