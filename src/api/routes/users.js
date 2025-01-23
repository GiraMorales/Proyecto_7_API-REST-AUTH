const { isAdmin } = require('../../middlewares/auth');
const {
  register,
  deleteUser,
  login,
  getUsers,
  updateUsers
} = require('../controllers/users');

const UsersRoutes = require('express').Router();

UsersRoutes.get('/', [isAdmin], getUsers);
UsersRoutes.post('/register', register);
UsersRoutes.post('/login', login);
UsersRoutes.post('/rol', [isAdmin], updateUsers);
UsersRoutes.delete('/:id', deleteUser);

module.exports = UsersRoutes;
