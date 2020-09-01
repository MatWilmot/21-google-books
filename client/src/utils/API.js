import axios from "axios";

export default {
  // Search by title
  searchTitle: function (str) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${str}&key=AIzaSyCAA00REQ9DYFrgZv3W98Il6C7inIwAXbg`
    );
  },

  // search by author
  searchAuthor: function (str) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:${str}&key=${process.env.GOOGLE_API}`
    );
  },
};
