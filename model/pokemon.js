const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema({
  name: { type: String },
});

module.exports = mongoose.model("pokemon", PokemonSchema);
