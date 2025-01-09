const { register } = require('../controllers/users');

const UsersRoutes = require('express').Router();

UsersRoutes.post('/register', register);
UsersRoutes.post('/login', login);

module.exports = UsersRoutes;
