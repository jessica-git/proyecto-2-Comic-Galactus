const express = require("express");
const router = express.Router();
const axios = require('axios')


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
  
// const Comic = responseApi.data.results 

//funcion para filtrar solo los que tengan info
// Comic.forEach(elm => {
//   if (elm.name != null && elm.deck != null && elm.image){
//      return 
//   }
  
// });



module.exports = router


