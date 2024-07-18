const Favorite = require("./Favorite");
const Product = require("./Product");
const Category = require("./Category");
const Image = require("./Image");

// Relation models

Product.belongsTo(Category, { foreignKey: "categoryId" });
Category.hasMany(Product, { foreignKey: "categoryId" });

Product.hasMany(Image, { foreignKey: "productId" });
Image.belongsTo(Product, { foreignKey: "productId" });

//Exports
module.exports = {
  Favorite,
  Product,
  Category,
  Image,
};
