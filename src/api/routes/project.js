const { isAuth, isAdmin } = require('../../middlewares/auth');
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
ProjectRoutes.put('/:id', [isAdmin], updateProjects);
ProjectRoutes.delete('/:id', [isAdmin], deleteProjects);

module.exports = ProjectRoutes;
