const { register } = require('../controllers/users');

const usersRoutes = require('express').Router();

usersRoutes.post('/register', register);
