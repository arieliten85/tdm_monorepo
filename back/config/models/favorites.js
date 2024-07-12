const { DataTypes, Model } = require("sequelize");

const connection = require("../db");

class Favorite extends Model {}

Favorite.init(
  {
    name: {
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
    connection,
    modelName: "Favorite",
  }
);

// the defined model is the class itself
console.log(Favorite === sequelize.models.Favorite); // true
