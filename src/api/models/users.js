const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'project' }],
    rol: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'owners',
      default: 'user'
    }
  },
  {
    timestamps: true,
    collection: 'users'
  }
);

UserSchema.pre('save', async function (next) {
  try {
    const existemail = await mongoose.models.users.findOne({
      email: this.email
    });
    if (existemail) {
      throw new Error('El correo electrónico ya está en uso');
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('users', UserSchema, 'users');
module.exports = User;
