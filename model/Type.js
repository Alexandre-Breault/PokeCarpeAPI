/**
 * @author Alexandre BREAULT
 * @file Modele mongoose TYPE pokemon
 */
const mongoose = require("mongoose");
const TypeSchema = new mongoose.Schema({
  libelle: { type: String },
});

module.exports = mongoose.model("type", TypeSchema);
