const express = require("express");
const router = express.Router();
// const Comic = require("../models/comic.model");
const axios = require('axios')
// const arrayApi = responseApi.data.results

const limit = 10                            //getRandomInt(6, 10) 
const offset = 1

router.get("/mustRead", (req, res, next) => {
  
  axios.get(`https://comicvine.gamespot.com/api/issues?offset=${offset}&limit=${limit}&api_key=${process.env.APIKEYCOMIC}&format=json`)
    .then(responseApi => {
      res.render("read", { Comic: responseApi.data.results })
    })
    .catch(err => console.log("error", err))
})

//funcion para sacar issues random
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }


//funcion para filtrar solo los que tengan info
// arrayApi.forEach(element => {
//   if (results.deck != null){
//      return 
//   }
  
// });


module.exports = router


