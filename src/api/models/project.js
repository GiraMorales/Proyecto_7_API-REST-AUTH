const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: true },
    title: { type: String, required: true },
    username: { type: mongoose.Types.ObjectId, ref: 'users', required: true }
  },
  {
    timestamps: true,
    collection: 'projects'
  }
);

const Project = mongoose.model('projects', ProjectSchema, 'projects');
module.exports = Project;
