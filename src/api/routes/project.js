const {
  getProjects,
  getUserProjects,
  postProjects,
  updateProjects,
  deleteProjects
} = require('../controllers/project');

const ProjectRoutes = require('express').Router();

ProjectRoutes.get('/', getProjects);
ProjectRoutes.get('/:id', getUserProjects);
ProjectRoutes.post('/', postProjects);
ProjectRoutes.put('/:id', updateProjects);
ProjectRoutes.delete('/:id', deleteProjects);

module.exports = ProjectRoutes;
