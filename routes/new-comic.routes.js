const express = require("express");
const router = express.Router();
const Comic = require("../models/comic.model");

//renderizamos newComic
router.get("/newComic", (req, res) => res.render("comics/newComic"));
//enviamos la respuesta del formulario a la base de datos
router.post("/newComic", (req, res) => {
  const {
    name,
    description,
    issuesNumber,
    resourceTypes,
    volumen,
    publisherName
  } = req.body;
  Coasters.create({
    name,
    description,
    issuesNumber,
    resourceTypes,
    volumen,
    publisherName
  })
    .then(x => res.redirect("/newComic/comicsList"))
    .catch(x => "error:" + err);
});

//lista de comics
router.get("/comicslist", (req, res) => {
  Comic.find()
    .then(allTheComics =>
      res.render("comics/comicsList", { comicDB: allTheComics })
    )
    .catch(err => console.log("Error consultando la BBDD: ", err));
});

//Detalles de los comics

router.get("/details/:id", (req, res) => {
  const comicId = req.params.id;
  Comic.findById(comicId)
    .then(theNewComic =>
      res.render("comics/comicDetails", { comicDT: theNewComic })
    )
    .catch(err => console.log("Error consultando la BBDD: ", err));
});

// Editar comic: renderizar formulario
router.get("/edit", (req, res) => {
  const comicId = req.query.comicId;
  Comic.findById(comicId)
    .then(theNewComic => res.render("comics/updateComic", theNewComic))
    .catch(err => console.log("error!!", err));
});

// Editar libro: enviar formulario
router.post("/edit", (req, res) => {
  const {
    name,
    description,
    issuesNumber,
    resourceTypes,
    volumen,
    publisherName
  } = req.body;
  const comicId = req.query.comicId;

  Comic.findByIdAndUpdate(comicId, {
    name,
    description,
    issuesNumber,
    resourceTypes,
    volumen,
    publisherName
  })
    .then(res.redirect("comics/comicsList"))
    .catch(err => console.log("error!!", err));
});

module.exports = router;
