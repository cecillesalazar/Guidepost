const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  post: String,
});

PostSchema.set('toObject', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
  }
});

module.exports = mongoose.model('Post', PostSchema);
