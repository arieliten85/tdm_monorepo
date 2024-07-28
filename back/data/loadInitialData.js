const { Product, Category, Image } = require("../models");
const sequelizeDB = require("../config/db");
const categoryData = require("./apis/category");
const initialProductData = require("./apis/initialProductData");

const loadInitialData = async () => {
  const transaction = await sequelizeDB.transaction();

  try {
    // CREATE CATEGORIES
    const createdCategories = await Category.bulkCreate(
      categoryData.map((category) => ({
        name: category.name,
      })),
      { transaction }
    ); // Map category names to their ids
    const categoryMap = createdCategories.reduce((map, category) => {
      map[category.name] = category.id;

      return map;
    }, {});

    // CREATE PRODUCTS

    for (const productItem of initialProductData) {
      const categoryId = categoryMap[productItem.categoryName];

      if (!categoryId) {
        throw new Error(`Category "${productItem.categoryName}" not found.`);
      }

      const newProduct = await Product.create(
        { ...productItem, categoryId },
        { transaction }
      );

      const productId = newProduct.id;

      // CREATE IMAGES

      const imageRecords = productItem.images.map((imagesItem) => ({
        productId,
        url: imagesItem.url,
      }));
      await Image.bulkCreate(imageRecords, { transaction });
    }
    await transaction.commit();
    console.log("Initial data loaded successfully.");
  } catch (error) {
    await transaction.rollback();
    console.error("Error loading initial data:", error);
  }
};

module.exports = loadInitialData;
