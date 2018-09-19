const Advice = require('../models/advice');

module.exports = async () => await Advice.find();
