const express = require("express");
const router = express.Router();

const List = require("../models/list");

// router.get("/:id", setHeaders, async (request, response) => {
//   const owner = request.params.id;
//   try {
//     const boards = await Board.find({ owner: owner });
//     response.json(boards);
//   } catch (error) {
//     response.status(500).json({ message: error.message });
//   }
// });

router.post("/create", setHeaders, async (request, response) => {
  const list = new List({
    board: request.body.board,
    title: request.body.title,
    position: request.body.position,
  });

  try {
    const newList = await list.save();
    response.status(201).json(list);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
});

// router.delete("/:id", setHeaders, async (request, response) => {
//   try {
//     await Board.deleteOne({ _id: request.params.id });
//     response.json({ message: "deleted" });
//   } catch (error) {
//     response.status(400).json({ message: error.message });
//   }
// });

async function setHeaders(request, response, next) {
  response.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
  });
  next();
}

module.exports = router;
