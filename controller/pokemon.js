const { mongoose } = require("../model");
const db = require("../model");
const Pokemon = db.pokemons;

exports.create = async (req, res) => {
  const { name, numero, pokeball } = req.body;
  try {
    const data = new Pokemon({
      name,
      numero,
      pokeball,
    });

    const dataToSave = await data.save().catch(({ errors }) => {
      let errorBag = [];
      Object.keys(errors).forEach((fieldName) => {
        errorBag.push({ [fieldName]: errors[fieldName].message });
      });
      console.log({ message: errorBag });
      res.status(400).json({ message: errorBag });
    });
    res.status(201).json(dataToSave);
  } catch (message) {
    res.status(400).json({ message: message });
  }
};
exports.findAll = async (req, res) => {
  try {
    const data = await Pokemon.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.findOne = async (req, res) => {
  try {
    const data = await Pokemon.findOne(req.params.name);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.update = async (req, res) => {};
exports.delete = async (req, res) => {};
