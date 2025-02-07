const mongoose = require('mongoose');

const OwnerSchema = new mongoose.Schema(
  {
    ownername: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
    verified: { type: Boolean, required: true, default: false }
  },
  {
    timestamps: true,
    collection: 'owners'
  }
);

const Owner = mongoose.model('owners', OwnerSchema, 'owners');
module.exports = Owner;
