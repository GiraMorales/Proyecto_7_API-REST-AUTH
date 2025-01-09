const { isAuth } = require('../../middlewares/auth');
const {
  register,
  deleteUser,
  login,
  getUsers
} = require('../controllers/users');

const UsersRoutes = require('express').Router();

UsersRoutes.get('/', getUsers);
UsersRoutes.post('/register', register);
UsersRoutes.post('/login', login);
UsersRoutes.delete('/:id', [isAuth], deleteUser);

module.exports = UsersRoutes;
