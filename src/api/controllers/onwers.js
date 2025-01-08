const Onwers = require('../models/onwers');

//! CREATE
const postOnwers = async (req, res, next) => {
  try {
    const newOnwers = new Onwers({
      onwername: req.body.onwername,
      email: req.body.email,
      role: req.body.role
    });
    const onwerSaved = await newOnwers.save();
    return res.status(201).json(onwerSaved);
  } catch (error) {
    return res.status(400).json('Error al crear propietario');
  }
};

//! READ
const getOnwerss = async (req, res, next) => {
  try {
    const allOnwerss = await Onwers.find();
    return res.status(200).json(allOnwerss);
  } catch (error) {
    return res.status(400).json('Error al obtener propietarios');
  }
};

//! UPDATE
const updateOnwers = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedOnwers = await Onwers.findByIdAndUpdate(id, req.body, {
      new: true
    });
    return res.status(200).json(updatedOnwers);
  } catch (error) {
    return res.status(400).json('Error al actualizar propietario');
  }
};

//! DELETE
const deleteOnwers = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedOnwers = await Onwers.findByIdAndDelete(id);
    return res.status(200).json(deletedOnwers);
  } catch (error) {
    return res.status(400).json('Error al eliminar propietario');
  }
};

module.exports = { postOnwers, getOnwerss, updateOnwers, deleteOnwers };
