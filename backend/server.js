const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

// ===== MIDDLEWARES =====
app.use(cors());
app.use(express.json()); // Para leer JSON en peticiones

// "Base de datos" temporal en memoria
let users = [];

// ===== RUTAS DE AUTENTICACIÓN =====
// Registro
app.post("/api/register", (req, res) => {
  const { username, password } = req.body;

  // Validar campos
  if (!username || !password) {
    return res.status(400).json({ message: "Faltan datos" });
  }

  // Ver si ya existe
  const exists = users.find((u) => u.username === username);
  if (exists) {
    return res.status(400).json({ message: "El usuario ya existe" });
  }

  // Guardar usuario
  users.push({ username, password });
  console.log("👥 Usuarios registrados:", users);

  res.json({ message: "✅ Registro exitoso" });
});

// Login
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "❌ Credenciales incorrectas" });
  }

  res.json({ message: "✅ Login exitoso", username });
});

// ===== SERVIR FRONTEND =====
app.use(express.static(path.join(__dirname, "../frontend")));

// Ruta por defecto -> abre index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// ===== INICIAR SERVIDOR =====
app.listen(PORT, () => {
  console.log(`
=========================================
 🚀 Servidor corriendo en:
 👉 http://localhost:${PORT}

 📂 Frontend servido desde: /frontend
=========================================
`);
});
