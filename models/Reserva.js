// TODO: Crear modelo de datos de Reserva
const { DataTypes, sequelize } = require("../database");
//modelo de datos conectada a la base de datos
const Reserva = sequelize.define(
  "Reserva",
  {
    // Modelo de datos, tabla para reservas en un aeropuerto, 13 columnas 'reservadb'
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, //PK id
      autoIncrement: true,
    },
    codigo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      defaultValue: new Date().getTime(),
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fecha_ida: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_vuelta: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    pasajeros: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: "reservas",
  }
);

// si tabla !existe, crear una
Reserva.sync({ force: false }).then(() => {
  console.log("Tabla de Reservas creada");
});

module.exports = Reserva;
