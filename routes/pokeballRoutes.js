const express = require("express");
const router = express.Router();
const controllerPokeball = require("../controller/pokeball");

router.get("/", async (req, res) => {
  controllerPokeball.findAll(req, res);
});

router.get("/:name", async (req, res) => {
  controllerPokeball.findOne(req, res);
});
router.post("/", async (req, res) => {
  controllerPokeball.create(req, res);
});
module.exports = router;
