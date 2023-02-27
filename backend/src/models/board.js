const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
    default: "white",
  },
});

module.exports = mongoose.model("Board", boardSchema);