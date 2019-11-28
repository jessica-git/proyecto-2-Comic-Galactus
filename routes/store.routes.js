const express = require("express");
const router = express.Router();
const Shop = require("../models/shops.model");
const axios = require("axios");

router.get("/", (req, res, next) => {
  res.render("store");
});

router.get("/api", (req, res, next) => {
  Shop.find()
    .then(idShop => {
      console.log(idShop);
      res.status(200).json({ shop: idShop });
    })
    .catch(err => next(err));
});

router.get("/api/allshops", (req, res, next) => {
  Shop.find({}, (error, idShop) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json({
        shop: idShop
      });
    }
  });
});

router.get("/details/:id", (req, res) => {
  const shopId = req.params.id;
  Shop.findById(shopId)
    .then(shop =>
      res.render("/store", {
        shop: shop
      })
    )
    .catch(err => console.log("Error consultando la BBDD: ", err));
});

module.exports = router;
