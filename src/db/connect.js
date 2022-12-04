const mongoose = require('mongoose');

const config = require('../config')


mongoose.connect(config.mongoUrl);

module.exports = mongoose;