require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const ProjectRoutes = require('./src/api/routes/project');
const OwnerRoutes = require('./src/api/routes/owners');
const UsersRoutes = require('./src/api/routes/users');
const PORT = 3000;
const app = express();
// Conectar a la base de datos
connectDB();

// Middleware para parsear JSON y enviar datos de inmsonia en Json a la base de datos
app.use(express.json());

// Rutas
app.use('/api/v1/projects', ProjectRoutes);
app.use('/api/v1/owners', OwnerRoutes);
app.use('/api/v1/users', UsersRoutes);

app.use('*', (req, res, next) => {
  return res.status(404).json('Ruta no encontrada 🤨');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log('servidor desplegado 🚀 en http://localhost:' + PORT);
});
