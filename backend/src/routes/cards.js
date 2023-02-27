const express = require("express");
const router = express.Router();

const Card = require("../models/card");

router.get("/:id", setHeaders, async (request, response) => {
  const list = request.params.id;
  try {
    const cards = await Card.find({ list: list });
    response.json(cards);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

router.post("/create", setHeaders, async (request, response) => {
  const card = new Card({
    list: request.body.list,
    title: request.body.title,
    position: request.body.position,
  });

  try {
    const newCard = await card.save();
    response.status(201).json(newCard);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
});

router.delete("/:id", setHeaders, async (request, response) => {
  try {
    await Card.deleteOne({ _id: request.params.id });
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
