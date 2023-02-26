const express = require("express");
const router = express.Router();

const Board = require("../models/board");

router.get("/:id", setHeaders, async (request, response) => {
  const owner = request.params.id;
  try {
    const boards = await Board.find({ owner: owner });
    response.json(boards);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

router.post("/create", setHeaders, async (request, response) => {
  const board = new Board({
    owner: request.body.owner,
    title: request.body.title,
    background: request.body.background,
  });

  try {
    const newBoard = await board.save();
    response.status(201).json(newBoard);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
});

router.delete("/:id", setHeaders, async (request, response) => {
  try {
    await Board.deleteOne({ _id: request.params.id });
    response.json({ message: "deleted" });
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
});

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