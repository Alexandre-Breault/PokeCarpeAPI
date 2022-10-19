/**
 * @author Alexandre BREAULT
 * @file controller pour le TYPE avec les fonctions liées.
 */
const db = require("../model");
const Type = db.type;
/**
 * Créer un nouveau type pokemon
 * @param {Request} req
 * @param {Response} res
 */
exports.create = async (req, res) => {
  const { libelle } = req.body;
  try {
    const data = new Type({
      libelle,
    });
    const dataToSave = await data.save();
    res.status(201).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
/**
 * Retourne tout le types de pokémon de la base de donnée
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
    const data = await Type.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
/**
 * Retourne un type en fonction du libelle demandé dans la requête
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
  try {
    const data = await Type.findOne(req.params.libelle);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {};
exports.delete = async (req, res) => {};
