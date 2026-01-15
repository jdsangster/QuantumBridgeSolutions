/**
 * Punto de entrada principal de la aplicación
 * QuantumBridge Retail API
 */

require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const connectDB = require("./src/config/db");

// Inicialización de la app
const app = express();

// Conexión a la base de datos (simulada)
connectDB();

// Middlewares de seguridad y utilidad
app.use(helmet()); // Protección de headers HTTP
app.use(cors());   // Control de CORS
app.use(express.json()); // Parseo de JSON
app.use(morgan("dev"));  // Logs HTTP

// Rutas
app.use("/api/auth", require("./src/routes/auth"));
app.use("/api/products", require("./src/routes/products"));

// Puerto
const PORT = process.env.PORT || 3000;

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`🚀 QuantumBridge API corriendo en el puerto ${PORT}`);
});
