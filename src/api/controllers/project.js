const Project = require('../models/project');

//! CREATE
const postProjects = async (req, res, next) => {
  try {
    const newProyect = new Project({
      title: req.body.title,
      imgUrl: req.body.imgUrl,
      username: req.body.username,
      relatedUsers: req.body.relatedUsers
    });
    const projectSaved = await newProyect.save();
    return res.status(201).json(projectSaved);
  } catch (error) {
    return res.status(400).json('Error al crear el proyecto');
  }
};
//! READ
const getProjects = async (req, res, next) => {
  try {
    const allProjects = await Project.find().populate(
      'username',
      'username email'
    );
    return res.status(200).json(allProjects);
  } catch (error) {
    return res.status(400).json('Error al obtener proyectos');
  }
};
const getUserProjects = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userProjects = await Project.findById(id).populate(
      // 'username',
      // 'username email'
      'relatedUsers'
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
    const { title, imgUrl, relatedUsers } = req.body;
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        title,
        imgUrl,
        $addToSet: { relatedUsers: { $each: relatedUsers } } // Evita duplicados en el array
      },
      {
        new: true
      }
    ).populate('username', 'username email');
    if (!updatedProject) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }

    return res.status(200).json(updatedProject);
  } catch (error) {
    return res.status(400).json('Error al actualizar el proyecto');
  }
};

//! DELETE
const deleteProjects = async (req, res, next) => {
  try {
    const { id } = req.params;
    const projectDeleted = await Project.findByIdAndDelete(id);
    return res.status(200).json(projectDeleted);
  } catch (error) {
    return res.status(400).json('Error al eliminar el proyecto');
  }
};

module.exports = {
  getProjects,
  getUserProjects,
  postProjects,
  updateProjects,
  deleteProjects
};
