const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db");

class Favorite extends Model {}

Favorite.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Favorite",
    tableName: "favorites",
    timestamps: true,
  }
);

module.exports = Favorite;
