module.exports = {
  customAdvice: async(parent, args, context) => {
    return await context.adviceModel.find({author: parent.id});
  }
}
