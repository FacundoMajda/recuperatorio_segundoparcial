const { Sequelize, DataTypes } = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  }
);
const conexionDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Base de datos conetada correctamente");
  } catch (error) {
    console.log("Error al conetar la base de datos: ", error);
  }
};
module.exports = {
  sequelize,
  DataTypes,
  conexionDB,
};
