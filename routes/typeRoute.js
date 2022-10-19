const express = require("express");
const router = express.Router();
const controllerType = require("../controller/type");

router.get("/get", async (req, res) => {
  controllerType.findAll(req, res);
});
router.post("/post", async (req, res) => {
  controllerType.create(req, res);
});
module.exports = router;
