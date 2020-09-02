const router = require("express").Router();
require("dotenv").config();
const axios = require("axios");

router.get("/search/:type/:title", (req, res) => {
  return axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=in${req.params.type}:${req.params.title}&key=AIzaSyCAA00REQ9DYFrgZv3W98Il6C7inIwAXbg`
    )
    .then((response) => res.json(response.data))
    .catch((err) => res.send(err));
});

module.exports = router;
