const express = require("express");
const router = express.Router();
const PokemonRoutes = require("./pokemonRoute");
const TypesRoutes = require("./typeRoute");
const EstTypesRoutes = require("./estTypeRoute");

router.use("/pokemon", PokemonRoutes);
router.use("/type", TypesRoutes);
router.use("/typePokemon", EstTypesRoutes);

module.exports = router;
