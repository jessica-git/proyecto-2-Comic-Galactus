const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/user.model");
const uploadCloud = require("../configs/cloudinary.config")

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

//LOGIN
router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));

//SIGNUP
router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", uploadCloud.single("imgPath"), (req, res, next) => {
  const { username, email, password } = req.body;
  const imgPath = req.file.url;
  const imgName = req.file.originalname;

  if (username === "" || password === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashPass,
      imgPath,
      imgName,
    });

    newUser.save()
      .then(() => {
        res.redirect("/");
      })
      .catch(err => {
        res.render("auth/signup", { message: "Something went wrong" });
        console.log(err)
      })
  });
});


//LOGOUT
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
