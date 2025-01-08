const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'users'
  }
);

const User = mongoose.model('users', UserSchema, 'Users');
module.exports = User;
