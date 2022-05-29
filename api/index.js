const express = require("express");
const { random_ } = require("./api_controller");
const router = express.Router();
const User = require("./api_controller");

module.exports = (router) => {
    // User API
    router.post("/Play", User.Play);
    router.post("/ball", User.ball);
    router.post("/_random", User._random);
    router.post("/_cash", User._cash);
};
