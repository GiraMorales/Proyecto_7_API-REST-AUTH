const { isAuth } = require('../../middlewares/isAuth');
const {
  postOwner,
  getOwners,
  updateOwner,
  deleteOwner
} = require('../controllers/owners');

const OwnerRoutes = require('express').Router();

OwnerRoutes.post('/', [isAuth], postOwner); // Crear propietario
OwnerRoutes.get('/', getOwners); // Obtener todos los pripietarios
OwnerRoutes.put('/:id', [isAuth], updateOwner); // Actualizar propietario por ID
OwnerRoutes.delete('/:id', [isAuth], deleteOwner); // Eliminar propietario por ID

module.exports = OwnerRoutes; // Exportar rutas de usuarios
