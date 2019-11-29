const express = require("express");
const router = express.Router();
const axios = require('axios')


const limit = 100
const offset = 3000

router.get("/mustRead", (req, res, next) => {

  axios.get(`https://comicvine.gamespot.com/api/volumes?offset=${offset}&limit=${limit}&api_key=${process.env.APIKEYCOMIC}&format=json`)
    .then(responseApi => {
      let Comics = responseApi.data.results.filter(volume => volume.deck && volume.name)
      res.render("read", { Comic: Comics })
    })
    .catch(err => console.log("error", err))
})

module.exports = router


