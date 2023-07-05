# Reservas de Aeropuertos

# Segundo Parcial TLP - IPF - 2023

Alumno: Facundo A. Majda.

Servidor CRUD Node.js para gestionar reservas de aeropuerto utilizando una base de datos MySQL con ORM Sequelize.

## Instalación

1. Clona este repositorio en tu máquina local:

```
git clone https://github.com/FacundoMajda/recuperatorio_segundoparcial
```

2. Navega al directorio del proyecto:

```
cd recuperatorio_segundoparcialtlp
```

3. Instala las dependencias:

```
npm install
```

4. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno según tus necesidades. Puedes utilizar el archivo `.env.example` como base:

```
PORT=3000
DB_NAME=reservadb
DB_USER=username
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=3306
DB_DIALECT=mysql
```

Asegúrate de reemplazar `'username'` y `'password'` con las credenciales correctas de tu base de datos MySQL.

5. Crea la base de datos en MySQL con el nombre especificado en la variable `DB_NAME` del archivo `.env`.

6. Ejecuta el servidor:

```
npm start

```

```
npm run dev

```

7. El servidor estará disponible en `http://localhost:3000` (o el puerto que hayas configurado). Puedes utilizar herramientas como Postman o tu navegador para probar las diferentes rutas y operaciones CRUD.

## Estructura del proyecto

- `app.js`: Archivo principal que configura el servidor Express.
- `database.js`: Configuración de la conexión a la base de datos MySQL utilizando Sequelize.
- `models/Reserva.js`: Definición del modelo de datos para las reservas.
- `controllers/reserva.controller.js`: Controladores para las operaciones CRUD de las reservas.
- `routes/reserva.routes.js`: Rutas para las diferentes acciones relacionadas con las reservas.
- `public/`: Directorio para archivos estáticos
- `views/`: Directorio para las vistas HTML
- `.env`: Archivo de variables de entorno para la configuración del proyecto.
- `README.md`: Documentación del proyecto.
