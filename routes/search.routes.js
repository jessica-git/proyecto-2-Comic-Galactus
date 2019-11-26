const express = require("express");
const router = express.Router();
const Character = require("../models/character.model");

const axios = require("axios");

router.get("/search", (req, res, next) => {
  // res.render("search");

  router.post("/search", (req, res, next) => {
    const character = req.body;
    console.log(character, "ole oleeeee");
  });

  axios
    .get(
      "https://comicvine.gamespot.com/api/search/?query=character&api_key=9a20aa0fa095f2c84ac1081729cd51a18c4daa0d&format=json"
    )
    .then(responseFromApi => {
      console.log(
        `este es el CONSOLEEEEEEEEEE ${responseFromApi.data.results}`
      );
      res.render("search", { character: responseFromApi.data.results });
    })
    .catch(err => console.log(err));
});

module.exports = router;
