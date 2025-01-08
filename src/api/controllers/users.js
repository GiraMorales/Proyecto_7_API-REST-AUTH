const User = require('../models/users');

//! CREATE
const postUser = async (req, res, next) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      role: req.body.role
    });
    const userSaved = await newUser.save();
    return res.status(201).json(userSaved);
  } catch (error) {
    return res.status(400).json('Error al crear usuario');
  }
};

//! READ
const getUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(400).json('Error al obtener usuarios');
  }
};

//! UPDATE
const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true
    });
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(400).json('Error al actualizar usuario');
  }
};

//! DELETE
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    return res.status(200).json(deletedUser);
  } catch (error) {
    return res.status(400).json('Error al eliminar usuario');
  }
};

module.exports = { postUser, getUsers, updateUser, deleteUser };
