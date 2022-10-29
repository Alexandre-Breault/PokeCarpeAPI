const express = require("express");
const router = express.Router();
const PokemonRoutes = require("./pokemonRoute");
const TypesRoutes = require("./typeRoute");
const EstTypesRoutes = require("./estTypeRoute");
const pokeballRoutes = require("./pokeballRoutes");

router.use("/pokemon", PokemonRoutes);
router.use("/type", TypesRoutes);
router.use("/typePokemon", EstTypesRoutes);
router.use("/pokeball", pokeballRoutes);

module.exports = router;
