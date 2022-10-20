/**
 * @author Alexandre BREAULT
 * @file controller pour le TYPE avec les fonctions liées.
 */
const { pokemons } = require("../model");
const db = require("../model");
const estType = db.estType;
const pokemon = db.pokemons;
const type = db.type;
/**
 * Créer une nouvelle liaison entre type et pokemon
 * @param {Request} req
 * @param {Response} res
 */
exports.create = async (req, res) => {
  const { Pokemon, Type } = req.body;
  try {
    const data = new estType({
      Pokemon: await pokemon.findById(Pokemon),
      Type: await type.findById(Type),
    });
    const dataToSave = await data.save();
    res.status(201).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
/**
 * Retourne tout le pokémon avec leur type de la base de donnée
 * @param {Request} req
 * @param {Response} res
 * @example <caption>Exemple du format retour</caption>
 * [{
 *      "id":"0",
 *      "libelle":"Exemple",
 *      "__v":0
 *  },
 * {
 *      "id":"2",
 *      "libelle":"Exemple2",
 *      "__v":0
 * }]
 */
exports.findAll = async (req, res) => {
  try {
    const data = await estType.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
/**
 * Retourne un pokémon avec son type en fonction du libelle demandé dans la requête
 * @param {Request} req
 * @param {Response} res
 * @example <caption>Exemple du format retour</caption>
 * [{
 *      "id":"0",
 *      "libelle":"Exemple",
 *      "__v":0
 *  }]
 */
exports.findOne = async (req, res) => {
  const { name } = req.params;
  try {
    const pokemonSearch = await pokemons.findOne({ name });
    const data = await estType.find({ Pokemon: pokemonSearch });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {};
exports.delete = async (req, res) => {};
