const mongoose = require('mongoose');

const AdviceSchema = new mongoose.Schema({
  customAdvice: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

AdviceSchema.set('toObject', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
  }
});

module.exports = mongoose.model('Advice', AdviceSchema);
