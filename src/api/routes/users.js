const { isAuth } = require('../../middlewares/auth');
const { register, deleteUser, login } = require('../controllers/users');

const UsersRoutes = require('express').Router();

UsersRoutes.post('/register', register);
UsersRoutes.post('/login', login);
UsersRoutes.delete('/:id', [isAuth], deleteUser);

module.exports = UsersRoutes;
