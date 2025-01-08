const {
  postOwner,
  getOwners,
  updateOwner,
  deleteOwner
} = require('../controllers/owners');

const OwnerRoutes = require('express').Router();

OwnerRoutes.post('/', postOwner); // Crear propietario
OwnerRoutes.get('/', getOwners); // Obtener todos los pripietarios
OwnerRoutes.put('/:id', updateOwner); // Actualizar propietario por ID
OwnerRoutes.delete('/:id', deleteOwner); // Eliminar propietario por ID

module.exports = OwnerRoutes; // Exportar rutas de usuarios
