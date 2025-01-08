const mongoose = require('mongoose');

const OnwerSchema = new mongoose.Schema(
  {
    onwername: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['onwer', 'admin'], default: 'onwer' }
  },
  {
    timestamps: true,
    collection: 'onwers'
  }
);

const Onwer = mongoose.model('onwers', OnwerSchema, 'onwers');
module.exports = Onwer;
