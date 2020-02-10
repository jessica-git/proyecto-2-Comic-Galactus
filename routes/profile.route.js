const express = require("express");
const router = express.Router();
const uploadCloud = require("../configs/cloudinary.config")
const User = require("../models/user.model")
const ensureLogin = require("connect-ensure-login");

router.get("/", ensureLogin.ensureLoggedIn('/auth/login'), (req, res) => res.render("profile", { user: req.user }));

router.get('/', (req, res) => {
  User.findById(req.user._id)
    .then(theUser => res.render('profile', { user: theUser  }))
  .catch(err => console.log("error!!", err));
});

router.post("/profile", uploadCloud.single("imgPath"), (req, res, next) => res.render("profile"))



module.exports = router