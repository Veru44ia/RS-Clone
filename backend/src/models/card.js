const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  list: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Card", cardSchema);
