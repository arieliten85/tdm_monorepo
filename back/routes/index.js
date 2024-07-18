const express = require("express");
const router = express.Router();

const favorites = require("./favorites.route");

router.use("/favorites", favorites);

module.exports = router;
