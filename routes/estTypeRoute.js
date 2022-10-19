const express = require("express");
const router = express.Router();
const controllerEstType = require("../controller/estType");

router.get("/get", async (req, res) => {
  controllerEstType.findAll(req, res);
});
router.post("/post", async (req, res) => {
  controllerEstType.create(req, res);
});
module.exports = router;
