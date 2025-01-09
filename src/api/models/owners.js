const mongoose = require('mongoose');

const OwnerSchema = new mongoose.Schema(
  {
    ownername: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['owner', 'admin'], default: 'owner' },
    verified: { type: Boolean, required: true, default: false }
  },
  {
    timestamps: true,
    collection: 'owners'
  }
);

const Owner = mongoose.model('owners', OwnerSchema, 'owners');
module.exports = Owner;
