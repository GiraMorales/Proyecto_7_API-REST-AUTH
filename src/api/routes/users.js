const { isAdmin } = require('../../middlewares/auth');
const {
  register,
  deleteUser,
  login,
  getUsers
} = require('../controllers/users');

const UsersRoutes = require('express').Router();

UsersRoutes.get('/', [isAdmin], getUsers);
UsersRoutes.post('/register', register);
UsersRoutes.post('/login', login);
UsersRoutes.delete('/:id', [isAdmin], deleteUser);

module.exports = UsersRoutes;
