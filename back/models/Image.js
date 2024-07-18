const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Image extends Model {}

Image.init(
  {
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Image",
    tableName: "image",
    timestamps: true,
  }
);

module.exports = Image;
