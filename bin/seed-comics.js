const mongoose = require("mongoose");
const Comic = require("../models/comic.model");
require("dotenv").config();
// const dbtitle = "comic";
// mongoose.connect(`mongodb://localhost/${dbtitle}`);
mongoose.connect(`${process.env.DB}`);
Comic.collection.drop(); //el drop los residuos de la base de datos

const comic = [
  {
    name: "mi pequeño falo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    issuesNumber: "1",
    resourceTypes: "issue",
    volumen: "one",
    publisherName: "La muerte Editorial",
    Image: " "
  },
  {
    name: "el gato con uggs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    issuesNumber: "3",
    resourceTypes: "issue",
    volumen: "two",
    publisherName: "Gatete Editorial"
  },
  {
    name: "el huevo sin coxis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i",
    issuesNumber: "5",
    resourceTypes: "volumen",
    volumen: "seven",
    publisherName: "escroto Editorial"
  },
  {
    name: "el zorro voyer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i",
    issuesNumber: "12",
    resourceTypes: "volumen",
    volumen: "two",
    publisherName: "Teoveo Editorial"
  },
  {
    name: "la abeja y el BDSM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i",
    issuesNumber: "5",
    resourceTypes: "issue",
    volumen: "one",
    publisherName: "Atamelox Editorial"
  },
  {
    name: "yo soy el panda pedofilo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i",
    issuesNumber: "1",
    resourceTypes: "issue",
    volumen: "cero",
    publisherName: "Estonóplis Editorial"
  },
  {
    name: "Anacleto el Paleto",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i",
    issuesNumber: "122",
    resourceTypes: "issue",
    volumen: "four",
    publisherName: "Marvelic Editorial"
  },
  {
    name: "dios y los detalles, gia para hacerte las uñas de los pies",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i",
    issuesNumber: "640",
    resourceTypes: "issue",
    volumen: "sixty",
    publisherName: "OUHYEAH Editorial"
  },
  {
    name: "Las aventuras del pequeño Jimmy el cojo-tuerto",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i",
    issuesNumber: "56",
    resourceTypes: "issue",
    volumen: "seven",
    publisherName: "Colosos Editorial"
  },
  {
    name: "Marta, la perra desdentada",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i",
    issuesNumber: "3",
    resourceTypes: "issue",
    volumen: "1",
    publisherName: "Colosos Editorial"
  }
];

Comic.create(comic, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${comic.length} comic`);
  mongoose.connection.close();
});
