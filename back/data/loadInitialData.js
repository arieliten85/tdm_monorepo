const { Favorite } = require("../models");
const sequelizeDB = require("../config/db"); // Asumiendo que tienes un archivo de configuración de DB

class favoritesServices {
  static async findAll() {
    try {
      const favorites = await Favorite.findAll();
      return { error: false, data: favorites };
    } catch (error) {
      console.error("Error to findAll:", error);
      return {
        error: true,
        data: "Failed to find favorites",
      };
    }
  }

  static async create(body) {
    const { title, description, price } = body;

    // Validación de datos de entrada
    if (!title || !description || !price) {
      return {
        error: true,
        data: "Invalid input data",
      };
    }

    const transaction = await sequelizeDB.transaction();

    try {
      const newFavorite = await Favorite.create(
        { title, description, price },
        { transaction }
      );
      await transaction.commit();
      return { error: false, data: newFavorite };
    } catch (error) {
      await transaction.rollback();
      console.error("Error to create:", error);
      return {
        error: true,
        data: "Failed to create favorite",
      };
    }
  }

  static async findOne(id) {
    try {
      const favorite = await Favorite.findByPk(id);
      if (!favorite) {
        return {
          error: true,
          data: { message: "Favorite not found" },
        };
      }
      return { error: false, data: favorite };
    } catch (error) {
      console.error("Error finding favorite by ID:", error);
      return {
        error: true,
        data: { message: "Failed to find favorite" },
      };
    }
  }

  static async update(id, updateData) {
    const transaction = await sequelizeDB.transaction();

    try {
      const favorite = await Favorite.findByPk(id);
      if (!favorite) {
        await transaction.rollback();
        return {
          error: true,
          data: { message: "Favorite not found" },
        };
      }

      // Actualizar el favorito con los datos proporcionados
      const updatedFavorite = await favorite.update(updateData, {
        transaction,
      });

      await transaction.commit();
      return { error: false, data: updatedFavorite };
    } catch (error) {
      await transaction.rollback();
      console.error("Error updating favorite by ID:", error);
      return {
        error: true,
        data: { message: "Failed to update favorite" },
      };
    }
  }

  static async deleteOne(id) {
    const transaction = await sequelizeDB.transaction();

    try {
      const { data } = await this.findOne(id);

      if (!data) {
        await transaction.rollback();
        return {
          error: true,
          data: { message: "Favorite not found" },
        };
      }

      await Favorite.destroy({ where: { id: data.id }, transaction });

      await transaction.commit();
      return {
        error: false,
        data: { message: "Favorite deleted successfully" },
      };
    } catch (error) {
      await transaction.rollback();
      console.error("Error deleting favorite:", error);
      return {
        error: true,
        data: { message: "Failed to delete favorite" },
      };
    }
  }
}

module.exports = favoritesServices;
