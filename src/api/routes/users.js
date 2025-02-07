const { isAuth, isAdmin } = require('../../middlewares/isAuth');
const {
  register,
  deleteUser,
  login,
  getUsers,
  updateUsers
} = require('../controllers/users');

const UsersRoutes = require('express').Router();

UsersRoutes.post('/register', register);
UsersRoutes.post('/login', login);
UsersRoutes.get('/:id', [isAuth], getUsers);
UsersRoutes.put('/:id', [isAuth, isAdmin], updateUsers);
UsersRoutes.delete('/:id', [isAuth], deleteUser);

module.exports = UsersRoutes;
