const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String
});

UserSchema.set('toObject', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
  }
});

module.exports = mongoose.model('User', UserSchema);
