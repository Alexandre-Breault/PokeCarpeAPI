const mongoose = require("mongoose");
require("dotenv").config();
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.DATABASE_URL;
db.pokemons = require("./pokemon.model")(mongoose);

module.exports = db;
