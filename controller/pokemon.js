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
    const dataToSave = await data.save();
    res.status(201).json(dataToSave);
  } catch (error) {
    if (error instanceof mongoose.Document.ValidationError) {
      console.log(error);
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: error.message });
    }
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
