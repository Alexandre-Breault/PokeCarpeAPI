/**
 * @author Alexandre BREAULT
 * @file Modele mongoose POKEBALL pokemon
 */
const mongoose = require("mongoose");

const PokeBallSchema = new mongoose.Schema({
  libelle: {
    type: String,
    unique: [true, "La pokeball existe déjà! "],
    required: [true, "Le nom de la pokeball est requie"],
  },
});

module.exports = mongoose.model("pokeball", PokeBallSchema);
