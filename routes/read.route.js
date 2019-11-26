const express = require("express");
const router = express.Router();
// const Comic = require("../models/comic.model");
const axios = require('axios')

const limit = 100
const offset = 1

router.get("/mustRead", (req, res, next) => {
  axios.get(`https://comicvine.gamespot.com/api/volumes?offset=${offset}&limit=${limit}&api_key=${process.env.APIKEY}&format=json`)
    .then(responseApi => {
      res.render("read", { Comic: responseApi.data.results })
    })
    .catch(err => console.log("error", err))
})




module.exports = router


