const express = require("express");
const router = express.Router();
const Comic = require("../models/comic.model");

//renderizamos newComic
router.get("/newComic", (req, res) => res.render("comics/newComic"));
//enviamos la respuesta del formulario a la base de datos
router.post("/newComic", (req, res) => {
  console.log("ES POOOOST");
  const {
    name,
    description,
    issuesNumber,
    resourceTypes,
    volume,
    publisherName
  } = req.body;
  Comic.create({
    name,
    description,
    issuesNumber,
    resourceTypes,
    volume,
    publisherName
  })
    .then(newComic => console.log(newComic))
    .catch(x => "error:" + err);
});

//lista de comics
router.get("/comicsList", (req, res) => {
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
router.get("/edit/:id", (req, res) => {
  Comic.findById(req.params.id)
    .then(theComic => res.render("comics/updateComic", { theComic: theComic }))
    .catch(err => console.log("error!!", err));
});

// ruta para borrar comics, simepre hay que ponerlo antes del /:id para evitar conflictos, está relacionado con un boton en comic-details
router.get("/delete", (req, res) => {
  Comic.findByIdAndDelete(req.query.id)
    .then(() => res.redirect("/newComic/comicsList"))
    .catch(err => console.log(err));
});

// Editar libro: enviar formulario
router.post("/edit/:id", (req, res) => {
  const {
    name,
    description,
    issuesNumber,
    resourceTypes,
    volume,
    publisherName
  } = req.body;
  const comicId = req.params.id;

  Comic.findByIdAndUpdate(comicId, {
    name,
    description,
    issuesNumber,
    resourceTypes,
    volume,
    publisherName
  })
    .then(res.redirect("/newComic/comicsList"))
    .catch(err => console.log("error!!", err));
});

module.exports = router;
