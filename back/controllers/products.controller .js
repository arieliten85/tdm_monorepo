// const ProductsService = require("../services/products.service");

// class ProductsController {
//   static async findAll(req, res) {
//     try {
//       const { error, data } = await ProductsService.findAll();
//       if (error) {
//         return res.status(400).send(data);
//       }
//       res.status(201).send(data);
//     } catch (err) {
//       console.error("Unexpected error in findAll controller:", err);
//       res.status(500).send("Internal server error");
//     }
//   }
//   static async create(req, res) {
//     try {
//       const { error, data } = await ProductsService.create(req.body);
//       if (error) {
//         return res.status(400).send(data);
//       }
//       res.status(201).send(data);
//     } catch (err) {
//       console.error("Unexpected error in create controller:", err);
//       res.status(500).send("Internal server error");
//     }
//   }
//   static async findOne(req, res) {
//     try {
//       const { error, data } = await FavoritesService.findOne(req.params.id);
//       if (error) {
//         return res.status(400).send(data);
//       }
//       res.status(201).send(data);
//     } catch (err) {
//       console.error("Unexpected error in findByPk controller:", err);
//       res.status(500).send("Internal server error");
//     }
//   }
//   static async deleteOne(req, res) {
//     try {
//       const { error, data } = await FavoritesService.deleteOne(req.params.id);
//       if (error) {
//         return res.status(400).send(data);
//       }
//       res.status(201).send(data);
//     } catch (err) {
//       console.error("Unexpected error in deleteOne controller:", err);
//       res.status(500).send("Internal server error");
//     }
//   }
// }

// module.exports = ProductsController;
