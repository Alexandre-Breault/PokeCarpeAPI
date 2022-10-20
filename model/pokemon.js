/**
 * @author Alexandre BREAULT
 * @file Modele mongoose POKEMON pokemon
 */
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const enumPokeball = [
  "PokeBall",
  "SuperBall",
  "HyperBall",
  "MasterBall",
  "SafariBall",
  "AppatBall",
  "Compet'Ball",
  "CopainBall",
  "LoveBall",
  "LuneBall",
];

const PokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, "Le nom du pokémon existe déjà! "],
    required: [true, "Le nom du pokémon est requie"],
  },
  numero: {
    type: Number,
    required: [true, "Le numéro du pokémon est requie"],
    
  },
  pokeball: {
    type: String,
    enum: {
      values: enumPokeball,
      message:
        "{VALUE} is not supported. Thanks choice in " + enumPokeball.toString(),
    },
  },
});

module.exports = mongoose.model("pokemon", PokemonSchema);
