const { mongoose } = require("../model");
const db = require("../model");
const Pokemon = db.pokemons;

exports.create = async (req, res) => {
  const { name, numero, pokeball } = req.body;
  let errorBag = [];
  new Pokemon({
    name,
    numero,
    pokeball: pokeball.trim(),
  })
    .save()
    .then(() => {
      return res.status(201).json({ message: "Success" });
    })
    .catch((errors) => {
      console.log(errors.errors);
      if (errors !== undefined && errors !== numero) {
        Object.keys(errors.errors).forEach((fieldName) => {
          errorBag.push({ [fieldName]: errors.errors[fieldName].message });
        });
        console.log(errorBag);
      }
      return res.status(400).json({ message: errorBag });
    });
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
