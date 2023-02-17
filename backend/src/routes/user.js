const express = require("express");
const router = express.Router();

const User = require("../models/user");

function setHeaders(response) {
  response.set({
    "Access-Control-Allow-Origin": "http://127.0.0.1:5555",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
  });
  return response;
}
