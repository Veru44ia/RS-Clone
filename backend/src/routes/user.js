const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.get("/getAll", async (request, response) => {
  try {
    const users = await User.find();
    response.json(users);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

router.post("/create", async (request, response) => {
  const user = new User({
    login: request.body.login,
    password: request.body.password,
  });

  try {
    const loginTaken = await User.exists({ login: request.body.login });
    if (loginTaken) {
      response.status(422).json({ message: "login taken" });
    } else {
      const newUser = await user.save();
      response
        .status(201)
        .json({ message: "registration successful", user: newUser });
    }
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
});

router.post("/signin", async (request, response) => {
  try {
    const user = await User.findOne({ login: request.body.login });
    if (!user) response.status(422).json({ message: "no such user" });
    else if (user.password == request.body.password) {
      response.json({ message: "login successful", user: user });
    } else {
      response.status(422).json({ message: "wrong password" });
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

function setHeaders(response) {
  response.set({
    "Access-Control-Allow-Origin": "http://127.0.0.1:5555",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
  });
  return response;
}

module.exports = router;
