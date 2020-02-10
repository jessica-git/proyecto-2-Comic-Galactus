const express = require("express");
const router = express.Router();
const Comic = require("../models/comic.model");
const uploadCloud = require("../configs/cloudinary.config")

//renderizamos newComic
router.get("/newComic", (req, res) => res.render("comics/newComic"));

//enviamos la respuesta del formulario a la base de datos
router.post("/newComic", uploadCloud.single("imgPath"), (req, res) => {
  const {
    name,
    description,
    issuesNumber,
    resourceTypes,
    volume,
    publisherName
  } = req.body;
  const imgPath = req.file.url;
  const imgName = req.file.originalname;
 
  Comic.create({
    name,
    description,
    issuesNumber,
    resourceTypes,
    volume,
    publisherName,
    imgPath,
    imgName,
  })
    .then(res.redirect("/newComic/comicsList"))
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

// Editar cómic: enviar formulario
router.post("/edit/:id", uploadCloud.single("imgFile"), (req, res) => {
  const {
    name,
    description,
    issuesNumber,
    resourceTypes,
    volume,
    publisherName
  } = req.body;

  const imgPath = req.file.url;
  const imgName = req.file.originalname;
  const comicId = req.params.id;

  Comic.findByIdAndUpdate(comicId, {
    name,
    description,
    issuesNumber,
    resourceTypes,
    volume,
    publisherName,
    imgPath,
    imgName,
  })
    .then(res.redirect("/newComic/comicsList"))
    .catch(err => console.log("error!!", err));
});

module.exports = router;
