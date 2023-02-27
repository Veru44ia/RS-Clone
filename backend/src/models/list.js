const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  board: {
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

module.exports = mongoose.model("List", listSchema);
