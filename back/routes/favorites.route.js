const express = require("express");
const router = express.Router();
const favoritesController = require("../controllers/favorites.controller");

router.get("/", favoritesController.findAll);
router.post("/create", favoritesController.create);
router.get("/:id", favoritesController.findOne);
router.delete("/:id", favoritesController.deleteOne);

module.exports = router;
