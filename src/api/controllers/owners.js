const Owners = require('../models/owners');

//! CREATE
const postOwners = async (req, res, next) => {
  try {
    const newOwners = new Owners({
      ownername: req.body.ownername,
      email: req.body.email,
      role: req.body.role
    });
    const ownerSaved = await newOwners.save();
    return res.status(201).json(ownerSaved);
  } catch (error) {
    return res.status(400).json('Error al crear propietario');
  }
};

//! READ
const getOwnerss = async (req, res, next) => {
  try {
    const allOwnerss = await Owners.find();
    return res.status(200).json(allOwners);
  } catch (error) {
    return res.status(400).json('Error al obtener propietarios');
  }
};

//! UPDATE
const updateOwners = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedOwners = await Owners.findByIdAndUpdate(id, req.body, {
      new: true
    });
    return res.status(200).json(updatedOwners);
  } catch (error) {
    return res.status(400).json('Error al actualizar propietario');
  }
};

//! DELETE
const deleteOwners = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedOwners = await Owners.findByIdAndDelete(id);
    return res.status(200).json(deletedOwners);
  } catch (error) {
    return res.status(400).json('Error al eliminar propietario');
  }
};

module.exports = { postOwners, getOwnerss, updateOwners, deleteOwners };
