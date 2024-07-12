const express = require("express");
const router = express.Router();

const favorites = require("./favorites");

router.use("/favorites", favorites);

module.exports = router;
