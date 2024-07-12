const favoritesServices = require("../services/favorites.service");

class favoritesController {
  static async get(req, res) {
    const response = await favoritesServices.get();

    res.status(200).send(response);
  }
}

module.exports = favoritesController;
