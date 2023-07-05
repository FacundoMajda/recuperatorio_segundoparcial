// ============================================================
// FACUNDO A MAJDA - TLP 1 - RECUPERATORIO 2DO PARCIAL - 2023
// ============================================================

// Imports
const cors = require("cors");
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");

// acceder a las variables de entorno '.env'
require("dotenv").config();
// require ejs
require("ejs");

//db connection
const { conexionDB } = require("./database");
conexionDB();

const app = express();

//puerto
const port = process.env.PORT || 4000;

// Middlewares
// TODO: Implementar middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
// express: datos en formato json
app.use(express.json());
//motor de vistas
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use(require("./routes/reserva.routes"));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

app.use((req, res, next) => {
  return res.status(404).render("404");
});

// arranque del servidor
app.listen(port, () => console.log(`Server on http://localhost:${port}`));
