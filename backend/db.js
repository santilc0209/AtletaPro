const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",   // Cambia si usas un servidor externo
  user: "root",        // Tu usuario MySQL
  password: "123456",        // Tu contraseña MySQL
  database: "atletapro"
});

db.connect((err) => {
  if (err) {
    console.error("❌ Error de conexión a MySQL:", err);
    return;
  }
  console.log("✅ Conectado a MySQL");
});

module.exports = db;
