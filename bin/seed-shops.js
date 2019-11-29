const mongoose = require("mongoose");
const Shop = require("../models/shops.model");

require("dotenv").config();

// const dbtitle = "comic";
// mongoose.connect(`mongodb://localhost/${dbtitle}`);

mongoose.connect(`${process.env.DB}`);

Shop.collection.drop(); //el drop los residuos de la base de datos

const shop = [
  {
    name: "Madrid Comics",
    address: "Calle de Silva, 17, 28004 Madrid",
    schedule: "10:30–14:00, 17:00–20:30 --> Domingos: cerrados",
    phone: "915 59 11 33",
    description:
      "Madrid Cómics es una librería especializada en cómics, fundada en 1982, en Madrid",
    rate: "4/5",
    cords: {
      coordinates: [40.421375, -3.706318]
    }
  },
  {
    name: "Elektra Cómic",
    address: "Calle de San Bernardo, 20, 28015 Madrid",
    schedule: "10:30–20:30 --> Domingos: cerrados",
    phone: "915 21 39 75",
    description:
      "Tienda de cómics nacionales y extranjeros de todos los géneros, con ropa y artículos de merchandising",
    rate: "5/5",
    cords: { coordinates: [40.42263, -3.707525] }
  },
  {
    name: "Cómics El Coleccionista",
    address: " Calle de Tribulete, 7, 28012 Madrid",
    schedule: "11:00–14:00, 17:30–20:30 --> Domingos: 11:00–14:00",
    phone: "915 30 01 33",
    description:
      " En EL COLECCIONISTA podrás encontrar desde las últimas novedades en el mundo del comic a grandes clásicos.",
    rate: "4/5",
    cords: { coordinates: [40.407925, -3.702116] }
  },
  {
    name: "El Mono-Araña",
    address: " Calle de las Peñuelas, 14, 28005 Madrid",
    schedule: "10:30–14:00, 17:00–20:30 --> Domingos: cerrados",
    phone: "911 82 54 59",
    description:
      " Moderna tienda de tres plantas con cómics, artículos de coleccionista y juegos y que organiza eventos.",
    rate: "5/5",
    cords: { coordinates: [40.403298, -3.704192] }
  },
  {
    name: "Infinity Comics",
    address: " Calle de las Hileras, 2, 28013 Madrid",
    schedule: "11:00–14:30, 16:30–20:30 --> Domingos: cerrados",
    phone: "911 38 48 44",
    description:
      " Infinity Comics nace en noviembre de 2015 en pleno corazón de Madrid, entre la Plaza Mayor y la comercial calle Arenal.",
    rate: "5/5",
    cords: { coordinates: [40.416769, -3.708397] }
  },
  {
    name: "Librería Akira Comics",
    address: " Av. de Betanzos, 74, 28034 Madrid",
    schedule: "10:30–14:00, 17:00–20:15 --> Domingos: cerrados",
    phone: "917 31 94 09",
    description:
      " Akira Cómics es el nombre de una de las librerías especializadas en cómics que existen en España",
    rate: "5/5",
    cords: { coordinates: [40.482371, -3.713617] }
  },
  {
    name: "Viñetas Comics Madrid",
    address: " Calle de la Luna, 16, 28004 Madrid",
    schedule: "11:00–14:30, 16:30–21:00 --> Domingos: cerrados",
    phone: "915 23 81 21",
    description:
      " Una gran colección de cómics y un trato increíble. Lo recomiendo a todo el mundo",
    rate: "5/5",
    cords: { coordinates: [40.422254, -3.70588] }
  },
  {
    name: "Arte 9",
    address: " Calle de la Cruz, 37, 28012 Madrid",
    schedule: "10:45–14:00, 17:15–20:45 --> Domingos: cerrados",
    phone: "915 32 47 14",
    description:
      " Esta clásica tienda de barrio está especializada en cómics americanos, juegos de rol y figuras articuladas.",
    rate: "4/5",
    cords: { coordinates: [40.029687, -3.594] }
  },
  {
    name: "Omega Center Estrella",
    address: " Calle Estrella, 20, 28004 Madrid",
    schedule: "10:45–14:00, 17:15–20:45 --> Domingos: cerrados",
    phone: "912 19 09 81",
    description:
      " A mis hijos y a mí nos encanta venir a Omega Center siempre que visitamos Madrid. Tienen todos los comics que puedan desear.",
    rate: "5/5",
    cords: { coordinates: [40.2695, -3.9195] }
  },
  {
    name: "Mundo Fantasía",
    address: " Calle de Costanilla de Los Ángeles, 7, 28013 Madrid",
    schedule: "10:30–14:00, 17:30–20:30 --> Domingos: cerrados",
    phone: "915 59 20 32",
    description:
      " Pequeña tienda especializada en cómics, novelas gráficas y libros de ciencia ficción, además de merchandising.",
    rate: "4/5",
    cords: { coordinates: [40.4165, -3.7026] }
  },
  {
    name: "Crisis Comics",
    address: "Local 10, Calle de la Luna, 28, 28004 Madrid",
    schedule: "11:00–13:30, 17:30–20:00 --> Domingos: cerrados",
    phone: "915 32 78 85",
    description:
      " Tienda muy completa, buen trato de los vendedores con atencion personal.",
    rate: "3/5",
    cords: { coordinates: [40.422763, -3.706699] }
  },
  {
    name: "Generacion X Imperial",
    address: "Calle de Santa Casilda, 3, 28005 Madrid",
    schedule: "11:00–14:00, 16:30–20:30 --> Domingos: cerrados",
    phone: "917 04 51 67",
    description:
      " Estamos dedicados al ocio inteligente: comics (europeo, americano, manga y bastante independiente), juegos de mesa y de cartas, merchandising, ciencia ficción, SW miniatures y rol.",
    rate: "5/5",
    cords: { coordinates: [40.404807, -3.712807] }
  },
  {
    name: "Comic Hunter",
    address: "Calle de Mira el Río Baja, 21, 28005 Madrid",
    schedule: "11:00–14:30, 16:30–20:30 --> Domingos: cerrados",
    phone: "917 04 51 67",
    description:
      " Es una tienda de comics variadiiisima y se nota que llevan años en el barrio. Sus precios son muy razonables",
    rate: "4/5",
    cords: { coordinates: [40.42526, -3.69063] }
  }
];

Shop.create(shop, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${shop.length} shop`);
  mongoose.connection.close();
});
