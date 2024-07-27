const Product = require("./Product");
const Category = require("./Category");
const Image = require("./Image");

// Relation models

Product.belongsTo(Category, { foreignKey: "categoryId", as: "category" });
Category.hasMany(Product, { foreignKey: "categoryId", as: "products" });

Product.hasMany(Image, { foreignKey: "productId", as: "image" });
Image.belongsTo(Product, { foreignKey: "productId" });

//Exports
module.exports = {
  Product,
  Category,
  Image,
};
