const Post = require('../models/post');

module.exports = async () => await Post.find();
