const express = require("express");
const router = express.Router();

const products = require("./products.route");
const category = require("./category.route");

router.use("/category", category);
router.use("/products", products);

module.exports = router;
