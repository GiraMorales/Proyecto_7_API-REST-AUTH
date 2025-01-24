const { isAdmin, isAuth } = require('../../middlewares/auth');
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
UsersRoutes.put('/login', login);
UsersRoutes.put('/rol', [isAdmin], updateUsers);
UsersRoutes.delete('/:id', [isAuth], deleteUser);

module.exports = UsersRoutes;
