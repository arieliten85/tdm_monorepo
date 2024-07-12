const express = require("express");
const app = express();
require("dotenv").config();

const db = require("./config/db");
router = require("./routes/index");

app.use("/api", router);

const PORT = process.env.PORT || 3000;

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.error("Unable to connect to the database:", error);
  });
