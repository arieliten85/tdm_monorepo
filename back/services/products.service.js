// const { Favorite } = require("../models");

// class favoritesServices {
//   static async findAll() {
//     try {
//       const favorites = await Favorite.findAll();
//       return { error: false, data: favorites };
//     } catch (error) {
//       console.error("Error to findAll:", error);
//       return {
//         error: true,
//         data: "Failed to found favorite",
//       };
//     }
//   }
//   static async create(body) {
//     const { title, description, price } = body;

//     // Validación de datos de entrada
//     if (!title || !description || !price) {
//       return {
//         error: true,
//         data: "Invalid input data",
//       };
//     }

//     try {
//       const newFavorite = await Favorite.create({ title, description, price });
//       return { error: false, data: newFavorite };
//     } catch (error) {
//       console.error("Error to create:", error);
//       return {
//         error: true,
//         data: "Failed to create favorite",
//       };
//     }
//   }
//   static async findOne(id) {
//     try {
//       const favorite = await Favorite.findByPk(id);
//       if (!favorite) {
//         return {
//           error: true,
//           data: { message: "Favorite not found" },
//         };
//       }
//       return { error: false, data: favorite };
//     } catch (error) {
//       console.error("Error finding favorite by ID:", error);
//       return {
//         error: true,
//         data: { message: "Failed to find favorite" },
//       };
//     }
//   }
//   static async deleteOne(id) {
//     try {
//       const { data } = await this.findOne(id);

//       if (!data) {
//         return {
//           error: true,
//           data: { message: "Favorite not found" },
//         };
//       }
//       await Favorite.destroy({ where: { id: data.id } });
//       return {
//         error: false,
//         data: { message: "Favorite deleted successfully" },
//       };
//     } catch (error) {
//       console.error("Error deleting favorite:", error);
//       return {
//         error: true,
//         data: { message: "Failed to delete favorite" },
//       };
//     }
//   }
// }

// module.exports = favoritesServices;
