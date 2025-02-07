const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'project' }],
    rol: { type: String, enum: ['user', 'admin'], default: 'user' }
  },
  {
    timestamps: true,
    collection: 'users'
  }
);

UserSchema.pre('save', async function (next) {
  try {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('users', UserSchema, 'users');
module.exports = User;
