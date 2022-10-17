const express = require("express");
const router = express.Router();
const PokemonRoutes = require("./pokemonRoute");

router.use("/pokemon", PokemonRoutes);

module.exports = router;
