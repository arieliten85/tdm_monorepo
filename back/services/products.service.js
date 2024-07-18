const { Product } = require("../models");
const sequelizeDB = require("../config/db");
class ProductServices {
  static async findAll() {
    try {
      const products = await Product.findAll();
      return { error: false, data: products };
    } catch (error) {
      console.error("Error to findAll:", error);
      return {
        error: true,
        data: "Failed to found product",
      };
    }
  }

  static async create(body) {
    const { title, description, price, tags, categoryId } = body;

    // Validación de datos de entrada
    if (!title || !description || !price || !tags || !categoryId) {
      return {
        error: true,
        data: "Invalid input data",
      };
    }

    const transaction = await sequelizeDB.transaction();

    try {
      // Buscar el producto basado solo en el título
      const [newProduct, created] = await Product.findOrCreate({
        where: { title },
        defaults: {
          title,
          description,
          price,
          tags,
          categoryId,
        },
        transaction,
      });

      if (created) {
        await transaction.commit();
        return { error: false, data: newProduct };
      } else {
        await transaction.rollback();
        return { error: true, data: "Product already exists with this title" };
      }
    } catch (error) {
      await transaction.rollback();
      console.error("Error to create:", error);
      return {
        error: true,
        data: "Failed to create product",
      };
    }
  }

  static async findOne(id) {
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        return {
          error: true,
          data: { message: "product not found" },
        };
      }
      return { error: false, data: product };
    } catch (error) {
      console.error("Error finding product by ID:", error);
      return {
        error: true,
        data: { message: "Failed to find product" },
      };
    }
  }

  static async update(id, updateData) {
    const transaction = await sequelizeDB.transaction();

    try {
      const product = await Product.findByPk(id);
      if (!product) {
        await transaction.rollback();
        return {
          error: true,
          data: { message: "product not found" },
        };
      }

      // Actualizar el producto con los datos proporcionados
      const updatedProduct = await product.update(updateData, { transaction });

      await transaction.commit();
      return { error: false, data: updatedProduct };
    } catch (error) {
      await transaction.rollback();
      console.error("Error update product by ID:", error);
      return {
        error: true,
        data: { message: "Failed to update product" },
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
          data: { message: "Product not found" },
        };
      }

      await Product.destroy({ where: { id: data.id }, transaction });

      await transaction.commit();
      return {
        error: false,
        data: { message: "Product deleted successfully" },
      };
    } catch (error) {
      await transaction.rollback();
      console.error("Error deleting product:", error);
      return {
        error: true,
        data: { message: "Failed to delete product" },
      };
    }
  }
}

module.exports = ProductServices;
