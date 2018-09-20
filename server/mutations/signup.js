const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { JWT_SECRET } = require('../config');

module.exports = async (root, args, context) => {
  const password = await bcrypt.hash(args.password, 10);
  const user = await context.userModel.create({
    username: args.username,
    password
  });
  const token = jwt.sign({id: user.id}, JWT_SECRET);
  return {
    token,
    user
  }
}
