const {
  postOnwer,
  getOnwers,
  updateOnwer,
  deleteOnwer
} = require('../controllers/onwers');

const OnwerRoutes = require('express').Router();

OnwerRoutes.post('/', postOnwer); // Crear propietario
OnwerRoutes.get('/', getOnwers); // Obtener todos los pripietarios
OnwerRoutes.put('/:id', updateOnwer); // Actualizar propietario por ID
OnwerRoutes.delete('/:id', deleteOnwer); // Eliminar propietario por ID

module.exports = OnwerRoutes; // Exportar rutas de usuarios
