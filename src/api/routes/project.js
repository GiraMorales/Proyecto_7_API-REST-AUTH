const { isAuth } = require('../../middlewares/isAuth');
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
ProjectRoutes.post('/', [isAuth], postProjects);
ProjectRoutes.put('/:id', [isAuth], updateProjects);
ProjectRoutes.delete('/:id', [isAuth], deleteProjects);

module.exports = ProjectRoutes;
