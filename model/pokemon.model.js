const mongoose = require("mongoose");
module.exports = (mongoose) => {
  const Pokemon = mongoose.model(
    "pokemon",
    mongoose.Schema({
      title: String,
    })
  );

  return Pokemon;
};
