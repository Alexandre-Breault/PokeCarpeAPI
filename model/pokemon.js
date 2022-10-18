const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema({
  name: { type: String },
  numero: { type: Number },
});

module.exports = mongoose.model("pokemon", PokemonSchema);
