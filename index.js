const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Servidor funcionando con Node.js y Express!");
});

app.listen(3000, () => {
  console.log("✅ Servidor corriendo en http://localhost:3000");
});
