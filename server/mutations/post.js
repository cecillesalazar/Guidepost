const { getJWTPayload } = require('../utils');

module.exports = async (root, args, context) => {
  const { id } = context;
  return await context.adviceModel.create({
    customAdvice: args.customAdvice,
    author: id
  })
}
