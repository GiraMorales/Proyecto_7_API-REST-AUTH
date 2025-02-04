const { generateSing } = require('../../config/jwt');
const User = require('../models/users');
const bcrypt = require('bcrypt');

//! CREATE
const register = async (req, res, next) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      rol: req.body.rol
    });
    const userDuplicate = await User.findOne({ email: req.body.email });
    if (userDuplicate) {
      return res.status(400).json('Este mail ya existe');
    }
    const userSaved = await newUser.save();
    return res.status(201).json(userSaved);
  } catch (error) {
    return res.status(400).json('Error al crear usuario');
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json('Usuario o contraseña son incorrectos');
    }
    if (bcrypt.compareSync(password, user.password)) {
      const token = generateSing(user._id);
      return res.status(200).json({ token, user, message: 'Bienvenido' });
    } else {
      return res.status(404).json('Usuario o contraseña son incorrectos');
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

//! READ
const getUsers = async (req, res, next) => {
  try {
    const allusers = await User.find();
    return res.status(200).json(allusers);
  } catch (error) {
    return res.status(400).json('Error al obtener usuarios');
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
    if (!loggedInUser) {
      return res
        .status(401)
        .json({ message: 'No tienes permisos para realizar esta acción' });
    }
    const userToDelete = await User.findById(id);
    if (!userToDelete) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    if (loggedInUser.id.toString() === id) {
      await User.findByIdAndDelete(id);
      return res.status(200).json({
        message: 'Tu usuario ha sido eliminado correctamente'
      });
    }

    if (loggedInUser.rol === 'admin') {
      await User.findByIdAndDelete(id);
      return res.status(200).json({
        message: 'Usuario eliminado por el administrador'
      });
    }
    return res
      .status(403)
      .json({ message: 'No tienes permisos para eliminar este usuario' });
  } catch (error) {
    // Captura cualquier error
    return res.status(500).json({
      message: 'Error al eliminar el usuario',
      error: error.message
    });
  }
};
module.exports = { register, login, deleteUser, getUsers, updateUsers };
