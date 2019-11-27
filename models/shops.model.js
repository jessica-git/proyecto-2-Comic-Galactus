const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema({
  name: String,
  address: String,
  schedule: String,
  phone: String,
  description: String,
  rate: String
});

const Shop = mongoose.model("Shop", shopSchema);
module.exports = Shop;
