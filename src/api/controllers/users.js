const { generateSing } = require('../../config/jwt');
const User = require('../models/users');
const bcrypt = require('bcrypt');

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json(error);
  }
};
const register = async (req, res, next) => {
  try {
    const newUser = new User({
      userName: req.body.userName,
      password: req.body.password,
      rol: 'user'
    });

    const userDuplicate = await User.findOne({ userName: req.body.userName });
    if (userDuplicate) {
      return res
        .status(400)
        .json({ message: 'Ese nombre de usuario ya existe' });
    }

    const userSaved = await newUser.save();
    return res.status(201).json(user);
  } catch (error) {
    // if (error.code === 11000) {
    // return res
    // .status(400)
    //.json({ message: 'Ese nombre de usuario ya existe' });
    // }
    return res.status(400).json(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ userName: req.body.userName });

    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        //! aqui va la logica del login
        const token = generateSing(user._id);
        return res.status(200).json({ user, token, message: 'Bienvenido' });
      } else {
        return res.status(404).json('Usuario o contraseña son incorrectos');
      }
    } else {
      return res.status(404).json('Usuario o contraseña son incorrectos');
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userDeleted = await User.findByIdAndDelete(id);
    return res.status(200).json({ mensaj: 'Usuario eliminado', userDeleted });
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { register, login, deleteUser, getUsers };
