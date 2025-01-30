const { isAdmin, isAuth } = require('../../middlewares/isAuth');
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
UsersRoutes.put('/login', login);
UsersRoutes.put('/rol', updateUsers);
UsersRoutes.delete('/:id', isAuth, deleteUser);

module.exports = UsersRoutes;
