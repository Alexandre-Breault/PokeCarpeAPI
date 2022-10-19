/**
 * @author Alexandre BREAULT
 * @file regroupement des data liées à mongoose
 */
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.Promise = global.Promise;
/**
 * @description JSON liée aux information avec mongoose.
 */
const db = {
  mongoose: mongoose,
  url: process.env.DATABASE_URL,
  pokemons: require("./pokemon"),
  type: require("./Type"),
  estType: require("./estType"),
};

module.exports = db;
