/**
 * @author Alexandre BREAULT
 * @file Modele mongoose POKEMON pokemon
 */
const mongoose = require("mongoose");
const pokeBall = require("./pokeBall");
const Type = require("./Type");
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
    unique: true,
    required: [true, "Le nom du pokémon est requie"],
  },
  numero: {
    type: Number,
    unique: [true, "Le numéro du pokémon existe déjà! "],
    required: [true, "Le numéro du pokémon est requie"],
  },
  pokeball: {
    type: String,
    validate: {
      validator: async function (v) {
        let result = Promise.resolve(pokeBall.exists({ libelle: v }));
        let libellePokeObject = await pokeBall.find({}).select("libelle -_id");
        let libelle = [];
        for (const iterator of libellePokeObject) {
          libelle.push(iterator.libelle);
        }
        let PokeBallR = await result.then((d) =>
          pokeBall.findById({ _id: d._id }).select("libelle -_id")
        );
        if (PokeBallR.libelle.length < 0) {
          throw Error(
            v +
              " is not supported. Please choose from the following options : " +
              libelle.toLocaleString()
          );
        }
        return result;
      },
    },
    types: [Type.schema],
  },
});

module.exports = mongoose.model("pokemon", PokemonSchema);
