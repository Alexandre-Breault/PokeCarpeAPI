const express = require("express");
const router = express.Router();
const controllerPokemon = require("../controller/pokemon");

router.get("/get", async (req, res) => {
  controllerPokemon.findAll(req, res);
});
router.get("/:name", async (req, res) => {
  console.log(req.params.name);
  controllerPokemon.findByName(req, res);
});
router.post("/post", async (req, res) => {
  controllerPokemon.create(req, res);
});
module.exports = router;
