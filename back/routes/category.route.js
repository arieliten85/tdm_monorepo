const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category.controller");

router.get("/", categoryController.findAll);
router.post("/create", categoryController.create);
router.get("/:id", categoryController.findOne);
router.put("/:id", categoryController.update);
router.delete("/:id", categoryController.deleteOne);

module.exports = router;
