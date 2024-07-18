const CategoryService = require("../services/category.service");

class CategoryController {
  static async findAll(req, res) {
    try {
      const { error, data } = await CategoryService.findAll();
      if (error) {
        return res.status(400).send(data);
      }
      res.status(201).send(data);
    } catch (err) {
      console.error("Unexpected error in findAll controller:", err);
      res.status(500).send("Internal server error");
    }
  }
  static async create(req, res) {
    try {
      const { error, data } = await CategoryService.create(req.body);
      if (error) {
        return res.status(400).send(data);
      }
      res.status(201).send(data);
    } catch (err) {
      console.error("Unexpected error in create controller:", err);
      res.status(500).send("Internal server error");
    }
  }
  static async findOne(req, res) {
    try {
      const { error, data } = await CategoryService.findOne(req.params.id);
      if (error) {
        return res.status(400).send(data);
      }
      res.status(201).send(data);
    } catch (err) {
      console.error("Unexpected error in findByPk controller:", err);
      res.status(500).send("Internal server error");
    }
  }

  static async update(req, res) {
    try {
      const { error, data } = await CategoryService.update(
        req.params.id,
        req.body
      );
      if (error) {
        return res.status(400).send(data);
      }
      res.status(201).send(data);
    } catch (err) {
      console.error("Unexpected error in update controller:", err);
      res.status(500).send("Internal server error");
    }
  }
  static async deleteOne(req, res) {
    try {
      const { error, data } = await CategoryService.deleteOne(req.params.id);
      if (error) {
        return res.status(400).send(data);
      }
      res.status(201).send(data);
    } catch (err) {
      console.error("Unexpected error in deleteOne controller:", err);
      res.status(500).send("Internal server error");
    }
  }
}

module.exports = CategoryController;
