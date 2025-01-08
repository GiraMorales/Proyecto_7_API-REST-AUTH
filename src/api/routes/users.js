const { register } = require('../controllers/users');

const UsersRoutes = require('express').Router();

UsersRoutes.post('/register', register);

module.exports = UsersRoutes;
