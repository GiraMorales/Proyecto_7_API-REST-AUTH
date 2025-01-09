const { isAdmin } = require('../../middlewares/auth');
const {
  postOwner,
  getOwners,
  updateOwner,
  deleteOwner
} = require('../controllers/owners');

const OwnerRoutes = require('express').Router();

OwnerRoutes.post('/', [isAdmin], postOwner); // Crear propietario
OwnerRoutes.get('/', getOwners); // Obtener todos los pripietarios
OwnerRoutes.put('/:id', [isAdmin], updateOwner); // Actualizar propietario por ID
OwnerRoutes.delete('/:id', [isAdmin], deleteOwner); // Eliminar propietario por ID

module.exports = OwnerRoutes; // Exportar rutas de usuarios
