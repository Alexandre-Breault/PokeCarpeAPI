/**
 * @author Alexandre BREAULT
 * @file Modele mongoose TYPE pokemon
 */
const PokemonSchema = require("./pokemon");
const TypeSchema = require("./Type");
const mongoose = require("mongoose");

const EstTypeSchema = new mongoose.Schema({
  Pokemon: { type: PokemonSchema.schema },
  Type: { type: TypeSchema.schema },
});

module.exports = mongoose.model("estType", EstTypeSchema);
