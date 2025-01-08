const Project6 = require('../models/project6');

//! CREATE
const postProjects = async (req, res, next) => {
  try {
    const newProyect = new Project6({
      title: req.body.title,
      imgUrl: req.body.imgUrl,
      username: req.body.username
    });
    const project6Saved = await newProyect.save();
    return res.status(201).json(project6Saved);
  } catch (error) {
    return res.status(400).json('Error al crear el proyecto');
  }
};
//! READ
const getProjects = async (req, res, next) => {
  try {
    const allProjects = await Project6.find().populate('username');
    return res.status(200).json(allProjects);
  } catch (error) {
    return res.status(400).json('Error al obtener proyectos');
  }
};
const getUserProjects = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userProjects = await Project6.findById({ user: id }).populate(
      username
    );

    return res.status(200).json(userProjects);
  } catch (error) {
    return res.status(400).json('Error al obtener proyectos');
  }
};
//! UPDATE
const updateProjects = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newProyect = new Project6(req.body);
    newProyect._id = id;
    const updateProjects = await Project6.findByIdAndUpdate(id, newProyect, {
      new: true
    });
    return res.status(200).json(updateProjects);
  } catch (error) {
    return res.status(400).json('Error al actualizar el proyecto');
  }
};

//! DELETE
const deleteProjects = async (req, res, next) => {
  try {
    const { id } = req.params;
    const projectDeleted = await Project6.findByIdAndDelete(id);
    return res.status(200).json(projectDeleted);
  } catch (error) {
    return res.status(400).json('Error al elmiminar el proyecto');
  }
};

module.exports = {
  getProjects,
  getUserProjects,
  postProjects,
  updateProjects,
  deleteProjects
};
