const express = require("express");
const app = express();
require("dotenv").config();
const loadInitialData = require("./data/loadInitialData");

const db = require("./config/db");
router = require("./routes/index");

// Middleware
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await db.sync({ force: false }).then(() => {
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    });

    //Carga productos
    await loadInitialData();
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
};
// Iniciar el servidor
startServer();
