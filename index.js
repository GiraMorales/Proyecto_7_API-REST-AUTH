require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const ProjectRoutes = require('./src/api/routes/project');
const OwnerRoutes = require('./src/api/routes/owners');
const UserRoutes = require('./src/api/routes/users');
const PORT = 3000;
const DB_URL = process.env.DB_URL;
const app = express();
// Conectar a la base de datos
connectDB();

// Middleware para parsear JSON y enviar datos de inmsonia en Json a la base de datos
//app.use(express.json());
app.use('/projects', ProjectRoutes);

// Rutas
app.use('/api/v1/projects', ProjectRoutes);
app.use('/api/v1/owner', OwnerRoutes);
app.use('/api/v1/user', UserRoutes);
app.use('/ping', (req, res, next) => {
  return res.status(200).json('pong');
});
app.use('*', (req, res, next) => {
  return res.status(400).json('Ruta no encontrada 🤨');
});

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Conectado a la base de datos'))
  .catch((error) =>
    console.error('Error al conectar a la base de datos:', error)
  );

// Iniciar el servidor
app.listen(PORT, () => {
  console.log('servidor desplegado 🚀 en http://localhost:' + PORT);
});
