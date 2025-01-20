const { generateSing } = require('../../config/jwt');
const User = require('../models/users');
const bcrypt = require('bcrypt');

//! READ
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
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

//! CREATE
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

//! UPDATE
const updateUsers = async (req, res, next) => {
  try {
    const { id } = req.params;
    const loggedInUser = req.user;

    if (loggedInUser.id.toString() !== id && loggedInUser.rol !== 'admin') {
      return res
        .status(403)
        .json({ message: 'No tienes permisos para modificar este usuario' });
    }

    const newUserData = req.body;

    if (
      loggedInUser.rol === 'admin' &&
      newUserData.rol &&
      newUserData.rol === 'admin'
    ) {
      if (loggedInUser.id.toString() === id) {
        return res
          .status(403)
          .json({ message: 'No puedes cambiar tu propio rol a admin' });
      }
    }

    const updatedUser = await User.findByIdAndUpdate(id, newUserData, {
      new: true
    });

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(400).json('Error al actualizar el usuario');
  }
};

//! DELETE
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const loggedInUser = req.user;
    if (loggedInUser.id.toString() === id) {
      const userDeleted = await User.findByIdAndDelete(id);
      return res
        .status(200)
        .json({ message: 'Tu usuario ha sido eliminado', userDeleted });
    }
    if (loggedInUser.rol === 'admin') {
      const userDeleted = await User.findByIdAndDelete(id);
      return res.status(200).json({
        message: 'Usuario eliminado por el administrador',
        userDeleted
      });
    }
    return res
      .status(403)
      .json({ message: 'No tienes permisos para eliminar este usuario' });
  } catch (error) {
    return res.status(400).json(error);
  }
};
module.exports = { register, login, deleteUser, getUsers, updateUsers };
