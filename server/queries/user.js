module.exports = async (root, args, context) => await context.userModel.findOne({_id: args.id});
