const { isAuth } = require('../../middlewares/isAuth');
const {
  register,
  deleteUser,
  login,
  getUsers,
  updateUsers
} = require('../controllers/users');

const UsersRoutes = require('express').Router();

UsersRoutes.get('/', isAuth, getUsers);
UsersRoutes.post('/register', register);
UsersRoutes.post('/login', login);
UsersRoutes.put('/:id', updateUsers);
UsersRoutes.delete('/:id', deleteUser);

module.exports = UsersRoutes;
