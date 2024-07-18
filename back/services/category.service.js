const { Category } = require("../models");
const sequelizeDB = require("../config/db");

class CategoryService {
  static async findAll() {
    try {
      const categories = await Category.findAll();
      return { error: false, data: categories };
    } catch (error) {
      console.error("Error to findAll:", error);
      return {
        error: true,
        data: "Failed to find categories",
      };
    }
  }

  static async create(body) {
    const { name } = body;

    // Validación de datos de entrada
    if (!name) {
      return {
        error: true,
        data: "Invalid input data",
      };
    }

    const transaction = await sequelizeDB.transaction();

    try {
      const [newCategory, created] = await Category.findOrCreate({
        where: { name },
        defaults: {
          name,
        },
        transaction,
      });

      if (created) {
        await transaction.commit();
        return { error: false, data: newCategory };
      } else {
        await transaction.rollback();
        return { error: true, data: "Category already exists with this name" };
      }
    } catch (error) {
      await transaction.rollback();
      console.error("Error to create:", error);
      return {
        error: true,
        data: "Failed to create category",
      };
    }
  }

  static async findOne(id) {
    try {
      const category = await Category.findByPk(id);
      if (!category) {
        return {
          error: true,
          data: { message: "Category not found" },
        };
      }
      return { error: false, data: category };
    } catch (error) {
      console.error("Error finding category by ID:", error);
      return {
        error: true,
        data: { message: "Failed to find category" },
      };
    }
  }

  static async update(id, updateData) {
    const transaction = await sequelizeDB.transaction();

    try {
      const category = await Category.findByPk(id);
      if (!category) {
        await transaction.rollback();
        return {
          error: true,
          data: { message: "Category not found" },
        };
      }

      // Actualizar la categoría con los datos proporcionados
      const updatedCategory = await category.update(updateData, {
        transaction,
      });

      await transaction.commit();
      return { error: false, data: updatedCategory };
    } catch (error) {
      await transaction.rollback();
      console.error("Error updating category by ID:", error);
      return {
        error: true,
        data: { message: "Failed to update category" },
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
          data: { message: "Category not found" },
        };
      }

      await Category.destroy({ where: { id: data.id }, transaction });

      await transaction.commit();
      return {
        error: false,
        data: { message: "Category deleted successfully" },
      };
    } catch (error) {
      await transaction.rollback();
      console.error("Error deleting category:", error);
      return {
        error: true,
        data: { message: "Failed to delete category" },
      };
    }
  }
}

module.exports = CategoryService;
